<template>
  <div
    class="grid justify-center grid-cols-1 mt-2 sm:grid-cols-2 md:grid-cols-3 xl:flex xl:items-center mt-2"
  >
   
    <div class="xl:hidden"  v-for="(productoVendido) in productosVendidos" :key="productoVendido.idproducto" >
      <div class="flex justify-center ">
        <img class="h-44"  alt="" :src="productoVendido.imagenes['_240x240']" />
      </div>
      <div class="flex justify-center">
        <p class="text-base">{{ productoVendido.nombre_impreso }}</p>
      </div>
    </div>
 


    <div  v-swiper="swiperOption"  class="relative z-10 hidden -mt-2 lg:w-6/6 xl:block"  >
      <div class="swiper-wrapper">
        
        <div v-for="(productoVendido) in productosVendidos" :key="productoVendido.idproducto" class="swiper-slide">
          <div class="flex justify-center">
            <img class="h-44"  alt="" :src="productoVendido.imagenes[0]['_240x240']" />
           
          </div>
          <div class="flex justify-center">
            <p class="text-xs">{{ productoVendido.nombre_tecnico }}</p>
          </div>

        </div>
        

      </div>
      <img
        class="ancho swiper-button-prev"
        slot="button-prev"
        src="arrow-izquierda.png"
        alt=""
      />
      <img
        class="ancho swiper-button-next"
        slot="button-next"
        src="arrow-derecha.png"
        alt=""
      />
    </div>
    </div>
   
 
</template>

<script>
 
import { directive } from "vue-awesome-swiper";
import Productos from "@/models/Productos";

export default {
  name: "productosMasVendidos",
 
  directives: {
    swiper: directive,
  },
  data() {
    return {
      productosVendidos: [],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: -10,
        slidesPerGroup: 1,
        loop: true,
        speed: 400,
       autoplay: {
          delay: 4000,
          disableOnInteraction: false
        }, 
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    };
  },
  mounted() {
    Productos.masVendidos().then((response) => {
      this.productosVendidos = response.data;
      //console.log (this.productosVendidos );
    });
  },
};
</script>

<style>
.ancho {
  width: 40px !important;
}
</style>
