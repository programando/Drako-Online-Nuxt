<template>
  <div>
 

    <div
      class="grid grid-cols-1 py-20 mx-4 sm:container sm:mx-auto lg:grid-cols-2 lg:gap-4"
    >
      <div class="grid justify-center">
        <h2 class="text-lg lg:text-xl">
          Estamos ubicados en Santander de Qulichao
        </h2>
        <div class="mt-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2369.0828187793472!2d-76.48375681948936!3d3.0120253749117967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e307fd930bad94d%3A0x7b27c66bb8cfddd2!2sSantander%20de%20Quilichao%2C%20Cauca%2C%20Colombia!5e0!3m2!1ses!2sve!4v1639151291039!5m2!1ses!2sve"
            width="400"
            height="250"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            class="mapa"
          ></iframe>
        </div>
        <div class="grid justify-center mt-2 space-x-4 md:grid-cols-2 xl:flex">
          <div class="flex items-center justify-center space-x-2">
            <font-awesome-icon
              style="font-size: 20px"
              :icon="['fas', 'envelope']"
              class="z-20 w-10 h-10 text-azul"
            />
            <p>Contacto@drakopartes.com</p>
          </div>
           <div class="flex items-center justify-center space-x-2">
            <font-awesome-icon
              style="font-size: 20px"
              :icon="['fas', 'phone']"
              class="z-20 w-10 h-10 text-azul"
            />
            <p>317 585 9754</p>
          </div>
           <div class="flex items-center justify-center space-x-2 md:col-span-2 xl:col-span-1">
            <font-awesome-icon
              style="font-size: 20px"
              :icon="['fas', 'phone']"
              class="z-20 w-10 h-10 text-azul"
            />
            <p>317 585 9754</p>
          </div>
        </div>
      </div>
      <div class="mt-3 mb-3 border-b-2 lg:hidden"></div>
      <div class="py-2 lg:py-2">
        <div class="">
          <h2 class="text-xl text-center lg:text-3xl">
            Formulario de Contacto
          </h2>
          <h3 class="mt-1 text-lg lg:text-xl lg:ml-14 xl:ml-4 2xl:ml-8">
            Déjenos un mensaje y uno de nuestros acesores se pondra en contacto
            con usted
          </h3>
          <div class="py-10 border">
            <div class="grid xl:grid-cols-2">
              <div class="flex justify-center mt-4">
                <font-awesome-icon
                  style="font-size: 20px"
                  :icon="['fas', 'id-card-alt']"
                  class="z-20 w-10 h-10 -mr-10 text-azul"
                />
                <InputBasic holder="Nombre" />
              </div>
              <div class="flex justify-center mt-4">
                <font-awesome-icon
                  style="font-size: 20px"
                  :icon="['fas', 'building']"
                  class="z-20 w-10 h-10 -mr-10 text-azul"
                />
                <InputBasic holder="Empresa" />
              </div>
              <div class="flex justify-center mt-4">
                <font-awesome-icon
                  style="font-size: 20px"
                  :icon="['fas', 'phone-square']"
                  class="z-20 w-10 h-10 -mr-10 text-azul"
                />
                <InputBasic holder="Telefono" />
              </div>
              <div class="flex justify-center mt-4">
                <font-awesome-icon
                  style="font-size: 20px"
                  :icon="['fas', 'phone-square']"
                  class="z-20 w-10 h-10 -mr-10 text-azul"
                />
                <InputBasic holder="Celular" />
              </div>
              <div
                class="flex justify-center mt-4 xl:col-span-2 xl:mx-3 2xl:mx-11"
              >
                <font-awesome-icon
                  style="font-size: 20px"
                  :icon="['fas', 'envelope']"
                  class="z-20 w-10 h-10 -mr-10 text-azul"
                />
                <textarea
                  class="w-64 py-2 pl-12 border rounded focus:outline-none md:w-72 xl:w-full"
                  name=""
                  id=""
                  cols="23"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div
              class="flex justify-center mt-4 xl:justify-end xl:mr-5 2xl:mr-12"
            >
              <button
                class="w-32 px-4 py-2 -ml-4 text-xl text-white border rounded bg-azul"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
 
import InputBasic from "../components/htmlControl/InputBasic.vue";
export default {
  name: "nosotros",
  layout:'default',
  components: { InputBasic, },
};
</script>

<style>
@media only screen and (min-width: 800px) {
  .mapa {
    width: 600px;
    height: 450px;
  }
}

@media only screen and (min-width: 1024px) {
  .mapa {
    width: 500px;
    height: 350px;
  }
}

@media only screen and (min-width: 1282px) {
  .mapa {
    width: 600px;
    height: 450px;
  }
}
</style>
