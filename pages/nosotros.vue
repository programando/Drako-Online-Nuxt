<template>
  <div>
    <Header />
    <div class="py-40 md:py-56 lg:py-60 bg-no-repeat bg-cover bg-center h-3/4" style="background-image: url('slider/slider5.jpg')">
      <div class="bg-azul flex justify-start w-44 lg:w-56">
        <button class="uppercase text-white text-lg py-4 px-4 font-semibold lg:text-2xl">quiénes somos</button>
      </div>
    </div>
    <div class="sm:container mx-4 py-10 sm:mx-auto grid grid-cols-1 lg:grid-cols-5 lg:gap-4">
      <div class="lg:border-r-2">
        <p class="text-lg mt-2 lg:mt-4 lg:text-center lg:text-xl">Historia</p>
        <p class="text-lg mt-2 lg:mt-4 lg:text-center lg:text-xl">Mision</p>
        <p class="text-lg mt-2 lg:mt-4 lg:text-center lg:text-xl">Vision</p>
      </div>
      <div class="border-b-2 mt-3 mb-3 lg:hidden"></div>
      <div class="lg:col-span-4 lg:ml-4">
        <p class="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut cupiditate iste tenetur libero repellendus qui. Eius, ea ex consequatur ratione quas suscipit modi illum, dolores, culpa amet ipsa blanditiis non.</p>
        <p class="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut cupiditate iste tenetur libero repellendus qui. Eius, ea ex consequatur ratione quas suscipit modi illum, dolores, culpa amet ipsa blanditiis non.</p>
        <p class="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut cupiditate iste tenetur libero repellendus qui. Eius, ea ex consequatur ratione quas suscipit modi illum, dolores, culpa amet ipsa blanditiis non.</p>
        <p class="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut cupiditate iste tenetur libero repellendus qui. Eius, ea ex consequatur ratione quas suscipit modi illum, dolores, culpa amet ipsa blanditiis non.</p>
        <p class="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut cupiditate iste tenetur libero repellendus qui. Eius, ea ex consequatur ratione quas suscipit modi illum, dolores, culpa amet ipsa blanditiis non.</p>
        <p class="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut cupiditate iste tenetur libero repellendus qui. Eius, ea ex consequatur ratione quas suscipit modi illum, dolores, culpa amet ipsa blanditiis non.</p>
        <p class="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut cupiditate iste tenetur libero repellendus qui. Eius, ea ex consequatur ratione quas suscipit modi illum, dolores, culpa amet ipsa blanditiis non.</p>
        <p class="mt-4 mr-4 text-xl lg:text-2xl text-right text-gray-600 font-semibold">Más de 20 años en vocación de servicios.</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/comunes/Footer.vue"
export default {
  name:"nosotros",
  components:{
    Header, Footer
  }
}
</script>

<style>

</style>