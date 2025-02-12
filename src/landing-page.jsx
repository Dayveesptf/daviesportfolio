import { useRef, useEffect } from 'react'

import './landing-page.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import img1 from './assets/blog.png'
import img2 from './assets/landing-page.png'
import img3 from './assets/multi-step.png'
import { FaHtml5, FaReact } from 'react-icons/fa6'
import { RiTailwindCssLine } from 'react-icons/ri'
import { CgVercel } from 'react-icons/cg'


function LandingPage() {

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
      <Navbar />
      <div className='bg-gradient-to-tr from-gray-400 to-gray-200 slide-top1 sections flex flex-col md:w-[100%] md:px-[5%] mt-16 items-center h-[80vh] md:h-[100vh] md:py-24 lg:py-10 z-20' ref={el => sectionsRef.current[0] = el}>
        <p className='mt-36 md:mt-24 text-white tracking-widest'>DYNAMIC WEB MAGIC</p>
        <h1 className='mt-6 text-center lg:mt-10 text-4xl md:text-6xl w-[94%] lg:w-[70%]'>Transforming Concepts into seamless <span className='text-gray-800'>User Experiences</span></h1>
        <p className='md:text-lg lg:text-xl lg:mt-10 mx-auto text-center mt-6 w-[90%] text-white'>Hi! I&apos;m Davies David, a Frontend Developer based in Nigeria</p>
        <button className='mt-6 hover:px-7 lg:mt-10 hover:py-3 bg-gradient-to-tr from-gray-400 hover:from-gray-700 hover:to-gray-400 to-gray-700 px-6 text-base py-2 rounded-lg transition-all duration-200'>See my work</button>
      </div>
      <br />
      <br />
      <div className='sections pb-10 md:mt-0 flex flex-col md:flex-row z-1 w-[90%] ml-[5%] justify-between' ref={addToRefs}>
        <div className='rounded-lg fix-img1 w-full md:w-[55%] py-28 md:py-28 lg:py-40'>
          <h1 className='text-white font-bold lg:text-3xl md:text-2xl md:w-[80%] lg:mt-48 md:mt-40 text-xl  w-[55%] ml-[5%]'>I prioritize <span className='text-gray-500'>collaboration</span> and <span className='text-gray-500'>communication</span> with fellow developers</h1>
        </div>
        <div className='overflow-hidden w-full md:w-[44%] items-center my-auto flex flex-col mt-4 md:mt-0 lg:mt-4'>
          <div className='fix-img2 rounded-lg w-[100%] py-20 items-center'>
            <h1 className='text-white font-bold lg:text-2xl md:text-2xl text-xl w-[80%] ml-[5%]'>I&apos;m <span className='text-gray-500'>flexible</span> with <span className='text-gray-600'>communication</span> at different times</h1>
          </div>
          <div className='bg-gradient-to-tr from-black to-gray-500 w-full items-center py-16 rounded-lg mt-4 lg:mt-10'>
            <p  className='text-white font-light lg:text-sm md:text-sm text-sm w-[80%] ml-[5%]'>I constantly try to <span className='text-gray-500'>improve</span></p>
            <h1 className='text-gray-100 font-bold lg:text-2xl md:text-2xl text-xl w-[80%] ml-[5%]'>My tech stack</h1>
            <div className='flex mt-10 justify-around items-center'>
              <div className='bg-gradient-to-tr from-gray-400 to-gray-300 py-2 px-4 rounded-xl text-[9px]'>HTML</div>
              <div className='bg-gradient-to-tr from-gray-400 to-gray-300 py-2 px-4 rounded-xl text-[9px]'>CSS</div>
              <div className='bg-gradient-to-tr from-gray-400 to-gray-300 py-2 px-4 rounded-xl text-[9px]'>JavaScript</div>
              <div className='bg-gradient-to-tr from-gray-400 to-gray-300 py-2 px-4 rounded-xl text-[9px]'>React</div>
              <div className='bg-gradient-to-tr from-gray-400 to-gray-300 py-2 px-4 rounded-xl text-[9px]'>TypeScript</div>
            </div>
          </div>
        </div>
      </div>
      <div className='sections mt-[-5%] md:mt-[-4%] lg:mt-[-2%] flex flex-col justify-between gap-y-4 md:gap-y-0 md:flex-row w-[90%] ml-[5%]' ref={addToRefs}>
        <div className='rounded-lg w-full md:w-[45%] text-center items-center h-32 lg:h-44 lg:pt-16 pt-8 md:mt-0 bg-gradient-to-b from-black to-gray-700'>
          <h1 className='w-4/6 mx-auto text-lg text-white font-bold'>Tech enthusiast with a passion for development</h1>
        </div>
        <div className='w-full md:w-[54%] text-center items-center rounded-xl py-20 bg-gradient-to-b from-gray-700 to-black'>
          <h1 className='w-4/6 mx-auto text-lg text-white font-bold mb-10'>Do you want to start a project together?</h1>
          <a className='hover:px-7 hover:py-3 bg-gradient-to-tr from-gray-400 hover:from-gray-700 hover:to-gray-400 to-gray-700 px-6 text-base py-2 rounded-lg transition-all duration-200' href="mailto:dtechservices2@gmail.com">Contact Me</a>
        </div>
      </div>

      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-24 md:mt-40 mb-6 md:mb-12 w-5/6 mx-auto'>A small selection of <span className='text-gray-500'>recent projects</span></h1>

      <div className='py-6 gap-3 sections grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[96%] ml-[2%]' ref={addToRefs}>
        <div className='bg-gradient-to-tr from-gray-900 to-black py-7 rounded-lg'>
          <div className='w-[90%] ml-[5%] rounded-lg'>
            <img src={img1} alt="" className='w-full rounded-lg'/>
          </div>
          <h1 className='pl-7 mt-5 text-3xl text-white font-bold'>Blog Website</h1>
          <p className='pl-7 mt-7 pr-5 text-gray-400'>Explore this blog website created with react, using local data to display information</p>
          <div className='flex mt-7 justify-between w-[90%] ml-[5%]'>
            <div className='text-3xl text-gray-100 flex w-[40%] justify-between'>
              <FaReact/>
              <RiTailwindCssLine/>
              <FaHtml5/>
              <CgVercel/>
            </div>
            <a href="https://blog-website-dd.vercel.app/" className='text-lg text-gray-700 underline underline-offset-4 hover:text-white'>Check it out</a>
          </div>
        </div>
        <div className='bg-gradient-to-tr from-gray-500 to-gray-800 py-7 rounded-lg'>
          <div className='w-[90%] ml-[5%] rounded-lg'>
            <img src={img2} alt="" className='w-full rounded-lg'/>
          </div>
          <h1 className='pl-7 mt-5 text-3xl text-white font-bold'>Landing Page</h1>
          <p className='pl-7 mt-7 pr-5 text-gray-400'>Explore this basic landing page created with react with basic animations</p>
          <div className='flex mt-7 justify-between w-[90%] ml-[5%]'>
            <div className='text-3xl text-gray-100 flex w-[40%] justify-between'>
              <FaReact/>
              <RiTailwindCssLine/>
              <FaHtml5/>
              <CgVercel/>
            </div>
            <a href="https://prodigy-wd-01-landingpage.vercel.app/" className='text-lg text-gray-900 underline underline-offset-4 hover:text-white'>Check it out</a>
          </div>
        </div>
        <div className='bg-gradient-to-tr from-gray-900 to-black py-7 rounded-lg'>
          <div className='w-[90%] ml-[5%] rounded-lg'>
            <img src={img3} alt="" className='w-full rounded-lg'/>
          </div>
          <h1 className='pl-7 mt-5 text-3xl text-white font-bold'>Multi Step Form</h1>
          <p className='pl-7 mt-7 pr-5 text-gray-400'>Explore this blog website created with react, managing states and inputs taken from users</p>
          <div className='flex mt-7 justify-between w-[90%] ml-[5%]'>
            <div className='text-3xl text-gray-100 flex w-[40%] justify-between'>
              <FaReact/>
              <FaHtml5/>
              <CgVercel/>
            </div>
            <a href="https://multi-step-form-nu-green.vercel.app/" className='text-lg text-gray-700 underline underline-offset-4 hover:text-white'>Check it out</a>
          </div>
        </div>
      </div>

      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-24 md:mt-40 mb-6 md:mb-12 w-5/6 mx-auto'>My <span className='text-gray-500'>work experience</span></h1>

      <div className='slider sections flex flex-col justify-between md:flex-row gap-y-4 items-center z-20 w-[80%] ml-[10%] bg-white pb-20' ref={addToRefs}>
        <div className='md:w-[48%] md:py-20 bg-gray-400 rounded-xl w-[100%] shadow-bottom-only shadow-gray-600 border-solid border-2 py-6 text-center'>
          <h1 className='text-sm md:text-base underline underline-offset-2'>Frontend Engineer Intern</h1>
          <h1 className='mt-2 md:text-3xl md:mt-5 text-2xl tracking-wider font-bold'>Zeinny Crafts</h1>
          <hr className='mt-6 w-[20%] ml-[40%]'/>
          <p className='mt-3 md:text-lg w-5/6 mx-auto'>Assisted in the development of an eCommerce web platform using TypeScript, enhancing interactivity</p>
          <hr className='mt-6 w-[20%] ml-[40%]'/>
        </div>
        <div className='md:w-[48%] md:py-20 bg-gray-400 rounded-xl w-[100%] shadow-bottom-only shadow-gray-600 border-solid border-2 py-6 text-center'>
          <h1 className='text-sm md:text-base underline underline-offset-2'>Frontend Engineer Intern</h1>
          <h1 className='mt-2 md:text-3xl md:mt-5 text-2xl tracking-wider font-bold'>Prodigy InfoTech</h1>
          <hr className='mt-6 w-[20%] ml-[40%]'/>
          <p className='mt-3 md:text-lg w-5/6 mx-auto'>Completed assigned tasks such as a landing page, weather app and a stopwatch, using React.js</p>
          <hr className='mt-6 w-[20%] ml-[40%]'/>
        </div>
      </div>

      <div className='text-center  sections py-16 md:py-28 bg-black' ref={addToRefs}>
        <h1 className='text-white text-center md:text-3xl lg:text-4xl text-2xl'>Ready to take <span className='text-gray-500'>your</span> digital <br />presence to the next level?</h1>
        <p className='text-center text-gray-600 text-sm md:text-lg mt-6 w-5/6 mx-auto mb-10'>Reach out to me today and let&apos;s discuss how I can help you achieve your goals</p>
        <a href="mailto:dtechservices2@gmail.com" className='md:text-xl bg-gradient-to-tr from-gray-400 hover:from-gray-800 hover:to-gray-400 to-gray-800 py-2 px-4 border-2 border-white rounded-lg'>Contact Me Now</a>
      </div>
      <Footer />
    </>
  )
}

export default LandingPage
