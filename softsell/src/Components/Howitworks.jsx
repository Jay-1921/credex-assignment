// src/components/HowItWorks.jsx
import React, { useState } from 'react';
import { FaUpload, FaSearchDollar, FaMoneyBillWave } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import framer-motion

const HowItWorks = () => {
  const [stepIndex, setStepIndex] = useState(0);

  const handleClick = () => {
    if (stepIndex < 3) {
      setStepIndex(stepIndex + 1);
    }
  };

  return (
    <motion.section
      id="how-it-works"
      className="py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      initial={{ opacity: 0 }} // Fade in section
      animate={{ opacity: 1 }} // Fade in completely
      transition={{ duration: 1 }} // Smooth fade-in
    >
      <motion.h2
        className="mb-12 text-4xl font-bold text-center text-gray-800 dark:text-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        How It Works
      </motion.h2>
      
      <div className="flex flex-col items-center justify-center max-w-6xl gap-10 px-4 mx-auto md:flex-row">
        {/* Step 1 */}
        <motion.div
          onClick={handleClick}
          className={`group cursor-pointer bg-white dark:bg-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 rounded-2xl shadow-md w-72 mx-auto border-2 ${stepIndex >= 1 ? 'border-green-400' : 'border-transparent'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="mb-4 text-indigo-600 dark:text-indigo-400">
            <FaUpload size={32} />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">Upload License</h3>
          {stepIndex >= 1 && <p className="text-sm text-green-600">License uploaded successfully!</p>}
        </motion.div>

        {/* Step 2 */}
        <motion.div
          onClick={handleClick}
          className={`group cursor-pointer bg-white dark:bg-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 rounded-2xl shadow-md w-72 mx-auto border-2 ${stepIndex >= 2 ? 'border-green-400' : 'border-transparent'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className="mb-4 text-indigo-600 dark:text-indigo-400">
            <FaSearchDollar size={32} />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">Get Valuation</h3>
          {stepIndex >= 2 && <p className="text-sm text-blue-600">Estimated Value: ₹5,000</p>}
        </motion.div>

        {/* Step 3 */}
        <motion.div
          onClick={handleClick}
          className={`group cursor-pointer bg-white dark:bg-gray-700 hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 rounded-2xl shadow-md w-72 mx-auto border-2 ${stepIndex === 3 ? 'border-green-400' : 'border-transparent'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <div className="mb-4 text-indigo-600 dark:text-indigo-400">
            <FaMoneyBillWave size={32} />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">Get Paid</h3>
          {stepIndex === 3 && (
            <p className="text-sm text-purple-600">
              Payment of ₹5,000 sent!<br />
              Transaction ID: <span className="font-mono">TXN123456</span>
            </p>
          )}
        </motion.div>
      </div>

      <motion.div
        className="mt-12 text-lg font-medium text-center text-gray-700 dark:text-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {stepIndex === 0 && "Click 'Upload License' to start."}
        {stepIndex === 1 && "License uploaded. Click next to get valuation."}
        {stepIndex === 2 && "Valuation complete. Click next to receive payment."}
        {stepIndex === 3 && "You have successfully completed all steps!"}
      </motion.div>
    </motion.section>
  );
};

export default HowItWorks;
