import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Importing the images
import botProj from '../assets/discordbot1.png';
import allBlogs from '../assets/allBlogs.png';
import crowdFund from '../assets/fund.png';

// TODO : FIX THE PART  
function Projects() {
    const imagesArr = [allBlogs, crowdFund, botProj];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {1
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesArr.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [imagesArr.length]);

    return (
        <div className='mx-48 p-10 bg-inherit shadow-lg flex flex-row'>
            <div className="relative w-[1280px] h-[720px] flex justify-center items-center overflow-hidden">
                {imagesArr.map((image, index) => (
                    <motion.img
                        key={index}
                        src={image}
                        alt={`Project image ${index + 1}`}
                        className="absolute w-[1280px] h-[720px] object-contain"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: currentIndex === index ? 1 : 0,
                            transition: { duration: 0.5 }
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;
