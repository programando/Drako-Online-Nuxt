<template>
  <div class="relative">
    <Header />

    <Slider />

    <div
      class="px-10 mt-4 text-lg font-bold text-center lg:text-left xl:px-32 "
    >
      <h2 class="text-xl md:text-2xl lg:text-3xl">Productos más vendidos</h2>
      <ListaProductos />
      <div class="my-10 border-b-2"></div>
    </div>

    <div
      class="px-10 mt-8 text-lg font-bold text-center lg:text-left xl:px-32 lg:text-2xl"
    >
      <h2 class="text-lg font-bold md:text-2xl">
        Tipos de productos destacados
      </h2>
    </div>
    <div class="flex justify-center mb-4">
      <div
        class="grid justify-center col-span-1 mx-8 mt-10 lg:grid-cols-2 xl:grid-cols-3"
      >
        <div
          v-for="productoDestacado in gruposProductos"
          :key="productoDestacado.idgrupo"
          class="relative flex items-center justify-center mx-10 mt-6 bg-cover w-96"
        >
          <img src="slider/SLIDE3.jpg" alt="" />
          <h2 class="absolute text-white top-20">{{ productoDestacado.nomgrupo }}</h2>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Categorias from "@/components/Categorias.vue";
import Footer from "@/components/comunes/Footer.vue";
import Header from "@/components/Header.vue";
import ListaProductos from "@/components/ListaProductos.vue";
import SelectRespuesto from "@/components/comunes/SelectRespuesto.vue";
import Slider from "@/components/comunes/slider/Slider.vue";
import WsContact from "@/components/comunes/WsContact.vue";
import GruposProductos from "@/models/ProductosGrupos";

export default {
  components: {
    Header,
    Slider,
    ListaProductos,
    SelectRespuesto,
    Categorias,
    Footer,
    WsContact,
  },
  layout: "defaulLayout",
  data: () => ({
    gruposProductos: [],
  }),

  mounted() {
    GruposProductos.destacados().then((response) => {
      this.gruposProductos = response.data;
    });
  },
};
</script>

<style scoped>
.contenedor-principal {
  bottom: 20px;
  right: 0px;
}
</style>
