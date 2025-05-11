import React from 'react';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import p1 from '../img/prices/p1.svg';
import p2 from '../img/prices/p2.svg';
import p3 from '../img/prices/p3.svg';
import p4 from '../img/prices/p4.svg';
import p5 from '../img/prices/p5.svg';
import p6 from '../img/prices/p6.svg';
import p7 from '../img/prices/p7.svg';
import p8 from '../img/prices/p8.svg';
import p9 from '../img/prices/p9.svg';
import p10 from '../img/prices/p10.svg';
// import p11 from '../img/prices/p11.svg';
import p12 from '../img/prices/p12.svg';
import p13 from '../img/prices/p13.svg';
import p15 from '../img/prices/p15.svg';
import p16 from '../img/prices/p16.svg';
import p17 from '../img/prices/p17.svg';
import p18 from '../img/prices/p18.svg';



const Pricing = () => {
  return (
  <motion.section 
  initial={{ scale: 0, y: '100%' }}
  animate={{ scale: 1, y: 0 }}
  exit={{ scale: 0, y: '100%' }}
  transition={transition1}
  className='section'>
    <div className='pt-[70px]'>
      <div className='innerCon'>
        <img src={p1} alt="Michaela Vivant Logo" />
        <img src={p2} alt="Michaela Vivant Logo" />
        <img src={p3} alt="Michaela Vivant Logo" />
        <img src={p4} alt="Michaela Vivant Logo" />
        <img src={p5} alt="Michaela Vivant Logo" />
        <img src={p6} alt="Michaela Vivant Logo" />
        <img src={p7} alt="Michaela Vivant Logo" />
        <img src={p8} alt="Michaela Vivant Logo" />
        <img src={p9} alt="Michaela Vivant Logo" />
        <img src={p10} alt="Michaela Vivant Logo" />
        {/* <img src={p11} alt="Michaela Vivant Logo" /> */}
        <img src={p12} alt="Michaela Vivant Logo" />
        <img src={p13} alt="Michaela Vivant Logo" />
        <img src={p15} alt="Michaela Vivant Logo" />
        <img src={p16} alt="Michaela Vivant Logo" />
        <img src={p17} alt="Michaela Vivant Logo" />
        <img src={p18} alt="Michaela Vivant Logo" />
      </div>
    </div>
  </motion.section>
  );
};

export default Pricing;
