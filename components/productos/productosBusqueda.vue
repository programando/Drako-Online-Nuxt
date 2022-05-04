<template>

     <div class="flex items-center px-2 py-1 mt-2 border-2 mt-2 border-2 w-96">
        <img class="z-20 h-5 -mr-7" src="/search.svg" alt="búsqueda de productos" />
        <input
          v-model="textBuscarProducto"
          @keypress.13="iniciarBusquedaProductos"
          class="w-40 px-10 lg:w-80 xl:w-96 focus:outline-none border-r-1"
          type="text"
          placeholder="Buscar producto"
        />
      </div>
</template>


<script>
export default {
    
    data: () => ({
        textBuscarProducto:''
    }),

    methods: {
            iniciarBusquedaProductos () {
                this.$emit('iniciarBusquedaProductos', this.textBuscarProducto);
            }
    },
}
</script>