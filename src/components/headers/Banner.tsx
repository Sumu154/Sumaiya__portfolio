import React from 'react';

import '@/assets/stylesheets/banner.css'
import TypewriterP from '../ClientRenderedComponents/TypewriterP';

const Banner = () => {
  return (
    <div id='banner' className='w-full pt-[100px]  '>
      
      <div className='w-[90%] mx-auto '>
        {/* left */}
      <div >
        <h3 className='font-semibold text-5xl '> Hi, I am <span className='' > Mst Sumaiya Tasnim  </span> </h3>
        <TypewriterP></TypewriterP>
      </div>
      </div>

    </div>
  );
};

export default Banner;