import { useRef, useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import mypic from './assets/my-pic.jpeg'
import line from './assets/line.png'
import line2 from './assets/line2.png'
import './landing-page.css'
import { motion } from "framer-motion";


import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa6';
import Footer from './Footer/Footer';

const About = () => {
  const sectionsRef = useRef([]);
  
      const addToRefs = el => {
        if (el && !sectionsRef.current.includes(el)) {
          sectionsRef.current.push(el);
        }
      };
    
    useEffect(() => {
      const observerOptions = {
        threshold: 0.4,
      };
  
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
  
      sectionsRef.current.forEach(section => observer.observe(section));
  
      return () => observer.disconnect();
    }, []);


    const slideLeft = {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0, transition: { duration: 1.4 } }
    };

    const slideRight = {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0, transition: { duration: 1.4 } }
    };


  return (
    <>
    <Navbar/>
    <div className='pt-32 pb-20 md:pt-48 md:pb-36 bg-gradient-to-b from-gray-800 to-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 font-primary'>About Me</h2>
    </div>

    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6" ref={el => sectionsRef.current[0] = el}>
      <div className="bg-[#75757525] shadow-lg rounded-2xl p-8 max-w-lg text-center">
        <img
          src={mypic}
          alt="Profile"
          className="w-36 h-36 rounded-full mx-auto mb-4 border-4 border-gray-300"
        />
        <h1 className="text-2xl font-bold text-gray-300">David Davies Eghosa</h1>
        <p className="text-gray-500 mt-2">Frontend Developer & UI/UX Enthusiast</p>
        <p className="text-gray-300 mt-4">
          Passionate about creating beautiful and functional web experiences.
          Experienced in React, Tailwind CSS, and modern frontend technologies.
        </p>
        <div className="sections flex justify-center mt-4 space-x-4" ref={addToRefs}>
          <a href="https://github.com/Dayveesptf" className="text-gray-600 hover:text-black text-2xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/davies-david-7a461a257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-gray-600 hover:text-black text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/dtech.services?igsh=Y3VODJsN3oza2dy&utm_source=qr" className="text-gray-600 hover:text-black text-2xl">
            <FaInstagram/>
          </a>
        </div>
      </div>

      <div className="sections flex justify-between items-center md:px-8 w-full mt-24 text-left" ref={addToRefs}>
          <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className='w-full md:w-3/5 bg-[#8a8a8a25] rounded-2xl shadow-lg px-8 py-8 md:px-20 md:py-32'>
            <h2 className="md:text-3xl text-xl md:mt-4 font-bold text-gray-300">
              About Me
            </h2>
            <p className="text-gray-400 mt-4 md:mt-8 md:text-[18px] text-[15px] tracking-normal md:tracking-wide">
              My name is David Davies Eghosa, and I’m a dedicated Frontend Developer specializing in JavaScript, React, and TypeScript. I’m currently a 300-level Computer Science student at the University of Lagos.
            </p>
          </motion.div>
          <div className='h-full w-2/5 md:block hidden'>
            <img src={line} alt="" className='w-full h-full' />
          </div>
      </div>

      <div className="sections flex justify-between items-center md:px-8 w-full mt-4 md:mt-14 lg:mt-24 text-left" ref={addToRefs}>
          <div className='h-full w-2/5 items-center md:flex hidden'>
            <img src={line2} alt="" className='w-full h-full' />
          </div>
          <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}  className='w-full md:w-3/5 bg-[#8a8a8a25] rounded-3xl shadow-lg  px-8 py-8 md:px-20 md:py-32'>
            <h2 className="md:text-3xl text-xl md:mt-4 font-bold text-gray-300">
              Work Experience
            </h2>
            <p className="text-gray-400 mt-4 md:mt-8 md:text-[18px] text-[15px] tracking-normal md:tracking-wide">
              My passion for technology and web development has led me to exciting opportunities, including a frontend development internship at Zeinny Crafts under the University of Lagos Afretec Network. Additionally, in January 2025, I interned at Prodigy Infotech, where I worked on real-life projects, gaining hands-on experience in building scalable applications and collaborating with teams to develop innovative solutions.
            </p>
            <p className="text-gray-400 mt-4 md:mt-8 md:text-[18px] text-[15px] tracking-normal md:tracking-wide">
              My journey as a developer has been marked by both challenges and growth. Early on, I found state management, debugging, and building scalable applications quite daunting. However, through persistence, countless hours of practice, and leveraging resources such as online courses, documentation, and community support, I was able to overcome these challenges. These experiences reinforced the importance of resilience, adaptability, and problem-solving.
            </p>
          </motion.div>
      </div>

      <div className="sections flex justify-between items-center md:px-8 w-full mt-4 md:mt-14 lg:mt-24 text-left" ref={addToRefs}>
          <motion.div variants={slideLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className='w-full md:w-3/5 bg-[#8a8a8a25] rounded-3xl shadow-lg  px-8 py-8 md:px-20 md:py-32'>
            <h2 className="md:text-3xl text-xl md:mt-4 font-bold text-gray-300">
              Passion & Purpose
            </h2>
            <p className="text-gray-400 mt-4 md:mt-8 md:text-[18px] text-[15px] tracking-normal md:tracking-wide">
              I am deeply passionate about creating seamless user experiences and writing clean, efficient, and maintainable code.
            </p>
          </motion.div>
          <div className='w-2/5 h-96 md:block hidden'>
            <img src={line} alt="" className='w-full h-full'/>
          </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default About