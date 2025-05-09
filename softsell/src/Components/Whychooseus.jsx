// src/components/WhyChooseUs.jsx
import React from 'react';
import { FaShieldAlt, FaClock, FaHandshake, FaUserCheck } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import framer-motion

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaShieldAlt size={28} className="text-blue-500" />,
      title: "Secure Transactions",
      desc: "End-to-end encryption ensures your data stays safe."
    },
    {
      icon: <FaClock size={28} className="text-yellow-500" />,
      title: "Quick Process",
      desc: "Get your license evaluated and paid within 24 hours."
    },
    {
      icon: <FaHandshake size={28} className="text-green-500" />,
      title: "Trusted Service",
      desc: "Thousands of satisfied customers across the globe."
    },
    {
      icon: <FaUserCheck size={28} className="text-purple-500" />,
      title: "Verified Buyers",
      desc: "We connect you only with verified enterprise buyers."
    },
  ];

  return (
    <motion.section
      id="why-choose-us"
      className="px-4 py-16 text-center bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }} // Initial opacity for the section
      animate={{ opacity: 1 }} // Final opacity after fade-in
      transition={{ duration: 1 }} // Smooth fade-in transition
    >
      <motion.h2
        className="mb-10 text-3xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Why Choose Us
      </motion.h2>
      
      <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
        {features.map((f, idx) => (
          <motion.div
            key={idx}
            className="p-6 transition rounded-lg shadow bg-gray-50 dark:bg-gray-800 hover:shadow-md"
            initial={{ opacity: 0, scale: 0.95 }} // Initial state with opacity and scale
            animate={{ opacity: 1, scale: 1 }} // Animate to full opacity and scale
            transition={{ duration: 0.6, delay: 0.4 + idx * 0.2 }} // Stagger the animations
          >
            <div className="flex justify-center mb-4">{f.icon}</div>
            <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
