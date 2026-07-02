import { Helmet } from 'react-helmet-async';

const verificationToken = process.env.REACT_APP_GOOGLE_SITE_VERIFICATION;

const SiteVerification = () => {
  if (!verificationToken) {
    return null;
  }

  return (
    <Helmet>
      <meta name="google-site-verification" content={verificationToken} />
    </Helmet>
  );
};

export default SiteVerification;
