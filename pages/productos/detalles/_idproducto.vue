<template>
  <div>
    <Header />
    <div class="justify-center py-20 space-x-20 lg:flex">
      <div class="flex justify-center">
        <img :src="this.Producto.imagenes[0]._480x480" alt="" />   
      </div>
      <div>
        <h2 class="text-2xl font-semibold xl:text-3xl">
            {{ Producto.nombre_impreso }}
        </h2>
        <p class="mt-2 text-gray-600">Código:  {{ Producto.codproducto }} </p>
        <p class="text-gray-600">OEM:  {{ Producto.cod_oem }} </p>
        <div class="mt-4">
          <h3 class="text-xl font-semibold">Ficha técnica</h3>
          <table class="w-full border">
            <tbody>
              <tr class="border">
                <td class="w-1/2 px-2 py-1 border-r-2">Ancho</td>
                <td class="w-1/2 px-2 py-1">{{ Producto.medida_ancho }}</td>
              </tr>
              <tr class="border">
                <td class="w-1/2 px-2 py-1 border-r-2">Alto</td>
                <td class="w-1/2 px-2 py-1">{{ Producto.medida_alto }}</td>
              </tr>
              <tr class="border">
                <td class="w-1/2 px-2 py-1 border-r-2">Largo</td>
                <td class="w-1/2 px-2 py-1">{{ Producto.medida_largo }}</td>
              </tr>
              <tr class="border">
                <td class="w-1/2 px-2 py-1 border-r-2">Díametro</td>
                <td class="w-1/2 px-2 py-1">{{ Producto.medida_diametro }}</td>
              </tr>              
              <tr class="border">
                <td class="w-1/2 px-2 py-1 border-r-2">Medida interna</td>
                <td class="w-1/2 px-2 py-1">{{ Producto.medida_interna }}</td>
              </tr>
              <tr class="border">
                <td class="w-1/2 px-2 py-1 border-r-2">Medida externa</td>
                <td class="w-1/2 px-2 py-1">{{ Producto.medida_externa }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-6">
          <p class="text-3xl font-semibold"> {{ Producto.precio_base_format }}</p>
          <p class="w-40 mt-2 text-center">Cantidad</p>
          <div class="flex items-center space-x-4">
            <div class="flex">
              <button class="px-6 py-2 border">-</button>
              <p class="px-6 py-1 border">1</p>
              <button class="px-6 py-2 border">+</button>
            </div>
            <div class="">
              <button class="py-2 text-white rounded-sm px-14 bg-rojo">Agregar al carro</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/comunes/Footer.vue";
import Productos from "@/models/Productos";

export default {
  name: "ProductoDetalles",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      hola: "",
      Producto:[],
    };
  },
  mounted(){
     Productos.buscarPorIdProducto ( this.$route.params.idproducto)
     .then ( response => {
        this.Producto =  response.data[0];  
        console.log ( this.Producto.imagenes[0]._480x480);
     })
  }, 

};
</script>
<style></style>
