import React from 'react';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import SubNav from '../components/SubNav';

const Boudoir = () => {

  return (
    <section className="section">
      <SubNav key="subnav" />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={transition1}
      >
        <div className="iframe-container">
          <iframe
            title="Boudoir Portfolio"
            loading="lazy"
            className="w-full h-full"
            src="https://michaelavivantphoto.pixieset.com/boudoir/"
            allow="fullscreen"
            aria-label="Boudoir portfolio"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Boudoir;
