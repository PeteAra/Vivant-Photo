import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { transition1 } from '../transitions';
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
  const [visibleImages, setVisibleImages] = useState(3); // Start with first 3 images
  const [isLoading, setIsLoading] = useState(true);

  const images = [
    { src: p1, alt: "Pricing Package 1" },
    { src: p2, alt: "Pricing Package 2" },
    { src: p3, alt: "Pricing Package 3" },
    { src: p4, alt: "Pricing Package 4" },
    { src: p5, alt: "Pricing Package 5" },
    { src: p6, alt: "Pricing Package 6" },
    { src: p7, alt: "Pricing Package 7" },
    { src: p8, alt: "Pricing Package 8" },
    { src: p9, alt: "Pricing Package 9" },
    { src: p10, alt: "Pricing Package 10" },
    { src: p12, alt: "Pricing Package 12" },
    { src: p13, alt: "Pricing Package 13" },
    { src: p15, alt: "Pricing Package 15" },
    { src: p16, alt: "Pricing Package 16" },
    { src: p17, alt: "Pricing Package 17" },
    { src: p18, alt: "Pricing Package 18" }
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
    // Load more images on scroll
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= 
          document.documentElement.offsetHeight - 1000 && 
          visibleImages < images.length) {
        setVisibleImages(prev => Math.min(prev + 2, images.length));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleImages, images.length]);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className='section'
    >
      <div className='pt-[70px]'>
        <div className='innerCon'>
          {images.slice(0, visibleImages).map((image, index) => (
            <motion.img
              key={index}
              src={image.src}
              alt={image.alt}
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
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;
