'use client'

import React, { useEffect } from 'react';
import Heading from '../SharedComponents/Heading';
import Image from 'next/image';
import { MdFolder } from "react-icons/md";


import web_design from '@/assets/icons/web-design.png'
import web_development from '@/assets/icons/web-development.png'
import data_analysis from '@/assets/icons/web-analytics.png'
import data_science from '@/assets/icons/data-science.png'
import machine_learning from '@/assets/icons/machine-learning.png'

import AOS from 'aos';
import 'aos/dist/aos.css';


const WhatIDo = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
      once: false,
      mirror: true, // enables when scrolling up as well
      // offset: window.innerHeight/3,
    });
  }, [])


  return (
    <div className='mt-28 w-[90%] mx-auto '>
      <Heading  heading={'What I do'}></Heading>

      {/*  */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
        <div data-aos="fade-up-right" data-aos-offset={100} className='relative  text-center  px-3 py-8 shadow-xl shadow-purple/40  border-[1px] border-dark/5 bg-rosepink/5 mt-24'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple/60 inline-block p-5 rounded-full  shadow-xl'> <Image src={web_design} alt='web_design' width={60} /> </div>
          <h5 className='text-dark/90 text-2xl font-semibold mb-2 mt-8 '> Web Designing </h5>
          <p className='text-dark/70 mb-5 '> Designing intuitive, accessible, and responsive UI/UX layouts using Figma for enhanced user experience.  </p>
          <div className='flex justify-center'> <button className='flex items-center gap-2 px-4 py-[6px] bg-purple text-white '> <span className='text-[22px] '> <MdFolder /> </span> View project  </button> </div>
        </div>

        <div data-aos="fade-up-right" data-aos-offset={200} className='relative  text-center  px-3 py-8 shadow-xl shadow-purple/40  border-[1px] border-dark/5 bg-rosepink/5  mt-24'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple/60 inline-block p-6 rounded-full  shadow-xl'> <Image src={web_development} alt='web_design' width={56} /> </div>
          <h5 className='text-dark/90 text-2xl font-semibold mb-2 mt-8 '> Web Development </h5>
          <p className='text-dark/70 mb-5 '>  Building dynamic, responsive websites and full-stack web applications using modern frameworks and technologies.  </p>
          <div className='flex justify-center'> <button className='flex items-center gap-2 px-4 py-[6px] bg-purple text-white '> <span className='text-[22px] '> <MdFolder /> </span> View project  </button> </div>
        </div>

        <div data-aos="fade-up-right" data-aos-offset={300} className='relative  text-center  px-3 py-8 shadow-xl shadow-purple/40  border-[1px] border-dark/5 bg-rosepink/5 mt-24 '>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple/60 inline-block p-6 rounded-full  shadow-xl'> <Image src={data_analysis} alt='web_design' width={56} /> </div>
          <h5 className='text-dark/90 text-2xl font-semibold mb-2 mt-8 '> Data Analysis </h5>
          <p className='text-dark/70 mb-5 '> Extracting insights from structured and unstructured data using statistical methods and machine learning tools.  </p>
          <div className='flex justify-center'> <button className='flex items-center gap-2 px-4 py-[6px] bg-purple text-white '> <span className='text-[22px] '> <MdFolder /> </span> View project  </button> </div>
        </div>

        
        <div data-aos="fade-up-right" data-aos-offset={100} className='relative  text-center  px-3 py-8 shadow-xl shadow-purple/40  border-[1px] border-dark/5 bg-rosepink/5 mt-24 '>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple/60 inline-block p-6 rounded-full  shadow-xl'> <Image src={machine_learning} alt='web_design' width={56} /> </div>
          <h5 className='text-dark/90 text-2xl font-semibold mb-2 mt-8 '> Machine Learning </h5>
          <p className='text-dark/70 mb-5 '> Building systems that learn from data to make predictions, detect patterns, and automate decision-making.  </p>
          <div className='flex justify-center'> <button className='flex items-center gap-2 px-4 py-[6px] bg-purple text-white '> <span className='text-[22px] '> <MdFolder /> </span> View project  </button> </div>
        </div>

        <div data-aos="fade-up-right" data-aos-offset={200} className='relative  text-center  px-3 py-8 shadow-xl shadow-purple/40  border-[1px] border-dark/5 bg-rosepink/5 mt-24 '>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple/60 inline-block p-6 rounded-full  shadow-xl'> <Image src={data_science} alt='web_design' width={58} /> </div>
          <h5 className='text-dark/90 text-2xl font-semibold mb-2 mt-8 '> Data Science </h5>
          <p className='text-dark/70 mb-5 '> Analyzing and interpreting large volumes of data using statistical techniques to uncover patterns, trends.  </p>
          <div className='flex justify-center'> <button className='flex items-center gap-2 px-4 py-[6px] bg-purple text-white '> <span className='text-[22px] '> <MdFolder /> </span> View project  </button> </div>
        </div>


      </div>
    </div>
  );
};

export default WhatIDo;