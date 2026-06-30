import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { TiThMenu } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

const menuVariants = {
  hidden: {
    x: '100%'
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const handlers = useSwipeable({
    onSwipedRight: () => setOpenMenu(false),
    delta: 50,
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <nav className='text-primary md:hidden'>

      <div 
        onClick={() => setOpenMenu(true)}
        className='text-4xl cursor-pointer shrink-0 leading-none'
        style={{ color: '#FFB74D' }}
      >
        <TiThMenu />
      </div>

      <motion.div 
        variants={menuVariants} 
        initial='hidden'
        animate={openMenu ? 'show' : ''}
        className='bg-orange-100 shadow-2xl w-full absolute
        top-0 right-0 max-w-xs h-screen z-20'
        {...handlers}>

        <div 
          onClick={() => setOpenMenu(false)}
          className='text-4xl absolute z-30 left-4 top-5
          text-primary cursor-pointer'>
          <IoMdClose />
        </div>

        <ul className='h-full flex flex-col justify-start pt-32
        items-center gap-y-14 text-primary font-one 
        font-bold text-4xl'>
          <li>
            <Link to='/' onClick={() => setOpenMenu(false)}>About</Link>
          </li>
          <li>
            <Link to='/weddings' onClick={() => setOpenMenu(false)}>Portfolio</Link>
          </li>
          <li>
            <Link to='/pricing' onClick={() => setOpenMenu(false)}>Pricing</Link>
          </li>
          <li>
            <Link to='/inquire' onClick={() => setOpenMenu(false)}>Inquire</Link>
          </li>
        </ul>

      </motion.div>
    </nav>
  );
};

export default MobileNav;