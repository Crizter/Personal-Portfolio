import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05, transition: { duration: 0.2 } }
};

function Navbar() {
  return (
    <motion.div
      className="flex justify-center items-center"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="container w-fit border border-solid shadow-lg bg-inherit"
        whileHover={{ boxShadow: "0px 5px 15px rgba(0,0,0,0.1)" }}
      >
        <div className="nav">
          <div className="nav-links flex gap-6 px-6 py-3">
            <motion.div 
              className="nav-item"
              variants={linkVariants}
              whileHover="hover"
            >
              <Link 
                className="nav-link text-gray-800 hover:text-gray-600 transition-colors" 
                to="/"
              >
                Home
              </Link>
            </motion.div>

            <motion.div 
              className="nav-item"
              variants={linkVariants}
              whileHover="hover"
            >
              <Link 
                className="nav-link text-gray-800 hover:text-gray-600 transition-colors" 
                to="/about"
              >
                About 
              </Link>
            </motion.div>

            <motion.div 
              className="nav-item"
              variants={linkVariants}
              whileHover="hover"
            >
              <Link 
                className="nav-link text-gray-800 hover:text-gray-600 transition-colors" 
                to="/contact"
              >
                Contact
              </Link>
            </motion.div>

            <motion.div 
              className="nav-item"
              variants={linkVariants}
              whileHover="hover"
            >
              <Link 
                className="nav-link text-gray-800 hover:text-gray-600 transition-colors" 
                to="/projects"
              >
                Projects
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;