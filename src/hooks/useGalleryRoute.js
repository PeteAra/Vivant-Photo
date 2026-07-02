import { useEffect } from 'react';

const useGalleryRoute = () => {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('gallery-route');
    document.body.classList.add('gallery-route');

    return () => {
      root.classList.remove('gallery-route');
      document.body.classList.remove('gallery-route');
    };
  }, []);
};

export default useGalleryRoute;
