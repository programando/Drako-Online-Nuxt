<template>
  <div class="px-4 py-2 text-white">
    <nuxt-link to="#">
      {{title}}
    </nuxt-link>  
  </div>
</template>

<script>
export default {
  name: 'LinksResponsive',
  props: {
    title: String,
    to: String,
    
  },

}
</script>

<style>

</style>