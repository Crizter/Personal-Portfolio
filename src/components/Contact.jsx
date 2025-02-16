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
        <div>
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 p-2 m-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Name Input */}
            <div>
              <label className="block text-lg mb-2">Name</label>
              <motion.input
                type="text"
                className="w-fit p-3 rounded-md bg-gray-800 text-white border-none outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                whileFocus={{ scale: 1.05 }}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-lg mb-2">Email</label>
              <motion.input
                type="email"
                className="w-fit p-3 rounded-md bg-gray-800 text-white border-none outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                whileFocus={{ scale: 1.05 }}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Description Input */}
            <div>
              <label className="block text-lg mb-2">Message</label>
              <motion.textarea
                className="w-fit p-3 rounded-md bg-gray-800 text-white border-none outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Enter your message"
                {...register("description", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters long",
                  },
                })}
                whileFocus={{ scale: 1.05 }}
              />
              {errors.description && (
                <p className="text-red-500">{errors.description.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-fit p-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500"
              whileHover={{ scale: 1.05 }}
            >
              Submit
            </motion.button>
          </motion.form>

          {/* Direct Email Link */}
          <motion.div className="p-2 m-2" variants={textVariants}>
            <a
              href="mailto:harshsharma90866@gmail.com"
              className="text-blue-500 hover:underline"
            >
              Send me email directly
            </a>
          </motion.div>
        </div>

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
