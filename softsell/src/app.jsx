// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget"; // Import ChatWidget component

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden text-gray-900 bg-gradient-to-br from-white via-slate-50 to-slate-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-white font-inter">
      <Navbar />
      <main className="px-4 py-10 mx-auto space-y-24 sm:px-6 lg:px-8 max-w-7xl">
        <section id="hero">
          <Hero />
        </section>

        <section id="how-it-works">
          <HowItWorks />
        </section>

        <section id="why-choose-us">
          <WhyChooseUs />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="contact">
          <ContactForm />
        </section>
      </main>
      <Footer />
      
      {/* Add the ChatWidget component here */}
      <ChatWidget />  {/* This will render the chat widget at the bottom-right of the screen */}
    </div>
  );
}

export default App;
