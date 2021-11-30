<template>
  <div class="relative">
    <!-- Header Responsive -->
    <div class="bg-rojo py-2 px-4 flex justify-between md:hidden">
      <p class="text-white text-lg">DRAKO</p>
      <button @click="menu = !menu">
        <img class="h-8" src="icon-burger.svg" alt="icon" />
      </button>
    </div>
    <div v-if="menu" class="bg-rojo md:hidden absolute z-20 w-full">
      <LinksResponsive title="Contacto" />
      <LinksResponsive title="Nosotros" />
      <LinksResponsive title="Iniciar Sesión" />
      <div class="px-4 py-2">
        <nuxt-link to="#">
          <img class="h-10" src="store-responsive.svg" alt="logo" />
        </nuxt-link>
      </div>
    </div>

    <!-- Header full Screen -->
    <div class="bg-rojo hidden md:flex md:justify-between px-4  lg:px-8 py-4">
      <p class="text-white text-4xl py-2">DRAKO</p>
      <div class="flex py-2 mt-2">
        <img class="h-5 mt-2 -mr-7 z-20" src="search.svg" alt="busqueda" />
        <input class="w-40 lg:w-80 xl:w-96 px-10  focus:outline-none border-r-1" type="text" />
      </div>
      <div class="hidden md:flex md:items-center">
        <LinksHome title="Contacto" />
        <LinksHome title="Nosotros" />
        <LinksHome title="Iniciar Sesión" fondo="bg-azul"/>
        <div class="px-4 py-2">
          <nuxt-link to="#">
            <img class="md:h-10 lg:h-12" src="store-responsive.svg" alt="logo" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LinksResponsive from "../components/comunes/LinksResponsive.vue";
import LinksHome from "../components/comunes/LinksHome.vue";
export default {
  components: {
    LinksResponsive,
    LinksHome
  },
  data() {
    return {
      menu: false,
    };
  },
};
</script>

<style></style>
