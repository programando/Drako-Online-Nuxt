<template>
  <div>
    <Header />
    <div class="grid md:grid-cols-3 lg:grid-cols-10">
      <div class="flex justify-center px-8 py-10 lg:col-span-3 2xl:col-span-2">
        <FiltroProducto @getGruposSeleccionados="getGruposSeleccionados"></FiltroProducto>
      </div>

      <div class="flex py-4 mt-2 border-2">
        <img class="z-20 h-5 mt-2 -mr-7" src="/search.svg" alt="busqueda" />
        <input v-model="textBuscarProducto"  @keypress.13="iniciarBusquedaProductos"
              class="w-40 px-10 lg:w-80 xl:w-96 focus:outline-none border-r-1" type="text" placeholder="Buscar producto" />
      </div>

      <div class="grid justify-center grid-cols-1 py-10 sm:grid-cols-2 md:col-span-3 lg:col-span-7 2xl:col-span-8 lg:grid-cols-3 2xl:grid-cols-5 lg:mt-4 xl:mr-4" >
        <div
          class="p-4 mx-auto mb-24 border border-white cursor-pointer w-72 hover:border hover:shadow-xl"
          v-for="(producto, index) in productos"
          :key="producto.idproducto"
        >
          <div class="relative flex justify-center">
            <p
              v-if="producto.precio_oferta"
              class="absolute left-0 w-20 px-2 py-1 -ml-4 text-center text-white rounded-sm bg-rojo top-2"
            >
              Oferta
            </p>
            <nuxt-link to="/">
              <img
                class="h-44"
                v-for="imagen in producto.imagenes.slice(0, 1)"
                :key="imagen.idregistro"
                alt=""
                :src="imagen._240x240"
              />
            </nuxt-link>
          </div>
          <p class="h-16 text-gray-700 text-start">
            {{ producto.nombre_impreso }}
          </p>
          <div class="h-12">
            <p
              class="mt-4 font-semibold text-right mr-2"
              :class="{ 'line-through text-gray-500': producto.precio_oferta }"
            >
              {{ producto.precio_base_format  }}
            </p>
            <p v-if="producto.precio_oferta" class="font-semibold text-right mr-2">
              {{ producto.precio_oferta_format  }}
            </p>
          </div>

          <div class="flex items-center space-x-4">
            <div class="flex items-center mt-2">
              <button class="px-2 py-1 border" @click="disminuirCantidad(index)" >
                -
              </button>
              <p class="px-2 py-1 border" disabled="disabled">{{ producto.cantidad }}</p>
              <button class="px-2 py-1 border" @click="aumentarCantidad(index)">
                +
              </button>
            </div>
            <div class="">
              <button
                class="px-4 py-1 mt-2 border rounded-lg hover:bg-azul hover:text-white "
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header         from    "@/components/Header.vue";
import Footer         from    "@/components/comunes/Footer.vue";
import FiltroProducto from    "@/components/productos/FiltroProducto.vue";
import Productos      from    "@/models/Productos";


export default {
  name: "Productos",
  components: {
    Header,
    FiltroProducto,
    Footer,
  },

  data() {
    return {
      productos: [],
      cantidad: 0,
      formData:{  
            grupos: [],
           textoBusqueda:''
            },
      textBuscarProducto:''
    };
  },

  mounted() {
      this.getProductosAll();
  },

  methods: {
          iniciarBusquedaProductos() {
              this.formData.textoBusqueda = this.textBuscarProducto
              Productos.busqueda (this.formData )
              .then( response => {
                  this.productos = response.data.data;
              });
          },

          aumentarCantidad(index) {
            this.productos[index].cantidad++ ;
          },

          disminuirCantidad(index) {
            if (this.productos[index].cantidad >0){
                this.productos[index].cantidad--  ;
            }
          },

          getGruposSeleccionados ( idsGrupos ) {
            this.formData.grupos = idsGrupos;
            if  ( idsGrupos.length ==0 ) {
              this.getProductosAll();
              return ;
            }
            Productos.porGrupos ( this.formData )
              .then ( response => {
                  this.productos = response.data.data;
              });
          },

          getProductosAll () {
              Productos.listaGeneral().then((response) => {
                this.productos = response.data.data;
              });
          }
  },
};
</script>
