
import React from 'react';
import { motion } from 'framer-motion';

import { transition2 } from '../transitions';

import { NavLink } from 'react-router-dom';


const SubNav = () => {

  // const [isOpen, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(!isOpen);
  // };

  return (

    <div className='z-10 size-fit px-20 bg-white rounded-t-2xl flex flex-row 
    items-center text-center mt-28'>
      <motion.nav 
      initial={{ scale: 0, y: '-80%' }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0, y: '-80%' }}
      transition={transition2}
      className='subnav flex gap-x-8 font-semibold py-4'
      >
          {/* <button className={'text-[#964610] hover:text-primary transition'} onClick={handleClick}>WEDDINGS</button>
          {isOpen && <div>WEDDINGS</div>}

          <button className={'text-[#964610] hover:text-primary transition'} onClick={handleClick}>FAMILIES</button>
          {isOpen && <div>FAMILIES</div>}

          <button className={'text-[#964610] hover:text-primary transition'} onClick={handleClick}>SENIORS</button>
          {isOpen && <div>SENIORS</div>}

          <button className={'text-[#964610] hover:text-primary transition'} onClick={handleClick}>BOUDOIR</button>
          {isOpen && <div>BOUDOIR</div>}

          <button className={'text-[#964610] hover:text-primary transition'} onClick={handleClick}>BOUDOIR</button>
          {isOpen && <div>BOUDOIR</div>} */}

          <NavLink 
          to={'/weddings'}
          className={'text-[#964610] hover:text-primary transition'}>
              WEDDINGS
          </NavLink>
          <NavLink 
          to={'/Engagement'}
          className={'text-[#964610] hover:text-primary transition'}>
              ENGAGEMENT
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



