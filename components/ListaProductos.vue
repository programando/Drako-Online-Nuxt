<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:flex justify-center xl:items-center mt-2"
  >
      <div class="xl:hidden">
        <div class="flex justify-center xl:hidden">
          <img class="w-4/6 2xl:h-48" src="productos/1.jpg" alt="" />
        </div>
        <div class="flex justify-center">
          <p>Producto</p>
        </div>
      </div>
      <div class="xl:hidden">
        <div class="flex justify-center xl:hidden">
          <img class="w-4/6 2xl:h-48" src="productos/2.jpg" alt="" />
        </div>
        <div class="flex justify-center">
          <p>Producto</p>
        </div>
      </div>
      <div class="xl:hidden">
        <div class="flex justify-center xl:hidden">
          <img class="w-4/6 2xl:h-48" src="productos/3.jpg" alt="" />
        </div>
        <div class="flex justify-center">
          <p>Producto</p>
        </div>
      </div>
      <div class="xl:hidden">
        <div class="flex justify-center xl:hidden">
          <img class="w-4/6 2xl:h-48" src="productos/4.jpg" alt="" />
        </div>
        <div class="flex justify-center">
          <p>Producto</p>
        </div>
      </div>
      <div class="xl:hidden">
        <div class="flex justify-center xl:hidden">
          <img class="w-4/6 2xl:h-48" src="productos/5.jpg" alt="" />
        </div>
        <div class="flex justify-center">
          <p>Producto</p>
        </div>
      </div>
    
    <div v-swiper="swiperOption" class="lg:w-6/6 relative hidden xl:block -mt-2">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="flex justify-center">
            <img class="w-4/6 2xl:h-48" src="productos/1.jpg" alt="" />
          </div>
          <div class="flex justify-center">
            <p>Producto</p>
          </div>
        </div>
        <div class="swiper-slide items-center">
          <div class="flex justify-center">
            <img class="w-4/6 2xl:h-48" src="productos/2.jpg" alt="" />
          </div>

          <div class="flex justify-center">
            <p>Producto</p>
          </div>
        </div>
        <div class="swiper-slide items-center">
          <div class="flex justify-center">
            <img class="w-4/6 2xl:h-48" src="productos/3.jpg" alt="" />
          </div>

          <div class="flex justify-center">
            <p>Producto</p>
          </div>
        </div>
        <div class="swiper-slide items-center">
          <div class="flex justify-center">
            <img class="w-4/6 2xl:h-48" src="productos/4.jpg" alt="" />
          </div>

          <div class="flex justify-center">
            <p>Producto</p>
          </div>
        </div>
        <div class="swiper-slide items-center">
          <div class="flex justify-center">
            <img class="w-4/6 2xl:h-48" src="productos/5.jpg" alt="" />
          </div>

          <div class="flex justify-center z-10">
            <p>Producto</p>
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
import Producto from "../components/Producto.vue";
import { directive } from "vue-awesome-swiper";

export default {
  name: "ListaProductos",
  components: {
    Producto,
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
        /* autoplay: {
          delay: 4000,
          disableOnInteraction: false
        }, */
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
};
</script>

<style>
.ancho {
  width: 40px !important;
}
</style>
