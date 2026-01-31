import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { portfolio } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  image,
  href,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={`w-full mt-[-2px] flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-5`}
    >
      <div 
        className='relative w-full md:w-3/5 overflow-hidden'
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Grayscale base image */}
        <img
          src={image}
          alt='project_image'
          className='w-full h-auto object-cover md:rounded-3xl grayscale'
        />
        
        {/* Colored spotlight overlay */}
        {isHovering && (
          <div
            className='absolute inset-0 pointer-events-none md:rounded-3xl overflow-hidden'
            style={{
              maskImage: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, black 50%, transparent 100%)`,
              WebkitMaskImage: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, black 50%, transparent 100%)`,
            }}
          >
            <img
              src={image}
              alt='project_image'
              className='w-full h-auto object-cover md:rounded-3xl'
            />
          </div>
        )}
      </div>

        <div className={`w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
          <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight'>{name}</h3>
          <p className='mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>{description}</p>
          
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 inline-block text-quaternary hover:text-white transition-colors text-sm sm:text-base md:text-lg font-medium ${isEven ? "md:text-left" : "md:text-right"}`}
            >
              Code →
            </a>
          )}
        </div>
      </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className='text-center md:text-left md:px-20 lg:px-40'>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Portfolio</h2>
      </motion.div>

      <div className='mt-10 md:mt-20 flex flex-col gap-10 md:gap-20'>
        {portfolio.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
