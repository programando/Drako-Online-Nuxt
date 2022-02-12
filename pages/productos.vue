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

          <p class="text-center ">{{ producto.name }}</p>
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
          name: "PROROYAL TAPA VÁLVULAS A VÁLVULA MANGUERA FLUJO AIRE  ",
          price: 600.000,
          img: "https://placebear.com/200/300",
        },
        {
          id: 2,
          name: "KIT CLUTCH VOLKWAGEN GOLF CROSS FOX GOL POLO 1.6L  <2015 / SEAT IBIZA CORDOBA 1.6L GOL MN (200MM- 28 ESTR",
          price: 600.000,
          img: "https://placebear.com/200/300",
        },
        {
          id: 3,
          name: "PASTILLA DEL MAZDA 3 04/07 PF MAZDA 3-5 05.. / FORD ECO SPORT 12.. - ESCAPE 13..15 4X2- FOCUS II 05..07 / VOLVO C70-S40-V50 05... / MEGANE 05 (10257)",
          price: 600.0,
          img: "https://placebear.com/200/300",
        },
        {
          id: 4,
          name: "Kit aceite para motor",
          price: 600.000,
          img: "https://placebear.com/200/300",
        },
        {
          id: 5,
          name: "CAMPANA FRENO RENAULT SYMBOL - CLIO 1.6 (ABS) - R19 - SANDERO - MEGANE - SYMBOL 09... / NISSAN MICRA 03..10 - NOTE 05...",
          price: 600.000,
          img: "https://placebear.com/200/300",
        },
        {
          id: 6,
          name: "RETEN 40*52*7 POLEA NISSAN SENTRA 16 VALVULAS MONZA, CORSA ACTIVE TRAS VOLKWAGEN GOLF",
          price: 600.000,
          img: "https://placebear.com/200/300",
        },
      ],
    };
  },
};
</script>

<style></style>
