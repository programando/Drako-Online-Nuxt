<template>
  <div>
    <Header />
    <div class="justify-center py-20 space-x-20 lg:flex">
      <div class="flex justify-center">
        <img src="/productos/1.jpg" alt="" />
      </div>
      <div>
        <h2 class="text-2xl font-semibold xl:text-3xl">
          
        </h2>
        <p class="mt-2 text-gray-600">Código:  </p>
        <p class="text-gray-600">OEM:  </p>
        <div class="mt-4">
          <h3 class="text-xl font-semibold">Ficha Técnica</h3>
          <table class="w-full border">
            <tbody>
              <tr class="border">
                <td class="w-1/2 px-2 py-1 border-r-2">Ancho</td>
                <td class="w-1/2 px-2 py-1">104.20</td>
              </tr>
              <tr class="border">
                <td class="w-1/2 px-2 py-1 border-r-2">Alto</td>
                <td class="w-1/2 px-2 py-1">43.70</td>
              </tr>
              <tr class="border">
                <td class="w-1/2 px-2 py-1 border-r-2">Espesor</td>
                <td class="w-1/2 px-2 py-1">14.50</td>
              </tr>
              <tr class="border">
                <td class="w-1/2 px-2 py-1 border-r-2">Marca</td>
                <td class="w-1/2 px-2 py-1">SANGSIN BRAKE</td>
              </tr>
              <tr class="border">
                <td class="w-1/2 px-2 py-1 border-r-2">FMSI</td>
                <td class="w-1/2 px-2 py-1">SP4178 - D2042 - 9271 - 182300</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-6">
          <p class="text-3xl font-semibold">$169.900</p>
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
    console.log (this.$route)
  }, 
  created(){
      console.log (this.$route)
      this.Producto = this.$route.params.Producto;    
  }
};
</script>
<style></style>
