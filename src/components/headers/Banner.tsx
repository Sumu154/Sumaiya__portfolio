import React from 'react';
import '@/assets/stylesheets/banner.css'
import sumaiya from '@/assets/images/sumaiya.png'

import BannerLeft from '../ClientRenderedComponents/BannerLeft';
import Image from 'next/image';



const Banner = () => {
  return (
    <div id='banner' className='w-full pt-[100px] sm:pt-[80px] md:pt-[50px] lg:pt-[30px]  '>
      
      <div className='w-[95%] sm:w-[90%] md:w-[85%] mx-auto flex flex-col-reverse md:flex-row justify-between items-center '>
        {/* left */}
        <BannerLeft></BannerLeft>
        
        {/* right */}
        <div className=''>
          <Image src={sumaiya} alt='sumaiya' width={380}></Image>
        </div>
      </div>

    </div>
  );
};

export default Banner;