<template>
  <footer class="justify-between px-4 pb-4 bg-azul lg:flex xl:py-4">
    <div class="px-4 pt-10 pb-4 space-x-2">
      <div class="flex justify-center">
        <img class="h-12 rounded sm:h-16 " src="logo.jpg" alt="logo" />
      </div>
      
      <p class="mt-2 text-xl text-center text-white">Santander de Quilichao</p>
    </div>

    <div class="items-center space-x-6 mt-14 lg:flex">
      <div class="items-center pt-10">
        <nuxt-link class="mt-6" to="#">
          <p class="text-lg text-center text-white" @click="getPolitica()">
            Política prara el tratamiento de datos personales
          </p>
        </nuxt-link>
      </div>
      <div class="pt-4 mb-3">
        <p class="text-xl text-center text-white lg:text-2xl">Síguenos</p>
        <div class="flex items-center justify-center">
          <a href="https://www.facebook.com/drakoautopartes1" target="_blank" class="flex px-4 py-2">
            <font-awesome-icon
              style="font-size: 30px"
              :icon="['fab', 'facebook-square']"
              class="w-12 h-10 ml-1 -mr-2 text-white"
            />
          </a>
          <a href="https://www.youtube.com/channel/UClk-ZsazbHs_gdnuFKz15Ow" target="_blank" class="flex px-4 py-2">
            <font-awesome-icon
              style="font-size: 30px"
              :icon="['fab', 'youtube']"
              class="w-12 h-10 ml-1 -mr-2 text-white"
            />
          </a>
          <a href="https://www.instagram.com/drakoautopartes/?hl=es"  target="_blank" class="flex px-4 py-2">
            <font-awesome-icon
              style="font-size: 30px"
              :icon="['fab', 'instagram']"
              class="w-12 h-10 ml-1 -mr-2 text-white"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer",
    data: ()=> ({

    }),
    methods:{
        getPolitica() {
            let fileName = "/files/politica-tratamientos-datos-drako-autopartes.pdf";
            window.open(fileName, "_blank");
        }
    }
  };

</script>

<style></style>
