import React from 'react';
import Socials from './Socials';
import Logo from '../img/header/Logo.png';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 w-full z-30 h-[70px] header-css"
      aria-label="Main navigation"
    >
      <Link
        to="/"
        className="flash w-[75px] absolute left-[1em] top-1/2 -translate-y-1/2 z-10"
      >
        <img src={Logo} alt="Michaela Vivant Logo" className="w-full h-auto" />
      </Link>
      <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-x-12 font-ten text-2xl">
          <Link
            to="/"
            className="text-[#696c6d] hover:text-primary transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            ABOUT
          </Link>
          <Link
            to="/weddings"
            className="text-[#696c6d] hover:text-primary transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            GALLERIES
          </Link>
          <Link
            to="/pricing"
            className="text-[#696c6d] hover:text-primary transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            PRICING
          </Link>
          <Link
            to="/inquire"
            className="text-[#696c6d] hover:text-primary transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            INQUIRE
          </Link>
        </nav>
      <div className="flex items-center h-full justify-end gap-3 pr-[30px] md:gap-0 md:pr-[70px]">
        <Socials />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;