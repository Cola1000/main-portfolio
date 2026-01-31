import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
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
              className={`mt-6 inline-block px-6 py-3 border-2 border-white text-white font-bold text-sm sm:text-base md:text-lg hover:bg-white hover:text-black transition-all ${isEven ? "md:mr-auto" : "md:ml-auto"}`}
              style={{
                boxShadow: '4px 4px 0px 0px rgba(255, 255, 255, 0.3)',
              }}
            >
              More →
            </a>
          )}
        </div>
      </motion.div>
  );
};

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const componentRef = useRef(null);
  
  const totalPages = Math.ceil(portfolio.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = portfolio.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      componentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      componentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div ref={componentRef} className='text-center md:text-left md:px-20 lg:px-40'>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Portfolio</h2>
      </motion.div>

      <div className='mt-10 md:mt-20 flex flex-col gap-10 md:gap-20'>
        {currentItems.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={startIndex + index} {...project} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-16">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-6 py-3 border-2 border-white text-white font-bold text-sm sm:text-base transition-all ${
              currentPage === 1
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:bg-white hover:text-black'
            }`}
            style={{
              boxShadow: currentPage === 1 ? 'none' : '4px 4px 0px 0px rgba(255, 255, 255, 0.3)',
            }}
          >
            ← Previous
          </button>
          
          <span className="text-white text-sm sm:text-base">
            Page {currentPage} of {totalPages}
          </span>
          
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-6 py-3 border-2 border-white text-white font-bold text-sm sm:text-base transition-all ${
              currentPage === totalPages
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:bg-white hover:text-black'
            }`}
            style={{
              boxShadow: currentPage === totalPages ? 'none' : '4px 4px 0px 0px rgba(255, 255, 255, 0.3)',
            }}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
