import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}
      >
        <img
          src={service.icon}
          alt={service.title}
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>
      <div
        className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden'
        id='about'
      >
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>
              Introduction
            </h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
              👋 Hey, I’m Abishek Raj A P—a Software Engineer specializing in backend systems, AI-powered applications, and scalable cloud architectures.  
              <br />
              <br />
              Currently, I’m working at C-DAC Delhi, developing high-performance APIs & modernizing infrastructure for large-scale e-Governance services.  
              Previously, at CodeJet, I developed PhishTor, an AI-driven phishing detection tool with 95% accuracy, and a QR Code Scanner extension that improved workflow efficiency by 40%. 🚀  
              <br />
              <br />
              In Socio Hackathon 2024, I led the development of CitySync, a real-time civic services platform that processed 1,000+ requests per second and secured 2nd place.  
              <br />
              <br />
              What I Do Best:
              <ul className='list-disc ml-5'>
                <li>Backend Engineering: Java, Spring Boot, Node.js, Express.js, REST APIs, Microservices.</li>
                <li>AI & Machine Learning: TensorFlow, PyTorch, OpenCV, Azure AI, AI-driven fraud detection.</li>
                <li>Cloud & DevOps: AWS (EC2, Lambda, S3), Google Cloud, Docker, Kubernetes.</li>
                <li>Blockchain & Security: Smart contracts, fraud detection, secure banking systems.</li>
              </ul>
              <br />
              Always exploring cutting-edge technologies and solving real-world challenges through innovation.  
              Let's connect & build something impactful! 💡
            </p>

            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
              Key Areas of Focus:
              <ul className='list-disc ml-5'>
                <li>Full-Stack Development: Scalable applications using React.js, Next.js, Node.js, and MongoDB.</li>
                <li>AI & Machine Learning: AI-driven fraud detection, automation, and optimization models.</li>
                <li>Backend & Cloud Optimization: High-performance APIs, distributed computing, and microservices.</li>
                <li>Open-Source & Community: Contributor to tech communities, improving developer tools & AI solutions.</li>
              </ul>
              <br />
              Looking for collaborations, exciting challenges, and opportunities to push technology further.
            </p>

            <ButtonLink
              url='https://drive.google.com/drive/folders/1jRDaNa528SPPAPvhZQ8vgf7dt2-u12_p?usp=drive'
              text='View My Resume'
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
