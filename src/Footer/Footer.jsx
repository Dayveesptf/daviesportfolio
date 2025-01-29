import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
<div className='bg-gray-900 mt-10'>
      <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
        <a href="mailto:dtechservices2@gmail.com" className='md:text-lg text-base hover:text-gray-500 text-white'>dtechservices2@gmail.com</a>
        <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row mt-4'>
          <p className='text-sm text-gray-50'><span className='text-lg text-gra-300'>© </span>Copyright 2025 | All right reserved.</p>
          <div className='flex items-center mt-4 space-x-4 sm:m-0'>
            <a href="https://www.instagram.com/dtech.services?igsh=Y3VODJsN3oza2dy&utm_source=qr" className='text-gray-500 transition-all duration-300 hover:text-white'><FaInstagram className='h-6 w-6'/></a>
            <a href="https://www.linkedin.com/in/davies-david-7a461a257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className='text-gray-500 transition-all duration-300 hover:text-white'><FaLinkedin className='h-6 w-6'/></a>
            <a href="https://github.com/Dayveesptf" className='text-gray-500 transition-all duration-300 hover:text-white'><FaGithub className='h-6 w-6'/></a>
          </div>
        </div>
      </div>
    </div>  )
}

export default Footer