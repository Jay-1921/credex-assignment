// src/components/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion

const Testimonials = () => {
  const reviews = [
    {
      name: "Amit Sharma",
      role: "IT Manager",
      company: "TechNova",
      quote: "SoftSell made it super easy to sell our unused licenses. Smooth and fast!"
    },
    {
      name: "Priya Desai",
      role: "Procurement Head",
      company: "CloudEra",
      quote: "Fantastic experience — we recovered value from old software we no longer used."
    }
  ];

  return (
    <motion.section
      id="testimonials"
      className="px-4 py-16 text-center bg-gray-100 dark:bg-gray-800"
      initial={{ opacity: 0 }} // Initial state with opacity 0
      animate={{ opacity: 1 }} // Animate to full opacity
      transition={{ duration: 1 }} // Smooth fade-in transition
    >
      <motion.h2
        className="mb-10 text-3xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        What Our Customers Say
      </motion.h2>
      <div className="flex flex-col justify-center max-w-5xl gap-8 mx-auto md:flex-row">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="w-full p-6 bg-white rounded shadow dark:bg-gray-700 md:w-1/2"
            initial={{ opacity: 0, y: 20 }} // Initial state for card (slightly below)
            animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
            transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }} // Delay for staggered animation
          >
            <p className="mb-4 italic">“{review.quote}”</p>
            <div className="font-semibold">{review.name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-300">{review.role}, {review.company}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
