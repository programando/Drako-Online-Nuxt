<template>
  <div class="mt-4 2xl:mt-0">
    <select class="rounded w-40 py-2 px-2 " name="select">
      <option value="value1" selected>{{text}}</option>
      <option value="value2" >Value 2</option>
      <option value="value3">Value 3</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectRespuesto',
  props: {
    text: String
  }
};
</script>

<style></style>
