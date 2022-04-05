<template>
  <div
      class="flex items-center justify-center h-screen bg-center bg-no-repeat bg-cover font-Montserrat"
      style="background-image: url('/images/background.jpg')"
    >
      <div class="w-6/12 text-center text-white ">
        <h2 class="text-5xl">Oops!</h2>
        <h2 class=" text-9xl">404</h2>
        <p class="px-8 text-xl">La página que estás buscando no existe o fue eliminada. Puedes volver a la 
        <nuxt-link class="text-celesteClaro" to="/">
            página de incio
        </nuxt-link>  
        y continuar navegando o <nuxt-link class="text-celesteClaro" to="/clientes/contact">contactáte con nosotros</nuxt-link></p>
      </div>
  </div>
</template>

<script>
export default {
  name:'errorLayout',
  layout: 'blank-layout'
}
</script>

<style>

</style>