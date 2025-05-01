import {  Routes, Route } from 'react-router-dom';
import LandingPage from './landing-page';
import Projects from './projects';
import About from './about';
import ScrollToTop from './scroll';

function App() {
  return (
      <div>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
  );
}

export default App;