// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion"; // Import framer-motion

const Hero = () => {
  return (
    <div className="px-4 py-20 text-center sm:px-6 lg:px-8">
      {/* Animated Heading */}
      <motion.h1
        className="mb-4 text-4xl font-extrabold leading-tight text-transparent md:text-6xl bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text"
        initial={{ opacity: 0, y: -50 }} // Starts off-screen and transparent
        animate={{ opacity: 1, y: 0 }} // Fade in and slide up
        transition={{ duration: 1, ease: "easeOut" }} // Animation duration
      >
        Resell Your Software Licenses with Ease
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        className="max-w-2xl mx-auto mb-8 text-lg text-gray-700 md:text-xl dark:text-gray-300"
        initial={{ opacity: 0, y: 30 }} // Starts off-screen
        animate={{ opacity: 1, y: 0 }} // Fade in and slide up
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} // Slight delay for the paragraph
      >
        SoftSell makes license reselling quick, secure, and profitable for individuals and businesses.
      </motion.p>

      {/* Animated Button */}
      <motion.a
        href="#contact"
        className="inline-block px-8 py-3 font-semibold text-white transition bg-indigo-600 shadow-md rounded-xl hover:bg-indigo-700 hover:shadow-lg"
        initial={{ opacity: 0, y: 50 }} // Starts off-screen and transparent
        animate={{ opacity: 1, y: 0 }} // Fade in and slide up
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }} // Slight delay for the button
      >
        Sell My Licenses
      </motion.a>
    </div>
  );
};

export default Hero;
