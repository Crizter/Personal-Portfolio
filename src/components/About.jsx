import React from 'react';
import { motion } from "framer-motion"; 
import TechnologiesIcons from "./TechnologiesIcons";
import Navbar from "./Navbar";

function About() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
   <>
   {/* Navbar */}
   <div className="flex justify-center items-center">
     <Navbar />
   </div>

 {/* Main About Container */}
<motion.div
  className="mx-20 max-sm:mx-4 shadow-lg flex flex-col max-sm:w-full"
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  <motion.div className="bg-inherit mt-4 p-20 max-sm:p-6 rounded-md border border-slate-400">
    
    {/* About Me Header */}
    <motion.h1
      className="flex flex-col justify-center items-center text-5xl max-sm:text-3xl text-gray-700"
      variants={textVariants}
    >
      About Me
    </motion.h1>

    {/* About Me Section */}
    <div className="text-gray-500 p-2 m-2 max-sm:w-full max-sm:text-center">
      <motion.h1 
        className="text-gray-700 text-xl max-sm:text-lg"
        variants={textVariants}
      >
        A Bit About Me
      </motion.h1>
      <motion.p 
        className="text-wrap max-sm:text-sm max-sm:leading-6 max-sm:max-w-xs mx-auto"
        variants={textVariants}
      >
        I'm a self-taught web developer and Mobile App Developer with
        experience in designing new features from ideation to production,
        implementation of wireframes and design flows into high-performance
        software applications. I take into consideration the user experience
        while writing reusable and efficient code. I passionately combine
        good design, technology, and innovation in all my projects, which I
        like to accompany from the first idea to release. Currently, I'm
        focused on backend development.
      </motion.p>
    </div>

    {/* Technologies Section */}
    <div className="text-gray-500 p-2 m-2 max-sm:w-full max-sm:text-center">
      <motion.h1
        className="text-gray-700 text-xl max-sm:text-lg"
        variants={textVariants}
      >
        Technologies and Tools
      </motion.h1>
      <motion.p 
        className="text-wrap max-sm:text-sm max-sm:leading-6 max-sm:max-w-xs mx-auto"
        variants={textVariants}
      >
        Using a combination of cutting-edge technologies and reliable
        open-source software, I build user-focused, performant apps and
        websites for smartphones, tablets, and desktops.
      </motion.p>
      
      {/* Technologies Icons */}
      <div className="flex flex-col justify-center items-center">
        <div className="w-96 max-sm:w-full p-4 m-2 text-gray-500">
          <TechnologiesIcons />
        </div>
      </div>
    </div>

  </motion.div>
</motion.div>

   </>
  );
}

export default About;
