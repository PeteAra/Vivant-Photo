import React from 'react';
import About from '../pages/About';
import SubNav from './SubNav';
import Inquire from '../pages/Inquire';
import Weddings from '../pages/Weddings';
import Engagement from '../pages/Engagement';
import Families from '../pages/Families';
import Seniors from '../pages/Seniors';
import Boudoir from '../pages/Boudoir';
import Pricing from '../pages/Pricing';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<About />} />
        <Route path="/weddings" element={<Weddings />} />
        <Route path="/engagement" element={<Engagement />} />
        <Route path="/families" element={<Families />} />
        <Route path="/seniors" element={<Seniors />} />
        <Route path="/boudoir" element={<Boudoir />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/inquire" element={<Inquire />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimRoutes;