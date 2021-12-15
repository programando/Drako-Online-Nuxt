<template>
  <div>
    <Header />
    <div
      class="py-6 lg:py-14"
    >
      <div class="">
        <div class="flex justify-center mt-4">
          <font-awesome-icon style="font-size: 20px;" :icon="['fas', 'id-card-alt']" class="text-azul h-10 w-10 z-20 -mr-10" />
          <InputBasic holder="Nombre"/>
        </div>
        <div class="flex justify-center mt-4">
          <font-awesome-icon style="font-size: 20px;" :icon="['fas', 'building']" class="text-azul h-10 w-10 z-20 -mr-10" />
          <InputBasic holder="Empresa"/>
        </div>
        <div class="flex justify-center mt-4">
          <font-awesome-icon style="font-size: 20px;" :icon="['fas', 'phone-square']" class="text-azul h-10 w-10 z-20 -mr-10" />
          <InputBasic holder="Telefono"/>
        </div>
        <div class="flex justify-center mt-4">
          <font-awesome-icon style="font-size: 20px;" :icon="['fas', 'envelope-square']" class="text-azul h-10 w-10 z-20 -mr-10" />
          <InputBasic holder="Contacto"/>
        </div>
        <div class="flex justify-center mt-4">
          <button class="border bg-azul text-white py-2 px-4 rounded text-xl w-32 -ml-4">Enviar</button>
        </div>
      </div>
    </div>
    <div
      class="sm:container mx-4 py-20 sm:mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-4"
    >
      <div class="lg:border-r-2 grid justify-center">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.0828187793472!2d-76.48375681948936!3d3.0120253749117967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e307fd930bad94d%3A0x7b27c66bb8cfddd2!2sSantander%20de%20Quilichao%2C%20Cauca%2C%20Colombia!5e0!3m2!1ses!2sve!4v1639151291039!5m2!1ses!2sve"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div class="border-b-2 mt-3 mb-3 lg:hidden"></div>
      <div class="lg:ml-4 py-4 px-10">
        <div class="shadow-lg py-4 px-4">
          <p class="font-bold  text-2xl">Ubicación</p>
          <p class="mt-2 text-xl">Estamos ubicados en Santander de Qulichao</p>
          <div class="mt-6 grid justify-center">
            <div class="flex items-center space-x-6">
              <font-awesome-icon
                style="font-size: 25px"
                :icon="['fas', 'phone']"
                class="h-10 w-10 -mr-2"
              />
              <p>317 585 9754</p>
            </div>

            <div class="flex items-center space-x-6">
              <font-awesome-icon
                style="font-size: 25px"
                :icon="['fas', 'envelope']"
                class="h-10 w-10 -mr-2"
              />
              <p>Contacto@drakopartes.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/comunes/Footer.vue";
import InputBasic from "../components/htmlControl/InputBasic.vue"
export default {
  name: "nosotros",
  components: {
    Header,
    Footer,
    InputBasic
  },
};
</script>

<style></style>
