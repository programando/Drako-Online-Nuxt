<template>
  <div>
    <Header />
    <client-only>
      <Slider />
    </client-only>
    <div
      class="text-center lg:text-left px-10 mt-8 text-lg font-bold xl:px-32 lg:text-2xl"
    >
      <h2 class="lg:ml-14 xl:ml-32 2xl:ml-48">Productos mas comprados</h2>
      <ListaProductos />
      <div class="border-b-2 mx-10 my-10"></div>
    </div>
    <div
      class="lg:text-left px-4 sm:px-8 mt-8 xl:px-10 bg-azul lg:mx-40 rounded"
    >
      <div
        class="flex space-x-6 items-center justify-center pt-2 lg:justify-start"
      >
        <img class="h-8 sm:h-10 lg:pl-10" src="car.png" alt="carro" />
        <p class="text-white text-center sm:text-base lg:text-lg">
          Selecciona tu vehículo para encontrar los respuestos exactos
        </p>
      </div>
      <div
        class="text-center py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6"
      >
        <SelectRespuesto text="Tipo" />
        <SelectRespuesto text="Año" />
        <SelectRespuesto text="Marca" />
        <SelectRespuesto text="Cilindraje" />
        <SelectRespuesto text="Modelo" />
        <div class="2xl:flex justify-start">
          <button
            class="bg-rojo w-40 mt-4 2xl:-mt-10 rounded py-3 px-4 text-white text-sm lg:text-base 2xl:text-lg 2xl:w-40"
          >

            Buscar en Drako
          </button>
        </div>
      </div>
    </div>
    <div class="mt-8 flex justify-center lg:justify-start lg:ml-24 xl:ml-56 2xl:ml-80 ">
      <h2 class="text-lg md:text-2xl font-bold">Categorias</h2>
    </div>
    <div class="flex justify-center">
      <div class="grid col-span-1 mx-8  lg:grid-cols-2 xl:grid-cols-3 justify-center mt-10">
        <Categorias />
        <Categorias />
        <Categorias />
        <Categorias />
        <Categorias />
        <Categorias />
        
      </div>
    </div>
    
   
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Slider from "../components/comunes/slider/Slider.vue";
import ListaProductos from "../components/ListaProductos.vue";
import SelectRespuesto from "../components/comunes/SelectRespuesto.vue";
import Categorias from "../components/Categorias.vue"
export default {
  components: {
    Header,
    Slider,
    ListaProductos,
    SelectRespuesto,
    Categorias
  },
};
</script>
