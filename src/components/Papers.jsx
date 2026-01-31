import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

import { papers } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const PaperCard = ({ paper }) => {
  return (
    <div className="py-8 border-b border-gray-700 last:border-b-0">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight flex-1">
          {paper.title}
        </h3>
        <span className="text-gray-400 text-sm sm:text-base whitespace-nowrap">
          {paper.date}
        </span>
      </div>

      <p className="text-secondary text-sm sm:text-base md:text-lg mb-4">
        {paper.description}
      </p>

      {paper.tags && paper.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {paper.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs sm:text-sm border border-quaternary text-quaternary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {paper.links && paper.links.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {paper.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-white text-white font-bold text-sm sm:text-base hover:bg-white hover:text-black transition-all"
              style={{
                boxShadow: '4px 4px 0px 0px rgba(255, 255, 255, 0.3)',
              }}
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const Papers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const componentRef = useRef(null);
  
  const totalPages = Math.ceil(papers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = papers.slice(startIndex, endIndex);

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
    <div ref={componentRef} className="sm:my-20">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-center mb-6`}>
          Papers
        </h2>
      </motion.div>

      <div className="px-6 md:px-20 lg:px-40">
        <p className="text-secondary text-sm sm:text-base md:text-lg mb-8 text-center">
          -- Papers tests our theoretical side and writing it tests our ability to communicate complex idea clearly. --
        </p>

        <div>
          {currentItems.map((paper, index) => (
            <PaperCard key={`paper-${index}`} paper={paper} />
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
    </div>
  );
};

export default SectionWrapper(Papers, "papers");
