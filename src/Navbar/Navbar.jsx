import { useState, useEffect } from 'react'
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';

 const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }


    return (
     <header className={`text-black shadow-bottom-only fixed top-0 left-0 right-0 z-30 shadow-gray-800 transition-colors duration-300 ease-in-out ${isScrolled ? "bg-gray-700" : "bg-gray-800"}`}>
        <nav className='md:px-0 px-10 py-5 max-w-7xl mx-auto flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
                <a href="/" className='text-2xl font-bold text-gray-500'>DAVIES<span className='text-gray-200'> /> </span></a>
            </div>
            {/* nav-items for lg devices */}
            <ul className='md:flex md:gap-6 lg:gap-10 text-lg hidden'>
                <li className='text-gray-300 text-base hover:text-gray-600'><Link to="/">Home</Link></li>
                <li className='text-gray-300 text-base hover:text-gray-600'><Link to="/projects">Projects</Link></li>
                <li className='text-gray-300 text-base hover:text-gray-600'><Link to="/about">About</Link></li>
            </ul>

            {/* mobile menu btn, display mobile screen */}
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='cursor-pointer'>
                    {
                        isMenuOpen ? <FaXmark  className='w-5 h-5 text-gray-400'/> : <FaBars className='w-5 h-5 text-gray-400 hover:text-gray-200'/>
                    }
                </button>
            </div>

        </nav>
        {/* Menu Items small screens */}
        <div className='z-40'>
        <ul className={`md:hidden gap-4 flex flex-col text-lg space-y-4 px-4 py-6 mt-[4.2rem] bg-gray-800 border-t border-gray-700 ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
                <li className='text-gray-300 hover:text-gray-600'><Link to="/">Home</Link></li>
                <li className='text-gray-300 hover:text-gray-600'><Link to="/projects">Projects</Link></li>
                <li className='text-gray-300 hover:text-gray-600'><Link to="/about">About</Link></li>
        </ul>
        </div>
     </header>
   )
 }
 
 export default Navbar 