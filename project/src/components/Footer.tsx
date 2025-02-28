import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-dark-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-white">
              <span className="gradient-text">Portfolio</span>
            </a>
          </div>
          
          <div className="flex items-center text-gray-400 text-sm">
            <p>
              © {currentYear} All Rights Reserved. Made with <Heart className="inline-block text-red-500" size={14} /> by Yaswanth Jonnala
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;