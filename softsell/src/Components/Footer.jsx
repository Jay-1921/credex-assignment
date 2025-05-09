// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-200 dark:bg-gray-800 text-center text-sm">
      <p>© {new Date().getFullYear()} SoftSell. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
