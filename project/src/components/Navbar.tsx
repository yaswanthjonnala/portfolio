import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'RESUME', href: '#resume' },
    { name: 'WORKS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-white">
            <span className="gradient-text">Portfolio</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link text-sm font-medium hover:text-primary-400 transition-colors ${
                  activeSection === link.href.substring(1) ? 'text-primary-400 active' : 'text-gray-300'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/yaswanthjonnala" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/naga-yaswanth-reddy-jonnala/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-dark-200 absolute top-full left-0 w-full"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium hover:text-primary-400 transition-colors ${
                    activeSection === link.href.substring(1) ? 'text-primary-400' : 'text-gray-300'
                  }`}
                  onClick={toggleMenu}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/yaswanthjonnala" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/naga-yaswanth-reddy-jonnala/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            
          </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;