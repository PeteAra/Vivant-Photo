import React from 'react';
import { motion } from 'framer-motion';
import { transition3 } from '../transitions';
import SubNav from '../components/SubNav';

const Families = () => {

  return (
    <section className="section">
      <SubNav key="subnav" />
      <motion.div
        {...transition3}
        exit={transition3.exit}
      >
        <div className="iframe-container">
          <iframe
            title="Families Portfolio"
            loading="lazy"
            className="w-full h-full"
            src="https://michaelavivantphoto.pixieset.com/families/"
            allow="fullscreen"
            aria-label="Families portfolio"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Families;