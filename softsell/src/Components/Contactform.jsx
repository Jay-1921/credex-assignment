// src/components/ContactForm.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', licenseType: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setError('Please fill all required fields.');
      return;
    }
    setError('');
    alert("Message submitted successfully!");
    setFormData({ name: '', email: '', company: '', licenseType: '', message: '' });
  };

  return (
    <motion.section
      id="contact"
      className="px-4 py-16 text-center bg-white dark:bg-gray-900"
      initial={{ opacity: 0 }} // Initial opacity 0
      animate={{ opacity: 1 }} // Animate to full opacity
      transition={{ duration: 1 }} // Smooth fade-in transition
    >
      <motion.h2
        className="mb-6 text-3xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Get in Touch
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto space-y-4 text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }} // Slight delay for the form
      >
        <div className="grid gap-4 md:grid-cols-2">
          <motion.input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
            initial={{ opacity: 0, y: 20 }} // Initial state (slightly below)
            animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
            transition={{ duration: 0.5, delay: 0.7 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <motion.input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          />
          <motion.select
            name="licenseType"
            value={formData.licenseType}
            onChange={handleChange}
            className="w-full p-3 text-black bg-white border rounded"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <option value="">Select License Type</option>
            <option value="Windows">Windows</option>
            <option value="Adobe">Adobe</option>
            <option value="Antivirus">Antivirus</option>
            <option value="Others">Others</option>
          </motion.select>
        </div>

        <motion.textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full h-32 p-3 border rounded"
          required
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />

        {error && <div className="text-sm text-red-500">{error}</div>}

        <motion.button
          type="submit"
          className="px-6 py-3 text-white transition bg-blue-600 rounded shadow hover:bg-blue-700"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 1.7 }}
        >
          Submit
        </motion.button>
      </motion.form>

      {/* Custom styling for placeholder text */}
      <style jsx>{`
        input::placeholder, textarea::placeholder, select::placeholder {
          color: black;
        }
      `}</style>
    </motion.section>
  );
};

export default ContactForm;
