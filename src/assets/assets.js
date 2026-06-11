import { FaLightbulb,FaMapMarkerAlt, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot,FaRocket,FaGraduationCap ,FaJs,FaPython ,FaGitAlt} from 'react-icons/fa';

import projectImg1 from '../assets/project1.png';
import projectImg2 from '../assets/project2.jpg';
import projectImg3 from '../assets/project3.jpg';
import projectImg4 from '../assets/project4.png';
import projectImg5 from '../assets/project5.jpg';
import projectImg6 from '../assets/project6.avif';
import profileImg from "./profile.jpeg";
import profile2Img from "./profile2.jpeg";

export const assets = {
  profileImg,profile2Img,
};


export const aboutInfo = [
  {
    icon: FaRocket,
    title: "Innovative",
    description:
      "Passionate about creating unique solutions and transforming ideas into impactful digital experiences."
  },
  {
    icon: FaGraduationCap,
    title: "Design Oriented",
    description:
      "Focused on crafting clean, intuitive, and visually appealing user interfaces with great user experience."
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "Committed to writing maintainable, efficient, and well-structured code following best development practices."
  },
   {
  icon: FaLightbulb,
  title: "Problem Solver",
  description:
    "Enjoy breaking down complex challenges and building practical solutions with a user-first approach."
}
];



export const skills = [
  {
    icon: FaReact,
    title: "Frontend",
    description: "Building responsive and interactive user interfaces.",
    tags: ["React", "Tailwind CSS", "HTML", "CSS"]
  },
  {
    icon: FaJs,
    title: "JavaScript",
    description: "Creating dynamic and modern web applications.",
    tags: ["JavaScript", "ES6+", "DOM"]
  },
  {
    icon: FaNodeJs,
    title: "Backend",
    description: "Developing scalable server-side applications.",
    tags: ["Node.js", "Express.js", "REST API"]
  },
  {
    icon: FaPython,
    title: "Programming",
    description: "Problem solving and application development.",
    tags: ["Python", "DSA", "OOP"]
  },
  {
    icon: FaDatabase,
    title: "Database",
    description: "Managing and designing efficient databases.",
    tags: ["MongoDB", "MySQL"]
  },
  {
    icon: FaGitAlt,
    title: "Tools",
    description: "Version control and development workflow.",
    tags: ["Git", "GitHub", "VS Code"]
  }
];



export const projects = [
{
title: "Portfolio Website",
description: "A modern personal portfolio built with React, Tailwind CSS, and Framer Motion featuring smooth animations and responsive design.",
image: projectImg1,
tech: ["React", "Tailwind CSS", "Framer Motion"],
icons: [FaReact],
demo: "#",
code: "#",
},
{
title: "Voice To-Do App",
description: "A voice-controlled task manager that uses the Web Speech API to add, delete, and manage tasks through voice commands.",
image: projectImg2,
tech: ["HTML", "CSS", "JavaScript", "Web Speech API"],
icons: [FaCode],
demo: "#",
code: "#",
},
{
title: "15 Puzzle Game",
description: "A console-based puzzle game developed in C where players arrange numbered tiles from 1 to 15 using arrow keys.",
image: projectImg3,
tech: ["C", "Pointers", "2D Arrays"],
icons: [FaCode],
demo: "#",
code: "#",
},
{
title: "Colour Catcher Game",
description: "An interactive browser game where players identify and click the correct color before the timer runs out.",
image: projectImg4,
tech: ["HTML", "CSS", "JavaScript"],
icons: [FaCode],
demo: "#",
code: "#",
},
{
title: "Amazon Clone",
description: "A beginner-friendly Amazon homepage clone built using only HTML and CSS with focus on layout and UI replication.",
image: projectImg5,
tech: ["HTML", "CSS"],
icons: [FaCode],
demo: "#",
code: "#",
}
];



export const workData = [
  {
    role: "Computer Science Student",
    company: "G.L Bajaj Institute of Technology and Management",
    duration: "Present",
    description:
      "Pursuing Computer Science while building projects and strengthening problem-solving skills.",
    color: "purple"
  },
  {
    role: "Full Stack Development Learner",
    company: "Self Learning",
    duration: "Ongoing",
    description:
      "Learning modern web technologies and building full-stack applications using React and backend frameworks.",
    color: "pink"
  },
  {
    role: "Project Builder",
    company: "Personal Projects",
    duration: "Ongoing",
    description:
      "Creating real-world projects to improve development skills and gain practical experience.",
    color: "blue"
  }
];