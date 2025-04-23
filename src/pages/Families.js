import React from 'react';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import SubNav from '../components/SubNav';
import { AnimatePresence } from 'framer-motion';


const Families = () => {

  return (
    <section className="section">
      
      <AnimatePresence mode="wait">
        <SubNav key="subnav" />
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={transition1}
      >
        <div className="iframe-container"
        >
          <iframe
            title="Families Portfolio"
            loading="lazy"
            className="w-full h-full "
            src="https://michaelavivantphoto.pixieset.com/families/"
            allow="fullscreen"
            aria-label="Families photography portfolio"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Families;