<template>
  <div class="sticky top-0 z-50">
    <!-- Header Responsive -->
    <div class="bg-rojo py-2 px-4 flex justify-between md:hidden">
      <div class="p-1 bg-white">
        <img class="h-10" src="logo.jpg" alt="">
      </div>
      
      <button @click="menu = !menu">
        <img class="h-8" src="icon-burger.svg" alt="icon" />
      </button>
    </div>
    <div v-if="menu" class="bg-rojo md:hidden absolute z-20 w-full">
      <LinksResponsive title="Nosotros" />
      <LinksResponsive title="Contacto" />
      <LinksResponsive title="Iniciar Sesión" />
      <div class="px-4 py-2">
        <nuxt-link to="#">
          <img class="h-10" src="store-responsive.svg" alt="logo" />
        </nuxt-link>
      </div>
    </div>

    <!-- Header full Screen -->
    <div class="bg-rojo hidden md:flex md:justify-between px-4 py-2  lg:px-8 ">
      <div class="p-1 bg-white rounded">
        <img class="h-10 lg:h-14" src="logo.jpg" alt="">
      </div>
      <div class="flex py-2 mt-2">
        <img class="h-5 mt-2 -mr-7 z-20" src="search.svg" alt="busqueda" />
        <input class="w-40 lg:w-80 xl:w-96 px-10  focus:outline-none border-r-1" type="text" />
      </div>
      <div class="hidden md:flex md:items-center">
        <div class="flex items-center">
          <nuxt-link to="#" >
            <font-awesome-icon style="font-size: 25px;" :icon="['fas', 'users']" class="text-white h-10 w-10 -mr-2" />
          </nuxt-link>
          <LinksHome title="Nosotros"/>
        </div>
        <div class="flex items-center">
          <nuxt-link to="#" >
            <font-awesome-icon style="font-size: 25px;" :icon="['fas', 'address-book']" class="text-white h-10 w-10 -mr-2" />
          </nuxt-link>
          <LinksHome title="Contacto"/>
        </div>
        <div class="flex items-center bg-azul rounded px-2">
          <nuxt-link to="#" >
            <font-awesome-icon style="font-size: 25px;" :icon="['fas', 'lock']" class="text-white h-10 w-10 -mr-2" />
          </nuxt-link>
          <LinksHome title="Iniciar Sesión"/>
        </div>
        
        <div class="px-4 py-2 rounded">
          <nuxt-link to="#">
            <font-awesome-icon style="font-size: 30px;" :icon="['fas', 'shopping-cart']" class="text-white h-10 w-10 -mr-2" />
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
