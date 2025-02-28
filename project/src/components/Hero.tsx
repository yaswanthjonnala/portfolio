import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              I am <span className="gradient-text">Naga Yaswanth Reddy Jonnala</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
                  | SIH'2024 | Full Stack | AI & ML |
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a 
              href="#contact" 
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors duration-300"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 bg-transparent border border-white/20 hover:border-white/40 text-white font-medium rounded-full transition-colors duration-300"
            >
              View My Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex space-x-6 mb-16"
          >
            <a href="https://github.com/yaswanthjonnala" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/naga-yaswanth-reddy-jonnala/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/70 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown className="scroll-down" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;