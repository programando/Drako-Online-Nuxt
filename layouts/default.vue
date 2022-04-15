<template>
  <div>
    <Header />
   
   
    <Nuxt />
    <div class="sticky contenedor-principal">
      <WsContact/>
    </div>

    <Footer />
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
  bottom: 20px;
  right: 0px;
}
</style>
