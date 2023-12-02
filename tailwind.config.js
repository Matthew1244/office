module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        527: '527px',
        335: '335px',
      },
      height: {
        480: '632px'
      },
      colors: {
        'office': '#D9E3D9',
       
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
