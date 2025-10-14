import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Lazy load all pages for code splitting
const Home = React.lazy(() => import('../pages/Home'));
const Inquire = React.lazy(() => import('../pages/Inquire'));
const Weddings = React.lazy(() => import('../pages/Weddings'));
const Engagement = React.lazy(() => import('../pages/Engagement'));
const Families = React.lazy(() => import('../pages/Families'));
const Seniors = React.lazy(() => import('../pages/Seniors'));
const Boudoir = React.lazy(() => import('../pages/Boudoir'));
const Pricing = React.lazy(() => import('../pages/Pricing'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    <span className="ml-3 font-one text-lg">Loading...</span>
  </div>
);

const AnimRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={true} mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/weddings" element={<Weddings />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/families" element={<Families />} />
          <Route path="/seniors" element={<Seniors />} />
          <Route path="/boudoir" element={<Boudoir />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/inquire" element={<Inquire />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default AnimRoutes;