import React from 'react';
import SubNav from '../components/SubNav';

import { motion } from 'framer-motion';
import { transition1 } from '../transitions';


const Weddings = () => {
  return (

    <motion.section 
      initial={{ scale: 0, y: '100%' }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0, y: '100%' }}
      transition={transition1}
      className='section bg-orange-100'
    >

      {/* <motion.div
        initial={{ scale: 0, y: '-80%' }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0, y: '-80%' }}
        transition={transition1}
        className='flex flex-col lg:items-start justify-self-center border-b-2'
      >
        <h1 className='h1 pb-5'>Weddings</h1>
        <p className='mb-8 max-w-sm'>
        The work of
          <b> Michaela Vivant </b>
        </p>
        
      </motion.div> */}

      <div className=' mx-auto relative flex flex-col 
      items-center text-center'>
        
        <div className=''>
          <SubNav />
        </div>

        <iframe title='Weddings' className='w-full h-screen' src="https://michaelavivantphoto.pixieset.com/weddingportfolio/" />

        {/* <div className='sm:columns-2 md:columns-3 lg:columns-4 mx-3'>
          <div className='max-w-[250px] lg:max-w-[320] rounded-lg
          h-[187px] lg:h-[220px] mb-3 bg-accent overflow-hidden'>
            <img 
            className='object-cover h-full lg:h-[220px]
            hover:scale-110 transition-all duration-500' 
            src={Image2} 
            alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320] rounded-lg
          h-[187px] lg:h-[220px] mb-3 bg-accent overflow-hidden'>
            <img 
            className='object-cover h-full lg:h-[220px]
            hover:scale-110 transition-all duration-500' 
            src={Image3} 
            alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320] rounded-lg
          h-[187px] lg:h-[220px] mb-3 bg-accent overflow-hidden'>
            <img 
            className='object-cover h-full lg:h-[220px]
            hover:scale-110 transition-all duration-500' 
            src={Image4} 
            alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320] rounded-lg
          h-[187px] lg:h-[220px] mb-3 bg-accent overflow-hidden'>
            <img 
            className='object-cover h-full lg:h-[220px]
            hover:scale-110 transition-all duration-500' 
            src={Image1} 
            alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320] rounded-lg
          h-[187px] lg:h-[220px] mb-3 bg-accent overflow-hidden'>
            <img 
            className='object-cover h-full lg:h-[220px]
            hover:scale-110 transition-all duration-500' 
            src={Image2} 
            alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320] rounded-lg
          h-[187px] lg:h-[220px] mb-3 bg-accent overflow-hidden'>
            <img 
            className='object-cover h-full lg:h-[220px]
            hover:scale-110 transition-all duration-500' 
            src={Image3} 
            alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320] rounded-lg
          h-[187px] lg:h-[220px] mb-3 bg-accent overflow-hidden'>
            <img 
            className='object-cover h-full lg:h-[220px]
            hover:scale-110 transition-all duration-500' 
            src={Image4} 
            alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320] rounded-lg
          h-[187px] lg:h-[220px] mb-3 bg-accent overflow-hidden'>
            <img 
            className='object-cover h-full lg:h-[220px]
            hover:scale-110 transition-all duration-500' 
            src={Image1} 
            alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320] rounded-lg
          h-[187px] lg:h-[220px] mb-3 bg-accent overflow-hidden'>
            <img 
            className='object-cover h-full lg:h-[220px]
            hover:scale-110 transition-all duration-500' 
            src={Image2} 
            alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320] rounded-lg
          h-[187px] lg:h-[220px] mb-3 bg-accent overflow-hidden'>
            <img 
            className='object-cover h-full lg:h-[220px]
            hover:scale-110 transition-all duration-500' 
            src={Image3} 
            alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320] rounded-lg
          h-[187px] lg:h-[220px] mb-3 bg-accent overflow-hidden'>
            <img 
            className='object-cover h-full lg:h-[220px]
            hover:scale-110 transition-all duration-500' 
            src={Image4} 
            alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320] rounded-lg
          h-[187px] lg:h-[220px] mb-3 bg-accent overflow-hidden'>
            <img 
            className='object-cover h-full lg:h-[220px]
            hover:scale-110 transition-all duration-500' 
            src={Image1} 
            alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320] rounded-lg
          h-[187px] lg:h-[220px] mb-3 bg-accent overflow-hidden'>
            <img 
            className='object-cover h-full lg:h-[220px]
            hover:scale-110 transition-all duration-500' 
            src={Image2} 
            alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320] rounded-lg
          h-[187px] lg:h-[220px] mb-3 bg-accent overflow-hidden'>
            <img 
            className='object-cover h-full lg:h-[220px]
            hover:scale-110 transition-all duration-500' 
            src={Image3} 
            alt='' />
          </div>
          <div className='max-w-[250px] lg:max-w-[320] rounded-lg
          h-[187px] lg:h-[220px] mb-3 bg-accent overflow-hidden'>
            <img 
            className='object-cover h-full lg:h-[220px]
            hover:scale-110 transition-all duration-500' 
            src={Image4} 
            alt='' />
          </div>
        </div> */}
      </div>
    </motion.section>
  );
};

export default Weddings;
