import { Project, Skill, Experience, Education } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Optideliver - AI-Powered Delivery Optimization System",
    description: "Developed an AI-powered solution for India Post during SIH 2024, streamlining logistics by scheduling delivery slots and optimizing routes. The solution offers flexibility for senders, receivers, and delivery personnel, achieving 40% faster deliveries and a 15% reduction in fuel consumption, based on insights from customer surveys and simulated datasets.",
    image: "/images/optideliver.jpg",
    technologies: ["React", "Node.js", "MongoDB", "API", "Machine Learning"],
    githubLink: "https://github.com/yaswanthjonnala/Optideliver-AI-Powered-Delivery-Optimization-System"
  },
  {
    id: 2,
    title: "Food Expiry App",
    description: "Developed a React Native app with barcode scanning to track food expiry dates efficiently. It uses AI-driven algorithms to analyze ingredients and suggest personalized meal ideas. The app optimizes meal planning, reducing food waste and enhancing grocery management. This improves efficiency by 80%, helping users make better use of available ingredients.",
    image: "/images/foodexpiry.jpg",
    technologies: ["React Native", "Sanity", "Tailwind CSS"],
    githubLink: "https://github.com/yaswanthjonnala/Food-Expiry-Tracker"
  },
  {
    id: 3,
    title: "FarmWise.Ai",
    description: "Developed an AI-driven platform for smallholder farmers, achieving 90% accuracy in crop management, pest detection, yield prediction, and weather-based insights. Built with React, Flask, and MongoDB, it integrates YOLO v8 for pest detection, Random Forest & TensorFlow for predictions, and Google Gemini API for a multilingual chatbot, improving accessibility by 70%.",
    image: "/images/FarmWise.jpg",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
    githubLink: "https://github.com/yaswanthjonnala/FarmWise.Ai"
  }
];

export const skills: Skill[] = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "NextJs", level: 75 },
  { name: "HTML/CSS", level: 90 },
  { name: "MongoDB", level: 70 },
  { name: "SQL", level: 75 },
  { name: "React Native", level: 80 }, 
 
];

export const experiences: Experience[] = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description: "Lead the frontend development team in building responsive and accessible web applications. Implemented modern React patterns and optimized performance across multiple projects. Mentored junior developers and established coding standards."
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2018 - 2021",
    description: "Developed full-stack applications using React, Node.js, and MongoDB. Collaborated with UX/UI designers to implement responsive designs. Integrated third-party APIs and services to enhance application functionality."
  },
  {
    title: "Web Developer",
    company: "Creative Web Agency",
    period: "2016 - 2018",
    description: "Created responsive websites for clients across various industries. Worked with WordPress, HTML, CSS, and JavaScript to build custom themes and plugins. Maintained existing websites and implemented SEO best practices."
  }
];

export const education: Education[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Tech University",
    period: "2014 - 2016",
    description: "Specialized in web technologies and software engineering. Completed thesis on optimizing React applications for performance."
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "State University",
    period: "2010 - 2014",
    description: "Graduated with honors. Coursework included programming fundamentals, database management, and web development."
  }
];