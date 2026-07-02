import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  PAGE_META,
  canonicalUrl,
} from './pageMeta';

const SOCIAL_PROFILES = [
  'https://www.instagram.com/michaelavivantphoto',
  'https://www.facebook.com/michaelavivantphoto',
];

export const homeStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#business`,
      name: SITE_NAME,
      url: canonicalUrl('/'),
      image: DEFAULT_OG_IMAGE,
      description: PAGE_META.home.description,
      sameAs: SOCIAL_PROFILES,
      founder: { '@id': `${SITE_URL}/#person` },
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Michaela Vivant',
      jobTitle: 'Photographer',
      url: canonicalUrl('/'),
      image: DEFAULT_OG_IMAGE,
      sameAs: SOCIAL_PROFILES,
      worksFor: { '@id': `${SITE_URL}/#business` },
    },
  ],
};
