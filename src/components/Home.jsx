import React, { useEffect, useRef, useState } from 'react';
import { name } from '../constants';
import Footer from './Footer';

const Home = () => {
  const ref = useRef(0);
  const [text, setText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current < name.length) {
        ref.current++;
        setText((prev) => prev + name[ref.current - 1]);
      }
    }, 150); // Faster typing effect for better engagement
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='area relative z-0 bg-black w-screen h-screen'>
      <ul className='circles'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div className='hero relative h-full flex flex-col justify-center items-center text-white px-6 text-center' id='hero'>
        <div className='w-full max-w-3xl'>
          <h1 className='text-5xl sm:text-7xl font-extrabold mt-4'>
            Hi, I'm <span className='text-yellow-200 font-extrabold'>{text}</span>
          </h1>
          <p className='mt-6 text-xl leading-relaxed max-w-2xl mx-auto'>
            Passionate about learning, building scalable web applications, dashboards, and AI-driven solutions.
          </p>
          <p className='mt-3 text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto'>
            Currently exploring new technologies and open-source projects to expand my knowledge.
          </p>
        </div>

        {/* Buttons Section */}
        <div className='mt-10 flex flex-wrap justify-center gap-6'>
          <a
            href='/about'
            className='bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transition duration-300'
          >
            Explore My Work
          </a>
          <a
            href='https://www.linkedin.com/in/apabishekraj/'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300'
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
