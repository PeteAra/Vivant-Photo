import { Link } from 'react-router-dom';

const GalleryCard = ({ path, title, summary, image, imageAlt }) => {
  return (
    <Link to={path} className="gallery-card group" aria-label={`View ${title} gallery`}>
      <div className="gallery-card-media">
        <img
          src={image}
          alt={imageAlt}
          className="gallery-card-image"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="gallery-card-body">
        <h3 className="gallery-card-title">{title}</h3>
        <p className="gallery-card-summary">{summary}</p>
      </div>
    </Link>
  );
};

export default GalleryCard;
