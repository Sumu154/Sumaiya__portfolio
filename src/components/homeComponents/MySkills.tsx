'use client'

import React, { useState } from 'react';
import Heading from '../SharedComponents/Heading';

const MySkills = () => {

  const [activeTab, setActiveTab] = useState(0); // index of active tab 

  const labels: string[] = [
    "Web development",
    "Web designs",
    "Data analysis",
    "Machine learning",
    "data science"
  ];


  return (
    <div className='mt-28 w-[90%] mx-auto '>
      <Heading  heading={'My skills'}></Heading>

      <div className='grid grid-cols-5 mt-10'>
        {labels.map((label, index) => (
          <button key={index} onClick={() => setActiveTab(index)} className={`text-xl font-semibold py-[6px] border-b-[2px] ${
            activeTab === index ? 'text-orchid border-b-orchid': 'text-dark/70 border-b-transparent'}`}
          >
            {label}
          </button>
        ))}
      </div>
      
    </div>
  );
};

export default MySkills;