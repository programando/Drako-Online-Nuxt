<template>
  <div>
    <Header />
   
   
    <Nuxt />
    

    <Footer />
    <div class="sticky contenedor-principal">
      <WsContact/>
    </div>
  </div>
</template>

<script>
import WsContact from '@/components/comunes/WsContact.vue'
import Header from "@/components/Header.vue";
import Footer from "@/components/comunes/Footer.vue";

  export default {
     name:'defaulLayout',
      components: { WsContact ,  Header,  Footer},
  }
  </script>

<style>
      .contenedor-principal {
        bottom: 40px;
        right: 0px;
        z-index: 100;
      }

    
      /* exact link will show the primary color for only the exact matching link */
      a.nuxt-link-exact-active {
        text-decoration-line: underline;
        color: white;
      }

</style>
