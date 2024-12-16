import { useState, useEffect } from 'react'

import './landing-page.css';
import github from '../src/assets/Frame.png';
import twitter from '../src/assets/Frame 36.png';
import linkedin from '../src/assets/Frame 6317.png';
import ArrowDown from '../src/assets/Group 6316.png'
import pic1 from '../src/assets/Screenshot (148).png'
import pic2 from '../src/assets/Screenshot (159).png'
import pic3 from '../src/assets/Screenshot (154).png'
import Footer from './footer';
import Navbar from './navbar';

function LandingPage() {
  const fullText = "I am a creative developer capable of creating websites for influential brands and for digital experiences, guiding users through a seamless and authentic experience";
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

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
    // Trigger the animation on page load
    setAnimate(true);
  }, []);
  
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 70); // Adjust the delay (100ms) as needed
      return () => clearTimeout(timeout); // Clean up timeout
    }
  }, [index, fullText]);

  const [imgscroll, setImgscroll] = useState(false);
  const [hasScrolledOnce, setHasScrolledOnce] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      if (!hasScrolledOnce && window.scrollY > 500) {  // only trigger on the first scroll down
        setImgscroll(true);
        setImgscroll(window.scrollY > 500);
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

      <div className="hero-section">
        <div className="hero-texts">
          <h5>HI, I'M DAVIES DAVID</h5>
          <p className={`${imgscroll ? 'exp-acc' : ''}`}>{displayText}</p>
          <button>More about me</button>
        </div>
        <div className={`socials ${animate ? 'slide-down' : ''}`}>
          <a href="https://github.com/Dayveesptf"><img src={github} alt="GitHub" /></a>
          <a href="https://www.instagram.com/dtech.services?igsh=Y3VODJsN3oza2dy&utm_source=qr"><img src={twitter} alt="Twitter" /></a>
          <a href="https://www.linkedin.com/in/davies-david-7a461a257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src={linkedin} alt="LinkedIn" /></a>
        </div>
      </div>
      <div className='arrow-down'>
        <img src={ArrowDown} alt="" />
      </div>

      <h5 className='best-projects'>Best Projects</h5>
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
      <Footer />
    </>
  );
}

export default LandingPage;
