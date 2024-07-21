import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
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
  <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
    <div className='flex flex-col justify-around'>
      <div className='sm:px-16 px-2'>
        <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
        <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
          👨‍💻 Hi, I'm Abishek Raj A P, an aspiring software engineer with a strong foundation in full-stack development and AI-driven solutions. Currently pursuing my B.Tech in Information Technology at IFET College of Engineering, I specialize in creating dynamic and user-friendly web applications using technologies like HTML, CSS, JavaScript, React.js, Node.js, and MongoDB. 🚀
          <br></br>
          <br></br>

          ✨ I am passionate about exploring new technologies and contributing to open-source projects. My GitHub profile showcases my projects and ongoing learning journey, reflecting my dedication to software development. You can explore my work and contributions on <a className='text-purple-300 hover:text-purple-400 duration-300' href='https://github.com/ABISHEKBALANCE' target='_blank'>GitHub</a>. 
<br></br>
<br></br>
          🌟 Additionally, you can connect with me on <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/apabishekraj/' target='_blank'>LinkedIn</a> to stay updated on my professional endeavors and network with me.
        </p>

        <ButtonLink
          url='https://drive.google.com/drive/folders/1jRDaNa528SPPAPvhZQ8vgf7dt2-u12_p?usp=drive_link'
          text='View Resume →'
          padding={`p-3`}
        />
      </div>

          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;