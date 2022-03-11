<template>
  <div>
    <Header />
    <div class="grid md:grid-cols-3 lg:grid-cols-10">
      <div class="flex justify-center px-8 py-10 lg:col-span-2">
        <FiltroProducto />
      </div>

      <div
        class="grid justify-center grid-cols-1 py-10 space-x-2 sm:grid-cols-2 md:col-span-3 lg:col-span-8 lg:grid-cols-4 2xl:grid-cols-5 xl:space-x-4"
      >
        <div
          class="w-11/12 p-4 mx-auto mt-4 cursor-pointer hover:border hover:shadow-lg"
          v-for="(producto) in productos" :key="producto.idproducto" 
        >
          <nuxt-link to="/">
            <div class="relative flex justify-center">
              <p
                v-if="producto.precio_oferta"
                class="absolute left-0 w-20 px-2 py-1 -ml-4 text-center text-white bg-red-800 rounded-sm top-2"
              >
                Oferta
              </p>
              <img class="" v-for="imagen in producto.imagenes.slice(0,1)" :key="imagen.idregistro"  alt="" :src='imagen._240x240' />
                          
            </div>
            <p class="text-gray-700 text-start">{{ producto.nombre_impreso}}</p>
            <p
              class="mt-4 font-semibold"
              :class="{ 'line-through': producto.precio_oferta }"
            >
              {{ producto.precio_base }} $
            </p>
            <p v-if="producto.precio_oferta" class="font-semibold">
              {{ producto.precio_oferta }} $
            </p>
          </nuxt-link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/comunes/Footer.vue";
import FiltroProducto from "../components/productos/FiltroProducto.vue";
import Productos from "@/models/Productos";

export default {
  name: "Productos",
  components: {
    Header,
    FiltroProducto,
    Footer,
  },

  data() {
    return {
      productos: [

      ],
    };
  },

  mounted() {
      Productos.listaGeneral()
           .then( response => {
                      //console.log ( response.data.data);
                      this.productos = response.data.data
                //console.log( this.productos );
             })
      }
};
</script>

<style></style>
