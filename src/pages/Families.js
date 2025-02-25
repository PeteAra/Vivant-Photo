import React from 'react';

import { NavLink } from 'react-router-dom';

import { motion } from 'framer-motion';

import { transition1 } from '../transitions';
import { transition2 } from '../transitions';


const Families = () => {
  return (

    <motion.section 
      initial={{ scale: 0, y: '100%' }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0, y: '100%' }}
      transition={transition1}
      className='section pt-28'
    >

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
            className={'[&.active]:text-indigo-500'}>
              WEDDINGS
          </NavLink>
          <NavLink 
            to={'/families'}
            className={'[&.active]:text-indigo-500'}>
              FAMILIES
          </NavLink>
          <NavLink 
            to={'/seniors'}
            className={'[&.active]:text-indigo-500'}>
              SENIORS
          </NavLink>
          <NavLink 
            to={'/soudoir'}
            className={'[&.active]:text-indigo-500'}>
              BOUDOIR
          </NavLink>
        </motion.nav>

        <embed className='w-full h-screen' src="https://michaelavivantphoto.pixieset.com/tannerseniorpics/" />

      </div>
    </motion.section>
  );
};

export default Families;
