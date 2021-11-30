<template>
  <div class="px-4 py-1 text-white lg:text-lg" :class="fondo">
    <nuxt-link to="#">
      {{title}}
    </nuxt-link>  
  </div>
</template>

<script>
export default {
  name: 'LinksHome',
  props: {
    title: String,
    to: String,
    fondo: String
  },

}
</script>

<style>

</style>