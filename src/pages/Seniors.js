import React from 'react';
import { motion } from 'framer-motion';
import { transition3 } from '../transitions';
import SubNav from '../components/SubNav';

const Seniors = () => {

  return (
    <section className="section">
      <SubNav key="subnav"/>
      <motion.div
        {...transition3}
        exit={transition3.exit}
      >
        <div className="iframe-container">
          <iframe
            title="Seniors Portfolio"
            loading="lazy"
            className="w-full h-full"
            src="https://michaelavivantphoto.pixieset.com/seniors/"
            allow="fullscreen"
            aria-label="Seniors portfolio"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Seniors;