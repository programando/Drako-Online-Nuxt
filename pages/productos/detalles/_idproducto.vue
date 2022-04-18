<template>
  <div class="">
    <div class="justify-center pt-20 space-x-20 lg:flex">
      <div class="flex justify-center">
        <img class="h-72" :src="imageProducto" alt="" />
      </div>
      <div>
        <h2 class="text-2xl font-semibold xl:text-3xl">
          {{ Producto.nombre_impreso }}
        </h2>
        <p class="mt-2 text-gray-600">Código: {{ Producto.codproducto }}</p>
        <p class="text-gray-600">OEM: {{ Producto.cod_oem }}</p>
        <div class="flex items-end space-x-2">
          <div class="mt-4 w-64">
            <h3 class="text-sm font-semibold">Ficha técnica</h3>
            <table class="w-full border">
              <tbody>
                <tr class="border text-xs">
                  <td class="w-1/2 px-2 py-1 border-r-2">Ancho</td>
                  <td class="w-1/2 px-2 py-1">{{ Producto.medida_ancho }}</td>
                </tr>
                <tr class="border text-xs">
                  <td class="w-1/2 px-2 py-1 border-r-2">Alto</td>
                  <td class="w-1/2 px-2 py-1">{{ Producto.medida_alto }}</td>
                </tr>
                <tr class="border text-xs">
                  <td class="w-1/2 px-2 py-1 border-r-2">Largo</td>
                  <td class="w-1/2 px-2 py-1">{{ Producto.medida_largo }}</td>
                </tr>
                <tr class="border text-xs">
                  <td class="w-1/2 px-2 py-1 border-r-2">Diámetro</td>
                  <td class="w-1/2 px-2 py-1">
                    {{ Producto.medida_diametro }}
                  </td>
                </tr>
                <tr class="border text-xs">
                  <td class="w-1/2 px-2 py-1 border-r-2">Medida interna</td>
                  <td class="w-1/2 px-2 py-1">{{ Producto.medida_interna }}</td>
                </tr>
                <tr class="border text-xs">
                  <td class="w-1/2 px-2 py-1 border-r-2">Medida externa</td>
                  <td class="w-1/2 px-2 py-1">{{ Producto.medida_externa }}</td>
                </tr>
                <tr class="border text-xs">
                  <td class="w-1/2 px-2 py-1 border-r-2">Peso Kg.</td>
                  <td v-if="Producto.peso_kg > 0" class="w-1/2 px-2 py-1">
                    {{ Producto.peso_kg }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="mt-6">
            <div class="flex">
              <p
                class="text-3xl font-semibold"
                v-if="Producto.precio_oferta > 0"
              >
                {{ Producto.precio_oferta }}
              </p>
              <p class="text-3xl font-semibold">
                {{ Producto.precio_base_format }}
              </p>
            </div>

            <p class="w-40 mt-2 text-center">Cantidad</p>

            <div class="flex items-center space-x-4">
              <div class="flex">
                <button class="px-3 py-1 border">-</button>
                <p class="px-3 py-1 border">1</p>
                <button class="px-3 py-1 border">+</button>
              </div>
              <div class="">
                <button class="py-2 text-white rounded-sm px-6 bg-rojo">
                  Agregar al carro
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- tabs -->
        <div class="flex flex-wrap ancho-tabs mt-4">
          <div class="w-full">
            <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  class="text-xs font-bold uppercase px-3 py-2 shadow-lg rounded block leading-normal"
                  v-on:click="toggleTabs(1)"
                  v-bind:class="{
                    'text-rojo bg-white': openTab !== 1,
                    'text-white bg-rojo': openTab === 1,
                  }"
                >
                  Vehiculos
                </a>
              </li>
              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  class="text-xs font-bold uppercase px-3 py-2 shadow-lg rounded block leading-normal"
                  v-on:click="toggleTabs(2)"
                  v-bind:class="{
                    'text-rojo bg-white': openTab !== 2,
                    'text-white bg-rojo': openTab === 2,
                  }"
                >
                  Envios y devoluciones
                </a>
              </li>
            </ul>
            <div
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
            >
              <div class="px-4 py-5 flex-auto h-48">
                <div class="tab-content tab-space">
                  <div
                    v-bind:class="{
                      hidden: openTab !== 1,
                      block: openTab === 1,
                    }"
                  >
                    <p>
                      Collaboratively administrate empowered markets via
                      plug-and-play networks. Dynamically procrastinate B2C
                      users after installed base benefits.
                      <br />
                      <br />
                      Dramatically visualize customer directed convergence
                      without revolutionary ROI.
                    </p>
                  </div>
                  <div
                    v-bind:class="{
                      hidden: openTab !== 2,
                      block: openTab === 2,
                    }"
                  >
                    <p>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas.
                      <br />
                      <br />
                      Dynamically innovate resource-leveling customer service
                      for state of the art customer service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- sliders -->
      </div>
      
    </div>
    <div
        class="px-10 mt-4 text-lg font-bold text-center lg:text-left xl:px-60"
      >
        <h2 class="text-xl md:text-2xl">Respuestos Relacionados</h2>
        <ProductosMasVendidos />
        <div class="my-10 border-b-2"></div>
      </div>
  </div>
</template>

<script>
import Productos from "@/models/Productos";
import ProductosMasVendidos from "@/components/productos/productosMasVendidos.vue";

export default {
  name: "ProductoDetalles",
  layout: "default",
  components: {
    ProductosMasVendidos,
  },
  data() {
    return {
      hola: "",
      Producto: [],
      imageProducto: "",

      openTab: 1,
    };
  },
  mounted() {
    Productos.buscarPorIdProducto(this.$route.params.idproducto).then(
      (response) => {
        this.Producto = response.data[0];
        this.imageProducto = this.Producto.imagenes[0]._240x240;
        console.log(this.imageProducto);
      }
    );
  },

  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>
<style>
.ancho-tabs {
  width: 36rem;
}
</style>
