import React from 'react';
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import { ScrollProvider } from './context/ScrollContext';

const App = () => {
  return (
    <ScrollProvider>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </ScrollProvider>
  );
};

export default App;