import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

// Emissive glowing cube
const EmissiveCube = ({ onCubeClick }) => {
  const cubeRef = useRef();
  
  useFrame(() => {
    if (cubeRef.current) {
    cubeRef.current.rotation.y -= 0.005;
    cubeRef.current.rotation.z -= -0.003;
    }
  });
  
  return (
    <mesh position={[0, 5, -3]} ref={cubeRef} onClick={onCubeClick}>
      <boxGeometry args={[3, 3, 3]} />
      <meshBasicMaterial color="#ffffff" toneMapped={false} />
    </mesh>
  );
};

const WaterPlane = () => {
  const meshRef = useRef();
  const materialRef = useRef();

  // Vertex shader - pass UV and world position
  const vertexShader = `
    varying vec2 vUv;
    varying vec3 vWorldPos;

    void main() {
      vUv = uv;
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPos = worldPosition.xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  // Fragment shader with lighting from sphere
  const fragmentShader = `
    uniform float time;
    uniform vec3 lightPos;
    varying vec2 vUv;
    varying vec3 vWorldPos;

    // Simple noise function
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }
    
    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }

    void main() {
      // Center the UV coordinates
      vec2 uv = vUv - 0.5;
      
      // Distance from center
      float dist = length(uv);
      
      // Add more noise to distance for organic feel - INCREASED
      float n = noise(uv * 8.0 + time * 0.5) * 0.12;
      n += noise(uv * 16.0 - time * 0.3) * 0.08;
      n += noise(uv * 32.0 + time * 0.7) * 0.04;
      dist += n;
      
      // Create radial ripples expanding from center
      float ripple = sin(dist * 20.0 - time * 2.5);
      
      // Very extended falloff - ripples visible almost everywhere
      ripple *= smoothstep(2.5, 0.0, dist);
      
      // Add secondary smaller ripples with more noise
      float ripple2 = sin(dist * 35.0 - time * 3.5) * 0.5;
      ripple2 *= smoothstep(2.0, 0.0, dist);
      
      // Add tertiary noisy ripples
      float ripple3 = sin(dist * 50.0 - time * 4.0) * 0.3;
      ripple3 *= noise(uv * 25.0 + time * 1.2);
      ripple3 *= smoothstep(1.5, 0.0, dist);
      
      // Combine ripples for normal perturbation with extra noise
      float noiseLayer = noise(uv * 15.0 + time) + noise(uv * 30.0 - time * 0.5) * 0.5;
      float combinedRipple = ripple + ripple2 * noiseLayer + ripple3;
      
      // Calculate perturbed normal based on ripples
      vec3 normal = normalize(vec3(
        dFdx(combinedRipple) * 5.0,
        1.0,
        dFdy(combinedRipple) * 5.0
      ));
      
      // Area light from cube - find closest point on cube to surface
      vec3 cubeHalfSize = vec3(1.5, 1.5, 1.5);
      vec3 cubeMin = lightPos - cubeHalfSize;
      vec3 cubeMax = lightPos + cubeHalfSize;
      
      // Closest point on cube to water surface point
      vec3 closestPoint = clamp(vWorldPos, cubeMin, cubeMax);
      vec3 lightDir = normalize(closestPoint - vWorldPos);
      
      // Calculate lighting
      float diffuse = max(dot(normal, lightDir), 0.0);
      
      // Distance attenuation from closest point on cube
      float lightDist = length(closestPoint - vWorldPos);
      float attenuation = 1.0 / (1.0 + 0.015 * lightDist + 0.002 * lightDist * lightDist);
      
      // Make falloff sharper like in reference image
      attenuation = smoothstep(0.0, 1.0, attenuation);
      attenuation = pow(attenuation, 0.5);
      
      // Specular highlight
      vec3 viewDir = normalize(-vWorldPos);
      vec3 reflectDir = reflect(-lightDir, normal);
      float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0);
      
      // Base water color - black
      vec3 waterColor = vec3(0.0, 0.0, 0.0);
      
      // Add lighting from cube - illuminates the ripples
      waterColor += vec3(1.0) * diffuse * attenuation * 1.2;
      waterColor += vec3(1.0) * spec * attenuation * 1.2;
      
      // Add subtle ambient
      waterColor += vec3(0.02);
      
      gl_FragColor = vec4(waterColor, 0.95);
    }
  `;

  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = performance.now() * 0.001;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -3, -8]}>
      <planeGeometry args={[150, 100, 1, 1]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          time: { value: 0 },
          lightPos: { value: new THREE.Vector3(0, 5, -3) },
        }}
        transparent={true}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

const WaterRippleCanvas = () => {
  const [showFlash, setShowFlash] = useState(false);
  const navigate = useNavigate();

  const handleCubeClick = () => {
    setShowFlash(true);
    setTimeout(() => {
      navigate("/main-portfolio/compact");
    }, 1500);
  };

  return (
    <div className="absolute bottom-0 left-0 w-full h-[500px] pointer-events-none">
      <Canvas
        camera={{ position: [0, 6, 15], fov: 60 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          <EmissiveCube onCubeClick={handleCubeClick} />
          <WaterPlane />
        </Suspense>
      </Canvas>
      
      {/* Static flashing CTA text */}
      <motion.div
        className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center pointer-events-none"
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="text-white font-bold text-[14px] sm:text-[16px] md:text-[18px] whitespace-nowrap">
          Click for compact mode
        </div>
        <div className="text-white sm:text-[24px]">

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-big-down-icon lucide-arrow-big-down"><path d="M15 11a1 1 0 0 0 1 1h2.939a1 1 0 0 1 .75 1.811l-6.835 6.836a1.207 1.207 0 0 1-1.707 0L4.31 13.81a1 1 0 0 1 .75-1.811H8a1 1 0 0 0 1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z"/></svg>

        </div>
      </motion.div>

      {/* Flash animation overlay */}
      <AnimatePresence>
        {showFlash && (
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 10, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeIn" }}
            className="fixed inset-0 pointer-events-none z-[9999]"
            style={{
              background: "radial-gradient(circle, white 0%, transparent 70%)",
              transformOrigin: "center center",
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default WaterRippleCanvas;
