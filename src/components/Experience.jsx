import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Experience Card Component
const ExperienceCard = ({ experience }) => {
  const [isFlipped, setIsFlipped] = useState(false);  // State for flip

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);  // Toggle flip on click
  };

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        boxShadow: "none",
        padding: 0,
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <div className="w-4 h-4 rounded-full bg-blue-500" />
        </div>
      }
    >
      <div className="certificate-card" onClick={handleCardClick}>
        <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>
          {/* Front Side */}
          <div className="card-front">
            <h3 className="text-white text-[20px] font-bold">{experience.title}</h3>
            <p className="text-secondary text-[16px] font-semibold">{experience.company_name}</p>
            <ul className="mt-2 list-disc ml-5 space-y-1">
              {experience.points.map((point, index) => (
                <li key={`point-${index}`} className="text-white-100 text-[13px]">
                  {point}
                </li>
              ))}
            </ul>
            {experience.certificate_link && (
              <div className="mt-3">
                <a
                  href={experience.certificate_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-[13px]"
                >
                  View Certificate
                </a>
              </div>
            )}
          </div>

          {/* Back Side */}
          <div className="card-back">
            <img src={experience.certificate_image} alt="Certificate" />
          </div>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I have done so far in</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Certificates.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
