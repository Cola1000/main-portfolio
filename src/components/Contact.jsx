import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { styles } from "../styles";

import { SectionWrapper } from "../hoc";

const Contact = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  return (
    <div className="sm:my-20">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "tween",
              duration: 1,
              delay: 0.2,
            },
          },
        }}
        className="md:pb-40 mx-4 md:mx-auto max-w-4xl md:p-20"
      >
        <h2 className={`${styles.sectionText} text-center`}>
          Contacts
        </h2>

        <div className="space-y-8 text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] leading-relaxed text-center">
          <p className="text-gray-400">
            My work sits between <span style={{ color: "white", fontWeight: "bold" }}>technology</span>, <span style={{ color: "white", fontWeight: "bold" }}>creativity</span>, and <span style={{ color: "white", fontWeight: "bold" }}>innovation</span>.
          </p>
          
          <p className="text-gray-400">
            When a project needs <span style={{ color: "white", fontWeight: "bold" }}>clarity</span>, <span style={{ color: "white", fontWeight: "bold" }}>structure</span>, <br /> and <span style={{ color: "white", fontWeight: "bold" }}>passion</span>, I am available.
          </p>
          
          <p className="text-gray-400">
            If the work makes sense, <span style={{ color: "white", fontWeight: "bold" }}>we can talk.</span>
          </p>
        </div>

        <div className="mt-16 text-center">
          <p className="text-white text-[20px] md:text-[25px] mb-3">Email</p>
          <a 
            href="mailto:rhiobimoprakoso.s@gmail.com" 
            className="text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] hover:text-gray-300 transition-colors"
            style={{ fontWeight: "bold" }}
          >
            rhiobimoprakoso.s@gmail.com
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]">
          <a 
            href="https://github.com/cola1000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/rhio-bimo-p-s-b33493217/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://x.com/@rhio_bimo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            X
          </a>
          <a 
            href="https://instagram.com/rhio_bimo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a 
            href="https://www.youtube.com/@rhio_bimo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            YouTube
          </a>
          <a 
            href="/main-portfolio/Rhio Bimo Prakoso S - CV.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            CV
          </a>
        </div>

      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");