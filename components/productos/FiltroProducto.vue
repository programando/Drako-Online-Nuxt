<template>
  <div class="lg:fixed">
    <h2>Tipo de respuesto</h2>
    <input
      class="px-4 py-2 mt-2 border rounded-md focus:outline-none"
      type="text"
      placeholder="Buscar"
    >

    <div class="mx-2 mt-2">
      <div class="mt-2">
        <input type="checkbox" name="" id="" v-model="bujes">
        <label>Bujes de caja</label>
      </div>
      <div class="mt-2">
        <input type="checkbox" name="" id="" v-model="amortiguadores">
        <label>Amortiguadores</label>
      </div>
      <div class="mt-2">
        <input type="checkbox" name="" id="" v-model="bombas">
        <label>Bombas de freno</label>
      </div>
      <div class="mt-2">
        <input type="checkbox" name="" id="" v-model="correas">
        <label>Correas</label>
      </div>
      <div class="mt-2">
        <input type="checkbox" name="" id="" v-model="filtros">
        <label>Filtros de aire</label>
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
          bujes:  false,
          amortiguadores: false,
          bombas: false,
          correas: false,
          filtros: false
        }
      },
    
      mounted() {
            GruposProductos.listadoGeneral().then((response) => {
             console.log ( response.data);
        });
      }
    
    

    }
</script>

<style>

</style>