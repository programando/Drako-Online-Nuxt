<template>
  <div>
    <Header />
    <div class="grid md:grid-cols-3 lg:grid-cols-10">
      <div class="px-8 py-10 lg:col-span-2">
        <FiltroProducto />
      </div>

      <div class="grid grid-cols-1 py-10 md:col-span-2 lg:col-span-8 md:grid-cols-3 lg:grid-cols-6">
        
          <ProductoDetalle />
          <ProductoDetalle />
          <ProductoDetalle />
          <ProductoDetalle />
          <ProductoDetalle />
          <ProductoDetalle />
          <ProductoDetalle />
        
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import FiltroProducto from "../components/productos/FiltroProducto.vue";
import ProductoDetalle from "../components/productos/ProductoDetalle.vue";

export default {
  name: "Productos",
  components: {
    Header,
    FiltroProducto,
    ProductoDetalle,
  },
};
</script>

<style></style>
