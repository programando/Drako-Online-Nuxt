<template>
  <div>
     <div class="grid mt-10 md:grid-cols-3 lg:grid-cols-10">
      <div class="grid justify-center min-h-screen grid-cols-1 py-10 sm:grid-cols-2 md:col-span-3 lg:col-span-10 2xl:col-span-10 lg:grid-cols-3 2xl:grid-cols-5 lg:mt-4 xl:mr-4" >
        <div
          class=""
          v-for="(producto, index) in productos"  :key="producto.idproducto"
        >
          <CardProducto :producto="producto" :index="index" :productos="productos"/>
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
import CardProducto from "@/components/productos/CardProducto.vue"

export default {
  name: "Productos",
   layout:'default',
  components: {    Pagination, CardProducto     },

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

<style scoped>
.hover-container:hover  .hover-boton {
  background-color: #0C1B31;
  color: white;
}
</style>
 