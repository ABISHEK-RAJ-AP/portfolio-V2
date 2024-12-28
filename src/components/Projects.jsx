import React from "react";
import Footer from "./Footer";

const ProjectCard = ({ title, description, technologies }) => {
    return (
        <div className="max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transition transform hover:-translate-y-2 hover:shadow-lg duration-300">
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
                        {title}
                    </h5>
                </a>
                <p className="mt-3 font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">
                    {description}
                </p>
            </div>
            <div className="m-2 sm:m-4 lg:m-6 flex flex-wrap gap-2 pl-2">
                {technologies.map((tag, index) => (
                    <span
                        key={`${index}-${tag}`}
                        className="text-[14px] text-blue-500 bg-gray-700 px-2 py-1 rounded-full"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black min-h-screen">
            <div className="text-center py-16">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
                    Projects Showcase
                </h1>
                <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                    Explore my collection of projects that demonstrate my skills
                    in full-stack development, AI, blockchain, real-time
                    communication, and e-commerce. These projects reflect my
                    passion for building scalable, efficient, and innovative
                    solutions.
                </p>
            </div>

            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        technologies={item.technologies}
                    />
                ))}
            </div>

            <Footer />
        </div>
    );
};

export const project = [
    {
        title: "Jalnet - Smart Rural Water Supply Management",
        description:
            "A smart system for managing rural water supply, integrating IoT and AI for real-time monitoring and predictive maintenance.",
        technologies: ["IoT", "AI", "Python", "TensorFlow", "Flask"],
    },
    {
        title: "PhishTor - Phishing Detection MVP",
        description:
            "Engineered PhishTor, a phishing detection MVP with heuristic algorithms, achieving 95% detection accuracy across 1,000+ phishing scenarios.",
        technologies: ["Python", "Machine Learning", "Flask", "TensorFlow", "Heuristic Algorithms"],
    },
    {
        title: "QR Scanner Edge Extension",
        description:
            "Developed and launched a QR Scanner Edge extension, improving QR code handling workflows. Garnered 1,000+ downloads.",
        technologies: ["JavaScript", "Chrome Extension", "Node.js", "React.js"],
    },
    {
        title: "City Sync-Reporting App",
        description:
            "An integrated app offering tourism, navigation, transportation, issue reporting, and news services. Built with JavaScript, Flutter, Node.js, and MongoDB, it streamlines urban living by consolidating city services.",
        technologies: ["JavaScript", "Flutter", "Node.js", "Express.js", "MongoDB"],
    },
    {
        title: "AI-driven Solutions Development",
        description:
            "Developed a personalized Movie Recommendation System and a Fraud Detection System using Python, scikit-learn, TensorFlow, and NumPy.",
        technologies: ["Python", "scikit-learn", "TensorFlow", "pandas", "NumPy"],
    },
    {
        title: "LedgerLock-Blockchain Banking Website",
        description:
            "A secure banking website leveraging Ethereum, Solidity, React.js, and Node.js, demonstrating blockchain’s potential in finance.",
        technologies: ["Ethereum", "Solidity", "JavaScript", "React.js", "Node.js", "MongoDB"],
    },
    {
        title: "SmartCPI",
        description:
            "Developed a Python-based compiler framework that reduced C++ build times by 25%, enhancing team productivity during hackathons and coursework.",
        technologies: ["Python", "LLVM", "TinyCC"],
    },
    {
        title: "FitSphere AI",
        description:
            "Built a fitness tracking app with TensorFlow-based pose estimation algorithms, achieving 90% accuracy in real-world beta tests with 60+ users.",
        technologies: ["TensorFlow", "Streamlit", "Python"],
    },
    {
        title: "CodeNest | Realtime Collaborative Code Editor",
        description:
            "Built a collaborative code editor enabling real-time synchronization, syntax highlighting, and room-based coding sessions, improving hackathon efficiency by 30%.",
        technologies: ["Flask-SocketIO", "WebSockets", "React.js", "Docker"],
    },
    {
        title: "CarAura - Revolutionizing the Driving Experience",
        description: 
            "CarAura enhances vehicle management with real-time diagnostics, predictive maintenance, and eco-driving features for electric vehicles (EVs).",
        technologies: ["Flutter", "Google Maps API", "Energy-Sharing APIs", "Predictive Maintenance Algorithms"],
    },
];

export default Projects;
