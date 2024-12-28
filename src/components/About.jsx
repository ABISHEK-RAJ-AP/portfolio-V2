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
          alt={service.title}  // Improved accessibility by using title as alt text
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
              👨‍💻 Hi, I'm **Abishek Raj A P**, a final-year B.Tech student in **Information Technology** with a strong passion for **full-stack development**, **machine learning**, and **tech-driven innovation**. Currently, I am interning as a Software Engineer at **CodeJet**, contributing to impactful projects like **PhishTor** (a phishing detection MVP) and **CitySync** (a municipal services app). 🚀
              <br />
              <br />
              ✨ My technical expertise spans:
              <ul className='list-disc ml-5'>
                <li>Building scalable, high-performance web applications with the **MERN stack**.</li>
                <li>Developing machine learning models for predictive analytics and automation.</li>
                <li>Optimizing backend workflows and improving system performance using **Node.js** and **Express.js**.</li>
                <li>Contributing to open-source projects and collaborating on community-driven tech solutions.</li>
              </ul>
              <br />
              🌱 I am committed to lifelong learning and constantly expanding my knowledge in **full-stack development**, **AI**, and **machine learning** to stay ahead of emerging trends and technologies.
              <br />
              <br />
              🌟 You can explore my contributions on **GitHub** and connect with me on **LinkedIn** for potential collaborations. 💡
            </p>

            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
              📌 Key Areas of Focus:
              <ul className='list-disc ml-5'>
                <li>**Full-Stack Development:** Expertise in **React.js**, **Node.js**, and **MongoDB** for building scalable applications.</li>
                <li>**Machine Learning & AI:** Designing and deploying predictive models and automation systems using **TensorFlow**.</li>
                <li>**Backend Optimization:** Leveraging **Node.js** and **Express.js** for improved performance and scalability.</li>
                <li>**Open-Source Contribution:** Actively engaging in the open-source community to improve software tools and libraries.</li>
              </ul>
              <br />
              🌱 I'm always looking for opportunities to collaborate on innovative projects that challenge my skills and bring new solutions to life.
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
