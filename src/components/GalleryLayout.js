import SubNav from './SubNav';
import PageMeta from './PageMeta';
import useGalleryRoute from '../hooks/useGalleryRoute';
import { PAGE_META } from '../seo/pageMeta';

const GalleryLayout = ({ pageKey, iframeTitle, iframeSrc, iframeAriaLabel }) => {
  useGalleryRoute();

  return (
    <section className="section">
      <PageMeta {...PAGE_META[pageKey]} />
      <SubNav key="subnav" />
      <div className="iframe-container">
        <iframe
          title={iframeTitle}
          className="w-full h-full"
          src={iframeSrc}
          allow="fullscreen"
          aria-label={iframeAriaLabel}
        />
      </div>
    </section>
  );
};

export default GalleryLayout;
