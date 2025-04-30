import Image from 'next/image';
import React from 'react';
import { RiMenu2Line } from "react-icons/ri";
import Link from 'next/link';

import sumaiya from '@/assets/images/sumaiya square.png'


const Navbar = () => {

  const links = <>
      <li><Link href="/">Home</Link></li>
      <li>
        <details>
          <summary>Projects</summary>
          <ul className="w-40 bg-green-100">
            <li ><Link href="/projects/designs"> Design projects </Link></li>
            <li ><Link href="/projects/development"> Web development  </Link></li>
            <li ><Link href="/projects/machineLearning"> Machine learning  </Link></li>
          </ul>
        </details>
      </li>
      <li><Link href="/resume">Resume</Link></li>
      <li><Link href="/about">About</Link></li>
    </>


  return (
    <div className='fixed top-0 left-0 z-50 w-full bg-purple/20  shadow-lg   '>
      {/* left side */}
      
      <div className="navbar w-[95%] mx-auto ">
        <div className="navbar-start"> 
          <div className='flex items-center gap-3'>
          <Image src={sumaiya} alt='sumaiya' width={55} className='rounded-full'></Image>
          <p className='text-[15px] font-bold font-Montserrat'> <span className='text-rosepink '> SUMAIYA </span> <br /> <span className='text- '> TASNIM </span> </p>
        </div>
        </div>
        {/* navbar center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown  dropdown-end">
            <div tabIndex={0} role="button" className="btn text-xl lg:hidden"> <RiMenu2Line /> </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;