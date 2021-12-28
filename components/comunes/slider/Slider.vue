<template>
  <div
    v-swiper="swiperOption"
    class="relative w-5/6 ml-auto lg:w-full"
    :loadtheme="false"
  >
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div
          class="py-64 bg-center bg-cover"
          style="background-image: url('slider/slider1.jpeg')"
        >
          <h1>Hola</h1>
        </div>
      </div>
      <div class="swiper-slide">
        <div
          class="py-64 bg-center bg-cover"
          style="background-image: url('slider/slider2.jpg')"
        >
          <h1>Hola</h1>
        </div>
      </div>
      <div class="swiper-slide">
        <div
          class="py-64 bg-center bg-cover"
          style="background-image: url('slider/slider3.jpg')"
        >
          <h1>Hola</h1>
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
        slidesPerView: 1,
        spaceBetween: -10,
        slidesPerGroup: 1,
        loop: true,
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

<style scoped>
.swiper-pagination-bullet.swiper-pagination-bullet-active::after {
  @apply w-48 h-48;
}
</style>
