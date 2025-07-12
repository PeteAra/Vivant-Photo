export const transition1 = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
  // ease: [0.43, 0.13, 0.23, 0.96],
};

// export const transition2 = {
//   duration: 1.8,
//   // ease: [0.6, 0.01, -0.05, 0.9],
//   ease: [0.43, 0.13, 0.23, 0.96],
// };

// export const transition1 = { duration: 0.5, ease: 'easeInOut' };
export const transition2 = { duration: 0.3, ease: 'easeInOut' };

export const transition3 = {
  initial: { opacity: 0, y: '100vh' },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: '100vh' },
  transition: {
    duration: 0.8,
    ease: [0.25, 0.46, 0.45, 0.94],
  }
};