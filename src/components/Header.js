import React from 'react';
import Socials from './Socials';
import Logo from '../img/header/Logo.avif';
import MobileNav from './MobileNav'; 

import { Link } from 'react-router-dom';

const Header = () => {
  return (

    <header className='fixed w-full px-[30px] lg:px-[100px]
     z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row
      lg:items-center w-full justify-between'>

        <Link to={'/'} className='max-w-[100px]'>
          <img src={Logo} alt='' />
        </Link>

        <nav className='hidden lg:flex gap-x-12 font-semibold'>
          <Link 
            to={'/'}
            className='text-[#696c6d] hover:text-primary transition'>
              Home
          </Link>
          <Link 
            to={'/about'}
            className='text-[#696c6d] hover:text-primary transition'>
              About
          </Link>
          <div className="group relative cursor-pointer">

              <Link to={'/weddings'} className="menu-hover text-base block border-none
                font-semibold text-[#696c6d] hover:text-primary transition">
                Galleries
              </Link>
              {/* <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" className="h-4 w-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
              </span> */}

              <div className="invisible absolute z-50 flex flex-col bg-gray-100 w-fit rounded-md
               py-1 px-5 text-gray-800 shadow-xl group-hover:visible transition">
                  <Link 
                    to={'/weddings'} 
                    className="my-2 block border-b border-gray-100 py-1 font-semibold
                     text-gray-500 hover:text-black md:mx-2 transition">
                    Weddings
                  </Link>
                  <Link 
                    to={'/families'} 
                    className="my-2 block border-b border-gray-100 py-1 font-semibold
                     text-gray-500 hover:text-black md:mx-2 transition">
                    Families
                  </Link>
                  <Link 
                    to={'/seniors'} 
                    className="my-2 block border-b border-gray-100 py-1 font-semibold
                     text-gray-500 hover:text-black md:mx-2 transition">
                    Seniors
                  </Link>
                  <Link 
                    to={'/boudoir'} 
                    className="my-2 block border-b border-gray-100 py-1 font-semibold
                     text-gray-500 hover:text-black md:mx-2 transition">
                    Boudoir
                  </Link>
              </div>
          </div>
          <Link 
            to={'/contact'}
            className='text-[#696c6d] hover:text-primary transition'>
              Contact
          </Link>
        </nav>
        <Socials />
        <MobileNav />
      </div>
    </header>

  );
};

export default Header;
