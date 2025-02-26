
import React from 'react';
import { motion } from 'framer-motion';

import { transition2 } from '../transitions';

import { NavLink } from 'react-router-dom';


const SubNav = () => {

  return (

    <div className='z-10 size-fit px-20 bg-white rounded-t-2xl flex flex-row 
    items-center text-center mt-24'>
      <motion.nav 
      initial={{ scale: 0, y: '-80%' }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0, y: '-80%' }}
      transition={transition2}
      className='subnav flex gap-x-8 font-semibold py-4'
      >
          <NavLink 
          to={'/weddings'}
          className={'text-[#964610] hover:text-primary transition'}>
              WEDDINGS
          </NavLink>
          <NavLink 
          to={'/families'}
          className={'text-[#964610] hover:text-primary transition'}>
              FAMILIES
          </NavLink>
          <NavLink 
          to={'/seniors'}
          className={'text-[#964610] hover:text-primary transition'}>
              SENIORS
          </NavLink>
          <NavLink 
          to={'/Boudoir'}
          className={'text-[#964610] hover:text-primary transition'}>
              BOUDOIR
          </NavLink>
      </motion.nav>
    </div>

  );
};

export default SubNav;



