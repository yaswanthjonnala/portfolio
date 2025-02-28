import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data';
import { Code, Palette, Lightbulb, Rocket } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  return (
    <section id="about" className="py-20 bg-dark-100">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 section-heading">About Me</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
            Hey! I'm Naga Yaswanth Reddy Jonnala, a Computer Science student specializing in AI/ML, passionate about building innovative solutions. From AI-driven logistics optimization to intelligent farming assistants, I thrive on solving real-world problems through technology. Beyond coding, I actively contribute to communities like ISTE and TEDxVNRVJIET, collaborating to drive meaningful change.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4 text-primary-400">Who I Am</h3>
              <p className="text-gray-300 mb-4">
              With experience in AI-driven applications, full-stack development, and data analytics, I have worked on projects like Optideliver, an AI-powered logistics optimizer, and FarmWise.AI, an intelligent farming assistant. My expertise spans React, Django, TensorFlow, and MongoDB, allowing me to develop scalable and efficient solutions.
              </p>
              <p className="text-gray-300 mb-4">
              Beyond development, I actively contribute to tech communities as a leader in ISTE and a PR coordinator for TEDxVNRVJIET fostering collaboration and engagement.
              </p>
              <p className="text-gray-300">
              When I’m not coding, I’m exploring emerging technologies, participating in hackathons, or sharing knowledge through mentorship and community initiatives.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-primary-400">My Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-300 rounded-full h-2.5">
                      <motion.div
                        className="bg-gradient-to-r from-primary-600 to-primary-400 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-8 text-center text-primary-400">What I Do</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-dark-200 p-6 rounded-lg">
                <div className="text-primary-400 mb-4">
                  <Code size={36} />
                </div>
                <h4 className="text-xl font-semibold mb-2">Web Development</h4>
                <p className="text-gray-400">Building responsive and performant web applications using modern technologies.</p>
              </div>
              
              <div className="bg-dark-200 p-6 rounded-lg">
                <div className="text-primary-400 mb-4">
                  <Palette size={36} />
                </div>
                <h4 className="text-xl font-semibold mb-2">AI&ML</h4>
                <p className="text-gray-400">Developing intelligent solutions using AI/ML to optimize processes and enhance decision-making.</p>
              </div>
              
              <div className="bg-dark-200 p-6 rounded-lg">
                <div className="text-primary-400 mb-4">
                  <Lightbulb size={36} />
                </div>
                <h4 className="text-xl font-semibold mb-2">Problem Solving</h4>
                <p className="text-gray-400">Finding efficient solutions to complex technical challenges.</p>
              </div>
              
              <div className="bg-dark-200 p-6 rounded-lg">
                <div className="text-primary-400 mb-4">
                  <Rocket size={36} />
                </div>
                <h4 className="text-xl font-semibold mb-2">Performance Optimization</h4>
                <p className="text-gray-400">Enhancing application speed and efficiency for better user experience.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;