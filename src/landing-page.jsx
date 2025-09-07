import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './landing-page.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import img1 from './assets/blog.png'
import img12 from './assets/retail.png'
import img13 from './assets/contractly.png'
import { FaHtml5, FaReact } from 'react-icons/fa6'
import { RiTailwindCssLine } from 'react-icons/ri'
import { CgVercel } from 'react-icons/cg'
import './index.css'


function LandingPage() {

  const sectionsRef = useRef([]);

    const addToRefs = el => {
      if (el && !sectionsRef.current.includes(el)) {
        sectionsRef.current.push(el);
      }
    };
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
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
  
  

  return (
    <>
      <Navbar />
      <div className='bg-gradient-to-tr from-gray-400 to-gray-200 slide-top1 sections flex flex-col md:w-[100%] md:px-[5%] mt-16 items-center h-[80vh] md:h-[100vh] md:py-24 lg:py-10 z-20' ref={el => sectionsRef.current[0] = el}>
        <p className='mt-36 md:mt-24 text-white tracking-widest'>DYNAMIC WEB MAGIC</p>
        <h1 className='mt-6 text-center lg:mt-10 text-4xl md:text-6xl w-[94%] lg:w-[70%]'>Transforming Concepts into seamless <span className='text-gray-800'>User Experiences</span></h1>
        <p className='md:text-lg lg:text-xl lg:mt-10 mx-auto text-center mt-6 w-[90%] text-white'>Hi! I&apos;m Davies David, a Frontend Developer based in Nigeria</p>
        <Link to="./projects" className='mt-6 hover:px-7 lg:mt-10 hover:py-3 bg-gradient-to-tr from-gray-400 hover:from-gray-700 hover:to-gray-400 to-gray-700 px-6 text-base py-2 rounded-lg transition-all duration-200'>See my work</Link>
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
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-11/12 gap-x-5 md:gap-x-1 lg:gap-x-5 gap-y-2 lg:w-5/6 md:w-full mx-auto text-center mt-10 justify-around items-center'>
              <div className='bg-gradient-to-tr from-gray-400 to-gray-300 py-2 px-4 rounded-xl text-[11px]'>HTML</div>
              <div className='bg-gradient-to-tr from-gray-400 to-gray-300 py-2 px-4 rounded-xl text-[11px]'>CSS</div>
              <div className='bg-gradient-to-tr from-gray-400 to-gray-300 py-2 px-4 rounded-xl text-[11px]'>JavaScript</div>
              <div className='bg-gradient-to-tr from-gray-400 to-gray-300 py-2 px-4 rounded-xl text-[11px]'>React</div>
              <div className='bg-gradient-to-tr from-gray-400 to-gray-300 py-2 px-4 rounded-xl text-[11px]'>Next.js</div>
              <div className='bg-gradient-to-tr from-gray-400 to-gray-300 py-2 px-4 rounded-xl text-[11px]'>TypeScript</div>
              <div className='bg-gradient-to-tr from-gray-400 to-gray-300 py-2 px-4 rounded-xl text-[11px]'>Node.js</div>
              <div className='bg-gradient-to-tr from-gray-400 to-gray-300 py-2 px-4 rounded-xl text-[11px]'>Express.js</div>
              <div className='bg-gradient-to-tr from-gray-400 to-gray-300 py-2 px-4 rounded-xl text-[11px]'>ShadCN</div>
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

      <div className='py-6 gap-3 lg:gap-20 sections grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] ml-[5%] md:w-[80%] md:ml-[10%] lg:w-[90%] lg:ml-[5%]' ref={addToRefs}>
        <div className='group relative project-card p-8 overflow-hidden'>
          <div className='relative mb-6 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500'>
            <img src={img1} alt="" className='w-full h-48 object-cover'/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <h1 className='text-2xl mb-4 font-heading font-bold text-foreground'>Blog Website</h1>
          <p className='text-sm leading-relaxed text-muted-foreground'>Explore this blog website created with react, using local data to display information</p>
          <div className='flex mt-7 justify-between w-[100%] px-7 mx-auto items-center'>
            <div className='text-xl text-gray-800 flex w-[40%] justify-between'>
              <FaReact/>
              <RiTailwindCssLine/>
              <FaHtml5/>
              <CgVercel/>
            </div>
            <a href="https://blog-website-dd.vercel.app/" className=' text-black px-3 py-2 rounded-sm bg-gray-200 hover:bg-gray-600 hover:text-white border-gray-300 transition border'>Check it out</a>
          </div>
        </div>
        <div className='group relative project-card p-8 overflow-hidden'>
          <div className='relative mb-6 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500'>
            <img src={img13} alt="" className='w-full h-48 object-cover'/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <h1 className='text-2xl mb-4 font-heading font-bold text-foreground'>Contractly</h1>
          <p className='text-sm leading-relaxed text-muted-foreground'>Upload your contract documents and get instant AI-powered analysis for key terms, risks, and insights.</p>
          <div className='flex mt-7 justify-between w-[100%] mx-auto px-7 items-center'>
            <div className='text-xl text-gray-800 flex w-[40%] justify-between'>
              <FaReact/>
              <RiTailwindCssLine/>
              <FaHtml5/>
              <CgVercel/>
            </div>
            <a href="https://contractly-kappa.vercel.app/" className=' text-black px-3 py-2 rounded-sm bg-gray-200 hover:bg-gray-600 hover:text-white border-gray-300 transition border'>Check it out</a>
          </div>
        </div>
        <div className='group relative project-card p-8 overflow-hidden'>
          <div className='relative mb-6 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500'>
            <img src={img12} alt="" className='w-full h-48 object-cover'/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <h1 className='text-2xl mb-4 font-heading font-bold text-foreground'>Retail-Radar</h1>
          <p className='text-sm leading-relaxed text-muted-foreground'>This project identifies retail store clusters and areas of high store density within a city, providing valuable insights for entrepreneurs, investors, and business owners. </p>
          <div className='flex mt-7 justify-between w-[100%] mx-auto px-7 items-center'>
            <div className='text-xl text-gray-800 flex w-[40%] justify-between'>
              <FaReact/>
              <FaHtml5/>
              <CgVercel/>
            </div>
            <a href="https://retail-radar-dd.vercel.app/" className=' text-black px-3 py-2 rounded-sm bg-gray-200 hover:bg-gray-600 hover:text-white border-gray-300 transition border'>Check it out</a>
          </div>
        </div>
      </div>

      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-24 md:mt-40 mb-6 md:mb-12 w-5/6 mx-auto'>My <span className='text-gray-500'>work experience</span></h1>

      <div className='slider sections flex flex-col justify-center gap-10 md:flex-row gap-y-4 items-center z-20 w-[80%] ml-[10%] bg-white pb-20' ref={addToRefs}>
        <div className='md:w-[30%] md:py-20 bg-gray-400 rounded-xl w-[100%] shadow-bottom-only shadow-gray-600 border-solid border-2 py-6 text-center'>
          <h1 className='text-xs md:text-sm underline underline-offset-2'>Frontend Engineer Intern</h1>
          <h1 className='mt-2 md:text-xl md:mt-5 text-lg tracking-normal font-bold'>Zeinny Crafts</h1>
          <hr className='mt-6 w-[20%] ml-[40%]'/>
          <p className='mt-3 md:text-sm w-5/6 text-[12px] mx-auto'>Assisted in the development of an eCommerce web platform using TypeScript, enhancing interactivity</p>
          <hr className='mt-6 w-[20%] ml-[40%]'/>
        </div>
        <div className='md:w-[30%] md:py-20 bg-gray-400 rounded-xl w-[100%] shadow-bottom-only shadow-gray-600 border-solid border-2 py-6 text-center'>
          <h1 className='text-xs md:text-sm underline underline-offset-2'>Frontend Engineer Intern</h1>
          <h1 className='mt-2 md:text-xl md:mt-5 text-lg tracking-normal font-bold'>Prodigy InfoTech</h1>
          <hr className='mt-6 w-[20%] ml-[40%]'/>
          <p className='mt-3 md:text-sm text-[12px] w-5/6 mx-auto'>Completed assigned tasks such as a landing page, weather app and a stopwatch, using React.js</p>
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
