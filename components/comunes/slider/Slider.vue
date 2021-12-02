<template>
  <div v-swiper="swiperOption" class="lg:w-6/6 xl:6/6 ml-auto relative h-max-screen" >
    <div class="swiper-wrapper">
      <div class="swiper-slide bg-no-repeat bg-cover bg-center" style="background-image: url('slider/slider5.jpg')">
        <div class=" px-20 py-48">
          <h2 class="text-white uppercase font-bold text-3xl lg:text-5xl">Black Friday</h2>
          <p class="text-white text-lg lg:text-2xl mt-4 lg:ml-6">Hasta 50% de descuento</p>
          <button class="text-white text-lg lg:text-2xl border px-4 py-2 rounded mt-2 bg-azul border-azul lg:ml-12">Ir a la Tienda</button>
        </div>
      </div>
      <div class="swiper-slide bg-no-repeat bg-cover bg-center" style="background-image: url('slider/slider1.jpeg')">
        <div class=" px-20 py-48">
          <h2 class="text-white uppercase font-bold text-3xl lg:text-5xl">Black Friday</h2>
          <p class="text-white text-lg lg:text-2xl mt-4 lg:ml-6">Hasta 50% de descuento</p>
          <button class="text-white text-lg lg:text-2xl border px-4 py-2 rounded mt-2 bg-azul border-azul lg:ml-12">Ir a la Tienda</button>
        </div>
      </div>
      <div class="swiper-slide bg-no-repeat bg-cover bg-center" style="background-image: url('slider/slider3.jpg')">
        <div class=" px-20 py-48">
          <h2 class="text-white uppercase font-bold text-3xl lg:text-5xl">Black Friday</h2>
          <p class="text-white text-lg lg:text-2xl mt-4 lg:ml-6">Hasta 50% de descuento</p>
          <button class="text-white text-lg lg:text-2xl border px-4 py-2 rounded mt-2 bg-azul border-azul lg:ml-12">Ir a la Tienda</button>
        </div>
      </div>
      <div class="swiper-slide bg-no-repeat bg-cover bg-center" style="background-image: url('slider/slider2.jpg')">
        <div class=" px-20 py-48">
          <h2 class="text-white uppercase font-bold text-3xl lg:text-5xl">Black Friday</h2>
          <p class="text-white text-lg lg:text-2xl mt-4 lg:ml-6">Hasta 50% de descuento</p>
          <button class="text-white text-lg lg:text-2xl border px-4 py-2 rounded mt-2 bg-azul border-azul lg:ml-12">Ir a la Tienda</button>
        </div>
      </div>
      <div class="swiper-slide bg-no-repeat bg-cover bg-center" style="background-image: url('slider/slider4.jpeg')">
        <div class=" px-20 py-48">
          <h2 class="text-white uppercase font-bold text-3xl lg:text-5xl">Black Friday</h2>
          <p class="text-white text-lg lg:text-2xl mt-4 lg:ml-6">Hasta 50% de descuento</p>
          <button class="text-white text-lg lg:text-2xl border px-4 py-2 rounded mt-2 bg-azul border-azul lg:ml-12">Ir a la Tienda</button>
        </div>
      </div>
    </div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper";

export default {
  name: "Slider",
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
            1024: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
      },
    };
  },
};
</script>

<style scoped>
.swiper-pagination-bullet.swiper-pagination-bullet-active::after {
  @apply w-48 h-48 ;
}
</style>
