import { Link } from 'react-router-dom';

const footerLinkClass =
  'text-[#696c6d] hover:text-[#912a2d] transition-colors duration-200';

const Footer = () => {
  return (
    <footer className="w-full px-4 py-10 mt-8 text-center font-one bg-[#f1ede7] border-t border-[#e0dcd6]">
      <nav
        aria-label="Footer navigation"
        className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-lg mb-4"
      >
        <Link to="/" className={footerLinkClass}>
          About
        </Link>
        <Link to="/pricing" className={footerLinkClass}>
          Pricing
        </Link>
        <Link to="/inquire" className={footerLinkClass}>
          Inquire
        </Link>
      </nav>
      <nav
        aria-label="Portfolio galleries"
        className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm mb-6"
      >
        <Link to="/families" className={footerLinkClass}>
          Families
        </Link>
        <Link to="/seniors" className={footerLinkClass}>
          Seniors
        </Link>
        <Link to="/weddings" className={footerLinkClass}>
          Weddings
        </Link>
        <Link to="/engagement" className={footerLinkClass}>
          Engagement
        </Link>
        <Link to="/boudoir" className={footerLinkClass}>
          Boudoir
        </Link>
      </nav>
      <p className="text-sm text-[#696c6d]">
        &copy; {new Date().getFullYear()} Michaela Vivant Photography
      </p>
    </footer>
  );
};

export default Footer;
