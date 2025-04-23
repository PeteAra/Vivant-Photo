import React from 'react';
import SubNav from '../components/SubNav';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';


const Engagement = () => {
  return (
    <motion.section 
      initial={{ scale: 0, y: '100%' }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0, y: '100%' }}
      transition={transition1}
      className='section bg-orange-100'
    >
      <div className=' mx-auto relative flex flex-col 
      items-center text-center'>

        <SubNav />
        <iframe title='Engagement' className='w-full h-screen' src="https://michaelavivantphoto.pixieset.com/engagements/" />
      </div>
    </motion.section>
  );
};

export default Engagement;
