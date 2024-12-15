import { Link } from 'react-router-dom';
import './landing-page.css'
import './blog.css'
import Navbar from './navbar';
import Footer from './footer';

function Blog() {

  return (
      <>
      <Navbar />
      <h1 className='blog-header'>Blog</h1>
      <hr className="horizontal-line"/>

      <div className="blog-grid-1">
          <div className="blog-item">
            <h6>🗓️ December 3, 2024</h6>
            <h1>Trying Out React Router</h1>
            <p>One of the key concepts I explored is the difference between the "Link" component and the traditional "a" tag for linking pages..... </p>
            <h5><Link to="/blog/blog1">Read More</Link></h5>
          </div>

          <div className="blog-item blog-2nd">
            <h6>🗓️ November 22, 2024</h6>
            <h1>Benefits of useContext</h1>
            <p>The useContext hook in React simplifies state management and allows components to access shared data without prop-drilling. ....</p>
            <h5><Link to="/blog/blog3">Read More</Link></h5>
          </div>
      </div>

      <div className="blog-grid-1 second">
          <div className="blog-item">
            <h6>🗓️ October 9, 2024</h6>
            <h1>One month into my react journey</h1>
            <p>After diving into React for the past month, I've discovered few reasons why it can be a game-changer compared to vanilla JavaScript:...</p>
            <h5><Link to="/blog/blog2">Read More</Link></h5>
          </div>

          <div className="blog-item blog-2nd">
            <h6>🗓️ September 8, 2024</h6>
            <h1>Fundamentals of React</h1>
            <p>React is a popular JavaScript library that allows developers to create dynamic, interactive, and reusable UI components efficiently... </p>
            <h5><Link to="/blog/blog4">Read More</Link></h5>
          </div>
      </div>

      <div className="blog-grid-1 third">
          <div className="blog-item">
            <h6>🗓️ December 15, 2024</h6>
            <h1>Link vs useNavigate</h1>
            <p>Understanding the Differences Between Link and useNavigate in React Router and implementation..... </p>
            <h5><Link to="/blog/blog5">Read More</Link></h5>
          </div>
      </div>
      <Footer />
      </>
  )
}

export default Blog
