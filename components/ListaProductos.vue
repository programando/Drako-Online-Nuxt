<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:flex justify-center xl:items-center xl:space-x-10 2xl:space-x-16 mt-2">
    <button class="hidden xl:flex">
      <img class="mt-4 hidden xl:flex " src="arrow-izquierda.png" alt="">
    </button>
    <Producto src="productos/1.jpg"/>
    <Producto src="productos/2.jpg"/>
    <Producto src="productos/3.jpg"/>
    <Producto src="productos/4.jpg"/>
    <Producto src="productos/5.jpg"/>
    <button class="hidden xl:flex">
      <img class="mt-4 hidden xl:flex" src="arrow-derecha.png" alt="">
    </button>
    
  </div>
  
</template>

<script>
import Producto from "../components/Producto.vue"
export default {
  name: 'ListaProductos',
  components: {
    Producto
  }
}
</script>

<style>

</style>