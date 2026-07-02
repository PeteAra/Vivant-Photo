export const SITE_URL = 'https://vivant-photo.vercel.app';
export const SITE_NAME = 'Michaela Vivant Photography';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const canonicalUrl = (path) =>
  path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;

export const PAGE_META = {
  home: {
    path: '/',
    title: `${SITE_NAME} | Portraits, Weddings & Boudoir`,
    description:
      'Michaela Vivant is a portrait, wedding, and boudoir photographer capturing real, unposed moments. Browse galleries, view pricing, and book your session.',
  },
  weddings: {
    path: '/weddings',
    title: `Wedding Photography | ${SITE_NAME}`,
    description:
      'Browse Michaela Vivant\'s wedding photography portfolio — real laughs, happy tears, and unposed moments from unforgettable wedding days.',
  },
  engagement: {
    path: '/engagement',
    title: `Engagement Photography | ${SITE_NAME}`,
    description:
      'Engagement session photography by Michaela Vivant. Romantic, candid portraits that celebrate your story and feel effortless.',
  },
  families: {
    path: '/families',
    title: `Family Photography | ${SITE_NAME}`,
    description:
      'Family portrait photography by Michaela Vivant. Natural, fun sessions that capture your family\'s real personalities and connections.',
  },
  seniors: {
    path: '/seniors',
    title: `Senior Portraits | ${SITE_NAME}`,
    description:
      'Senior portrait photography by Michaela Vivant. Creative, personalized sessions that celebrate your milestone year in style.',
  },
  boudoir: {
    path: '/boudoir',
    title: `Boudoir Photography | ${SITE_NAME}`,
    description:
      'Boudoir photography by Michaela Vivant. Intimate, empowering portraits in a comfortable session designed to boost confidence.',
  },
  pricing: {
    path: '/pricing',
    title: `Photography Pricing | ${SITE_NAME}`,
    description:
      'View photography session pricing and packages from Michaela Vivant — weddings, portraits, boudoir, and more.',
  },
  inquire: {
    path: '/inquire',
    title: `Book a Session | ${SITE_NAME}`,
    description:
      'Contact Michaela Vivant to book your portrait, wedding, or boudoir session. Send an inquiry and let\'s plan something fun.',
  },
};
