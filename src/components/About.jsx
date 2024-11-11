import react from 'react'
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
   <div className="flex justify-center items-center">
   <Navbar />
   </div>
    <motion.div
      className="mx-20 shadow-lg flex flex-col"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="bg-inherit mt-4 p-36 h-fit  rounded-md  border border-slate-400">
        <motion.h1
          className="flex flex-col justify-center items-center text-5xl text-gray-700"
          variants={textVariants}
        >
          About Me
        </motion.h1>
        <div className="text-gray-500 p-2 m-2">
          {/* About me section */}
          <motion.h1 className="text-gray-700 text-xl" variants={textVariants}>
            A Bit About Me
          </motion.h1>
          <motion.p className="text-wrap" variants={textVariants}>
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

        {/* Technologies used section */}
        <div className="text-gray-500 p-2 m-2 ">
          <div>
            <motion.h1
              className="text-gray-700 text-xl"
              variants={textVariants}
            >
              Technologies and Tools
            </motion.h1>
            <motion.p className="text-wrap" variants={textVariants}>
              Using a combination of cutting-edge technologies and reliable
              open-source software, I build user-focused, performant apps and
              websites for smartphones, tablets, and desktops.
            </motion.p>
          </div>
          <div className="flex flex-col justify-center items-center">
            {/* Technologies icons moving in x-axis */}
            <div className="w-96 p-4 m-2   text-gray-500 ">
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