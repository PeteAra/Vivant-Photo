export const scrollToGalleries = () => {
  const target = document.getElementById('galleries');
  if (!target) return;

  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export const handleGalleriesNavClick = (event, pathname) => {
  if (pathname !== '/') return;

  event.preventDefault();
  scrollToGalleries();
};
