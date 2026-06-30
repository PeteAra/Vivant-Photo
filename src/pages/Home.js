import Micki from '../img/home/DSC08462.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';


const Home = () => {
  return (
    <>
      <div className="home-hero-frame">
        <div className="home-hero-image-wrap">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          exit={{ scale: 1.1 }}
          transition={transition1}
          src={Micki}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top"
          loading="eager"
          decoding="async"
        />
        <motion.div
          initial={{ scale: 0, y: '-80%' }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0, y: '-80%' }}
          transition={transition1}
          className="absolute inset-0 flex flex-col items-center pt-8"
        >
          <div className="home-hero-titles flex flex-row w-[80vw] justify-center items-center [&_.h1]:mb-0">
            <h1 className="h1 text-[20vw] xs:text-[20vw] sm:text-[16vw]">
              Michaela
            </h1>
            <h1 className="h1 text-[20vw] xs:text-[20vw] sm:text-[16vw]">
              Vivant
            </h1>
          </div>
          <p className="home-hero-photography text-[4vw] lg:text-[36px] sm:text-[3.5vw] xs:text-[4vw] font-one lg:font-normal">
            P&nbsp;H&nbsp;O&nbsp;T&nbsp;O&nbsp;G&nbsp;R&nbsp;A&nbsp;P&nbsp;H&nbsp;Y
          </p>
        </motion.div>
        </div>
      </div>

    <div className='relative z-10 pt-[70px]'>
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className="section relative min-h-screen"
    >
        <div className="innerCon relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition1}
            className="pb-14 flex flex-col justify-start items-center"
          >
            <div className="home-hero-scroll-content flex flex-col items-center px-4 pointer-events-auto">
              <div className="bg-white bg-opacity-70 p-4 rounded-md w-[90vw] lg:w-[60vw] backdrop-blur-sm mb-8">
                <p className="font-one font-bold text-center leading-loose tracking-wider block sm:hidden">
                  Hey, I'm Michaela! For the past six years,
                  I've loved capturing portraits, boudoir sessions,
                  and wedding days filled with real, unposed moments—the laughs,
                  the tears, and everything in between. My goal is to make it feel
                  effortless, like hanging out and having fun while creating
                  a gallery full of magic. I'm a Pinterest and TikTok girly
                  who's always up for bringing your creative ideas
                  to life—unique sessions, wild concepts, and plenty
                  of laughter included.
                  <br />
                  <br />
                  <b> Let's make some memories. Message me and let's plan something fun!</b>
                </p>

                <p className="font-one font-bold text-center leading-loose tracking-wider hidden sm:block">
                  Hey, I'm Michaela! For the past six years,
                  I've had the joy of capturing portraits, intimate boudoir sessions, and unforgettable
                  wedding days—and I truly love every second of it. I'm all about real,
                  unposed moments—the laughs that make your face hurt, the happy tears,
                  and everything in between. My goal? That it never feels like a photoshoot—just hanging out,
                  having fun, and somehow ending up with a gallery full of magic. I also LOVE a good vision.
                  I'm a Pinterest and Tiktok girly through and through, and I'm always up for turning your
                  wildest ideas into reality. Unique engagement sessions, creative inspo boards, crazy ideas—I'm all in.
                  If you're down for belly laughs, spontaneous dance moves, and a photographer with a
                  laugh so loud and contagious it usually gets everyone giggling—I'm your girl.
                  <br />
                  <br />
                  <b> Let's make some memories. Message me and let's plan something fun!</b>
                </p>
              </div>
              <Link to="/weddings" className="btn mb-8 pointer-events-auto">
                View my work
              </Link>
              <div className="mb-8 relative z-10 pointer-events-auto">
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
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '1px',
                    maxWidth: '80vw',
                    minWidth: '326px',
                    width: '80vw'
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

    </motion.section>
    </div>
    </>
  );
};

export default Home;
