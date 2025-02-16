import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Contact() {
  // State for form values
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [description, setDescription] = useState(""); 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  // React Hook Form functions
  const { handleSubmit, register, formState: { errors } } = useForm();

  // Submit function
  const onSubmit = values => {
    console.log(values);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className='mt-4 mx-20'>
    <motion.div
      className="border border-solid shadow-lg rounded-md border-slate-400 w-fit p-36 bg-inherit h-fit"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="flex justify-center items-center text-4xl font-semibold"
        variants={textVariants}
      >
        Contact
      </motion.h1>

      <motion.div className="p-2 m-2" variants={textVariants}>
        <p className="text-2xl">Connect with me</p>
        <p>
          If you'd like to know more about me or my work, or if you'd just like
          to say hello, feel free to send me a message. I'd love to hear from
          you!
        </p>
      </motion.div>

      <div className="flex justify-between">
       
                
        {/* Right Section */}
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <div className="flex flex-col p-2 mt-8">
            <p className="text-3xl font-semibold">Email</p>
            <p className="text-lg">harshsharma90866@gmail.com</p>
          </div>
          <div className="flex flex-col p-2">
            <p className="text-3xl font-semibold">Address</p>
            <p className="text-lg">Delhi, India</p>
          </div>
          <div className="flex flex-col p-2">
            <p className="text-3xl font-semibold">Social</p>
            <div className="flex space-x-4 text-3xl mt-3">
              <Link to="https://www.linkedin.com/in/harsh-sharma-90b416179/">
                <FaLinkedin />
              </Link>
              <Link to="#">
                <FaInstagram />
              </Link>
              <Link to="https://github.com/Crizter">
                <FaGithub />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
    </div>
  );
}

export default Contact;


