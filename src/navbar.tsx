import './navbar.css'
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.jpeg'

function Navbar() {
   return (
    <>
    <div className='nav-bar'>
        <div className="header-container">
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <div className='other-pages-container'>
          <div className='link'><h4><Link to="/projects">Projects</Link></h4></div>
          <div className='link'><h4><Link to="/blog">Blog</Link></h4></div>
          <div className='link'><h4><Link to="/about">About</Link></h4></div>
        </div>
      </div>
    </>
   )
}
export default Navbar;