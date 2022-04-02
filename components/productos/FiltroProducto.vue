<template>
  <div class="lg:fixed">
    <h2>Tipo de respuesto</h2>
    <input
      class="px-4 py-2 mt-2 border rounded-md focus:outline-none"
      type="text"
      placeholder="Buscar"
      v-model="busquedaFiltrada"
    >

    <div class="mx-2 mt-2">
      <div class="mt-2">
        <div v-for="grupoProducto in busquedaGrupos" :key="grupoProducto.idgrupo">
          <input  type="checkbox"   v-model="grupoProducto.selected" @change="getGruposSeleccionados()">
          <label > {{ grupoProducto.nomgrupo }}</label>
        </div>
      </div>
     </div>
 </div>
</template>

<script>
  import GruposProductos from "@/models/ProductosGrupos";

    export default {
          name: "FiltroProducto",

          data() {
            return {
              busquedaFiltrada: '',
              grupoProductoChecked :[],
              gruposProductos:[],
            }
          },
        
          mounted() {
                this.getGruposAll () ;
          },
          methods: {
              getGruposSeleccionados (  ) {
                let idsGrupos = [];
                this.gruposProductos.map( grupo =>{
                    if ( grupo.selected === true ) {
                      idsGrupos.push ( grupo.idgrupo) ;
                    }
                });
                this.$emit('getGruposSeleccionados',idsGrupos );
              },

              getGruposAll () {
                GruposProductos.listadoGeneral()
                  .then((response) => {
                    this.gruposProductos = response.data ;
               });
              }
          },

          computed: {
              busquedaGrupos ( ) {
                  if ( this.busquedaFiltrada.length ==0 ) {
                      this.getGruposAll ();
                      return this.gruposProductos;
                  }
                  return this.gruposProductos.filter ( ( grupo)=>{
                     return grupo.nomgrupo_real.match( this.busquedaFiltrada.toUpperCase() );
                  });
              },

              toUpperCaseBusqueda () {
                  return this.busquedaFiltrada.toUpperCase();
              }
          }
  
    }

 

</script>

<style>

</style>