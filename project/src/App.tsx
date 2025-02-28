import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { Project } from './types';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Projects onProjectClick={handleProjectClick} />
        <Contact />
      </main>
      <Footer />
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
}

export default App;