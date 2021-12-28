<template>
  <div class="relative">
    <Header />
      
      <Slider />
      
    
    <div
      class="px-10 mt-4 text-lg font-bold text-center lg:text-left xl:px-32 lg:text-2xl"
    >
      <h2 class="">Productos mas comprados</h2>
      <ListaProductos />
      <div class="my-10 border-b-2"></div>
    </div>
    <!-- <div
      class="px-4 mt-8 rounded lg:text-left sm:px-8 xl:px-10 bg-azul lg:mx-40"
    >
      <div
        class="flex items-center justify-center pt-2 space-x-6 lg:justify-start"
      >
        <img class="h-8 sm:h-10 lg:pl-10" src="car.png" alt="carro" />
        <p class="text-center text-white sm:text-base lg:text-lg">
          Selecciona tu vehículo para encontrar los respuestos exactos
        </p>
      </div>
      <div
        class="grid grid-cols-1 py-4 text-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6"
      >
        <SelectRespuesto text="Tipo" />
        <SelectRespuesto text="Año" />
        <SelectRespuesto text="Marca" />
        <SelectRespuesto text="Cilindraje" />
        <SelectRespuesto text="Modelo" />
        <div class="justify-start 2xl:flex">
          <button
            class="w-40 px-4 py-3 mt-4 text-sm text-white rounded bg-rojo 2xl:-mt-10 lg:text-base 2xl:text-lg 2xl:w-40"
          >

            Buscar en Drako
          </button>
        </div>
      </div>
    </div> -->
    <div
      class="px-10 mt-8 text-lg font-bold text-center lg:text-left xl:px-32 lg:text-2xl"
    >
      <h2 class="text-lg font-bold md:text-2xl">Categorias</h2>
    </div>
    <div class="flex justify-center mb-4">
      <div
        class="grid justify-center col-span-1 mx-8 mt-10 lg:grid-cols-2 xl:grid-cols-3"
      >
        <Categorias />
        <Categorias />
        <Categorias />
        <Categorias />
        <Categorias />
        <Categorias />
      </div>
    </div>
    <Footer />
    <div class="sticky contenedor-principal">
      <WsContact/>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Slider from "../components/comunes/slider/Slider.vue";
import ListaProductos from "../components/ListaProductos.vue";
import SelectRespuesto from "../components/comunes/SelectRespuesto.vue";
import Categorias from "../components/Categorias.vue";
import Footer from "../components/comunes/Footer.vue";
import WsContact from "../components/comunes/WsContact.vue"
export default {
  components: {
    Header,
    Slider,
    ListaProductos,
    SelectRespuesto,
    Categorias,
    Footer,
    WsContact
  },
};
</script>

<style scoped>
.contenedor-principal {
  bottom: 20px;
  right: 0px;
}
</style>
