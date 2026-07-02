import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import { ScrollProvider } from './context/ScrollContext';

const App = () => {
  return (
    <HelmetProvider>
      <ScrollProvider>
        <Router>
          <Header />
          <AnimRoutes />
        </Router>
      </ScrollProvider>
    </HelmetProvider>
  );
};

export default App;