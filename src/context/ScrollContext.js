import React, { createContext, useContext, useState } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [isSubNavVisible, setSubNavVisible] = useState(true);
  console.log('ScrollProvider: isSubNavVisible:', isSubNavVisible); // Debug: verify state

  return (
    <ScrollContext.Provider value={{ isSubNavVisible, setSubNavVisible }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};