<template>
  <input v-model="model" class="w-64 border rounded pl-14 focus:outline-none md:w-72" type="text" :placeholder="holder">
</template>

<script>
export default {
  name: "InputBasic",
  props: {
    holder: String,
    value: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      model: this.value
    }
  },

  watch: {
    model(currentValue) {
      this.$emit('input', currentValue)
    }
  },
}
</script>

<style>

</style>