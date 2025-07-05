import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const images = [
  "/images/automobile-5330343.jpg",
  "/images/black-605334.jpg",
  "/images/car-3866115.jpg",
  "/images/koenigsegg-438460.jpg",
  "/images/lamborghini-4815249.jpg",
  "/images/pagani-2769165_1280.jpg",
  "/images/super-car-8718164.jpg",
];

const Home = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

  const handlePrev = () => {
    setCurrentIndex(([prevIndex]) => [
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
      -1,
    ]);
  };

  const handleNext = () => {
    setCurrentIndex(([prevIndex]) => [
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      1,
    ]);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const slider = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(slider);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1, // Ken Burns zoom effect start
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1, // Zoom to normal
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1, // Zoom out
    }),
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Slider Images */}
      <AnimatePresence custom={direction}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`slide-${currentIndex}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 10 }, // Slow Ken Burns zoom
          }}
        />
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black opacity-60 z-10" />

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Hero Text */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20 text-white px-4 text-center">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-wide mb-4 drop-shadow-2xl"
        >
          Vazirani
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-xl md:text-2xl max-w-2xl drop-shadow-xl"
        >
          Crafting the Future of Automotive Excellence
        </motion.p>
      </div>

      {/* Control Buttons */}
      <div className="absolute top-1/2 left-0 z-30 transform -translate-y-1/2 px-4 flex items-center justify-between w-full">
        <button
          onClick={handlePrev}
          className="text-white text-5xl hover:text-gray-300 hover:scale-110 transition duration-300"
        >
          <CiCircleChevLeft />
        </button>
        <button
          onClick={handleNext}
          className="text-white text-5xl hover:text-gray-300 hover:scale-110 transition duration-300"
        >
          <CiCircleChevRight />
        </button>
      </div>
    </section>
  );
};

export default Home;
