import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Importing the images
import botProj from '../assets/discordbot1.png';
import allBlogs from '../assets/allBlogs.png';
import crowdFund from '../assets/fund.png';

const Projects = () => {
    const imagesArr = [allBlogs, crowdFund, botProj];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesArr.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [imagesArr.length]);

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

    return (
        <div className="flex justify-center items-center h-screen max-sm">
            <div className="relative w-4/5 h-3/5">
                <motion.div
                    key={currentIndex}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        if (swipe < -swipeConfidenceThreshold) {
                            setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesArr.length);
                        } else if (swipe > swipeConfidenceThreshold) {
                            setCurrentIndex((prevIndex) => (prevIndex - 1 + imagesArr.length) % imagesArr.length);
                        }
                    }}
                    className="absolute w-full h-full flex justify-center items-center max-sm:h-1/2 max-sm:w-full"
                >
                    <img
                        src={imagesArr[currentIndex]}
                        alt={`Project ${currentIndex + 1}`}
                        className="w-full h-full object-contain rounded-lg shadow-lg"
                    />
                </motion.div>
            </div>
            <div className="absolute bottom-8 flex justify-center w-full max-sm:bottom-20 ">
                {imagesArr.map((_, index) => (
                    <div
                        key={index}
                        className={`w-4 h-4 rounded-full mx-2 cursor-pointer ${
                            currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
