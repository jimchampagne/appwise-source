module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#51C5FC',
        },
        secondary: {
          default: '#1b5b68',
        },
        background: {
          default: '#2c3035',
        }
      },
      fontFamily: {
        flanders: ['FlandersArtSans', 'sans-serif'],
        serif: ['FlandersArtSerif', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
