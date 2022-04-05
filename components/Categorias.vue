<template>
  <div class="relative flex justify-center mx-10 mt-6 bg-cover w-96">
    <img :src="img" alt="">
    <h2 class="absolute text-white top-20">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: "Categorias",
  props: {
    img: String,
    title: String
  }
}
</script>

<style>

</style>