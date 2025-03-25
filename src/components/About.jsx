import { motion } from 'framer-motion';
import { useState } from 'react';
import React from 'react';
import { Tilt } from 'react-tilt';

import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" loading="lazy" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        initial={{ maxHeight: "150px", opacity: 0.8 }}
        animate={{ maxHeight: isExpanded ? "1000px" : "150px", opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] overflow-hidden"
      >
        Hello, welcome to watch-only wallet. In an increasingly dynamic digital asset landscape, safeguarding your holdings is paramount. Recognizing the critical need for enhanced security and informed asset management, we provide a sophisticated watch-only wallet solution. Our platform empowers users with the ability to monitor their cryptocurrency assets without exposing their private keys, significantly mitigating the risk of unauthorized access. Beyond our robust technical infrastructure, we are deeply committed to fostering a culture of security awareness. We offer comprehensive educational resources and guidance, equipping individuals with the knowledge and best practices necessary to navigate the complexities of digital asset security confidently. Our mission is to provide not only a secure watch-only wallet but also to cultivate a community of informed and responsible digital asset holders.
      </motion.p>

      <button 
        onClick={() => setIsExpanded(!isExpanded)} 
        className="mt-2 text-lg text-blue-500 hover:underline cursor-pointer"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </>
  );
};




const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
