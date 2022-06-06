<template>
  <div class="flex justify-center">
    <div class="mr-10">
        <img
        @click="changeImg1"
        class="h-24 w-32 mt-2 cursor-pointer"
        v-for="imagen in imagenesProducto.slice(0, 1)"
        :key="imagen.idregistro"
        id="small-1"
        :src="imagen._240x240"
        alt=""
        />
      
      <img
        @click="changeImg2"
        class="h-24 w-32 mt-2 cursor-pointer"
        v-for="imagen in imagenesProducto.slice(1, 2)"
        :key="imagen.idregistro"
        id="small-2"
        :src="imagen._240x240"
        alt=""
      />
      <img
        @click="changeImg3"
        class="h-24 w-32 mt-2 cursor-pointer"
        v-for="imagen in imagenesProducto.slice(2, 3)"
        :key="imagen.idregistro"
        id="small-3"
        :src="imagen._240x240"
        alt=""
      />
      <img
        @click="changeImg4"
        class="h-24 w-32 mt-2 cursor-pointer"
        v-for="imagen in imagenesProducto.slice(3, 4)"
        :key="imagen.idregistro"
        id="small-4"
        :src="imagen._240x240"
        alt=""
      />
    </div>
    <div class=" ">
      <img
        class="mt-10 w-72 h-72"
        v-for="imagen in imagenesProducto.slice(0, 1)"
        :key="imagen.idregistro"
        id="mainImg"
        :src="imagen._240x240"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "GaleryCard",
  props: {
    imagenesProducto: Array
  },

  
    methods: {
      changeImg1() {
        let mainImg = document.getElementById("mainImg");
        let smallImg = document.getElementById("small-1");
        mainImg.src = smallImg.src;
        
        
      },

      changeImg2() {
        let mainImg = document.getElementById("mainImg");
        let smallImg = document.getElementById("small-2");
        mainImg.src = smallImg.src;

      },

      changeImg3() {
        let mainImg = document.getElementById("mainImg");
        let smallImg = document.getElementById("small-3");
        mainImg.src = smallImg.src;

      },

      changeImg4() {
        let mainImg = document.getElementById("mainImg");
        let smallImg = document.getElementById("small-4");
        mainImg.src = smallImg.src;


      },
    },

  
};
</script>

<style></style>
