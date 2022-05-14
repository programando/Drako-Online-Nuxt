module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monserrat: 'Montserrat',
        open     : 'Open+Sans+Condensed',
        },
  
        colors: {
          rojo: '#FF141F',
          azul: '#0C1B31',
          
        },
        fontSize: {
          'upperxs': '.65rem',
          'lower-xs': '.55rem',
          'text-sm': '0.75rem'
        },
    },
  },
  plugins: [],
}
