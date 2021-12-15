<template>
  <input class="pl-14 focus:outline-none border rounded md:w-72" type="text" :placeholder="holder">
</template>

<script>
export default {
  name: "InputBasic",
  props: {
    holder: String,

  }
}
</script>

<style>

</style>