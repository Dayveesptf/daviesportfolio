import { useRef, useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import mypic from './assets/my-pic.jpeg'
import './landing-page.css'

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa6';
import Footer from './Footer/Footer';

const About = () => {
  const sectionsRef = useRef([]); // Store references to all the sections
  
      // Add references dynamically
      const addToRefs = el => {
        if (el && !sectionsRef.current.includes(el)) {
          sectionsRef.current.push(el); // Avoid duplicate refs
        }
      };
    
    useEffect(() => {
      const observerOptions = {
        threshold: 0.4, // Trigger when 20% of the element is visible
      };
  
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Add class
            observer.unobserve(entry.target); // Stop observing
          }
        });
      }, observerOptions);
  
      // Observe each section
      sectionsRef.current.forEach(section => observer.observe(section));
  
      // Cleanup observer on component unmount
      return () => observer.disconnect();
    }, []);
  return (
    <>
    <Navbar/>
    <div className='pt-32 pb-20 md:pt-48 md:pb-36 bg-gradient-to-tr from-gray-500 to-gray-300 text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 font-primary'>About Me</h2>
    </div>

    <div className="sections flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6" ref={el => sectionsRef.current[0] = el}>
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg text-center">
        <img
          src={mypic}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-300"
        />
        <h1 className="text-2xl font-bold text-gray-800">David Davies Eghosa</h1>
        <p className="text-gray-600 mt-2">Frontend Developer & UI/UX Enthusiast</p>
        <p className="text-gray-500 mt-4">
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

      <div className="sections bg-white shadow-lg rounded-2xl p-8 md:w-[90%] md:ml-[5%] w-[98%] ml-[1%] mt-6 text-left" ref={addToRefs}>
        <h2 className="md:text-2xl text-xl md:mt-4 underline underline-offset-8 font-bold text-gray-800">About Me</h2>
        <p className="text-gray-500 mt-4 md:mt-8 md:text-lg text-sm tracking-wider">
          My name is <strong>David Davies Eghosa</strong>, and I’m a dedicated <strong>Frontend Developer</strong> specializing in <strong>JavaScript, React, and TypeScript</strong>. I’m currently a <strong>200-level Computer Science student at the University of Lagos</strong>. My passion for technology and web development has led me to exciting opportunities, including a <strong>frontend development internship at Zeinny Crafts</strong> under the <strong>University of Lagos Afretec Network</strong>. Additionally, in <strong>January 2025</strong>, I interned at <strong>Prodigy Infotech</strong>, where I worked on real-life projects, gaining hands-on experience in building scalable applications and collaborating with teams to develop innovative solutions.
        </p>
        <p className="text-gray-500 mt-4 md:text-lg text-sm tracking-wider">
          My journey as a developer has been marked by both challenges and growth. Early on, I found <strong>state management, debugging, and building scalable applications</strong> quite daunting. However, through <strong>persistence, countless hours of practice, and leveraging resources</strong> such as online courses, documentation, and community support, I was able to overcome these challenges. These experiences reinforced the importance of <strong>resilience, adaptability, and problem-solving</strong>, which now define my approach to development.
        </p>
        <p className="text-gray-500 mt-4 md:text-lg text-sm tracking-wider">
          I am deeply passionate about creating <strong>seamless user experiences</strong> and writing <strong>clean, efficient, and maintainable code</strong>. I thrive in collaborative environments and continuously seek opportunities to learn and stay up-to-date with <strong>industry trends and best practices</strong>. For me, being a developer is more than just writing code—it’s about <strong>solving problems, crafting meaningful digital experiences, and making a lasting impact in the tech community</strong>.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default About