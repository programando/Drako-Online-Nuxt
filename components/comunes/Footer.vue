<template>
  <footer class="bg-azul flex justify-between xl:py-4 px-4">
    <div class="pt-10 pb-4 px-4 space-x-2">
      <img class="h-12 sm:h-16 sm:w-full rounded" src="logo.jpg" alt="logo" />
      <p class="text-white text-xl sm:mt-2">Santander de Quilichao</p>
    </div>

    <div class="mt-6 flex items-center space-x-6">
      <div class="items-center pt-14">
        <nuxt-link class="mt-6" to="#">
          <p class="text-white text-center text-lg">
            Política prara el tratamiento de datos personales
          </p>
        </nuxt-link>
      </div>
      <div class="pt-4">
        <p class="text-white text-xl lg:text-2xl text-center">Síguenos</p>
        <div class="flex justify-center items-center">
          <nuxt-link to="#" class="flex px-4 py-2">
            <font-awesome-icon
              style="font-size: 30px"
              :icon="['fab', 'facebook-square']"
              class="text-white h-10 w-12 -mr-2 ml-1"
            />
          </nuxt-link>
          <nuxt-link to="#" class="flex px-4 py-2">
            <font-awesome-icon
              style="font-size: 30px"
              :icon="['fab', 'youtube']"
              class="text-white h-10 w-12 -mr-2 ml-1"
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
