import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import SiteVerification from './components/SiteVerification';
import GoogleAnalytics from './components/GoogleAnalytics';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <SiteVerification />
        <GoogleAnalytics />
        <Header />
        <AnimRoutes />
      </Router>
    </HelmetProvider>
  );
};

export default App;