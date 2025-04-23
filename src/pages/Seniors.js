import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import SubNav from '../components/SubNav';
import { useScroll } from '../context/ScrollContext';

const Seniors = () => {
  const { isSubNavVisible, setSubNavVisible } = useScroll();
  const touchStartY = useRef(null);
  const wheelTimeout = useRef(null);

  const handleWheel = (e) => {
    clearTimeout(wheelTimeout.current);
    wheelTimeout.current = setTimeout(() => {
      if (e.deltaY > 0) {
        setSubNavVisible(false);
      } else if (e.deltaY < 0) {
        setSubNavVisible(true);
      }
    }, 100);
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    if (!touchStartY.current) return;
    const touchEndY = e.touches[0].clientY;
    const deltaY = touchStartY.current - touchEndY;

    if (deltaY > 10) {
      setSubNavVisible(false);
    } else if (deltaY < -10) {
      setSubNavVisible(true);
    }
  };

  const handleTouchEnd = () => {
    touchStartY.current = null;
  };

  return (
    <section className="section">
      <SubNav isVisible={isSubNavVisible} />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={transition1}
      >
        <div
          className="iframe-container"
          style={{ height: 'calc(100vh - var(--header-height))' }}
        >
          <iframe
            title="Seniors Portfolio"
            loading="lazy"
            className="w-full h-full pointer-events-auto"
            src="https://michaelavivantphoto.pixieset.com/seniors/" // Update URL
            aria-label="Seniors photography portfolio"
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Seniors;