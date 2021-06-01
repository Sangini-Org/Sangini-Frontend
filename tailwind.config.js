module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
      700: '700px',
      '1/3': '33.333%',
      full: '100%',
    },
  },
  experimental: {
    applyComplexClasses: true,
  },
};
