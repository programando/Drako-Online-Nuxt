<template>
  <div>
 
     <div class="grid mt-10 md:grid-cols-3 lg:grid-cols-10">



      <div class="grid justify-center min-h-screen grid-cols-1 py-10 sm:grid-cols-2 md:col-span-3 lg:col-span-10 2xl:col-span-10 lg:grid-cols-3 2xl:grid-cols-5 lg:mt-4 xl:mr-4" >
        <div
          class="p-4 mx-auto mb-24 border border-white cursor-pointer w-72 hover:border hover:shadow-xl"
          v-for="(producto, index) in productos"  :key="producto.idproducto"
        >
          <div class="relative flex justify-center">
            <p  v-if="producto.precio_oferta" class="absolute left-0 w-20 px-2 py-1 -ml-4 text-center text-white rounded-sm bg-rojo top-2" >
              Oferta
            </p>
            <nuxt-link :to="{ name: 'productos-detalles-idmd5', params: { idmd5: producto.idmd5}}"   >  
              
                <img class="h-44"
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
              class="mt-4 mr-2 font-semibold text-right"
              :class="{ 'line-through text-gray-500': producto.precio_oferta }"
            >
              {{ producto.precio_base_format }}
            </p>
            <p
              v-if="producto.precio_oferta"
              class="mr-2 font-semibold text-right"
            >
              {{ producto.precio_oferta_format }}
            </p>
          </div>

          <div class="flex items-center space-x-4">
            <div class="flex items-center mt-2">
              <button class="px-2 py-1 border" @click="disminuirCantidad(index)" > - </button>
              <p class="px-2 py-1 border" disabled="disabled">
                {{ producto.cantidad }}
              </p>
              <button class="px-2 py-1 border" @click="aumentarCantidad(index)">  + </button>
            </div>
            <div class="">
              <button class="px-4 py-1 mt-2 border rounded-lg hover:bg-azul hover:text-white" >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pagination
          :currentRecord         = "records.current"
          :links                 = "links"
          :totalRecords          = "records.total"
            @getProductosFromUrl="getProductosFromUrl"
       >
    </Pagination>
     
  </div>
</template>

<script>
 

import Productos                from "@/models/Productos";
import Pagination               from "@/components/htmlControl/Pagination.vue";

export default {
  name: "Productos",
   layout:'default',
  components: {    Pagination      },

  data() {
    return {
      productos: [],
      links:[],
      records: { 'current':0, 'total' :0 },
      cantidad: 0,
      formData: {
        grupos: [],
        textoBusqueda: "",
        idmd5:[]
      },
      textBuscarProducto: "",
    };
  },

  mounted() {
    this.getProductosAll();
  },

  methods: {

      getProductosFromUrl ( Url ) {
        Productos.getProductosFromUrl( Url)
        .then ( response => {
          this.productos       = response.data.data;
          this.links           = response.data.links;
          this.records.current = response.data.to;
          this.records.total   = response.data.total;         
       });
    },
    iniciarBusquedaProductos() {
      this.formData.textoBusqueda = this.textBuscarProducto;
      Productos.busqueda(this.formData).then((response) => {
        this.productos = response.data.data;
      });
    },

    aumentarCantidad(index) {
      this.productos[index].cantidad++;
    },

    disminuirCantidad(index) {
      if (this.productos[index].cantidad > 0) {
        this.productos[index].cantidad--;
      }
    },



    getProductosAll() {
      Productos.buscarPorClaseIdMd5Grupos( this.$route.params.idmd5 )
        .then(response => {
        this.productos       = response.data.data;
        this.links           = response.data.links;
        this.records.current = response.data.to;
        this.records.total   = response.data.total;
      });
    },
  },
};
</script>
 