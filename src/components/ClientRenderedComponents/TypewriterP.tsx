'use client'
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterP = () => {
  return (
    <div>
      <p className='text-xl mt-4 font-semibold'>
          I am a{' '} <span className='text-rosepink font-bold'>
            <Typewriter
              words={['Web Designer', 'Web Developer', 'Data Scientist']}
              loop={0} // 0 = infinite
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </p>
    </div>
  );
};

export default TypewriterP;