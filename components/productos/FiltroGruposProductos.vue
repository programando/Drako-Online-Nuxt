<template>
  <div class="sticky w-64">
    <h2 class="fixed hidden mt-4 text-lg md:block">Tipo de respuesto</h2>
   <!-- 
    <input
      class="px-4 py-2 mt-2 border rounded-md focus:outline-none"
      type="text"
      placeholder="Buscar"
      v-model="busquedaFiltrada"
    >
--> 

    <div class="z-50 mt-20 md:hidden">
      <div class="flex items-center justify-between px-4 py-1 bg-white border rounded-md md:hidden">
        <h2 class="">Tipo de respuesto</h2>
        <button @click="menuProductos = !menuProductos">
          <img class="h-8" src="/icon-burger.svg" alt="icon" />
        </button>
    </div>
      <div v-if="menuProductos" class="mx-2 mt-2 overflow-auto alto-scroll">
        <div class="mt-2 ">
          <div v-for="grupoProducto in gruposProductos" :key="grupoProducto.id_clase_grupo">
            <input class="cursor-pointer" type="checkbox"   v-model="grupoProducto.selected" @change="getGruposSeleccionados()">
            <label class="text-sm cursor-pointer" > {{ grupoProducto.nom_clase_grupo }}</label>
          </div>
        </div>
     </div>
    </div>

    <div class="fixed hidden mx-2 mt-10 overflow-auto md:block alto-scroll">
      <div class="mt-2 ">
        <div v-for="grupoProducto in gruposProductos" :key="grupoProducto.id_clase_grupo">
          <input class="cursor-pointer" type="checkbox"   v-model="grupoProducto.selected" @change="getGruposSeleccionados()">
          <label class="text-sm cursor-pointer" > {{ grupoProducto.nom_clase_grupo }}</label>
        </div>
      </div>
     </div>
 </div>
</template>

<script>
  import GruposClasesProductos from "@/models/ProductosGruposClases";

    export default {
          name: "FiltroProducto",

          data() {
            return {
              busquedaFiltrada: '',
              grupoProductoChecked :[],
              gruposProductos:[],
              menuProductos: false
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
                      idsGrupos.push ( grupo.id_clase_grupo) ;
                    }
                });
                this.$emit('getGruposSeleccionados',idsGrupos );
                this.menuProductos = false
              },

              getGruposAll () {
                GruposClasesProductos.listadoGeneral()
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

.alto-scroll {
  height: 450px
}
</style>