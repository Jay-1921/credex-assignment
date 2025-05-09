import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import { Link } from "react-scroll"; // Import Link from react-scroll
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <motion.nav
      className="sticky top-0 z-50 shadow-sm bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }} // Starts off-screen (above)
      animate={{ y: 0, opacity: 1 }} // Slide down and fade in
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0 }} // Start hidden
              animate={{ opacity: 1 }} // Fade in
              transition={{ duration: 1, delay: 0.2 }} // Delay for logo appearance
            >
              <img
                src="/logo.png" // Path to your logo file
                alt="SoftSell Logo"
                className="h-16" // Increased the height to make the logo larger
              />
            </motion.div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden space-x-6 text-sm font-medium text-gray-700 md:flex dark:text-gray-200">
              {['Home', 'How It Works', 'Why Us', 'Testimonials', 'Contact'].map((text, index) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0 }} // Start hidden
                  animate={{ opacity: 1 }} // Fade in
                  transition={{ duration: 1, delay: 0.3 + index * 0.1 }} // Staggered delay
                >
                  <Link
                    to={text.toLowerCase().replace(' ', '-')} // Scroll to the respective section
                    smooth={true} // Enable smooth scroll
                    duration={500} // Duration of scroll
                    className="transition cursor-pointer hover:text-indigo-600"
                  >
                    {text}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }} // Delay theme toggle
            >
              <ThemeToggle />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
