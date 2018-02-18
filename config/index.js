const sizes = {
  small: '600px',
  medium: '1000px',
  large: '1200px',
  xlarge: '1390px',
};

const mediaQueries = Object.keys(sizes).reduce((obj, size) => {
  obj[size] = `@media only screen and (max-width: ${sizes[size]})`;
  return obj;
}, {});

export { mediaQueries };
