<template>
  <footer class="justify-between px-4 pb-4 bg-azul lg:flex xl:py-4">
    <div class="px-4 pt-10 pb-4 space-x-2">
      <div class="flex justify-center">
        <img class="h-12 rounded sm:h-16 " src="logo.jpg" alt="logo" />
      </div>
      
      <p class="mt-2 text-xl text-center text-white">Santander de Quilichao</p>
    </div>

    <div class="items-center mt-6 space-x-6 lg:flex">
      <div class="items-center pt-10">
        <nuxt-link class="mt-6" to="#">
          <p class="text-lg text-center text-white">
            Política prara el tratamiento de datos personales
          </p>
        </nuxt-link>
      </div>
      <div class="pt-4">
        <p class="text-xl text-center text-white lg:text-2xl">Síguenos</p>
        <div class="flex items-center justify-center">
          <nuxt-link to="#" class="flex px-4 py-2">
            <font-awesome-icon
              style="font-size: 30px"
              :icon="['fab', 'facebook-square']"
              class="w-12 h-10 ml-1 -mr-2 text-white"
            />
          </nuxt-link>
          <nuxt-link to="#" class="flex px-4 py-2">
            <font-awesome-icon
              style="font-size: 30px"
              :icon="['fab', 'youtube']"
              class="w-12 h-10 ml-1 -mr-2 text-white"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style></style>
