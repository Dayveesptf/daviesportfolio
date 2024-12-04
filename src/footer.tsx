import './footer.css'
import { Link } from 'react-router-dom';


function Footer() {
   return (
    <>
    <div className="footer">
        <div className="footer-title"><h5>D-Tech Services</h5></div>
        <div className="secondary-links">
            <div className="cont1"><h6><Link to="/projects">Projects</Link></h6></div>
            <div className="cont1"><h6><Link to="/blog">Blog</Link></h6></div>
            <div className="cont1"><h6><Link to="/about">About Me</Link></h6></div>
        </div>
        <div className="email"><h5><a href="mailto:dtechservices2@gmail.com">dtechservices2@gmail.com</a></h5></div>
    </div>
    </>
   )
}
export default Footer;