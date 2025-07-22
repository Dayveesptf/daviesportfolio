import { useRef, useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import img10 from './assets/drum.png'
import img1 from './assets/blog.png'
import img2 from './assets/landing-page.png'
import img3 from './assets/multi-step.png'
import img4 from './assets/tic-tac-toe.png'
import img5 from './assets/weather-app.png'
import img6 from './assets/stopwatch.png'
import img7 from './assets/list.png'
import img8 from './assets/signup.png'
import img9 from './assets/simon-game.png'
import img11 from './assets/health-ai.png'
import { FaCss3, FaHtml5, FaReact } from 'react-icons/fa6'
import { RiJavascriptLine, RiTailwindCssLine } from 'react-icons/ri'
import { CgVercel } from 'react-icons/cg'
import Footer from './Footer/Footer'


const Projects = () => {
    const sectionsRef = useRef([]);

    const addToRefs = el => {
      if (el && !sectionsRef.current.includes(el)) {
        sectionsRef.current.push(el);
      }
    };
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
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
    <Navbar/>
    <div className='pt-32 pb-20 md:pt-48 md:pb-36 bg-gradient-to-tr from-gray-500 to-gray-300 text-center text-white px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 font-primary'>Projects</h2>
    </div>
    <div className='py-6 gap-3 lg:gap-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[70%] ml-[15%] md:w-[80%] md:ml-[10%] lg:w-[90%] lg:ml-[5%]' ref={addToRefs}>
            <div className='bg-white hover:bg-gray-100 py-12 rounded-lg hover:border hover:border-gray-500 shadow-lg shadow-gray-900'>
              <div className='w-[90%] ml-[5%] rounded-lg'>
                <img src={img1} alt="" className='w-full rounded-lg image border-2 border-gray-300'/>
              </div>
              <h1 className='pl-7 mt-5 text-2xl text-gray-600 font-bold'>Blog Website</h1>
              <p className='pl-7 mt-7 pr-5 text-sm text-gray-400'>Explore this blog website created with react, using local data to display information</p>
              <div className='flex mt-7 justify-between w-[100%] px-7 mx-auto'>
                <div className='text-xl text-gray-800 flex w-[40%] justify-between'>
                  <FaReact/>
                  <RiTailwindCssLine/>
                  <FaHtml5/>
                  <CgVercel/>
                </div>
                <a href="https://blog-website-dd.vercel.app/" className='text-sm text-gray-700 underline underline-offset-4 hover:text-white'>Check it out</a>
              </div>
            </div>

            <div className='bg-white hover:bg-gray-100 py-12 rounded-lg hover:border hover:border-gray-500 shadow-lg shadow-gray-900'>
              <div className='w-[90%] ml-[5%] rounded-lg'>
                <img src={img11} alt="" className='w-full rounded-lg image border-2 border-gray-300'/>
              </div>
              <h1 className='pl-7 mt-5 text-2xl text-gray-600 font-bold'>Titan Health AI</h1>
              <p className='pl-7 mt-7 text-sm pr-5 text-gray-400'>AI-powered medical chatbot that provides concise, health-focused answers and doctor referral support.</p>
              <div className='flex mt-7 justify-between w-[100%] px-7 mx-auto'>
                <div className='text-xl text-gray-800 flex w-[40%] justify-between'>
                  <FaReact/>
                  <FaHtml5/>
                  <CgVercel/>
                </div>
                <a href="https://titan-9njp4xlfy-davies-projects-f9479dfc.vercel.app/" className='text-sm text-gray-700 underline underline-offset-4 hover:text-white'>Check it out</a>
              </div>
            </div>

            <div className='bg-white hover:bg-gray-100 py-12 rounded-lg hover:border hover:border-gray-500 shadow-lg shadow-gray-900'>
              <div className='w-[90%] ml-[5%] rounded-lg'>
                <img src={img2} alt="" className='w-full rounded-lg image border-2 border-gray-300'/>
              </div>
              <h1 className='pl-7 mt-5 text-2xl text-gray-600 font-bold'>Landing Page</h1>
              <p className='pl-7 mt-7 text-sm pr-5 text-gray-400'>Explore this basic landing page created with react with basic animations</p>
              <div className='flex mt-7 justify-between w-[100%] px-7 mx-auto'>
                <div className='text-xl text-gray-800 flex w-[40%] justify-between'>
                  <FaReact/>
                  <RiTailwindCssLine/>
                  <FaHtml5/>
                  <CgVercel/>
                </div>
                <a href="https://prodigy-wd-01-landingpage.vercel.app/" className='text-sm text-gray-900 underline underline-offset-4 hover:text-white'>Check it out</a>
              </div>
            </div>
            <div className='bg-white hover:bg-gray-100 py-12 rounded-lg hover:border hover:border-gray-500 shadow-lg shadow-gray-900'>
              <div className='w-[90%] ml-[5%] rounded-lg'>
                <img src={img3} alt="" className='w-full rounded-lg image border-2 border-gray-300'/>
              </div>
              <h1 className='pl-7 mt-5 text-2xl text-gray-600 font-bold'>Multi Step Form</h1>
              <p className='pl-7 mt-7 pr-5 text-sm text-gray-400'>Explore this blog website created with react, managing states and inputs taken from users</p>
              <div className='flex mt-7 justify-between w-[100%] px-7 mx-auto'>
                <div className='text-xl text-gray-800 flex w-[40%] justify-between'>
                  <FaReact/>
                  <FaHtml5/>
                  <CgVercel/>
                </div>
                <a href="https://multi-step-form-nu-green.vercel.app/" className='text-sm text-gray-700 underline underline-offset-4 hover:text-white'>Check it out</a>
              </div>
            </div>
            <div className='bg-white hover:bg-gray-100 py-12 rounded-lg hover:border hover:border-gray-500 shadow-lg shadow-gray-900'>
              <div className='w-[90%] ml-[5%] rounded-lg'>
                <img src={img4} alt="" className='w-full rounded-lg image border-2 border-gray-300'/>
              </div>
              <h1 className='pl-7 mt-5 text-2xl text-gray-600 font-bold'>Tic-Tac-Toe</h1>
              <p className='pl-7 mt-7 pr-5 text-sm text-gray-400'>Explore this game of X and O created with react, which could be played between two users of against computer</p>
              <div className='flex mt-7 justify-between w-[100%] px-7 mx-auto'>
                <div className='text-xl text-gray-800 flex w-[40%] justify-between'>
                  <FaReact/>
                  <FaHtml5/>
                  <CgVercel/>
                </div>
                <a href="https://prodigy-wd-03-tictactoe-one.vercel.app/" className='text-sm text-gray-700 underline underline-offset-4 hover:text-white'>Check it out</a>
              </div>
            </div>
            <div className='bg-white hover:bg-gray-100 py-12 rounded-lg hover:border hover:border-gray-500 shadow-lg shadow-gray-900'>
              <div className='w-[90%] ml-[5%] rounded-lg'>
                <img src={img5} alt="" className='w-full rounded-lg image border-2 border-gray-300'/>
              </div>
              <h1 className='pl-7 mt-5 text-2xl text-gray-600 font-bold'>Weather App</h1>
              <p className='pl-7 mt-7 pr-5 text-sm text-gray-400'>Explore this weather created with react, managing states and inputs taken from users to display weather details of cities around the world</p>
              <div className='flex mt-7 justify-between w-[100%] px-7 mx-auto'>
                <div className='text-xl text-gray-800 flex w-[40%] justify-between'>
                  <FaReact/>
                  <RiTailwindCssLine/>
                  <FaHtml5/>
                  <CgVercel/>
                </div>
                <a href="https://getweathernow-nine.vercel.app/" className='text-sm text-gray-700 underline underline-offset-4 hover:text-white'>Check it out</a>
              </div>
            </div>
            <div className='bg-white hover:bg-gray-100 py-12 rounded-lg hover:border hover:border-gray-500 shadow-lg shadow-gray-900'>
              <div className='w-[90%] ml-[5%] rounded-lg'>
                <img src={img6} alt="" className='w-full rounded-lg image border-2 border-gray-300'/>
              </div>
              <h1 className='pl-7 mt-5 text-2xl text-gray-600 font-bold'>Stopwatch</h1>
              <p className='pl-7 mt-7 pr-5 text-sm text-gray-400'>A stopwatch with start, pause, reset, stop and lap buttons (for recording laps and intervals). Could be used for workouts and sport activities</p>
              <div className='flex mt-7 justify-between w-[100%] px-7 mx-auto'>
                <div className='text-xl text-gray-800 flex w-[40%] justify-between'>
                  <FaReact/>
                  <RiTailwindCssLine/>
                  <FaHtml5/>
                  <CgVercel/>
                </div>
                <a href="https://prodigy-wd-02-stopwatch-mocha.vercel.app/" className='text-sm text-gray-700 underline underline-offset-4 hover:text-white'>Check it out</a>
              </div>
            </div>
            <div className='bg-white hover:bg-gray-100 py-12 rounded-lg hover:border hover:border-gray-500 shadow-lg shadow-gray-900'>
              <div className='w-[90%] ml-[5%] rounded-lg'>
                <img src={img7} alt="" className='w-full rounded-lg image border-2 border-gray-300'/>
              </div>
              <h1 className='pl-7 mt-5 text-2xl text-gray-600 font-bold'>To-Do-List</h1>
              <p className='pl-7 mt-7 pr-5 text-sm text-gray-400'>This powerful To-Do-List was created with react. Helps to organise task and then clear them after each task has been carried out. They can also be arranged in priority order</p>
              <div className='flex mt-7 justify-between w-[100%] px-7 mx-auto'>
                <div className='text-xl text-gray-800 flex w-[40%] justify-between'>
                  <FaReact/>
                  <FaHtml5/>
                  <CgVercel/>
                </div>
                <a href="/" className='text-sm text-gray-700 underline underline-offset-4 hover:text-white'>Check it out</a>
              </div>
            </div>
            <div className='bg-white hover:bg-gray-100 py-12 rounded-lg hover:border hover:border-gray-500 shadow-lg shadow-gray-900'>
              <div className='w-[90%] ml-[5%] rounded-lg'>
                <img src={img8} alt="" className='w-full rounded-lg image border-2 border-gray-300'/>
              </div>
              <h1 className='pl-7 mt-5 text-2xl text-gray-600 font-bold'>Signup page</h1>
              <p className='pl-7 mt-7 pr-5 text-sm text-gray-400'>Explore this signup page, created with HTML, CSS and Javascript</p>
              <div className='flex mt-7 justify-between w-[100%] px-7 mx-auto'>
                <div className='text-xl text-gray-800 flex w-[40%] justify-between'>
                  <FaCss3/>
                  <FaHtml5/>
                  <RiJavascriptLine/>
                </div>
                <a href="/" className='text-sm text-gray-700 underline underline-offset-4 hover:text-white'>Check it out</a>
              </div>
            </div>
            <div className='bg-white hover:bg-gray-100 py-12 rounded-lg hover:border hover:border-gray-500 shadow-lg shadow-gray-900'>
              <div className='w-[90%] ml-[5%] rounded-lg'>
                <img src={img9} alt="" className='w-full rounded-lg image border-2 border-gray-300'/>
              </div>
              <h1 className='pl-7 mt-5 text-2xl text-gray-600 font-bold'>Simon Game</h1>
              <p className='pl-7 mt-7 pr-5 text-sm text-gray-400'>Explore this game of colors created with HTML, CSS and JavaScript, managing states and inputs taken from users</p>
              <div className='flex mt-7 justify-between w-[100%] px-7 mx-auto'>
                <div className='text-xl text-gray-800 flex w-[40%] justify-between'>
                  <FaCss3/>
                  <FaHtml5/>
                  <RiJavascriptLine/>
                </div>
                <a href="/" className='text-sm text-gray-700 underline underline-offset-4 hover:text-white'>Check it out</a>
              </div>
            </div>
            <div className='bg-white hover:bg-gray-100 py-12 rounded-lg hover:border hover:border-gray-500 shadow-lg shadow-gray-900'>
              <div className='w-[90%] ml-[5%] rounded-lg'>
                <img src={img10} alt="" className='w-full rounded-lg image border-2 border-gray-300'/>
              </div>
              <h1 className='pl-7 mt-5 text-2xl text-gray-600 font-bold'>Play Drums</h1>
              <p className='pl-7 mt-7 pr-5 text-sm text-gray-400'>Explore this blog website created with HTML, CSS and JavaScript, playing sounds from various instruments selected by users</p>
              <div className='flex mt-7 justify-between w-[100%] px-7 mx-auto'>
                <div className='text-xl text-gray-800 flex w-[40%] justify-between'>
                  <FaCss3/>
                  <FaHtml5/>
                  <RiJavascriptLine/>
                </div>
                <a href="/" className='text-sm text-gray-700 underline underline-offset-4 hover:text-white'>Check it out</a>
              </div>
            </div>
          </div>
          <Footer/>
    </>
  )
}

export default Projects