<template>
  <footer class="bg-azul grid grid-cols-1 justify-center xl:grid-cols-5 xl:py-10">
      <div class="pt-10 pb-4 px-4 flex justify-center items-center space-x-2 sm:block sm:mx-auto">
        <img class="h-12 sm:h-16 sm:w-full rounded" src="logo.jpg" alt="logo" />
        <p class="text-white text-xl sm:mt-2">Santander de Quilichao</p>
      </div>
      <div class="xl:col-span-3">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center"
        >
          <nuxt-link class="mt-6" to="#">
            <p class="text-white text-center text-lg">Tratamiento de datos</p>
          </nuxt-link>
          <nuxt-link class="mt-6" to="#">
            <p class="text-white text-center text-lg">Tratamiento de datos</p>
          </nuxt-link>
          <nuxt-link class="mt-6" to="#">
            <p class="text-white text-center text-lg">Tratamiento de datos</p>
          </nuxt-link>
          <nuxt-link class="mt-6" to="#">
            <p class="text-white text-center text-lg">Tratamiento de datos</p>
          </nuxt-link>
          <nuxt-link class="mt-6" to="#">
            <p class="text-white text-center text-lg">Tratamiento de datos</p>
          </nuxt-link>
          <nuxt-link class="mt-6" to="#">
            <p class="text-white text-center text-lg">Tratamiento de datos</p>
          </nuxt-link>
          <nuxt-link class="mt-6" to="#">
            <p class="text-white text-center text-lg">Tratamiento de datos</p>
          </nuxt-link>
          <nuxt-link class="mt-6" to="#">
            <p class="text-white text-center text-lg">Tratamiento de datos</p>
          </nuxt-link>
          <nuxt-link class="mt-6" to="#">
            <p class="text-white text-center text-lg">Tratamiento de datos</p>
          </nuxt-link>
          <nuxt-link class="mt-6" to="#">
            <p class="text-white text-center text-lg">Tratamiento de datos</p>
          </nuxt-link>
          <nuxt-link class="mt-6" to="#">
            <p class="text-white text-center text-lg">Tratamiento de datos</p>
          </nuxt-link>
          <nuxt-link class="mt-6" to="#">
            <p class="text-white text-center text-lg">Tratamiento de datos</p>
          </nuxt-link>
        </div>
      </div>
      <div class="mt-6">
        <p class="text-white text-xl lg:text-2xl text-center">Siguenos</p>
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
    </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style>

</style>