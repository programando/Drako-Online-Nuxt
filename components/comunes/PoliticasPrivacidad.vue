<template>
  <button @click="getPolitica">
    <p :class="setColor">{{text}}</p>
  </button>
  
</template>

<script>
export default {
  name: 'PoliticasPrivacidad',
  props : {
    text: String,
    colortext: String
  },

  methods:{
        getPolitica() {
            let fileName = "/files/politica-tratamientos-datos-drako-autopartes.pdf";
            window.open(fileName, "_blank");
        }
  },

  computed: {
    setColor() {
      switch (this.colorText) {
        case 'primary':
          return 'text-white'
          break;
        case 'secondary':
          return 'text-rojo'
          break;
      
        default:
          break;
      }
    }
  }
}
</script>

<style>

</style>