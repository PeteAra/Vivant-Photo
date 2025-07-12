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
                <p className="text-[26px] lg:text-[36px] tracking-widest font-three mb-4 lg:mb-12">
                  Minneapolis, MN
                </p>
                <p className="mb-12 max-w-sm font-one font-bold">
                  I take pictures for a living, both full time and on the side.
                  I'm an ultrasound tech full time but I love capturing memories with
                  a camera too! 
                  <b> I love Pete, he's so cool! </b>
                  <br />
                  <br />
                  I've been doing portrait photography for about
                  3 years now and about a year doing weddings which I have
                  absolutely loved being a part of!
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
                    className="size-auto object-contain max-h-[calc(100vh-70px)]"
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