'use client'

import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';


type HeadingType = {
  heading: string;
};

const Heading = ( {heading }: HeadingType ) => {

  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
    });
  }, [])


  return (
    <div data-aos="fade-up" className='text-center'>
      <h3 className=' text-dark/85 font-Montserrat text-5xl font-semibold '> {heading} </h3>
      <div className="mx-auto mt-[6px] h-[2px] w-16 bg-rosepink rounded-full" />
    </div>
  );
};

export default Heading;