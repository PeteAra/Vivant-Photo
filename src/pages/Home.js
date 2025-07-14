import WomanImg from '../img/home/aboutPage.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.body.classList.add('allow-scroll');
    document.documentElement.classList.add('allow-scroll');
    
    return () => {
      document.body.classList.remove('allow-scroll');
      document.documentElement.classList.remove('allow-scroll');
    };
  }, []);

  return (
    <motion.section
      initial={{ scale: 0, y: '100%' }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0, y: '100%' }}
      transition={transition1}
      className="section"
    >
        <div className="innerCon-no-scroll">
          <div className="h-full relative px-4">
            <div className="flex flex-col pt-20 lg:flex-row items-center justify-center text-center lg:text-left lg:pt-16">
              <motion.div
                initial={{ scale: 0, y: '-80%' }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0, y: '-80%' }}
                transition={transition1}
                className="pb-14 lg:pt-0 lg:w-auto z-5 flex flex-col justify-center items-center lg:items-start"
              >
                <h1 className="h1">
                  Michaela <br /> Vivant
                </h1>
                <p className="text-[26px] lg:text-[36px] tracking-widest font-two font-bold mb-4 lg:mb-12">
                  Minneapolis, MN
                </p>
                <p className="mb-12 max-w-sm font-one font-bold">
                  Hey, I’m Michaela! I’m a traveling ultrasound tech with a deep love for photography
                  that’s grown into so much more than just a side passion. For the past six years,
                  I’ve had the joy of capturing portraits, intimate boudoir sessions, and unforgettable
                  wedding days—and I truly love every second of it. I’m all about real,
                  unposed moments—the laughs that make your face hurt, the happy tears,
                  and everything in between. My goal? That it never feels like a photoshoot—just hanging out,
                  having fun, and somehow ending up with a gallery full of magic. I also LOVE a good vision.
                  I’m a Pinterest and Tiktok girly through and through, and I’m always up for turning your
                  wildest ideas into reality. Unique engagement sessions, creative inspo boards, crazy ideas—I’m all in. 
                  If you're down for belly laughs, spontaneous dance moves, and a photographer with a 
                  laugh so loud and contagious it usually gets everyone giggling—I'm your girl.

                  <b> Let’s make some memories. Message me and let’s plan something fun!</b>
                  <br />
                  <br />
                </p>
                <Link to="/weddings" className="btn">
                  View my work
                </Link>
              </motion.div>
              <div className="flex justify-end">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={transition1}
                  className="relative lg:-right-40 overflow-hidden"
                >
                  <motion.img
                    className="size-auto object-contain max-h-[calc(100vh-65px)]"
                    whileHover={{ scale: 1.1 }}
                    transition={transition1}
                    src={WomanImg}
                    alt="Michaela Vivant"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
    </motion.section>
  );
};

export default Home;