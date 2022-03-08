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
          v-for="producto in productos"
          :key="producto.id"
        >
          <nuxt-link :to="producto.src">
            <div class="relative flex justify-center">
              <p
                v-if="producto.oferta"
                class="absolute left-0 w-20 px-2 py-1 -ml-4 text-center text-white bg-red-800 rounded-sm top-2"
              >
                Oferta
              </p>
              <img class="" src="/productos/1.jpg" alt="" />
            </div>
            <p class="text-gray-700 text-start">{{ producto.name }}</p>
            <p
              class="mt-4 font-semibold"
              :class="{ 'line-through': producto.oferta }"
            >
              {{ producto.price }} $
            </p>
            <p v-if="producto.oferta" class="font-semibold">
              {{ producto.priceOferta }} $
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
        {
          id: 1,
          name: "PROROYAL TAPA VÁLVULAS A VÁLVULA MANGUERA FLUJO AIRE",
          price: 600.0,
          img: "https://placebear.com/200/300",
          oferta: true,
          priceOferta: 500.0,
          src:"/productosDetalles"
        },
        {
          id: 2,
          name: "KIT CLUTCH VOLKWAGEN GOLF CROSS FOX GOL POLO 1.6L",
          price: 600.0,
          img: "https://placebear.com/200/300",
          oferta: false,
          priceOferta: 500.0,
          src:"/productosDetalles"
        },
        {
          id: 3,
          name: "PASTILLA DEL MAZDA 3 04/07 PF MAZDA 3-5 05.. / FORD ECO SPORT",
          price: 600.0,
          img: "https://placebear.com/200/300",
          oferta: true,
          priceOferta: 500.0,
          src:"/productosDetalles"
        },
        {
          id: 4,
          name: "Kit aceite para motor",
          price: 600.0,
          img: "https://placebear.com/200/300",
          oferta: false,
          priceOferta: 500.0,
          src:"/productosDetalles"
        },
        {
          id: 5,
          name: "CAMPANA FRENO RENAULT SYMBOL - CLIO 1.6 (ABS) - R19 - SANDERO",
          price: 600.0,
          img: "https://placebear.com/200/300",
          oferta: true,
          priceOferta: 500.0,
          src:"/productosDetalles"
        },
        {
          id: 6,
          name: "RETEN 40*52*7 POLEA NISSAN SENTRA 16 VALVULAS MONZA",
          price: 600.0,
          img: "https://placebear.com/200/300",
          oferta: true,
          priceOferta: 500.0,
          src:"/productosDetalles"
        },
        {
          id: 7,
          name: "RETEN 40*52*7 POLEA NISSAN SENTRA 16 VALVULAS MONZA",
          price: 600.0,
          img: "https://placebear.com/200/300",
          oferta: true,
          priceOferta: 500.0,
          src:"/productosDetalles"
        },
        {
          id: 8,
          name: "RETEN 40*52*7 POLEA NISSAN SENTRA 16 VALVULAS MONZA",
          price: 600.0,
          img: "https://placebear.com/200/300",
          oferta: true,
          priceOferta: 500.0,
          src:"/productosDetalles"
        },
      ],
    };
  },
};
</script>

<style></style>
