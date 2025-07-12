import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { transition2 } from '../transitions';

const SubNav = () => {
  return (
    <motion.nav
      className="z-10 w-full px-4 sm:px-20 font-one flex flex-row items-center justify-center gap-x-4 sm:gap-x-8 font-semibold py-2 fixed top-[70px] subnav"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={transition2}
    >
      <NavLink
        to="/families"
        className="text-black hover:text-white transition"
        aria-label="View F#f0c31f]amilies Portfolio"
      >
        FAMILIES
      </NavLink>
      <NavLink
        to="/seniors"
        className="text-black hover:text-white transition"
        aria-label="View Seniors Portfolio"
      >
        SENIORS
      </NavLink>
      <NavLink
        to="/weddings"
        className="text-black hover:text-white transition"
        aria-label="View Weddings Portfolio"
      >
        WEDDINGS
      </NavLink>
      <NavLink
        to="/engagement"
        className="text-black hover:text-white transition"
        aria-label="View Engagement Portfolio"
      >
        ENGAGEMENT
      </NavLink>
      <NavLink
        to="/boudoir"
        className="text-black hover:text-white transition"
        aria-label="View Boudoir Portfolio"
      >
        BOUDOIR
      </NavLink>
    </motion.nav>
  );
};

export default SubNav;