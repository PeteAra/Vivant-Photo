
import React from 'react';
import { motion } from 'framer-motion';

import { transition2 } from '../transitions';

import { NavLink } from 'react-router-dom';

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const SubNav = () => {
    const location = useLocation();

  return (
<>
    <div className=' mx-auto relative flex flex-col 
    items-center text-center'>
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
        to={'/soudoir'}
        className={'text-[#964610] hover:text-primary transition'}>
            BOUDOIR
        </NavLink>
    </motion.nav>
    </div>



<AnimatePresence initial={true} mode='wait'>
  <Routes key={location.pathname} location={location}>

    <Route path='/weddings' element={<Weddings />} />
    <Route path='/families' element={<Families />} />
    <Route path='/seniors' element={<Seniors />} />
    <Route path='/boudoir' element={<Boudoir />} />

  </Routes>
</AnimatePresence>
</>

  );
};

export default SubNav;



