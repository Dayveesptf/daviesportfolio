import Navbar from "../navbar"
import Footer from "../footer"
import './second-blog.css'

function SecondBlog() {

  return (
    <>
      <Navbar />
      <div className="second-blog-wrapper">
        <div className="second-blog-item">
            <h6>🗓️ October 9, 2024</h6>
            <h1>One month into my react journey</h1>
            <p>After diving into React for the past month, I've discovered few reasons why it can be a game-changer compared to vanilla JavaScript:</p>
            <p>1. Declarative Syntax: React's ability to describe the UI and handle updates efficiently makes the code easier to understand</p>
            <p>2. Virtual DOM: By minimizing direct DOM manipulations, React boosts performance for complex UIs.</p>
            <p>3. Component-Based Architecture: Its modular approach promotes reusable and maintainable code for future projects</p>
            <p>4. State Management: Built-in mechanisms and libraries like Redux simplify dynamic data handling.</p>
            <p>React's strengths make it a powerful choice for complex projects, while vanilla JavaScript still holds its own for simpler tasks. Excited to continue exploring and leveraging React’s capabilities!</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SecondBlog