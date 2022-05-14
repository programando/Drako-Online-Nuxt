<template>
  <div class="sticky top-0 z-50 ">
    <!-- Header Responsive -->
    <div class="flex justify-between px-4 py-2 bg-rojo md:hidden">
      <nuxt-link to="/">
        <img class="h-14" src="/logo.jpg" alt="">
      </nuxt-link>
        
      
      
      <button @click="menu = !menu">
        <img class="h-8" src="/icon-burger.svg" alt="icon" />
      </button>
    </div>
    <div v-if="menu" class="sticky z-20 w-full bg-rojo md:hidden">
      <nuxt-link to="#" class="flex px-4 py-2" >
        <font-awesome-icon style="font-size: 17px;" :icon="['fas', 'store']" class="w-12 h-10 ml-1 -mr-2 text-white" />
        <LinksResponsive title="Producto" to="/productos"/>
      </nuxt-link>  
      <nuxt-link to="#" class="flex px-4 py-2" >
        <font-awesome-icon style="font-size: 17px;" :icon="['fas', 'users']" class="w-10 h-10 -mr-2 text-white" />
        <LinksResponsive title="Nosotros" to="/nosotros" />
      </nuxt-link>
      <nuxt-link to="#" class="flex px-4 py-2" >
        <font-awesome-icon style="font-size: 17px;" :icon="['fas', 'address-book']" class="w-12 h-10 ml-1 -mr-2 text-white" />
        <LinksResponsive title="Contacto" to="/contacto" />
      </nuxt-link>
          
      <!-- <div class="px-4 py-2">
        <nuxt-link to="#">
          <font-awesome-icon style="font-size: 20px;" :icon="['fas', 'shopping-cart']" class="w-10 h-10 -mr-2 text-white" />
        </nuxt-link>
      </div> -->
    </div>

    <!-- Header full Screen -->
    <div class="hidden px-4 bg-rojo md:flex md:justify-between lg:px-8 ">
      <nuxt-link to="/">
        <img class="h-14 lg:h-20" src="/logo.jpg" alt="">
      </nuxt-link>
    <!--  <div class="flex py-4 mt-2">
        <img class="z-20 h-5 mt-2 -mr-7" src="/search.svg" alt="busqueda" />
        <input v-model="textoBusqueda"  @keypress.13="iniciarBusquedaProductos"
              class="w-40 px-10 lg:w-80 xl:w-96 focus:outline-none border-r-1" type="text" placeholder="Buscar producto" />
      </div>
      -->
      <div class="hidden space-x-4 md:flex md:items-center">
        <div class="flex items-center">
          <div class="flex items-center px-2 rounded ">
          <nuxt-link to="#" >
            <font-awesome-icon style="font-size: 20px;" :icon="['fas', 'store']" class="w-10 h-10 -mr-2 text-white" />
          </nuxt-link>
          <LinksHome title="Productos" to="/productos"/>
        </div>
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
        
        
        <div class="relative px-4 py-2 rounded">
          
          <nuxt-link to="/productos/carrito">
            <p class="absolute right-0 px-2 text-lower-xs py-1 bg-white rounded-full text-black">{{ getpedidoCantidadTotal }}</p>
            <font-awesome-icon style="font-size: 25px;" :icon="['fas', 'shopping-cart']" class="w-10 h-10 mr-2 text-white" />
          </nuxt-link>

        </div> 

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LinksResponsive from "../components/comunes/LinksResponsive.vue";
import LinksHome from "../components/comunes/LinksHome.vue";
    export default {
      name: "Header",
      components: {
        LinksResponsive,
        LinksHome
      },
      data() {
        return {
          menu: false,
          textoBusqueda:''
        };
      },
        computed: {
          ...mapGetters("carrito", [
            "getpedidoCantidadTotal",
            // Here you can import other getters from the products.js
          ])
        },
      methods: {
          iniciarBusquedaProductos () {
              if ( this.textoBusqueda.length == 0) { return };
              //this.$router.replace({ path: '/productos/?textoBusqueda='+this.textoBusqueda });

              this.$router.push({ path: '/productos/?textoBusqueda='+this.textoBusqueda  });
          }
      }

    };
</script>

<style></style>
