import { useState, useEffect } from 'react'
import './projects.css'
import pic1 from '../src/assets/Screenshot (148).png'
import pic2 from '../src/assets/Screenshot (159).png'
import pic3 from '../src/assets/Screenshot (154).png'
import pic4 from '../src/assets/Screenshot (151).png'
import pic5 from '../src/assets/Screenshot (156).png'
import pic6 from '../src/assets/Screenshot (196).png'
import pic7 from '../src/assets/Screenshot (191).png'
import pic8 from '../src/assets/Screenshot (192).png'
import Footer from './footer';
import Navbar from './navbar'

function Projects() {
  const fullText = "My Projects";
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [imgscroll, setImgscroll] = useState(false);
  const [hasScrolledOnce, setHasScrolledOnce] = useState(false);

  useEffect(() => {
    const projectItems = document.querySelectorAll('.main-box');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add class when in view
        } else {
          entry.target.classList.remove('visible'); // Remove class when out of view
        }
      });
    }, { threshold: 0.5 }); // Adjust threshold as needed
  
    projectItems.forEach(item => observer.observe(item));
  
    return () => observer.disconnect(); // Clean up observer on component unmount
  }, []);
  
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 300); // Adjust the delay (100ms) as needed
      return () => clearTimeout(timeout); // Clean up timeout
    }
  }, [index, fullText]);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolledOnce) {  // only trigger on the first scroll down
        setImgscroll(true);
        setHasScrolledOnce(true); // set flag to true after first scroll
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log("Done");
    };
  }, []);

  return (
    <>
      <Navbar />
      <h5 className={`projects-header ${imgscroll ? 'exp-acc' : ''}`}>{displayText}</h5>
      <hr className='horizontal-line'/>

      <div className='main-box'>
        <div className='box-1'>
          <p className='date'>Feb. 2023</p>
          <h2>Sign-up Form</h2>
          <p className='details'>I implemented user interface design, solving user problems with HTML, CSS AND Javascript to make this basic sign-up template.</p>
          <a href='' className='web-address'>Check it out</a>
          <div className='languages-container'>
            <div className='small-box'>React</div>
            <div className='small-box'>HTML</div>
            <div className='small-box'>CSS</div>
          </div>
        </div>
        <div className='box-2'>
          <img src={pic1} alt="" />
        </div>
      </div>
      <br /><br /><br />
      <div className='main-box'>
        <div className='box-1'>
          <p className='date'>Feb. 2023</p>
          <h2>Weather App</h2>
          <p className='details'>I implemented user interface design using API with HTML, CSS AND Javascript to get the temperature of different locations around the world</p>
          <a href='https://weather-project-flame.vercel.app/' className='web-address'>Check it out</a>
          <div className='languages-container'>
            <div className='small-box'>React</div>
            <div className='small-box'>HTML</div>
            <div className='small-box'>CSS</div>
          </div>
        </div>
        <div className='box-2'>
          <img src={pic2} alt="" />
        </div>
      </div>
      <br /><br /><br />
      <div className='main-box'>
        <div className='box-1'>
          <p className='date'>March. 2023</p>
          <h2>Simon Game</h2>
          <p className='details'>I implemented user interface design to create a game of patterns with HTML, CSS AND Javascript.</p>
          <a href='https://dayveesptf.github.io/simon-game' className='web-address'>Check it out</a>
          <div className='languages-container'>
            <div className='small-box'>Javascript</div>
            <div className='small-box'>HTML</div>
            <div className='small-box'>CSS</div>
          </div>
        </div>
        <div className='box-2'>
          <img src={pic3} alt="" />
        </div>
      </div>
      <br /><br /><br />
      <div className='main-box'>
        <div className='box-1'>
          <p className='date'>September. 2024</p>
          <h2>To-Do-List</h2>
          <p className='details'>I implemented user interface design to create a to-do list with HTML, CSS AND Javascript for task management.</p>
          <a href='https://to-do-list-two-eta-46.vercel.app/' className='web-address'>Check it out</a>
          <div className='languages-container'>
            <div className='small-box'>React</div>
            <div className='small-box'>HTML</div>
            <div className='small-box'>CSS</div>
          </div>
        </div>
        <div className='box-2'>
          <img src={pic5} alt="" />
        </div>
      </div>
      <br /><br /><br />
      <div className='main-box'>
        <div className='box-1'>
          <p className='date'>December. 2023</p>
          <h2>Drum kit</h2>
          <p className='details'>I implemented user interface design to create a project that plays the sounds of different instruments with HTML, CSS AND Javascript.</p>
          <a href='' className='web-address'>Check it out</a>
          <div className='languages-container'>
            <div className='small-box'>Javascript</div>
            <div className='small-box'>HTML</div>
            <div className='small-box'>CSS</div>
          </div>
        </div>
        <div className='box-2'>
          <img src={pic4} alt="" />
        </div>
      </div>
      <br /><br /><br />
      <div className='main-box'>
        <div className='box-1'>
          <p className='date'>March. 2023</p>
          <h2>Blog website</h2>
          <p className='details'>I implemented user interface design to create a blog website with HTML, TailwindCSS, Javascript and API.</p>
          <a href='' className='web-address'>Check it out</a>
          <div className='languages-container'>
            <div className='small-box'>React</div>
            <div className='small-box'>HTML</div>
            <div className='small-box'>TailwindCSS</div>
          </div>
        </div>
        <div className='box-2'>
          <img src={pic6} alt="" />
        </div>
      </div>
      <br /><br /><br />
      <div className='main-box'>
        <div className='box-1'>
          <p className='date'>July. 2023</p>
          <h2>Bento Grid</h2>
          <p className='details'>I implemented user interface design to create a blog page with HTML, CSS AND Javascript, testing out grid layouts</p>
          <a href='https://bento-grid-ruby.vercel.app/' className='web-address'>Check it out</a>
          <div className='languages-container'>
            <div className='small-box'>Javascript</div>
            <div className='small-box'>HTML</div>
            <div className='small-box'>CSS</div>
          </div>
        </div>
        <div className='box-2'>
          <img src={pic7} alt="" />
        </div>
      </div>
      <br /><br /><br />
      <div className='main-box'>
        <div className='box-1'>
          <p className='date'>W. blog</p>
          <h2>Multi Step Form</h2>
          <p className='details'>I implemented user interface design to create a dynamic, multi-step form for selecting subscription plans and add-ons.</p>
          <a href='https://multi-step-form-nu-green.vercel.app/' className='web-address'>Check it out</a>
          <div className='languages-container'>
            <div className='small-box'>Javascript</div>
            <div className='small-box'>HTML</div>
            <div className='small-box'>CSS</div>
          </div>
        </div>
        <div className='box-2'>
          <img src={pic8} alt="" />
        </div>
      </div>
      <br /><br /><br />
      <Footer />
    </>
  )
}

export default Projects
