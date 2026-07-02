import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import SiteVerification from './components/SiteVerification';
import GoogleAnalytics from './components/GoogleAnalytics';
import { BrowserRouter as Router } from 'react-router-dom';
import { ScrollProvider } from './context/ScrollContext';

const App = () => {
  return (
    <HelmetProvider>
      <ScrollProvider>
        <Router>
          <SiteVerification />
          <GoogleAnalytics />
          <Header />
          <AnimRoutes />
        </Router>
      </ScrollProvider>
    </HelmetProvider>
  );
};

export default App;