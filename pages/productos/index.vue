<template>
  <div>
 
    <div class="sticky z-50 flex justify-center bg-white left top-20">
      <div class="flex items-center px-2 py-1 mt-2 border-2">
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

    <div class="grid mt-10 md:grid-cols-3 lg:grid-cols-10">
      <div class="flex justify-center px-8 py-10 lg:col-span-3 2xl:col-span-2">
         <FiltroGruposProductos  @getGruposSeleccionados="getGruposSeleccionados" ></FiltroGruposProductos>  
      </div>

      <div class="grid justify-center min-h-screen grid-cols-1 py-10 sm:grid-cols-2 md:col-span-3 lg:col-span-7 2xl:col-span-8 lg:grid-cols-3 2xl:grid-cols-5 lg:mt-4 xl:mr-4" >
        <div
          class="p-4 mx-auto mb-24 border border-white cursor-pointer w-72 hover:border hover:shadow-xl"
          v-for="(producto, index) in productos"  :key="producto.idproducto"
        >
          <div class="relative flex justify-center">
            <p  v-if="producto.precio_oferta" class="absolute left-0 w-20 px-2 py-1 -ml-4 text-center text-white rounded-sm bg-rojo top-2" >
              Oferta
            </p>
            <nuxt-link :to="{ name: 'productos-detalles-idproducto', params: { idproducto: producto.idproducto}}"   >   

           <!-- <nuxt-link :to="`/productos/detalles/${producto.idproducto}`"   >   -->
              
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
              <button   class="px-2 py-1 border" @click="disminuirCantidad(index)" > -  </button>
              <p        class="px-2 py-1 border" disabled="disabled">  {{ producto.cantidad }}  </p>
              <button class="px-2 py-1 border"  @click="aumentarCantidad(index)">     +   </button>
            </div>

            <div class="">
              <button @click="addProductoCarito ( producto )" class="px-4 py-1 mt-2 border rounded-lg hover:bg-azul hover:text-white" >
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
 
import FiltroGruposProductos    from "@/components/productos/FiltroGruposProductos.vue";
import Productos                from "@/models/Productos";
import Pagination               from "@/components/htmlControl/Pagination.vue";

export default {
  name: "Productos",
   layout:'default',
  components: {    Pagination,  FiltroGruposProductos      },

  data() {
    return {
      productos: [],
      links:[],
      records: { 'current':0, 'total' :0 },
      cantidad: 0,
      formData: {
        grupos: [],
        textoBusqueda: "",
      },
      textBuscarProducto: "",
    };
  },

  mounted() {
    this.getProductosAll();
  },

  methods: {
      addProductoCarito( productoComprado ) {
          this.$store.dispatch('carrito/addProductoComprado', productoComprado);
      },

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

    aumentarCantidad( index ) {
      this.productos[index].cantidad++;
      this.$store.dispatch('carrito/addProductoComprado', this.productos[index] );
    },

    disminuirCantidad( index ) {
      if (this.productos[index].cantidad > 0) {
        this.productos[index].cantidad--;
        this.$store.dispatch('carrito/removeOnlyProductoComprado', this.productos[index].idproducto );
      }
     ;
    },

    getGruposSeleccionados(idsGrupos) {
      this.formData.grupos = idsGrupos;
      if (idsGrupos.length == 0) {
        this.getProductosAll();
        return;
      }
      Productos.porGrupos(this.formData).then((response) => {
        this.productos = response.data.data;
      });
    },

    getProductosAll() {
      Productos.listaGeneral().then((response) => {
        this.productos       = response.data.data;
        this.links           = response.data.links;
        this.records.current = response.data.to;
        this.records.total   = response.data.total;
      });
    },
  },
};
</script>
 