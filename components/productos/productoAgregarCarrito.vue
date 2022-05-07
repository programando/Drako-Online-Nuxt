<template>
      <!-- modal -->
    <div v-if="modal" class="absolute top-0 z-20 flex justify-center w-full h-full px-20 py-10 transition-opacity bg-gray-500 bg-opacity-75" >
      
      <div class="relative px-10 py-8">
        <p class="relative px-10 pt-4 text-2xl font-semibold text-center bg-white xl:text-3xl">Producto Agregado al Carrito</p>
        <div class="relative justify-center px-10 py-10 space-x-20 bg-white lg:flex" >
          <div class="container mx-auto">
            
            <div>
              <img class="w-64 h-64"
                    :src="Imagen"
              />
            </div>
          </div>
          <div>
            <h2 class="w-56 text-2xl font-semibold xl:text-3xl">
              {{ Producto.nombre_impreso }}
            </h2>
            <p class="mt-2 text-gray-600">Código: {{ Producto.codproducto }}</p>
            <p class="text-gray-600">OEM: {{ Producto.cod_oem }}</p>
            <div class="flex items-end space-x-8">
              <div class="mt-6">
                <div class="flex justify-center space-x-4">
                  <p
                    class="text-3xl font-semibold"
                    v-if="Producto.precio_oferta > 0"
                  >
                    {{ Producto.precio_oferta }}
                  </p>
                  <p
                    class="text-3xl font-semibold text-center"
                    :class="{
                      'line-through text-gray-500': Producto.precio_oferta,
                    }"
                  >
                    {{ Producto.precio_base_format }}
                  </p>
                </div>

                <div class="items-center space-x-2">
                  <p class="mt-2 text-center"> Cantidad : {{ cantidadComprada }} </p>
                </div>
                
              </div>
              <p class="mb-10 text-sm">Tiempo de reserva: {{ Producto.horas_reserva }} horas</p>
            </div>
          </div>
        </div>
        <div class="w-full px-10 py-2 bg-white">
          <nuxt-link to="/tienda/"
          >
            <button class="w-full px-6 py-2 text-white rounded-sm bg-rojo">
              Ir a la Tienda
            </button>
          </nuxt-link>
        </div>
        <div class="px-10 py-2 bg-white">
          <button @click="ModalClose" class="w-full px-6 py-2 rounded-sm text-rojo">
            Seguir Comprando
          </button>
        </div>
        <button @click="modal = false">
          <img class="absolute h-8 top-8 right-10" src="/close.svg" alt="" @click="ModalClose" />
        </button>
      </div>
    </div>
</template>
 

<script>
    import ProductoFichaTecnica from "@/components/productos/productoFichaTecnica.vue";
    export default {
      name: "productoAgregarCaritoCompra",  
      components: { ProductoFichaTecnica },
      props:["Producto", "Imagen", "modal", "cantidadComprada"],

      methods: {
            ModalClose(){
                this.$emit('ModalClose');
                this.$router.push({ path: '/productos/' });
            }
      }
}
</script>

 