import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import SubNav from './SubNav';
import Contact from '../pages/Contact';
import Weddings from '../pages/Weddings';
import Families from '../pages/Families';
import Seniors from '../pages/Seniors';
import Boudoir from '../pages/Boudoir';
import Blog from '../pages/Blog';

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


const AnimRoutes = () => {
  const location = useLocation();
  return (
  <AnimatePresence initial={true} mode='wait'>
    <Routes key={location.pathname} location={location}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/about' element={<SubNav />} />
      <Route path='/weddings' element={<Weddings />} />
      <Route path='/families' element={<Families />} />
      <Route path='/seniors' element={<Seniors />} />
      <Route path='/boudoir' element={<Boudoir />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </AnimatePresence>
  );
};

export default AnimRoutes;
