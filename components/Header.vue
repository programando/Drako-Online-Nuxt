<template>
  <div class="sticky top-0 z-50">
    <!-- Header Responsive -->
    <div class="flex justify-between px-4 py-2 bg-rojo md:hidden">
      <div class="">
        <img class="h-14" src="logo.jpg" alt="">
      </div>
      
      <button @click="menu = !menu">
        <img class="h-8" src="icon-burger.svg" alt="icon" />
      </button>
    </div>
    <div v-if="menu" class="absolute z-20 w-full bg-rojo md:hidden">
      <nuxt-link to="#" class="flex px-4 py-2" >
        <font-awesome-icon style="font-size: 17px;" :icon="['fas', 'users']" class="w-10 h-10 -mr-2 text-white" />
        <LinksResponsive title="Nosotros" to="/nosotros" />
      </nuxt-link>
      <nuxt-link to="#" class="flex px-4 py-2" >
        <font-awesome-icon style="font-size: 17px;" :icon="['fas', 'address-book']" class="w-12 h-10 ml-1 -mr-2 text-white" />
        <LinksResponsive title="Contacto" to="/contacto" />
      </nuxt-link>
      <!-- <nuxt-link to="#" class="flex px-4 py-2" >
        <font-awesome-icon style="font-size: 17px;" :icon="['fas', 'lock']" class="w-12 h-10 ml-1 -mr-2 text-white" />
        <LinksResponsive title="Iniciar Sesión" to="/inicioSeccion"/>
      </nuxt-link>       -->
      <!-- <div class="px-4 py-2">
        <nuxt-link to="#">
          <font-awesome-icon style="font-size: 20px;" :icon="['fas', 'shopping-cart']" class="w-10 h-10 -mr-2 text-white" />
        </nuxt-link>
      </div> -->
    </div>

    <!-- Header full Screen -->
    <div class="hidden px-4  bg-rojo md:flex md:justify-between lg:px-8 ">
      <div class="">
        <img class="h-14 lg:h-20" src="logo.jpg" alt="">
      </div>
      <div class="flex py-4 mt-2">
        <img class="z-20 h-5 mt-2 -mr-7" src="search.svg" alt="busqueda" />
        <input class="w-40 px-10 lg:w-80 xl:w-96 focus:outline-none border-r-1" type="text" />
      </div>
      <div class="hidden space-x-4 md:flex md:items-center">
        <div class="flex items-center">
          <nuxt-link to="#" >
            <font-awesome-icon style="font-size: 20px;" :icon="['fas', 'users']" class="w-10 h-10 -mr-2 text-white" />
          </nuxt-link>
          <LinksHome title="Nosotros" to="/nosotros"/>
        </div>
        <div class="flex items-center">
          <nuxt-link to="#" >
            <font-awesome-icon style="font-size: 20px;" :icon="['fas', 'address-book']" class="w-10 h-10 -mr-2 text-white" />
          </nuxt-link>
          <LinksHome title="Contacto" to="/contacto"/>
        </div>
        <!-- <div class="flex items-center px-2 rounded bg-azul">
          <nuxt-link to="#" >
            <font-awesome-icon style="font-size: 20px;" :icon="['fas', 'lock']" class="w-10 h-10 -mr-2 text-white" />
          </nuxt-link>
          <LinksHome title="Iniciar Sesión" to="/inicioSeccion"/>
        </div> -->
        
        <!-- <div class="px-4 py-2 rounded">
          <nuxt-link to="#">
            <font-awesome-icon style="font-size: 25px;" :icon="['fas', 'shopping-cart']" class="w-10 h-10 -mr-2 text-white" />
          </nuxt-link>
        </div> -->
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
