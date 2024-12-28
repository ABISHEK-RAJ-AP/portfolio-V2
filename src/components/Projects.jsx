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
                    communication, and more. These projects reflect my passion for building scalable, efficient, and innovative
                    solutions.
                </p>
            </div>

            {/* Hackathon Projects Section */}
            <div className="m-12 p-12">
                <h2 className="text-3xl font-extrabold text-white">Hackathon Projects</h2>
                <div className="flex flex-wrap gap-7 justify-center items-center mt-8">
                    {hackathonProjects.map((item, index) => (
                        <ProjectCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            technologies={item.technologies}
                        />
                    ))}
                </div>
            </div>

            {/* Personal Projects Section */}
            <div className="m-12 p-12">
                <h2 className="text-3xl font-extrabold text-white">Personal Projects</h2>
                <div className="flex flex-wrap gap-7 justify-center items-center mt-8">
                    {personalProjects.map((item, index) => (
                        <ProjectCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            technologies={item.technologies}
                        />
                    ))}
                </div>
            </div>

            {/* Internship Projects Section */}
            <div className="m-12 p-12">
                <h2 className="text-3xl font-extrabold text-white">Internship Projects</h2>
                <div className="flex flex-wrap gap-7 justify-center items-center mt-8">
                    {internshipProjects.map((item, index) => (
                        <ProjectCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            technologies={item.technologies}
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

const hackathonProjects = [
    {
        title: "Smart Rural Water Supply Management System - Jalnet",
        description:
            "A comprehensive solution for rural water supply management using real-time monitoring and automated systems to ensure efficient resource allocation.",
        technologies: ["IoT", "Python", "Flask", "Machine Learning"],
    },
    {
        title: "LedgerLock – Blockchain Banking Website",
        description:
            "A blockchain-powered banking website leveraging Ethereum and Solidity for secure financial transactions.",
        technologies: ["Ethereum", "Solidity", "React.js", "Node.js", "MongoDB"],
    },
    {
        title: "LogiChain – Tech-Driven Logistics Innovation",
        description:
            "A blockchain-based logistics platform using AI, IoT, and ULIP APIs for route optimization and real-time tracking.",
        technologies: ["Blockchain", "AI", "TensorFlow", "Hyperledger Fabric", "AWS IoT"],
    },
    {
        title: "CitySync – Socio Hackathon 2024 (2nd Place)",
        description:
            "Collaborated with a cross-functional team to tackle urban service inefficiencies, designing Firebase-powered workflows capable of handling 1,000+ service requests with sub-second response times.",
        technologies: ["Firebase", "A* Pathfinding", "JavaScript"],
    },
    {
        title: "CarAura - Revolutionizing the Driving Experience",
        description:
            "A mobile app for enhanced vehicle management, real-time diagnostics, and eco-driving tips, designed for electric and traditional vehicles.",
        technologies: ["Flutter", "Google Maps API", "Energy-Sharing APIs", "Predictive Maintenance Algorithms"],
    },
];

const personalProjects = [
    {
        title: "CodeNest | Realtime Collaborative Code Editor",
        description:
            "Built a collaborative code editor enabling real-time synchronization, syntax highlighting, and room-based coding sessions, improving hackathon efficiency by 30%.",
        technologies: ["Flask-SocketIO", "WebSockets", "React.js", "Docker"],
    },
    {
        title: "FitSphere AI",
        description:
            "Built a fitness tracking app with TensorFlow-based pose estimation algorithms, achieving 90% accuracy in real-world beta tests with 60+ users.",
        technologies: ["TensorFlow", "Streamlit", "Python"],
    },
    {
        title: "SmartCPI",
        description:
            "Developed a Python-based compiler framework that reduced C++ build times by 25%, enhancing team productivity during hackathons and coursework.",
        technologies: ["Python", "LLVM", "TinyCC"],
    },
];

const internshipProjects = [
    {
        title: "PhishTor",
        description:
            "Engineered PhishTor, a phishing detection MVP with heuristic algorithms, achieving 95% detection accuracy across 1,000+ phishing scenarios. Designed prototypes for enterprise-scale deployments with integrated ML capabilities.",
        technologies: ["Heuristic Algorithms", "Machine Learning"],
    },
    {
        title: "QR Code Scanner Edge Extension",
        description:
            "Developed and launched a QR Scanner Edge extension, improving QR code handling workflows. Garnered 1,000+ downloads and increased user productivity across diverse platforms.",
        technologies: ["Node.js", "Backend API Optimizations"],
    },
];

export default Projects;
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
                    communication, and more. These projects reflect my passion for building scalable, efficient, and innovative
                    solutions.
                </p>
            </div>

            {/* Hackathon Projects Section */}
            <div className="m-12 p-12">
                <h2 className="text-3xl font-extrabold text-white">Hackathon Projects</h2>
                <div className="flex flex-wrap gap-7 justify-center items-center mt-8">
                    {hackathonProjects.map((item, index) => (
                        <ProjectCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            technologies={item.technologies}
                        />
                    ))}
                </div>
            </div>

            {/* Personal Projects Section */}
            <div className="m-12 p-12">
                <h2 className="text-3xl font-extrabold text-white">Personal Projects</h2>
                <div className="flex flex-wrap gap-7 justify-center items-center mt-8">
                    {personalProjects.map((item, index) => (
                        <ProjectCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            technologies={item.technologies}
                        />
                    ))}
                </div>
            </div>

            {/* Internship Projects Section */}
            <div className="m-12 p-12">
                <h2 className="text-3xl font-extrabold text-white">Internship Projects</h2>
                <div className="flex flex-wrap gap-7 justify-center items-center mt-8">
                    {internshipProjects.map((item, index) => (
                        <ProjectCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            technologies={item.technologies}
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

const hackathonProjects = [
    {
        title: "Smart Rural Water Supply Management System - Jalnet",
        description:
            "A comprehensive solution for rural water supply management using real-time monitoring and automated systems to ensure efficient resource allocation.",
        technologies: ["IoT", "Python", "Flask", "Machine Learning"],
    },
    {
        title: "LedgerLock – Blockchain Banking Website",
        description:
            "A blockchain-powered banking website leveraging Ethereum and Solidity for secure financial transactions.",
        technologies: ["Ethereum", "Solidity", "React.js", "Node.js", "MongoDB"],
    },
    {
        title: "LogiChain – Tech-Driven Logistics Innovation",
        description:
            "A blockchain-based logistics platform using AI, IoT, and ULIP APIs for route optimization and real-time tracking.",
        technologies: ["Blockchain", "AI", "TensorFlow", "Hyperledger Fabric", "AWS IoT"],
    },
    {
        title: "CitySync – Socio Hackathon 2024 (2nd Place)",
        description:
            "Collaborated with a cross-functional team to tackle urban service inefficiencies, designing Firebase-powered workflows capable of handling 1,000+ service requests with sub-second response times.",
        technologies: ["Firebase", "A* Pathfinding", "JavaScript"],
    },
    {
        title: "CarAura - Revolutionizing the Driving Experience",
        description:
            "A mobile app for enhanced vehicle management, real-time diagnostics, and eco-driving tips, designed for electric and traditional vehicles.",
        technologies: ["Flutter", "Google Maps API", "Energy-Sharing APIs", "Predictive Maintenance Algorithms"],
    },
];

const personalProjects = [
    {
        title: "CodeNest | Realtime Collaborative Code Editor",
        description:
            "Built a collaborative code editor enabling real-time synchronization, syntax highlighting, and room-based coding sessions, improving hackathon efficiency by 30%.",
        technologies: ["Flask-SocketIO", "WebSockets", "React.js", "Docker"],
    },
    {
        title: "FitSphere AI",
        description:
            "Built a fitness tracking app with TensorFlow-based pose estimation algorithms, achieving 90% accuracy in real-world beta tests with 60+ users.",
        technologies: ["TensorFlow", "Streamlit", "Python"],
    },
    {
        title: "SmartCPI",
        description:
            "Developed a Python-based compiler framework that reduced C++ build times by 25%, enhancing team productivity during hackathons and coursework.",
        technologies: ["Python", "LLVM", "TinyCC"],
    },
];

const internshipProjects = [
    {
        title: "PhishTor",
        description:
            "Engineered PhishTor, a phishing detection MVP with heuristic algorithms, achieving 95% detection accuracy across 1,000+ phishing scenarios. Designed prototypes for enterprise-scale deployments with integrated ML capabilities.",
        technologies: ["Heuristic Algorithms", "Machine Learning"],
    },
    {
        title: "QR Code Scanner Edge Extension",
        description:
            "Developed and launched a QR Scanner Edge extension, improving QR code handling workflows. Garnered 1,000+ downloads and increased user productivity across diverse platforms.",
        technologies: ["Node.js", "Backend API Optimizations"],
    },
];

export default Projects;
