module.exports = {
  mode: 'jit',
  purge: [
     './components/**/*.{vue,js}',
     './layouts/**/*.vue',
     './pages/**/*.vue',
     './plugins/**/*.{js,ts}',
     './nuxt.config.{js,ts}',
   ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
     fontFamily: {
      monserrat: 'Montserrat',
      open     : 'Open+Sans+Condensed',
      },

      colors: {
        rojo: '#ED1C24',
        azul: '#0C1B31',
        
      }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
