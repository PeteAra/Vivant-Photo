import React from 'react';

import WomanImg from '../img/about/aboutPage.jpg';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import { transition1 } from '../transitions';

const About = () => {
  return (
  <motion.section 
  initial={{ scale: 0, y: '100%' }}
  animate={{ scale: 1, y: 0 }}
  exit={{ scale: 0, y: '100%' }}
  transition={transition1}
  className='section'>
    
    <div className='container mx-auto h-full relative'>

      <div className='flex flex-col lg:flex-row h-full
      items-center justify-center gap-x-24 text-center
      lg:text-left lg:pt-16'>

        <motion.div
        initial={{ scale: 0, y: '-80%' }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0, y: '-80%' }}
        transition={transition1}
        className='flex-1 pt-36 pb-14 lg:pt-0
        lg:w-auto z-10 flex flex-col justify-center
        items-center lg:items-start'>
               <h1 className='h1'>Coming Soon</h1>
        </motion.div>
      </div>
    </div>
  </motion.section>
  );
};

export default About;
