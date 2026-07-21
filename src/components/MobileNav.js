import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { IoMdClose } from 'react-icons/io';
import { TiThMenu } from 'react-icons/ti';
import { Link, useLocation } from 'react-router-dom';
import { handleGalleriesNavClick } from '../utils/scrollToGalleries';

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();

  const closeMenu = () => setOpenMenu(false);

  return (
    <nav className="text-primary md:hidden">
      <div
        onClick={() => setOpenMenu(true)}
        className="text-4xl cursor-pointer shrink-0 leading-none"
        style={{ color: '#FFB74D' }}
        aria-label="Open menu"
        role="button"
      >
        <TiThMenu />
      </div>

      {openMenu &&
        createPortal(
          <>
            <button
              type="button"
              className="fixed inset-0 z-40 bg-black/20 md:hidden"
              onClick={closeMenu}
              aria-label="Close menu"
            />
            <div className="fixed top-0 right-0 z-50 h-screen w-full max-w-xs bg-orange-100 shadow-2xl md:hidden">
              <button
                type="button"
                onClick={closeMenu}
                className="absolute left-4 top-5 z-30 text-4xl text-primary cursor-pointer"
                aria-label="Close menu"
              >
                <IoMdClose />
              </button>

              <ul className="flex h-full flex-col items-center justify-start gap-y-14 pt-32 font-one text-4xl font-bold text-primary">
                <li>
                  <Link to="/" onClick={closeMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#galleries"
                    onClick={(event) => {
                      handleGalleriesNavClick(event, location.pathname);
                      closeMenu();
                    }}
                  >
                    Galleries
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" onClick={closeMenu}>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/inquire" onClick={closeMenu}>
                    Inquire
                  </Link>
                </li>
              </ul>
            </div>
          </>,
          document.body
        )}
    </nav>
  );
};

export default MobileNav;
