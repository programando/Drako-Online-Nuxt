<template>
  <div class="items-center">
    <div class="flex justify-center">
      <img class="h-44 w-44 md:h-36 md:w-36 xl:h-44 xl:w-44" :src="src" alt="">
    </div>
    <p class="flex justify-center text-base :lg-mt-7">Bateria</p>
  </div>
</template>

<script>
export default {
  name: 'Producto',
  props: {
    src: String
  }
}
</script>

<style>

</style>