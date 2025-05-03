'use client'

import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';

import { FaGithub } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';

const BannerLeft = () => {
  useEffect(() => {
    AOS.init({
      duration: 100,
      once: true, 
    });
  }, [])
  

  return (
    <div data-aos="fade-up" className='w-full md:w-[60%]  mt-8  '>
      <h3 className='font-semibold text-4xl md:text-6xl lg:text-7xl  text-dark/80 '> Hello, I am  <span className='' > Sumaiya Tasnim  </span> </h3>
      <p className='text-2xl mt-4 font-semibold font-Montserrat '>
        <span className=' text-dark/80'> I am a </span>{' '} <span className='text-rosepink font-bold'>
          <Typewriter
            words={['Web Designer', 'Web Developer', 'Data Analyst', 'Data Scientist']}
            loop={0} // 0 = infinite
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </p>

      {/* <button className='mt-10 bg-orchid px-6 py-[6px] text-white font-medium flex justify-center items-center gap-2 rounded-[1px] '> <span className='text-lg'> <FaPaperclip /> </span> <span className=''> View resume </span> </button> */}
      <div className='mt-10 flex items-center gap-2 '>
        <a href="https://github.com/Sumu154" target="_blank" rel="noopener noreferrer">
          <div className='text-white text-xl bg-purple p-2 rounded-full  '> <FaGithub /> </div>
        </a>
        <a href="https://www.youtube.com/@SumaiyaTasnim-5548" target="_blank" rel="noopener noreferrer">
          <div className='text-white text-xl bg-purple p-2 rounded-full '> <FaYoutube /> </div>
        </a>
        <a href="https://www.linkedin.com/in/sumaiya-tasnim-08a52428a/" target="_blank" rel="noopener noreferrer">
          <div className='text-white text-xl bg-purple p-2 rounded-full ' > <FaLinkedinIn /> </div>
        </a>
      </div>

    </div>
      
  );
};

export default BannerLeft;