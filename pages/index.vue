<template>
  <div>
    <Header />
    <client-only>
      <Slider />
    </client-only>
    <div class="text-center lg:text-left px-10 mt-8 text-lg font-bold  xl:px-32 lg:text-2xl">
      <h2 class="lg:ml-14 xl:ml-32 2xl:ml-48">Productos mas comprados</h2>
      <ListaProductos/>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Slider from "../components/comunes/slider/Slider.vue";
import ListaProductos from "../components/ListaProductos.vue";
export default {
  components: {
    Header,
    Slider,
    ListaProductos,
  },
};
</script>
