module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      blackish: '#000',
      secondary: '#ffed4a',
      danger: '#e3342f',
    }),
    extend: {
      backgroundImage: (theme) => ({
        landing: "url('https://i.ibb.co/vXqDmnh/background.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
