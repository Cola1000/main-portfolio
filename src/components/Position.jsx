import React, { useState, useRef } from 'react';

const produceLetterSpans = (text, isHovered, isFlippingOut) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className="inline-block transform-style-3d origin-bottom"
      style={{
        transformStyle: 'preserve-3d',
        transform: isHovered 
          ? (isFlippingOut ? 'translate3d(0, -100%, 0) rotateX(-90deg)' : 'translate3d(0, 0%, 0) rotateX(0deg)')
          : (isFlippingOut ? 'translate3d(0, 0%, 0) rotateX(0deg)' : 'translate3d(0, 100%, 0) rotateX(-90deg)'),
        transition: `transform 0.4s ease-out ${index * 0.05}s, opacity 0.4s ease-out ${index * 0.05}s`,
        opacity: isHovered ? (isFlippingOut ? 0 : 1) : (isFlippingOut ? 1 : 0),
      }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};

const Position = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationTimeoutRef = useRef(null);
  const pendingStateRef = useRef(null);

  const handleMouseEnter = () => {
    if (isAnimating) {
      // Queue the state change
      pendingStateRef.current = true;
    } else {
      setIsAnimating(true);
      setIsHovered(true);
      const animationDuration = 400 + (17 * 50);
      animationTimeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
        // Check if there's a pending state change
        if (pendingStateRef.current !== null) {
          const pendingState = pendingStateRef.current;
          pendingStateRef.current = null;
          if (pendingState === false) {
            handleMouseLeave();
          }
        }
      }, animationDuration);
    }
  };

  const handleMouseLeave = () => {
    if (isAnimating) {
      // Queue the state change
      pendingStateRef.current = false;
    } else {
      setIsAnimating(true);
      setIsHovered(false);
      const animationDuration = 400 + (14 * 50);
      animationTimeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
        // Check if there's a pending state change
        if (pendingStateRef.current !== null) {
          const pendingState = pendingStateRef.current;
          pendingStateRef.current = null;
          if (pendingState === true) {
            handleMouseEnter();
          }
        }
      }, animationDuration);
    }
  };

  return (
    <div 
      className="relative cursor-default font-medium text-white text-[16px] xs:text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[66px] leading-[32px] 2xl:leading-[40px] w-full flex justify-center items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 top-[-30px] sm:top-[-10px] lg:top-0 flex flex-col">
        <div 
          className="text first absolute left-1 md:left-2 2xl:left-4 flex"
          aria-label="Rhio Bimo P S"
        >
          {produceLetterSpans("Rhio Bimo P S", isHovered, true)}
        </div>
        <div 
          className="text second absolute left-1 md:left-2 2xl:left-4 flex"
          aria-label="A Software Engineer"
        >
          {produceLetterSpans("A Software Engineer", isHovered, false)}
        </div>
      </div>
    </div>
  );
};

export default Position;
