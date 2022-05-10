<template>
  <div class="flex items-center">
    <div  v-swiper="swiperOption"  class="z-10 xl:block"  >
      <div class="swiper-wrapper">
        <div v-for="(producto) in productosRelacionados" :key="producto.idproducto" class="swiper-slide">
         <nuxt-link :to="`/productos/detalles/${producto.idmd5}`"   > 
          <div class="flex justify-center">
             
           <!-- <img class="h-44"  alt="" v-for="imagen in producto.imagenes.slice(0, 1)" :src="imagen._240x240" :key="imagen.idregistro" />-->
          </div>
          <div class="flex justify-center">
            <p class="text-xs">{{ producto.nombre_impreso }}</p>
          </div>
         </nuxt-link>
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


export default {
  name: "productosRelacionados",
  props:{
    productosRelacionados: Array
  },
 
  directives: {
    swiper: directive,
  },
  data() {
    return {
       
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
          1320: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
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

};
</script>

<style>
.ancho {
  width: 40px !important;
}
</style>
