import React from "react";
import ModelViewer from './ModelViewer';
import { motion } from "framer-motion"; 
import LaptopModelViewer from "./LaptopModelViewer";
import '../App.css';

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
    <div className="max-sm:p-4">
      {/* Section 1: Introduction with ModelViewer */}
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-between mt-11 antialiased border max-w-xl shadow-lg rounded-md p-6 md:p-8 bg-inherit border-solid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center md:text-left">
          <motion.div 
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-black text-3xl md:text-5xl max-sm:text-2xl">
              Hi, I am Harsh.
            </h1>
            <h3 className="text-xl max-sm:text-lg">Full Stack Developer</h3>
          </motion.div>

          <motion.div 
            className="roller mt-4"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <span id="rolltext" className="block text-lg max-sm:text-sm">
              Pre Final CS student
              <br />
              Well Versed in DSA
              <br />
              Problem Solving
            </span>
          </motion.div>
        </div>

        {/* 3D Model Viewer Component */}
        <div className="ml-8 max-sm:ml-0 max-sm:mt-6">
          <ModelViewer />
        </div>
      </motion.div>

      {/* Section 2: My description */}
      <motion.div
        className="flex flex-col md:flex-row justify-end mt-11"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row items-center p-4 md:p-6 justify-between antialiased border max-w-xl rounded-md bg-customgray shadow-lg border-solid border-gray-300 h-full">
          
          {/* Laptop Model Viewer (Centered on Mobile) */}
          <div className="ml-8 mt-10 max-sm:m-0">
            <LaptopModelViewer />
          </div>

          {/* Description box */}
          <motion.div 
            className="ml-8 mt-8 max-sm:ml-0 max-sm:mt-4 text-wrap md:text-balance"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-black text-lg md:text-xl max-sm:text-base text-center md:text-left">
              I build dynamic, scalable web applications, handling both frontend and backend development using modern technologies like React and Node.js.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
