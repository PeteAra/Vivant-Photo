import React from 'react';
import Socials from './Socials';
import Logo from '../img/header/Logo.avif';
import MobileNav from './MobileNav'; 

import { Link } from 'react-router-dom';

const Header = () => {
  return (

    <header className='fixed w-full px-[30px] md:px-[100px]
     z-30 h-[100px] flex items-center bg-white'>
      <div className='flex flex-row
      md:items-center w-full justify-between'>

        <Link to={'/'} className='flash max-w-[100px] bg-white'>
          <img src={Logo} alt='' />
        </Link>

        <nav className='hidden md:flex gap-x-12 font-semibold'>
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
          <Link to={'/weddings'} className="menu-hover text-base block border-none
              font-semibold text-[#696c6d] hover:text-primary transition">
              Portfolio
          </Link>

          {/* <div className="group relative cursor-pointer">
              <Link to={'/weddings'} className="menu-hover text-base block border-none
                font-semibold text-[#696c6d] hover:text-primary transition">
                Portfolio
              </Link>
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
          </div> */}

          <Link 
            to={'/blog'}
            className='text-[#696c6d] hover:text-primary transition'>
              Blog
          </Link>
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
