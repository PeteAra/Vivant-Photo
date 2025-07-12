import React from 'react';
import { motion } from 'framer-motion';
import { transition3 } from '../transitions';
import SubNav from '../components/SubNav';

const Boudoir = () => {

  return (
    <section className="section">
      <SubNav key="subnav" />
      <motion.div
        {...transition3}
        exit={transition3.exit}
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
