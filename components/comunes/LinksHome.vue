<template>
  <div class="px-4 py-1 text-white lg:text-lg" :class="fondo">
    <nuxt-link to="#">
      <div class="flex items-center space-x-2">
        <img class="h-6 xl:h-7" :src="src" alt="icono">
        <p>{{title}}</p>
      </div>
    </nuxt-link>  
  </div>
</template>

<script>
export default {
  name: 'LinksHome',
  props: {
    title: String,
    to: String,
    fondo: String,
    src: String
  },

}
</script>

<style>

</style>