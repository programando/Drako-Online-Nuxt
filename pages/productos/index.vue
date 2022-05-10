<template>
  <div>
 
    <div class="sticky z-50 bg-white w-96 top-20 left-2/4">
       <BusquedaProductos @iniciarBusquedaProductos="iniciarBusquedaProductos"></BusquedaProductos>
    </div>

    <div class="grid md:grid-cols-3 lg:grid-cols-10 ">
     
      <div class="flex justify-center lg:col-span-3 2xl:col-span-2 ">
         <FiltroGruposProductos  @getGruposSeleccionados="getGruposSeleccionados" ></FiltroGruposProductos>  
      </div>
        
      <div class="grid justify-center grid-cols-1 py-10 sm:grid-cols-2 md:col-span-3 lg:col-span-7 2xl:col-span-8 lg:grid-cols-3 2xl:grid-cols-4 lg:mt-4 xl:mr-4" >
        <div class=""
          v-for="(producto, index) in productos"  :key="producto.idproducto" >
          <CardProducto :producto="producto" :index="index" :productos="productos" />
        </div>
        
      </div>
      <div class="grid col-span-12">
          <div class="col-span-12 col-start-6">
            <Pagination :currentRecord         = "records.current"
                  :links                 = "links"
                  :totalRecords          = "records.total"
                  @getProductosFromUrl="getProductosFromUrl" >
            </Pagination>
          </div> 
      </div>
    </div>
    

    <!-- boton -->
    <div>
      <ButtonUp/>
    </div>
  </div>
</template>

<script>
 
import FiltroGruposProductos    from "@/components/productos/FiltroGruposProductos.vue";
import BusquedaProductos         from "@/components/productos/productosBusqueda.vue"
import Productos                from "@/models/Productos";
import Pagination               from "@/components/htmlControl/Pagination.vue";
import CardProducto from "@/components/productos/CardProducto.vue"
import ButtonUp from "@/components/comunes/ButtonUp.vue"

export default {
  name: "Productos",
   layout:'default',
  components: {    Pagination,  FiltroGruposProductos, BusquedaProductos, CardProducto, ButtonUp },

  data() {
    return {
      productos: [],
      links:[],
      records: { 'current':0, 'total' :0 },
      cantidad: 0,
      
      formData: {
        grupos: [],
        textoBusqueda: "",
        clasesProdcucto:[],
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
          this.setPagination (response.data );        
       });
    },
    iniciarBusquedaProductos( textoBusqueda ) {
      this.formData.textoBusqueda = textoBusqueda;
      Productos.busqueda(this.formData).then((response) => {
        this.productos = response.data.data;
        this.setPagination  ( response.data);
      });
    },

  
    getGruposSeleccionados( idsClasesProductos ) {
      this.formData.clasesProdcucto = idsClasesProductos;
      if (idsClasesProductos.length == 0) {
        this.getProductosAll();
        return;
      }
        
       Productos.porClaseGrupos(this.formData).then((response) => {
        this.productos = response.data.data;
         this.setPagination (response.data );
      });
       
    },

    getProductosAll() {
      Productos.listaGeneral().then((response) => {
        this.productos       = response.data.data;
        this.setPagination (response.data );
      });
    },

    setPagination ( dataPagination ) {
        this.links           = dataPagination.links;
        this.records.current = dataPagination.to;
        this.records.total   = dataPagination.total;
    },
  },
};
</script>

<style scoped>



</style>
 