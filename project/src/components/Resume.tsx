import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Eye } from 'lucide-react';

const Resume: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [error, setError] = useState<string>('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const handleDownload = async () => {
    try {
      // Fetch the PDF file
      const response = await fetch('/yaswanth_resume.pdf', {
        headers: {
          'Content-Type': 'application/pdf',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Convert the response to a blob
      const blob = await response.blob();
      
      // Create a URL for the blob
      const url = window.URL.createObjectURL(
        new Blob([blob], { type: 'application/pdf' })
      );

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = url;
      link.download = 'yaswanth_resume.pdf';
      
      // Append to body, click, and cleanup
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Release the blob URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      setError('Failed to download resume. Check console for details.');
    }
  };

  const handlePreview = () => {
    // Open PDF in new tab
    window.open('/yaswanth_resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 section-heading">My Resume</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-6">
              A summary of my education and professional journey.
            </p>
          </motion.div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex gap-4 mb-4">
              <motion.button
                variants={itemVariants}
                onClick={handlePreview}
                className="flex items-center gap-2 px-6 py-3 bg-dark-200 hover:bg-dark-300 text-white font-medium rounded-full transition-colors duration-300"
              >
                <Eye size={18} />
                Preview Resume
              </motion.button>

              <motion.button
                variants={itemVariants}
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors duration-300"
              >
                <Download size={18} />
                Download Resume
              </motion.button>
            </div>
            
            {error && (
              <motion.p
                variants={itemVariants}
                className="text-red-500 mt-4"
              >
                {error}
              </motion.p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;