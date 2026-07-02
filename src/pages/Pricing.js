import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
import PageMeta from '../components/PageMeta';
import Footer from '../components/Footer';
import { PAGE_META } from '../seo/pageMeta';
import p1 from '../img/prices/p1.svg';
import p2 from '../img/prices/p2.svg';
import p3 from '../img/prices/p3.svg';
import p4 from '../img/prices/p4.svg';
import p5 from '../img/prices/p5.svg';
import p6 from '../img/prices/p6.svg';
import p7 from '../img/prices/p7.svg';
import p8 from '../img/prices/p8.svg';
import p9 from '../img/prices/p9.svg';
import p10 from '../img/prices/p10.svg';
// import p11 from '../img/prices/p11.svg';
import p12 from '../img/prices/p12.svg';
import p13 from '../img/prices/p13.svg';
import p15 from '../img/prices/p15.svg';
import p16 from '../img/prices/p16.svg';
import p17 from '../img/prices/p17.svg';
import p18 from '../img/prices/p18.svg';



const Pricing = () => {
  const scrollRef = useRef(null);
  const [visibleImages, setVisibleImages] = useState(3); // Start with first 3 images
  const [isLoading, setIsLoading] = useState(true);

  const images = [
    { src: p1 },
    { src: p2 },
    { src: p3 },
    { src: p4 },
    { src: p5 },
    { src: p6 },
    { src: p7 },
    { src: p8 },
    { src: p9 },
    { src: p10 },
    { src: p12 },
    { src: p13 },
    { src: p15 },
    { src: p16 },
    { src: p17 },
    { src: p18 },
  ];

  useEffect(() => {
    // Load more images progressively
    const loadMoreImages = () => {
      if (visibleImages < images.length) {
        setTimeout(() => {
          setVisibleImages(prev => Math.min(prev + 2, images.length));
        }, 200);
      } else {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(loadMoreImages, 100);
    return () => clearTimeout(timer);
  }, [visibleImages, images.length]);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const handleScroll = () => {
      if (
        scrollEl.scrollTop + scrollEl.clientHeight >= scrollEl.scrollHeight - 1000 &&
        visibleImages < images.length
      ) {
        setVisibleImages(prev => Math.min(prev + 2, images.length));
      }
    };

    scrollEl.addEventListener('scroll', handleScroll);
    return () => scrollEl.removeEventListener('scroll', handleScroll);
  }, [visibleImages, images.length]);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'
    >
      <PageMeta {...PAGE_META.pricing} />
      <div className='innerCon' ref={scrollRef}>
          {images.slice(0, visibleImages).map((image, index) => (
            <motion.img
              key={index}
              src={image.src}
              alt={`Michaela Vivant Photography pricing guide, page ${index + 1} of ${images.length}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              loading="lazy"
              className="w-full h-auto mb-4"
            />
          ))}
          
          {isLoading && visibleImages < images.length && (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              <span className="ml-2 font-one">Loading more pricing packages...</span>
            </div>
          )}
          <Footer />
      </div>
    </motion.section>
  );
};

export default Pricing;
