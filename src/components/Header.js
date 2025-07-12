import React from 'react';
import Socials from './Socials';
import Logo from '../img/header/Logo.png';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 w-full px-[30px] md:px-[70px] z-30 h-[70px] flex items-center header-css" 
      aria-label="Main navigation"
    >
      <div className="flex flex-row md:items-center w-full justify-between">
        <Link to="/" className="flash w-[100px]">
          <img src={Logo} alt="Michaela Vivant Logo" />
        </Link>
        <nav className="hidden md:flex gap-x-12 font-one font-bold text-2xl">
          <Link
            to="/"
            className="text-[#696c6d] hover:text-primary transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            About
          </Link>
          <Link
            to="/weddings"
            className="text-[#696c6d] hover:text-primary transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            Portfolio
          </Link>
          <Link
            to="/pricing"
            className="text-[#696c6d] hover:text-primary transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            Pricing
          </Link>
          <Link
            to="/inquire"
            className="text-[#696c6d] hover:text-primary transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            Inquire
          </Link>
        </nav>
        <Socials />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;