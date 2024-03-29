const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  '4k': '2560px',
};

export const devices = {
  xs: `(max-width: ${breakpoints.xs})`,
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xl: `(max-width: ${breakpoints.xl})`,
  '2xl': `(max-width: ${breakpoints['2xl']})`,
  '4k': `(max-width: ${breakpoints['4k']})`,
};

export const colors = {
  backgroundPaper: `background.paper`,
  black: `#000`,
};

export const fonts = {
  consolas: `consolas`,
};
