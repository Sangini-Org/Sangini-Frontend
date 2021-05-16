module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      1: '1px',
      1.5: '1.5px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
    minHeight: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      500: '500px',
      '1/3': '33.333%',
      full: '100%',
    },
    maxHeight: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      700: '700px',
      500: '500px',
      400: '400px',
      '1/3': '33.333%',
      full: '100%',
    },
    maxWidth: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      500: '500px',
      '1/3': '33.333%',
      full: '100%',
    },
  },
  experimental: {
    applyComplexClasses: true,
  },
};
