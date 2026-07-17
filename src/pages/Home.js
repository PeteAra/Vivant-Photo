import { useEffect } from 'react';
import Micki from '../img/home/DSC08462.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import PageMeta from '../components/PageMeta';
import StructuredData from '../components/StructuredData';
import { PAGE_META } from '../seo/pageMeta';
import { homeStructuredData } from '../seo/structuredData';
import Footer from '../components/Footer';
import ChatReveal from '../components/ChatReveal';

const bioLinkClass =
  'text-[#912a2d] underline-offset-2 hover:underline transition-colors';

const Home = () => {
  useEffect(() => {
    const processEmbeds = () => {
      if (window.instgrm?.Embeds?.process) {
        window.instgrm.Embeds.process();
      }
    };

    const existing = document.querySelector('script[data-instagram-embed]');
    if (existing) {
      processEmbeds();
      return undefined;
    }

    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.dataset.instagramEmbed = 'true';
    script.onload = processEmbeds;
    document.body.appendChild(script);

    return undefined;
  }, []);

  return (
    <>
      <PageMeta {...PAGE_META.home} />
      <StructuredData data={homeStructuredData} />

      <div className="bleed-hero-media bleed-hero-media--fixed" aria-hidden="true">
        <motion.img
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={transition1}
          src={Micki}
          alt=""
          className="bleed-hero-image"
          loading="eager"
          decoding="async"
        />
        <div className="bleed-hero-overlay" />
      </div>

      <div className="home-scroll home-scroll--bleed">
        <section className="bleed-hero" aria-label="Introduction">
          <div className="bleed-hero-content">
            <h1 className="bleed-hero-name">Michaela Vivant</h1>
            <p className="bleed-hero-label">Photography</p>
            <p className="bleed-hero-tagline">
              Real laughs, happy tears, and unposed moments worth keeping.
            </p>
          </div>

          <a
            href="#about"
            className="bleed-hero-scroll"
            aria-label="Scroll to about"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById('about')
                ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            <span>Scroll</span>
            <span className="bleed-hero-scroll-chevron" aria-hidden="true">
              ↓
            </span>
          </a>
        </section>

        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={transition1}
          className="section relative z-10"
        >
          <div className="home-about-panel flex flex-col items-center px-4 pt-16 pb-12">
            <div className="home-about-copy w-[90vw] lg:w-[60vw]">
              <p className="font-one font-bold text-center leading-loose tracking-wider block sm:hidden">
                Hey, I'm Michaela! For the past six years, I've loved capturing{' '}
                <Link to="/families" className={bioLinkClass}>
                  portraits
                </Link>
                ,{' '}
                <Link to="/boudoir" className={bioLinkClass}>
                  boudoir sessions
                </Link>
                , and{' '}
                <Link to="/weddings" className={bioLinkClass}>
                  wedding days
                </Link>{' '}
                filled with real, unposed moments—the laughs, the tears, and
                everything in between. My goal is to make it feel effortless,
                like hanging out and having fun while creating a gallery full of
                magic. I'm a Pinterest and TikTok girly who's always up for
                bringing your creative ideas to life—unique sessions, wild
                concepts, and plenty of laughter included.
                <br />
                <br />
                <b>
                  Let's make some memories.{' '}
                  <Link to="/inquire" className={bioLinkClass}>
                    Message me
                  </Link>{' '}
                  and let's plan something fun!
                </b>
              </p>

              <p className="font-one font-bold text-center leading-loose tracking-wider hidden sm:block">
                Hey, I'm Michaela! For the past six years, I've had the joy of
                capturing{' '}
                <Link to="/families" className={bioLinkClass}>
                  portraits
                </Link>
                , intimate{' '}
                <Link to="/boudoir" className={bioLinkClass}>
                  boudoir sessions
                </Link>
                , and unforgettable{' '}
                <Link to="/weddings" className={bioLinkClass}>
                  wedding days
                </Link>
                —and I truly love every second of it. I'm all about real,
                unposed moments—the laughs that make your face hurt, the happy
                tears, and everything in between. My goal? That it never feels
                like a photoshoot—just hanging out, having fun, and somehow
                ending up with a gallery full of magic. I also LOVE a good
                vision. I'm a Pinterest and Tiktok girly through and through, and
                I'm always up for turning your wildest ideas into reality.
                Unique{' '}
                <Link to="/engagement" className={bioLinkClass}>
                  engagement sessions
                </Link>
                , creative inspo boards, crazy ideas—I'm all in. If you're down
                for belly laughs, spontaneous dance moves, and a photographer
                with a laugh so loud and contagious it usually gets everyone
                giggling—I'm your girl.
                <br />
                <br />
                <b>
                  Let's make some memories. Check out my{' '}
                  <Link to="/pricing" className={bioLinkClass}>
                    pricing
                  </Link>
                  , then{' '}
                  <Link to="/inquire" className={bioLinkClass}>
                    message me
                  </Link>{' '}
                  and let's plan something fun!
                </b>
              </p>
            </div>
          </div>

          <ChatReveal />

          <div className="home-about-panel flex flex-col items-center px-4 pt-12 pb-14">
            <Link to="/weddings" className="btn mb-8">
              View my work
            </Link>

            <div className="mb-8 relative z-10">
              <iframe
                src="https://www.instagram.com/michaelavivantphoto/embed"
                width="540"
                height="600"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                title="Michaela Vivant Instagram Profile"
                style={{
                  background: '#FFF',
                  border: '0',
                  borderRadius: '3px',
                  boxShadow:
                    '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                  margin: '1px',
                  maxWidth: '80vw',
                  minWidth: '326px',
                  width: '80vw',
                }}
              />
            </div>
            <Footer />
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Home;
