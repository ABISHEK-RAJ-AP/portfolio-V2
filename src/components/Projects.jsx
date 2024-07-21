import React from "react";
import Footer from './Footer';

const ProjectCard = ({ title, description, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex flex-wrap gap-2 pl-2'>
                {technologies.map((tag, index) => (
                    <p key={`${index}-${tag}`} className='text-[14px] text-blue-500'>
                        #{tag}
                    </p>
                ))}
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
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
        title: 'City Sync-Reporting App',
        description: 'City Sync-Reporting App is an integrated application developed using JavaScript, Flutter, Node.js, Express.js, and MongoDB. This app features functionalities for tourism, navigation, transportation, issue reporting, and news, streamlining urban living by consolidating essential city services and information into one user-friendly platform.',
        technologies: ['JavaScript', 'Flutter', 'Node.js', 'Express.js', 'MongoDB']
    },
    {
        title: 'AI-driven Solutions Development',
        description: 'Developed AI-driven solutions including a personalized Movie Recommendation System and a Fraud Detection System for Financial Transactions using Python, scikit-learn, TensorFlow, pandas, and NumPy. These solutions enhance management strategies by improving the accuracy and efficiency of recommendations and fraud detection.',
        technologies: ['Python', 'scikit-learn', 'TensorFlow', 'pandas', 'NumPy']
    },
    {
        title: 'LedgerLock-Blockchain Banking Website',
        description: 'LedgerLock is a secure banking website engineered using Blockchain Technology. Utilizing Ethereum, Solidity, JavaScript, React.js, Node.js, and MongoDB, this project demonstrates the potential of blockchain in financial services by providing secure and transparent banking features.',
        technologies: ['Ethereum', 'Solidity', 'JavaScript', 'React.js', 'Node.js', 'MongoDB']
    },
    {
        title: 'Real-time Chat Application: PumpChat',
        description: 'PumpChat is a real-time chat application supporting one-on-one messaging, group chats, and multimedia file sharing. Built using React.js, Node.js, Express.js, and MongoDB, this project highlights skills in handling real-time data communication and event-driven architecture.',
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB']
    },
    {
        title: 'Healthcare Management System',
        description: 'This web-based healthcare management system for clinics and hospitals includes patient registration, appointment scheduling, electronic health records (EHR), and billing. Developed using Angular.js/React.js, Node.js, MongoDB, Firebase, and RESTful APIs, it showcases the ability to handle complex data models, security requirements, and integration of third-party services.',
        technologies: ['Angular.js', 'React.js', 'Node.js', 'MongoDB', 'Firebase']
    },
    {
        title: 'Personal Finance Management App: BalCess',
        description: 'BalCess is a personal finance management app designed to help users track expenses, budget, and manage finances more effectively. Created using Flutter, Firebase, JavaScript, and HTML/CSS, it aids users in improving their financial habits.',
        technologies: ['Flutter', 'Firebase', 'JavaScript', 'HTML', 'CSS']
    },
    {
        title: 'E-commerce Platform Development: Nestoon',
        description: 'Nestoon is a full-stack e-commerce platform with user authentication, product catalog, shopping cart functionality, and secure payment gateway integration. Built using React.js, Node.js, Express.js, MongoDB, and Stripe API, this project demonstrates proficiency in building scalable and secure web applications with real-world functionalities.',
        technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API']
    }
];

export default Projects;
