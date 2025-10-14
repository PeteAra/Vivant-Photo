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
    >
        <div className="innerCon">
          <motion.div
            initial={{ scale: 0, y: '-80%' }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: '-80%' }}
            transition={transition1}
            className="pb-14 lg:pt-90 z-5 flex flex-col justify-center items-center"
          >
              <div className='flex flex-col xs:flex-row lg:flex-row pt-2 w-[80vw] justify-center items-center relative z-10'>
                    <h1 className="h1 text-[14vw] xs:text-[18vw] sm:text-[16vw]">
                      Michaela
                    </h1>
                    <h1 className="h1 text-[14vw] xs:text-[18vw] sm:text-[16vw] -mt-12 xs:-mt-20 lg:mt-0 sm:-mt-8">
                      Vivant
                    </h1>
                  </div>
               <p className="text-[3vw] lg:text-[36px] sm:text-[2.5vw] xs:text-[2vw] font-one lg:font-normal mb-4 lg:mb-12 -mt-16 sm:-mt-12 xs:-mt-8 relative z-20">
                 P&nbsp;H&nbsp;O&nbsp;T&nbsp;O&nbsp;G&nbsp;R&nbsp;A&nbsp;P&nbsp;H&nbsp;Y
               </p>
               <motion.div 
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 exit={{ scale: 0 }}
                 transition={transition1}
                 className='w-auto h-auto lg:w-[80vw] lg:h-auto overflow-hidden relative mb-8 -mt-32 lg:-mt-52 sm:-mt-24 xs:-mt-16'
               >
               <motion.img
                 whileHover={{ scale: 1.1 }}
                 transition={transition1}
                 src={Micki} 
                 alt='Michaela Vivant' 
                 className='w-full h-full object-cover'
               />
             </motion.div>
              <div className="bg-white bg-opacity-70 p-4 mb-12 inline-block rounded-md w-[90vw] lg:w-[60vw] -mt-96 lg:-mt-[40em] relative z-10 backdrop-blur-sm">
                <p className="font-one font-bold text-center leading-loose tracking-wider">
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
            <Link to="/weddings" className="btn relative z-10">
               View my work
             </Link>
                                                                                                                       <div className="mt-12 mb-8 relative z-10">
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
           </motion.div>
        </div>
      
    </motion.section>
    </div>
  );
};

export default Home;