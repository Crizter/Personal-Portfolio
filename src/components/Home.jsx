import React from "react";
// import ModelViewer from "./ModelViewer";
import ModelViewer from './ModelViewer'
import { motion } from "framer-motion"; 
import LaptopModelViewer from "./LaptopModelViewer";
import '../App.css'
function Home() {
   // Define animation variants for smoother transitions
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
      {/* Section 1: Introduction with ModelViewer */}
      <motion.div 
        className="flex items-center mt-11 justify-between  antialiased border max-w-xl shadow-lg rounded-md p-8 bg-inherit border-solid"
        variants={containerVariants} // Apply container variants
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.div 
            variants={textVariants} // Apply text variants
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-black text-3xl max-sm:text-8xl ">
              Hi, I am Harsh.
            </h1>
          
            <h3 className="text-xl">Full Stack Developer</h3>
          </motion.div>

          <motion.div 
            className="roller mt-4"
            variants={textVariants} // Apply text variants for roller text
            initial="hidden"
            animate="visible"
          >
            <span id="rolltext">
              Pre Final CS student
              <br />
              Well Versed in DSA
              <br />
              Problem Solving
            </span>
          </motion.div>
        </div>

        {/* 3D Model Viewer Component */}
        <div className="ml-8">
          <ModelViewer />
        </div>
      </motion.div>

      {/* Section 2: My description */}
      <motion.div
        className="flex flex-row justify-end mt-11"
        variants={containerVariants} // Apply container variants
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center p-1 md:p-4 justify-between antialiased border max-w-xl rounded-md bg-customgray shadow-lg border-solid border-gray-300 h-full md:h-62">
          <div className="flex flex-row justify-between">
            {/* Laptop model viewer */}
            <div className="ml-8 mt-10">
              <LaptopModelViewer />
            </div>

            {/* Description box */}
            <motion.div 
              className="ml-8 mt-8 text-wrap md:text-balance"
              variants={textVariants} // Apply text variants for the description box
              initial="hidden"
              animate="visible"
            >
              <p className="text-black text-lg max-sm:text-8xl ">
              I build dynamic, scalable web applications, handling both frontend and backend development using modern technologies like React and Node.js.

              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
