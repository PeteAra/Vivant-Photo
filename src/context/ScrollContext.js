import React, { createContext, useState } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [isSubNavVisible, setSubNavVisible] = useState(true);

  return (
    <ScrollContext.Provider value={{ isSubNavVisible, setSubNavVisible }}>
      {children}
    </ScrollContext.Provider>
  );
};

