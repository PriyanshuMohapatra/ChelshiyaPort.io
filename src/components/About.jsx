import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import myPhoto from "../assets/myphoto.jpg"; // Replace with your actual image path

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-20 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Flex container for image + text */}
      <div className='mt-4 flex flex-col md:flex-row items-center gap-10'>
        {/* Left - Image with tilt + glow effect */}
        <Tilt className='w-full md:w-1/3 flex justify-center'>
          <motion.div
            variants={fadeIn("left", "spring", 0.2, 1)}
            className='relative'
          >
            <img
              src={myPhoto}
              alt='Me'
              className='w-64 h-64 rounded-full object-cover shadow-lg border-4 border-purple-500 hover:shadow-purple-500/50 transition-shadow duration-500 ease-in-out'
            />
            <div className="absolute -inset-1 rounded-full animate-pulse border-2 border-purple-400 opacity-30 blur-sm"></div>
          </motion.div>
        </Tilt>

        {/* Right - Text */}
        <motion.p
          variants={fadeIn("right", "spring", 0.2, 1)}
          className='text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>
      </div>

      {/* Services */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
