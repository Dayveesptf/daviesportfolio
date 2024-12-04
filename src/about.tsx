import Navbar from "./navbar"
import Footer from "./footer"
import github from './assets/Frame 36.png'
import './about.css'
import mypic from './assets/my-pic.jpeg'

function About() {

  return (
    <>
      <Navbar />
      <h1 className='about-header'>About me</h1>
      <hr className="horizontal-line"/>
      <div className="first-cont">
        <h1>David Davies</h1>
        <h6>Jan. 2024</h6>
      </div>

      <div className="second-cont">
        <div className="github-cont">
          <div className="icon"><img src={github} alt="" /></div>
          <h5>Github Repo</h5>
          <h6><a href="https://github.com/Dayveesptf">Dayveesptf</a></h6>
        </div>
        <div className="frameworks">
          <div className="little-conts">React</div>
          <div className="little-conts">CSS</div>
          <div className="little-conts">Javascript</div>
          <div className="little-conts">TSX</div>
        </div>
      </div>

      <div className="third-cont">
        <div className="my-image"><img src={mypic} alt="" /></div>
        <div className="my-info">
          <p>My name is David Davies Eghosa, and I’m a dedicated Frontend Developer specializing in JavaScript; React and TypeScript frameworks. I’m currently a 200-level Computer Science student at the University of Lagos. I had the incredible opportunity to work as a frontend development intern at Zeinny Crafts under the University of Lagos Afretec Network.</p>
          <p>My journey as a developer has been marked by both challenges and growth. Early on, I found state management, debugging, and building scalable applications to be quite daunting. However, I overcame these struggles through persistence, countless hours of practice, and leveraging resources like online courses and community support. These experiences taught me the importance of resilience and problem-solving, which are now central to my approach.</p>
          <p>I’m passionate about creating seamless user experiences and writing clean, efficient, and maintainable code. I value collaboration, adaptability, and continuous learning. I enjoy staying up to date with industry trends, which helps me deliver innovative and impactful solutions.</p>
          <p>For me, being a developer is more than just writing code—it’s about solving problems, crafting experiences, and contributing meaningfully to the tech community.</p>
        </div>
      </div>
      <hr className="horizontal-line" style={{marginTop: '5%', width: '100%'}}/>
      <Footer />
    </>
  )
}

export default About