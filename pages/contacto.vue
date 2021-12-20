<template>
  <div>
    <Header />

    <div
      class="sm:container mx-4 py-20 sm:mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-4"
    >
      <div class="xl:border-r-2 grid justify-center">
        <h2 class="text-lg lg:text-xl">
          Estamos ubicados en Santander de Qulichao
        </h2>
        <div class="mt-2">
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
      <div class="py-2 lg:py-2">
        <div class="">
          <h2 class="text-xl lg:text-3xl text-center">
            Formulario de Contacto
          </h2>
          <h3 class="text-lg lg:text-xl lg:ml-14 mt-1 xl:ml-4 2xl:ml-8">
            Déjenos un mensaje y uno de nuestros acesores se pondra en contacto con usted
          </h3>
          <div class="grid xl:grid-cols-2">
            <div class="flex justify-center mt-4">
              <font-awesome-icon
                style="font-size: 20px"
                :icon="['fas', 'id-card-alt']"
                class="text-azul h-10 w-10 z-20 -mr-10"
              />
              <InputBasic holder="Nombre" />
            </div>
            <div class="flex justify-center mt-4">
              <font-awesome-icon
                style="font-size: 20px"
                :icon="['fas', 'building']"
                class="text-azul h-10 w-10 z-20 -mr-10"
              />
              <InputBasic holder="Empresa" />
            </div>
            <div class="flex justify-center mt-4">
              <font-awesome-icon
                style="font-size: 20px"
                :icon="['fas', 'phone-square']"
                class="text-azul h-10 w-10 z-20 -mr-10"
              />
              <InputBasic holder="Telefono" />
            </div>
            <div class="flex justify-center mt-4">
              <font-awesome-icon
                style="font-size: 20px"
                :icon="['fas', 'phone-square']"
                class="text-azul h-10 w-10 z-20 -mr-10"
              />
              <InputBasic holder="Celular" />
            </div>
            <div
              class="flex justify-center mt-4 xl:col-span-2 xl:mx-3 2xl:mx-11"
            >
              <font-awesome-icon
                style="font-size: 20px"
                :icon="['fas', 'envelope']"
                class="text-azul h-10 w-10 z-20 -mr-10"
              />
              <textarea
                class="border w-64 rounded focus:outline-none pl-12 py-2 md:w-72 xl:w-full"
                name=""
                id=""
                cols="23"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div class="flex justify-center xl:justify-end mt-4 xl:mr-5 2xl:mr-12">
            <button
              class="border bg-azul text-white py-2 px-4 rounded text-xl w-32 -ml-4"
            >
              Enviar
            </button>
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
import InputBasic from "../components/htmlControl/InputBasic.vue";
export default {
  name: "nosotros",
  components: {
    Header,
    Footer,
    InputBasic,
  },
};
</script>

<style></style>
