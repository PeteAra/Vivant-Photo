import React, { useEffect, useState } from 'react';
import Socials from './Socials';
import Logo from '../img/header/Logo.png';
import MobileNav from './MobileNav';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return undefined;
    }

    let scrollRoot = null;
    let observer = null;
    let cancelled = false;

    const syncFromScroll = () => {
      if (!scrollRoot) return;
      setScrolled(scrollRoot.scrollTop > 24);
    };

    const bind = () => {
      if (cancelled) return false;
      scrollRoot = document.querySelector('.home-scroll--bleed');
      const hero = document.querySelector('.bleed-hero');
      if (!scrollRoot || !hero) return false;

      syncFromScroll();
      scrollRoot.addEventListener('scroll', syncFromScroll, { passive: true });

      observer = new IntersectionObserver(
        ([entry]) => {
          const mostlyVisible =
            entry.isIntersecting && entry.intersectionRatio > 0.7;
          setScrolled(!mostlyVisible || scrollRoot.scrollTop > 24);
        },
        {
          root: scrollRoot,
          threshold: [0.7, 0.85, 1],
        }
      );
      observer.observe(hero);
      return true;
    };

    let tries = 0;
    let timer = null;
    const tryBind = () => {
      if (bind() || tries > 20 || cancelled) return;
      tries += 1;
      timer = window.setTimeout(tryBind, 50);
    };
    tryBind();

    return () => {
      cancelled = true;
      if (timer) window.clearTimeout(timer);
      scrollRoot?.removeEventListener('scroll', syncFromScroll);
      observer?.disconnect();
    };
  }, [isHome, location.pathname]);

  const overHero = isHome && !scrolled;
  const linkClass = overHero
    ? 'text-white/90 hover:text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
    : 'text-[#696c6d] hover:text-primary transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 h-[70px] header-css${
        overHero ? ' header-css--over-hero' : ''
      }${isHome && scrolled ? ' header-css--scrolled' : ''}`}
      aria-label="Main navigation"
    >
      <Link
        to="/"
        className="flash w-[75px] absolute left-[1em] top-1/2 -translate-y-1/2 z-10"
      >
        <img src={Logo} alt="Michaela Vivant Logo" className="w-full h-auto" />
      </Link>
      <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-x-12 font-ten text-2xl">
        <Link to="/" className={linkClass}>
          ABOUT
        </Link>
        <Link to="/weddings" className={linkClass}>
          GALLERIES
        </Link>
        <Link to="/pricing" className={linkClass}>
          PRICING
        </Link>
        <Link to="/inquire" className={linkClass}>
          INQUIRE
        </Link>
      </nav>
      <div
        className={`flex items-center h-full justify-end gap-3 pr-[30px] md:gap-0 md:pr-[70px]${
          overHero ? ' header-socials--light' : ''
        }`}
      >
        <Socials />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
