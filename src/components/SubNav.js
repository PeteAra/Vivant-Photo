import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { transition2 } from '../transitions';

const SubNav = () => {
  return (
    <motion.nav
      className="z-10 w-full px-4 sm:px-20 flex flex-row items-center justify-center gap-x-4 sm:gap-x-8 font-semibold py-2 fixed top-[70px] subnav"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={transition2}
    >
      <NavLink
        to="/families"
        className="text-[#964610] hover:text-primary transition"
        aria-label="View Families Portfolio"
      >
        FAMILIES
      </NavLink>
      <NavLink
        to="/seniors"
        className="text-[#964610] hover:text-primary transition"
        aria-label="View Seniors Portfolio"
      >
        SENIORS
      </NavLink>
      <NavLink
        to="/weddings"
        className="text-[#964610] hover:text-primary transition"
        aria-label="View Weddings Portfolio"
      >
        WEDDINGS
      </NavLink>
      <NavLink
        to="/engagement"
        className="text-[#964610] hover:text-primary transition"
        aria-label="View Engagement Portfolio"
      >
        ENGAGEMENT
      </NavLink>
      <NavLink
        to="/boudoir"
        className="text-[#964610] hover:text-primary transition"
        aria-label="View Boudoir Portfolio"
      >
        BOUDOIR
      </NavLink>
    </motion.nav>
  );
};

export default SubNav;