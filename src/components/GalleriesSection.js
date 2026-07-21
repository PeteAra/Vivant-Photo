import GalleryCard from './GalleryCard';
import { GALLERIES } from '../data/galleries';

const GalleriesSection = () => {
  return (
    <section
      id="galleries"
      className="home-about-panel relative z-10 px-4 pt-10 pb-16"
      aria-labelledby="galleries-heading"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2
          id="galleries-heading"
          className="font-ten text-4xl md:text-5xl text-center text-[#2c2c2c] mb-3"
        >
          Galleries
        </h2>
        <p className="font-one text-center text-[#696c6d] text-lg mb-10 max-w-xl mx-auto">
          Browse a collection and open the full portfolio.
        </p>

        <div className="gallery-card-grid">
          {GALLERIES.map((gallery) => (
            <GalleryCard key={gallery.path} {...gallery} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleriesSection;
