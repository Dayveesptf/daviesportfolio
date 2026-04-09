import { useRef, useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import mypic from './assets/my-pic.jpeg'
import './landing-page.css'
import { motion, useScroll, useTransform } from "framer-motion"

import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaInstagram } from 'react-icons/fa6'
import Footer from './Footer/Footer'

const About = () => {
  const sectionsRef = useRef([])
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  
  const addToRefs = el => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -100px 0px"
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    sectionsRef.current.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  }

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  }

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
  }

  const scaleOnHover = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  }

  return (
    <>
      <Navbar />
      
      {/* Hero Section with Parallax */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] pt-32 pb-20 md:pt-48 md:pb-36">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#c4a747]/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#c4a747]/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[#c4a747] text-sm md:text-base uppercase tracking-[0.2em] font-semibold mb-4">
              Get to know me
            </span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
              About Me
            </h1>
            <div className="w-20 h-1 bg-[#c4a747] mx-auto rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div ref={containerRef} className="bg-[#0a0a0a] overflow-hidden">
        
        {/* Profile Card Section */}
        <div 
          ref={el => sectionsRef.current[0] = el}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gradient-to-br from-[#141414] to-[#0d0d0d] rounded-3xl border border-[#c4a747]/20 shadow-2xl p-8 md:p-12 max-w-3xl mx-auto"
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#c4a747]/20 rounded-full blur-xl" />
                <img
                  src={mypic}
                  alt="David Davies Eghosa"
                  className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-[#c4a747] shadow-xl"
                />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-2 tracking-tight">
                David Davies Eghosa
              </h2>
              <p className="text-[#c4a747] text-lg md:text-xl font-medium mb-4">
                Frontend Developer & UI/UX Enthusiast
              </p>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#c4a747] to-transparent my-4" />
              <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
                Passionate about creating beautiful and functional web experiences.
                Experienced in React, Tailwind CSS, and modern frontend technologies.
              </p>
              
              <div className="flex justify-center space-x-6 mt-8">
                {[
                  { icon: FaGithub, href: "https://github.com/Dayveesptf", label: "GitHub" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/davies-david-7a461a257", label: "LinkedIn" },
                  { icon: FaInstagram, href: "https://www.instagram.com/dtech.services", label: "Instagram" }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={scaleOnHover}
                    initial="rest"
                    whileHover="hover"
                    className="text-gray-400 hover:text-[#c4a747] transition-all duration-300 text-3xl"
                    aria-label={social.label}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* About Me Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={addToRefs}
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="order-2 lg:order-1"
            >
              <div className="glass p-8 md:p-10">
                <span className="text-[#c4a747] text-sm uppercase tracking-wider font-semibold">Introduction</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6 tracking-tight">
                  About Me
                </h3>
                <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed">
                  <p>
                    My name is David Davies Eghosa, and I am a dedicated Frontend Developer specializing in JavaScript, React, and TypeScript. I am currently a 300-level Computer Science student at the University of Lagos.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code and creating digital experiences that are both visually striking and functionally seamless. My approach combines technical precision with creative problem-solving.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-wrap gap-3">
                  {["JavaScript", "React", "TypeScript", "Tailwind CSS", "Figma"].map((skill, idx) => (
                    <span key={idx} className="px-4 py-2 bg-[#c4a747]/10 border border-[#c4a747]/30 rounded-full text-[#c4a747] text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#c4a747]/20 to-transparent rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-[#141414] to-[#0d0d0d] rounded-3xl border border-[#c4a747]/20 p-8 md:p-10">
                  <div className="text-5xl mb-4 text-[#c4a747]">{"</>"}</div>
                  <h4 className="text-xl font-semibold text-white mb-3">Developer Philosophy</h4>
                  <p className="text-gray-400 leading-relaxed">
                    I focus on building applications that are not only performant but also accessible and user-centered. Every line of code should serve a purpose and enhance the overall experience.
                  </p>
                  <div className="mt-6 pt-6 border-t border-[#c4a747]/10">
                    <div className="flex justify-between text-sm">
                      <div>
                        <p className="text-gray-500">Years Experience</p>
                        <p className="text-white text-2xl font-bold">3+</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Projects Completed</p>
                        <p className="text-white text-2xl font-bold">15+</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Happy Clients</p>
                        <p className="text-white text-2xl font-bold">10+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={addToRefs}
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="order-2 lg:order-2"
            >
              <div className="glass p-8 md:p-10">
                <span className="text-[#c4a747] text-sm uppercase tracking-wider font-semibold">Professional Journey</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6 tracking-tight">
                  Work Experience
                </h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-[#c4a747] pl-4">
                    <h4 className="text-xl font-semibold text-white">Fullstack Developer</h4>
                    <p className="text-[#c4a747] text-sm mb-2">PLOTHIVE</p>
                    <p className="text-gray-400 text-base leading-relaxed">
                      Built a property listing marketplace with React, Node.js, Express.js, MongoDB and other modern technologies, delivering a seamless user experience and robust backend functionality.
                    </p>
                  </div>
                  <div className="border-l-2 border-[#c4a747] pl-4">
                    <h4 className="text-xl font-semibold text-white">Frontend Developer Intern</h4>
                    <p className="text-[#c4a747] text-sm mb-2">Zeinny Crafts | University of Lagos Afretec Network</p>
                    <p className="text-gray-400 text-base leading-relaxed">
                      Contributed to real-world projects, collaborating with cross-functional teams to deliver responsive web applications.
                    </p>
                  </div>
                  <div className="border-l-2 border-[#c4a747] pl-4">
                    <h4 className="text-xl font-semibold text-white">Frontend Developer Intern</h4>
                    <p className="text-[#c4a747] text-sm mb-2">Prodigy Infotech | January 2025</p>
                    <p className="text-gray-400 text-base leading-relaxed">
                      Gained hands-on experience building scalable applications and implementing modern frontend architectures.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              ref={addToRefs}
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="order-1 lg:order-1"
            >
              <div className="bg-gradient-to-br from-[#141414] to-[#0d0d0d] rounded-3xl border border-[#c4a747]/20 p-8 md:p-10">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl text-[#c4a747]">⚡</div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Growth Through Challenges</h4>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      My journey as a developer has been marked by both challenges and growth. Early on, I found state management, debugging, and building scalable applications quite daunting.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                      Through persistence, countless hours of practice, and leveraging resources such as online courses, documentation, and community support, I overcame these challenges. These experiences reinforced the importance of resilience, adaptability, and problem-solving.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Passion & Purpose Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={addToRefs}
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="order-2 lg:order-1"
            >
              <div className="glass p-8 md:p-10">
                <span className="text-[#c4a747] text-sm uppercase tracking-wider font-semibold">What Drives Me</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6 tracking-tight">
                  Passion & Purpose
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  I am deeply passionate about creating seamless user experiences and writing clean, efficient, and maintainable code. 
                  Every project is an opportunity to learn something new and push the boundaries of what's possible on the web.
                </p>
                <div className="mt-8 flex items-center space-x-2 text-[#c4a747]">
                  <div className="w-12 h-px bg-[#c4a747]" />
                  <span className="text-sm tracking-wide">Continuous improvement</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="order-1 lg:order-2"
            >
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-[#c4a747]/5 to-transparent rounded-3xl" />
                <div className="relative bg-gradient-to-br from-[#141414] to-[#0d0d0d] rounded-3xl border border-[#c4a747]/20 p-8 md:p-10 h-full flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-[#c4a747]/20 pb-3">
                      <span className="text-gray-400">Frontend</span>
                      <span className="text-[#c4a747] font-semibold">95%</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#c4a747]/20 pb-3">
                      <span className="text-gray-400">UI/UX Design</span>
                      <span className="text-[#c4a747] font-semibold">85%</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-[#c4a747]/20 pb-3">
                      <span className="text-gray-400">Problem Solving</span>
                      <span className="text-[#c4a747] font-semibold">90%</span>
                    </div>
                    <div className="flex items-center justify-between pb-3">
                      <span className="text-gray-400">Team Collaboration</span>
                      <span className="text-[#c4a747] font-semibold">88%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 md:pb-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gradient-to-r from-[#c4a747]/10 via-[#c4a747]/5 to-transparent rounded-3xl border border-[#c4a747]/20 p-12 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Let's Create Something Amazing
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-3 bg-[#c4a747] text-black font-semibold rounded-full hover:bg-[#d4b75c] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default About