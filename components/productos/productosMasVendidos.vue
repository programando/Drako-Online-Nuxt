<template>
     <div class="px-10 mt-8 text-lg font-bold text-center lg:text-left xl:px-32 " >
        <h2 class="mt-20 mb-8 text-xl md:text-2xl lg:text-3xl">Productos más vendidos</h2>
    <div class="flex items-center">
            <div  v-swiper="swiperOption"  class="z-10 xl:block"  >
              <div class="swiper-wrapper">
                <div v-for="(productoVendido) in productosVendidos" :key="productoVendido.idproducto" class="swiper-slide">
                <nuxt-link :to="`/productos/detalles/${productoVendido.idmd5}`"   > 
                  <div class="flex justify-center">
                    <img class="h-44"  alt="" v-for="imagen in productoVendido.imagenes.slice(0, 1)" :src="imagen._240x240" :key="imagen.idregistro" />
                  </div>
                  <div class="flex justify-center">
                    <p class="text-xs">{{ productoVendido.nombre_impreso }}</p>
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
     <div class="my-10 border-b-2"></div>
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
  mounted() {
    Productos.masVendidos().then((response) => {
      //this.productosVendidos = response.data;
    });
  },
};
</script>

<style>
.ancho {
  width: 40px !important;
}
</style>
