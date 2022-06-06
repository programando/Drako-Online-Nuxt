<template>
  <div class="relative min-h-screen" v-on-clickaway="closeModal">
    <div class="justify-center pt-6 space-x-20 lg:flex">
      <GaleryCard :imagenesProducto="imagenesProducto" />
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
                  <img class="h-3" src="/help.svg" alt="" />
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
                      Tiempo de reserva
                    </div>
                    <div class="p-3 text-white">
                      Es el tiempo máximo que el producto estará reservado hasta
                      que se haga el pago. Si el pago no se ve preflejado en
                      este lapso de tiempo, el pedido será borrado por el
                      sistema y deberá realizar un nuevo pedido.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-end space-x-8">
          <div class="mt-4">
            <ProductoFichaTecnica :Producto="Producto"> </ProductoFichaTecnica>
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
                <button class="px-3 py-1 border" @click="disminuirCantidad()">
                  -
                </button>
                <p class="px-3 py-1 border" disabled>{{ Producto.cantidad }}</p>
                <button class="px-3 py-1 border" @click="aumentarCantidad()">
                  +
                </button>
              </div>
              <div class="mt-2">
                <button
                  class="px-6 py-2 text-white rounded-sm bg-rojo"
                  @click="addProductoCarito(Producto)"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- sliders -->
      </div>
    </div>
    <!-- tabs -->
    <div class="flex justify-center mt-6" v-if="Producto.vehiculos">
      <div class="ancho-vehiculos">
        <ul class="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none">
          <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
            <a
              class="block px-3 py-2 text-xl leading-normal rounded shadow-lg"
              v-on:click="toggleTabs(1)"
              v-bind:class="{
                'text-rojo bg-white': openTab !== 1,
                'text-white bg-rojo': openTab === 1,
              }"
            >
              Puede usarse en los siguientes vehículos
            </a>
          </li>

          <!--    <li class="flex-auto mr-2 -mb-px text-center last:mr-0">
                <a
                  class="block px-3 py-2 text-xs font-bold leading-normal uppercase rounded shadow-lg"
                  v-on:click="toggleTabs(2)"
                  v-bind:class="{
                    'text-rojo bg-white': openTab !== 2,
                    'text-white bg-rojo': openTab === 2,
                  }"
                >
                  Envíos y devoluciones
                </a>
              </li>
-->
        </ul>
        <div
          class="relative flex w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
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
                  {{ Producto.vehiculos }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="prdctosRelacionados.length > 0"
      class="px-10 mt-12 text-lg font-bold text-center lg:text-left xl:px-60"
    >
      <h2 class="text-xl md:text-2xl">
        Respuestos Relacionados
        {{ prdctosRelacionados.length }}
      </h2>
      <ProductosRelacionados :productosRelacionados="prdctosRelacionados">
      </ProductosRelacionados>
      <div class="my-10 border-b-2"></div>
    </div>

    <ProductoAgregarCarrito
      :Producto="Producto"
      :Imagen="imageProducto"
      :modal="modal"
      :cantidadComprada="cantidadComprada"
      @ModalClose="ModalClose"
    >
    </ProductoAgregarCarrito>
  </div>
</template>

<script>
import Productos from "@/models/Productos";
import ProductosRelacionados from "@/components/productos/productosRelacionados.vue";
import ProductoAgregarCarrito from "@/components/productos/productoAgregarCarrito.vue";
import ProductoFichaTecnica from "@/components/productos/productoFichaTecnica.vue";
import GaleryCard from "@/components/productos/GaleryCard.vue"
import { createPopper } from "@popperjs/core";

export default {
  name: "ProductoDetalles",
  layout: "default",
  components: {
    ProductosRelacionados,
    ProductoAgregarCarrito,
    ProductoFichaTecnica,
    GaleryCard
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
      cantidadComprada: 0,
      formData: { idproducto: 0 },
      prdctosRelacionados: [],
      imagenesProducto: [],
    };
  },
  mounted() {
    Productos.buscarPorIdMd5(this.$route.params.idmd5).then((response) => {
      this.Producto = response.data[0];
      this.imageProducto = this.Producto.imagenes[0]._480x480;
      this.imagenesProducto = this.Producto.imagenes;
      this.getProductosRelacionados(this.Producto.idproducto);
    });
  },

    methods: {
      addProductoCarito(productoComprado) {
      if (productoComprado.cantidad == 0) {
        this.$toasted.show(
          "no ha registrado cantidad para agregar producto al carrito.",
          { theme: "toasted-primary", position: "top-center", duration: 3000 }
        );
        return;
      }
      this.$store.dispatch("carrito/addProductoComprado", productoComprado);
      this.modal = true;
    },

    getProductosRelacionados(idproducto) {
      this.formData.idproducto = idproducto;
      Productos.productosRelacionados(this.formData).then((response) => {
        this.prdctosRelacionados = response.data;
      });
    },

    ModalClose() {
      this.modal = false;
    },

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
      this.modal = false;
    },

    disminuirCantidad() {
      this.Producto.cantidad--;

      /*if (this.productos[index].cantidad > 0) {
        this.productos[index].cantidad--;
        //this.$store.dispatch("carrito/removeOnlyProductoComprado", this.productos[index].idproducto );
      }
      */
    },
    aumentarCantidad() {
      this.Producto.cantidad++;
      //this.$store.dispatch( "carrito/addProductoComprado", this.productos[index] );
    },
    },

    
  }

</script>
<style scoped>
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

.ancho-vehiculos {
  width: 800px;
}
</style>
