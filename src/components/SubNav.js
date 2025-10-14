import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { transition2 } from '../transitions';
import { useState, useEffect } from 'react';
import { FaChevronDown } from "react-icons/fa";

const SubNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const galleryOptions = [
    { path: '/families', label: 'FAMILIES' },
    { path: '/seniors', label: 'SENIORS' },
    { path: '/weddings', label: 'WEDDINGS' },
    { path: '/engagement', label: 'ENGAGEMENT' },
    { path: '/boudoir', label: 'BOUDOIR' }
  ];

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showDropdown && !event.target.closest('.dropdown-container')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <motion.nav
      className="z-10 w-full px-4 sm:px-20 font-one flex flex-row items-center justify-center gap-x-4 sm:gap-x-8 py-2 fixed top-[70px] subnav"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={transition2}
    >
      {/* Desktop Navigation */}
      <div className="hidden sm:flex flex-row items-center justify-center gap-x-4 sm:gap-x-8">
        <NavLink
          to="/families"
          className="text-black hover:text-[#912a2d] transition"
          aria-label="View Families Portfolio"
        >
          families
        </NavLink>
        <NavLink
          to="/seniors"
          className="text-black hover:text-[#912a2d] transition"
          aria-label="View Seniors Portfolio"
        >
          seniors
        </NavLink>
        <NavLink
          to="/weddings"
          className="text-black hover:text-[#912a2d] transition"
          aria-label="View Weddings Portfolio"
        >
          weddings
        </NavLink>
        <NavLink
          to="/engagement"
          className="text-black hover:text-[#912a2d] transition"
          aria-label="View Engagement Portfolio"
        >
          engagement
        </NavLink>
        <NavLink
          to="/boudoir"
          className="text-black hover:text-[#912a2d] transition"
          aria-label="View Boudoir Portfolio"
        >
          boudoir
        </NavLink>
      </div>

      {/* Mobile Dropdown */}
      <div className="sm:hidden dropdown-container">
        <div
          className="flex items-center gap-x-2 cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span className="text-black font-semibold">Galleries</span>
          <FaChevronDown className="text-black" />
        </div>
        
        {showDropdown && (
          <div className="absolute top-full left-0 right-0 z-10 mt-1 bg-[#fff] border border-gray-300 rounded-lg shadow-lg">
            {galleryOptions.map((option) => (
              <NavLink
                key={option.path}
                to={option.path}
                className={({ isActive }) => 
                  `block px-3 py-2 cursor-pointer transition-colors duration-200 ${
                    isActive ? 'bg-[#FFB74D]' : 'hover:bg-[#FFB74D]'
                  }`
                }
                onClick={() => setShowDropdown(false)}
              >
                <span className="font-one font-bold text-black">{option.label}</span>
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default SubNav;