import React from 'react';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import SubNav from '../components/SubNav';

const Weddings = () => {

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
            title="Weddings Portfolio"
            loading="lazy"
            className="w-full h-full"
            src="https://michaelavivantphoto.pixieset.com/weddingportfolio/"
            allow="fullscreen"
            aria-label="Weddings portfolio"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Weddings;
