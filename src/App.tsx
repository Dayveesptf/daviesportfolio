import {  Routes, Route } from 'react-router-dom';
import LandingPage from './landing-page'; // Adjust path if necessary
import Projects from './projects'; // Adjust path if necessary
import About from './about';
import Blog from './blog';
import ScrollToTop from './scroll';
import FirstBlog from './blog-pages/first-blog';
import SecondBlog from './blog-pages/second-blog';
import ThirdBlog from './blog-pages/third-blog';
import FourthBlog from './blog-pages/fourth-blog';
import FifthBlog from './blog-pages/fifth-blog';

function App() {
  return (
      <div>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/blog1" element={<FirstBlog />} />
          <Route path="/blog/blog2" element={<SecondBlog />} />
          <Route path="/blog/blog3" element={<ThirdBlog />} />
          <Route path="/blog/blog4" element={<FourthBlog />} />
          <Route path="/blog/blog5" element={<FifthBlog />} />
        </Routes>
      </div>
  );
}

export default App;
