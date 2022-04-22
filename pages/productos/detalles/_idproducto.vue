<template>
  <div class="relative" v-on-clickaway="closeModal">
    <div class="z-50 flex justify-center bg-white ">
      <div class="flex items-center px-2 py-1 mt-2 border-2 w-96">
        <img class="z-20 h-5 -mr-7" src="/search.svg" alt="busqueda" />
        <input
          v-model="textBuscarProducto"
          @keypress.13="iniciarBusquedaProductos"
          class="w-40 px-10 lg:w-80 xl:w-96 focus:outline-none border-r-1"
          type="text"
          placeholder="Buscar producto"
        />
      </div>
    </div>
    <div class="justify-center pt-20 space-x-10 lg:flex">
      <div class="flex justify-center">
        <div class="container ">
          <img class="w-72 h-72"
            v-for="imagen in Producto.imagenes"
            :key="imagen.idregistro"
            alt=""
            :src="imagen._480x480"
          />
        </div>
      </div>
      <div>
        <h2 class="text-2xl font-semibold xl:text-3xl">
          {{ Producto.nombre_impreso }}
        </h2>
        <div class="flex space-x-40">
          <div>
          <p class="mt-2 text-gray-600">Código: {{ Producto.codproducto }}</p>
          <p class="text-gray-600">OEM: {{ Producto.cod_oem }}</p>
        </div>
        <div class="flex items-center space-x-4">
          <p class="text-sm">Tiempo de reserva: 2 horas</p>
            <div class="flex flex-wrap">
                <div class="w-full text-center">
                  <button
                    ref="btnRef"
                    v-on:mouseenter="toggleTooltip()"
                    v-on:mouseleave="toggleTooltip()"
                    class="px-2 py-1 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-white border rounded-full shadow outline-none active:bg-pink-600 hover:shadow-lg focus:outline-none"
                    type="button"
                  >
                    <img class="h-3" src="/help.svg" alt="">
                  </button>
                  <div
                    ref="tooltipRef"
                    v-bind:class="{ hidden: !tooltipShow, block: tooltipShow }"
                    class="z-50 block max-w-xs ml-3 text-sm font-normal leading-normal text-left no-underline break-words border-0 rounded-lg bg-rojo"
                  >
                    <div>
                      <div
                        class="p-3 mb-0 font-semibold text-white uppercase border-b border-solid rounded-t-lg opacity-75 bg-rojo border-slate-100"
                      >
                        pink tooltip title
                      </div>
                      <div class="p-3 text-white">
                        And here's some amazing content. It's very engaging.
                        Right?
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        </div>
        
        
        <div class="flex items-end space-x-2">
          <div class="mt-4 ">
            <h3 class="text-sm font-semibold">Ficha técnica</h3>
            <table class="w-full border">
              <tbody>
                <tr class="text-xs border">
                  <td class="px-2 py-1 border-r-2 w-28 ">Ancho</td>
                  <td class="w-16 px-2 py-1 ">{{ Producto.medida_ancho }}</td>
                </tr>
                <tr class="text-xs border">
                  <td class="px-2 py-1 border-r-2 w-28 ">Alto</td>
                  <td class="w-16 px-2 py-1 ">{{ Producto.medida_alto }}</td>
                </tr>
                <tr class="text-xs border">
                  <td class="px-2 py-1 border-r-2 w-28 ">Largo</td>
                  <td class="w-16 px-2 py-1 ">{{ Producto.medida_largo }}</td>
                </tr>
                <tr class="text-xs border">
                  <td class="px-2 py-1 border-r-2 w-28 ">Diámetro</td>
                  <td class="w-16 px-2 py-1 ">
                    {{ Producto.medida_diametro }}
                  </td>
                </tr>
                <tr class="text-xs border">
                  <td class="px-2 py-1 border-r-2 w-28 ">Medida interna</td>
                  <td class="w-16 px-2 py-1 ">{{ Producto.medida_interna }}</td>
                </tr>
                <tr class="text-xs border">
                  <td class="px-2 py-1 border-r-2 w-28 ">Medida externa</td>
                  <td class="w-16 px-2 py-1 ">{{ Producto.medida_externa }}</td>
                </tr>
                <tr class="text-xs border">
                  <td class="px-2 py-1 border-r-2 w-28 ">Peso Kg.</td>
                  <td v-if="Producto.peso_kg > 0" class="px-2 py-1 ">
                    {{ Producto.peso_kg }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="mt-6">
            <div class="flex justify-center space-x-4">
              <p
                class="text-3xl font-semibold"
                :class="{
                  'line-through text-gray-500': Producto.precio_oferta,
                }"
              >
                {{ Producto.precio_base_format }}
              </p>
              <p
                class="text-3xl font-semibold"
                v-if="Producto.precio_oferta > 0"
              >
                {{ Producto.precio_oferta }}
              </p>
            </div>
            <div class="flex items-center mt-4 space-x-2">
              <p class="mt-2 ml-4">Cantidad</p>
            </div>

            <div class="flex items-center space-x-4">
              <div class="flex mt-2">
                <button class="px-3 py-1 border">-</button>
                <p class="px-3 py-1 border">1</p>
                <button class="px-3 py-1 border">+</button>
              </div>
              <div class="mt-2">
                <button
                  @click="modal = true"
                  class="px-6 py-2 text-white rounded-sm bg-rojo"
                >
                  Agregar al carro
                </button>
              </div>
            </div>
          </div>
        </div>

        

        <!-- sliders -->
      </div>
      
    </div>
    <!-- tabs -->
        <div class="flex justify-center mt-4 ">
          <div class="">
            <ul class="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none">
              <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
                <a
                  class="block px-3 py-2 text-xs font-bold leading-normal uppercase rounded shadow-lg"
                  v-on:click="toggleTabs(1)"
                  v-bind:class="{
                    'text-rojo bg-white': openTab !== 1,
                    'text-white bg-rojo': openTab === 1,
                  }"
                >
                  Vehiculos
                </a>
              </li>
              <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
                <a
                  class="block px-3 py-2 text-xs font-bold leading-normal uppercase rounded shadow-lg"
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
              class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
            >
              <div class="flex-auto h-48 px-4 py-5">
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
    
    <!-- modal -->
    <div
      v-if="modal"
      class="absolute top-0 z-20 flex justify-center w-full h-full px-20 py-10 transition-opacity bg-gray-500 bg-opacity-75"
    >
      <div class="relative px-10 py-8">
        <div
          class="relative justify-center px-10 py-10 space-x-10 bg-white lg:flex"
        >
          <div class="container mx-auto">
            <div>
              <img class="w-64 h-64"
                v-for="imagen in Producto.imagenes"
                :key="imagen.idregistro"
                alt=""
                :src="imagen._240x240"
              />
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-semibold xl:text-3xl">
              {{ Producto.nombre_impreso }}
            </h2>
            <p class="mt-2 text-gray-600">Código: {{ Producto.codproducto }}</p>
            <p class="text-gray-600">OEM: {{ Producto.cod_oem }}</p>
            <div class="flex items-end space-x-2">
              <div class="w-64 mt-4">
                <h3 class="text-sm font-semibold">Ficha técnica</h3>
                <table class="w-full border">
                  <tbody>
                    <tr class="text-xs border">
                      <td class="w-1/2 px-2 py-1 border-r-2">Ancho</td>
                      <td class="w-1/2 px-2 py-1">
                        {{ Producto.medida_ancho }}
                      </td>
                    </tr>
                    <tr class="text-xs border">
                      <td class="w-1/2 px-2 py-1 border-r-2">Alto</td>
                      <td class="w-1/2 px-2 py-1">
                        {{ Producto.medida_alto }}
                      </td>
                    </tr>
                    <tr class="text-xs border">
                      <td class="w-1/2 px-2 py-1 border-r-2">Largo</td>
                      <td class="w-1/2 px-2 py-1">
                        {{ Producto.medida_largo }}
                      </td>
                    </tr>
                    <tr class="text-xs border">
                      <td class="w-1/2 px-2 py-1 border-r-2">Diámetro</td>
                      <td class="w-1/2 px-2 py-1">
                        {{ Producto.medida_diametro }}
                      </td>
                    </tr>
                    <tr class="text-xs border">
                      <td class="w-1/2 px-2 py-1 border-r-2">Medida interna</td>
                      <td class="w-1/2 px-2 py-1">
                        {{ Producto.medida_interna }}
                      </td>
                    </tr>
                    <tr class="text-xs border">
                      <td class="w-1/2 px-2 py-1 border-r-2">Medida externa</td>
                      <td class="w-1/2 px-2 py-1">
                        {{ Producto.medida_externa }}
                      </td>
                    </tr>
                    <tr class="text-xs border">
                      <td class="w-1/2 px-2 py-1 border-r-2">Peso Kg.</td>
                      <td v-if="Producto.peso_kg > 0" class="w-1/2 px-2 py-1">
                        {{ Producto.peso_kg }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="mt-6">
                <div class="flex space-x-4">
                  <p
                    class="text-3xl font-semibold"
                    v-if="Producto.precio_oferta > 0"
                  >
                    {{ Producto.precio_oferta }}
                  </p>
                  <p
                    class="text-3xl font-semibold"
                    :class="{
                      'line-through text-gray-500': Producto.precio_oferta,
                    }"
                  >
                    {{ Producto.precio_base_format }}
                  </p>
                </div>
                <div class="items-center space-x-2">
                  <p class="mt-2 text-center">Cantidad</p>
                </div>

                <div class="flex items-center justify-center space-x-4">
                  <div class="flex mt-2">
                    <button class="px-3 py-1 border">-</button>
                    <p class="px-3 py-1 border">1</p>
                    <button class="px-3 py-1 border">+</button>
                  </div>
                </div>
                <p class="mt-2 text-sm">Tiempo de reserva: 2 horas</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full px-10 py-2 bg-white">
          <nuxt-link to="/tienda/"
            
          >
            <button class="w-full px-6 py-2 text-white rounded-sm bg-rojo">
              Ir a la Tienda
            </button>
           
          </nuxt-link>
        </div>
        <div class="px-10 py-2 bg-white">
          <button
            @click="modal = false"
            class="w-full px-6 py-2 rounded-sm text-rojo"
          >
            Seguir Comprando
          </button>
        </div>
        <button @click="modal = false">
          <img class="absolute h-8 top-8 right-10" src="/close.svg" alt="" />
        </button>
      </div>
    </div>
    <div class="px-10 mt-4 text-lg font-bold text-center lg:text-left xl:px-60">
      <h2 class="text-xl md:text-2xl">Respuestos Relacionados</h2>
      <ProductosMasVendidos />
      <div class="my-10 border-b-2"></div>
    </div>
  </div>
</template>

<script>
import Productos from "@/models/Productos";
import ProductosMasVendidos from "@/components/productos/productosMasVendidos.vue";
import { createPopper } from "@popperjs/core";

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
      textBuscarProducto: "",

      openTab: 1,
      tooltipShow: false,
      modal: false,
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

    /* funcionalidad del tooltip */
    toggleTooltip: function () {
      if (this.tooltipShow) {
        this.tooltipShow = false;
      } else {
        this.tooltipShow = true;
        createPopper(this.$refs.btnRef, this.$refs.tooltipRef, {
          placement: "right",
        });
      }
    },

    /* cerrar modal */
    closeModal() {
      this.modal = false
      
    },


    /* cambiando las imagenes */
    imagen1() {
      var thumb1Src = document.getElementById("thumb1").src;
      document.getElementById("mainImg").src = thumb1Src;
    },

    imagen2() {
      var thumb2Src = document.getElementById("thumb2").src;
      document.getElementById("mainImg").src = thumb2Src;
    },

    imagen3() {
      var thumb3Src = document.getElementById("thumb3").src;
      document.getElementById("mainImg").src = thumb3Src;
    },

    imagen4() {
      var thumb4Src = document.getElementById("thumb4").src;
      document.getElementById("mainImg").src = thumb4Src;
    },

    imagen5() {
      var thumb5Src = document.getElementById("thumb5").src;
      document.getElementById("mainImg").src = thumb5Src;
    },
  },
};
</script>
<style>
.ancho-tabs {
  width: 36rem;
}

.imagen-principal {
  width: 100%;
  height: 250px;
}

.alineacion {
  left: 39%;
}
</style>
