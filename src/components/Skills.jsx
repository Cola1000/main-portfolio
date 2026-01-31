import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { skills, skillIcons } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const SkillsCard = ({ skill, onClick, isActive, isMobile }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer sm:mb-5 p-5 max-w-xl relative sm:text-left text-center ${
        isMobile ? "text-quaternary" : ""
      }`}
    >
      {(isActive || isMobile) && (
        <div className="absolute left-0 top-0 bottom-0 w-3 md:w-5 bg-tertiary my-6 sm:block hidden"></div>
      )}
      <h3
        className={`text-xl lg:text-2xl xl:text-3xl font-bold sm:pl-8 ${
          isActive || isMobile ? "text-quaternary" : "text-slate-600"
        }`}
      >
        {skill.title}
      </h3>
      <p
        className={`text-md lg:text-lg xl:text-2xl sm:font-medium pt-2 sm:pl-8 ${
          isActive || isMobile ? "text-white" : "text-slate-600"
        }`}
      >
        {skill.company_name} | {skill.date}
      </p>
    </div>
  );
};

const SkillsDetails = ({ skill }) => {
  return (
    <div className="mt-5">
      <ul className="max-w-7xl list-none space-y-8 border-4 lg:border-8 rounded-xl lg:rounded-3xl p-6">
        {skill.details.map((detail, index) => (
          <li
            key={`skill-detail-${index}`}
            className="text-white font-semibold text-[10px] xs:text-[14px] md:text-[18px] lg:text-[22px] xl:text-[28px] lg:leading-[30px]"
            dangerouslySetInnerHTML={{ __html: detail }}
          />
        ))}
      </ul>
    </div>
  );
};

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sm:my-20">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-center`}>
          Skills
        </h2>
      </motion.div>

      <div className="mt-8 overflow-hidden">
        <div className="flex w-max items-center gap-8 animate-marquee">
          {skillIcons.map((icon) => (
            <a
              key={icon.alt}
              href={icon.href}
              target="_blank"
              rel="noreferrer"
              className="shrink-0"
            >
              <img src={icon.src} alt={icon.alt} width="60" height="60" />
            </a>
          ))}
          {skillIcons.map((icon) => (
            <a
              key={`${icon.alt}-dup`}
              href={icon.href}
              target="_blank"
              rel="noreferrer"
              className="shrink-0"
              aria-hidden="true"
              tabIndex={-1}
            >
              <img src={icon.src} alt={icon.alt} width="60" height="60" />
            </a>
          ))}
        </div>
      </div>

      <div className="relative mt-10 md:mt-20 md:p-20 flex flex-col items-center sm:flex-row sm:items-start">
        <div className="flex flex-col z-10 sm:w-auto sm:w-full">
          {skills.map((skill, index) => (
            <SkillsCard
              key={`skill-${index}`}
              skill={skill}
              onClick={() => setSelectedSkill(skill)}
              isActive={selectedSkill === skill}
              isMobile={isMobile}
            />
          ))}
        </div>

        <div className="justify-center z-10 sm:block hidden">
          <SkillsDetails skill={selectedSkill} />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");