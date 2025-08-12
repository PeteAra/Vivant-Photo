import Micki from '../img/home/DSC08462.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';


const Home = () => {
  return (
    <div className='pt-[70px]'>
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
             className="section relative min-h-screen"
              style={{
          backgroundImage: `url(${Micki})`,
          backgroundSize: '100% auto',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}
    >
        <div className="innerCon">
          <motion.div
            initial={{ scale: 0, y: '-80%' }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: '-80%' }}
            transition={transition1}
            className="pb-14 lg:pt-90 z-5 flex flex-col justify-center items-center"
          >
            <div className='flex flex-col lg:flex-row pt-2'>
              <h1 className="h1 text-[150px]">
                Michaela
              </h1>
              <h1 className="h1 text-[150px] -mt-20 lg:mt-0">
                Vivant
              </h1>
            </div>
            <p className="text-[22px] lg:text-[36px] font-one lg:font-normal mb-4 lg:mb-12 -mt-16">
              P&nbsp;H&nbsp;O&nbsp;T&nbsp;O&nbsp;G&nbsp;R&nbsp;A&nbsp;P&nbsp;H&nbsp;Y
            </p>
            <p className="mb-12 font-one font-bold w-[80vw] text-center">
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
            <Link to="/weddings" className="btn">
              View my work
            </Link>
          </motion.div>
        </div>
      
    </motion.section>
    </div>
  );
};

export default Home;