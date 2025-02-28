import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEsc);
    
    // Prevent scrolling on the body
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleBackdropClick}
      >
        <motion.div
          className="bg-dark-200 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        >
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 md:h-80 object-cover rounded-t-xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h2>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium bg-dark-300 text-primary-400 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-primary-400">Project Overview</h3>
              <p className="text-gray-300 leading-relaxed">{project.details}</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
              
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-dark-300 hover:bg-dark-400 text-white font-medium rounded-lg transition-colors"
                >
                  <Github size={18} />
                  View Code
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;