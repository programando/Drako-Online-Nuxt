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
          //rojo: '#FF141F',
          rojo: '#FF060F',
          azul: '#0C1B31',
          
        }
    },
  },
  plugins: [],
}
