import { Helmet } from 'react-helmet-async';
import {
  SITE_NAME,
  canonicalUrl,
  DEFAULT_OG_IMAGE,
} from '../seo/pageMeta';

const PageMeta = ({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}) => {
  const url = canonicalUrl(path);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default PageMeta;
