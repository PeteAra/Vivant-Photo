import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const SubNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const galleryOptions = [
    { path: '/families', label: 'FAMILIES' },
    { path: '/seniors', label: 'SENIORS' },
    { path: '/weddings', label: 'WEDDINGS' },
    { path: '/engagement', label: 'ENGAGEMENT' },
    { path: '/boudoir', label: 'BOUDOIR' },
  ];

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
    <nav className="subnav fixed top-[70px] z-10 flex w-full flex-row items-center justify-center gap-x-4 px-4 py-1 font-one sm:gap-x-8 sm:px-20">
      <div className="hidden flex-row items-center justify-center gap-x-4 sm:flex sm:gap-x-8">
        <NavLink
          to="/families"
          className="text-black transition hover:text-[#912a2d]"
          aria-label="View Families Portfolio"
        >
          families
        </NavLink>
        <NavLink
          to="/seniors"
          className="text-black transition hover:text-[#912a2d]"
          aria-label="View Seniors Portfolio"
        >
          seniors
        </NavLink>
        <NavLink
          to="/weddings"
          className="text-black transition hover:text-[#912a2d]"
          aria-label="View Weddings Portfolio"
        >
          weddings
        </NavLink>
        <NavLink
          to="/engagement"
          className="text-black transition hover:text-[#912a2d]"
          aria-label="View Engagement Portfolio"
        >
          engagement
        </NavLink>
        <NavLink
          to="/boudoir"
          className="text-black transition hover:text-[#912a2d]"
          aria-label="View Boudoir Portfolio"
        >
          boudoir
        </NavLink>
      </div>

      <div className="dropdown-container sm:hidden">
        <div
          className="flex cursor-pointer items-center gap-x-2"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span className="font-semibold text-black">Galleries</span>
          <FaChevronDown className="text-black" />
        </div>

        {showDropdown && (
          <div className="absolute left-0 right-0 top-full z-10 mt-1 rounded-lg border border-gray-300 bg-[#fff] shadow-lg">
            {galleryOptions.map((option) => (
              <NavLink
                key={option.path}
                to={option.path}
                className={({ isActive }) =>
                  `block cursor-pointer px-3 py-2 transition-colors duration-200 ${
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
    </nav>
  );
};

export default SubNav;
