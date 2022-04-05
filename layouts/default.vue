<template>
  <div>
   
   
   
    <Nuxt />
    <div class="sticky contenedor-principal">
      <WsContact/>
    </div>
  </div>
</template>

<script>
import WsContact from '@/components/comunes/WsContact.vue'
  export default {
     name:'defaulLayout',
      components: { WsContact},
  }
  </script>

<style>
 .contenedor-principal {
  bottom: 20px;
  right: 0px;
}
</style>
