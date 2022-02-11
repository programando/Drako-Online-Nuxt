<template>
  <div>
    <Header />
    <div class="grid md:grid-cols-3 lg:grid-cols-10">
      <div class="flex justify-center px-8 py-10 lg:col-span-2">
        <FiltroProducto />
      </div>

      <div
        class="grid grid-cols-1 py-10 sm:grid-cols-2 md:col-span-3 lg:col-span-8 lg:grid-cols-4 2xl:grid-cols-5"
      >
        <div class="" v-for="producto in productos" :key="producto.id">
          <div class="flex justify-center">
            <img class="" src="/productos/1.jpg" alt="" />
          </div>

          <p class="text-center">{{ producto.name }}</p>
          <p class="font-semibold text-center">{{ producto.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import FiltroProducto from "../components/productos/FiltroProducto.vue";

export default {
  name: "Productos",
  components: {
    Header,
    FiltroProducto,
  },

  data() {
    return {
      productos: [
        {
          id: 1,
          name: "Kit aceite para motor",
          price: 600.0,
          img: "https://placebear.com/200/300",
        },
        {
          id: 2,
          name: "Kit aceite para motor",
          price: 600.0,
          img: "https://placebear.com/200/300",
        },
        {
          id: 3,
          name: "Kit aceite para motor",
          price: 600.0,
          img: "https://placebear.com/200/300",
        },
        {
          id: 4,
          name: "Kit aceite para motor",
          price: 600.0,
          img: "https://placebear.com/200/300",
        },
        {
          id: 5,
          name: "Kit aceite para motor",
          price: 600.0,
          img: "https://placebear.com/200/300",
        },
        {
          id: 6,
          name: "Kit aceite para motor",
          price: 600.0,
          img: "https://placebear.com/200/300",
        },
      ],
    };
  },
};
</script>

<style></style>
