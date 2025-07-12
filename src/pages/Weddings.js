import React from 'react';
import { motion } from 'framer-motion';
import { transition3 } from '../transitions';
import SubNav from '../components/SubNav';

const Weddings = () => {

  return (
    <section className="section">
      <SubNav key="subnav" />
      <motion.div
        {...transition3}
        exit={transition3.exit}
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
