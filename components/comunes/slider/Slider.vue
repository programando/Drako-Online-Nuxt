<template>
  <div
    v-swiper="swiperOption"
    class="relative w-full ml-auto"
    :loadtheme="false"
  >
    <div class="swiper-wrapper">
        <SliderCard
          img="/slider/slider-1.png"
          alineacion="slider1"
          
          
        />
        <SliderCard
          img="/slider/slider-2.png"
          alineacion="slider2"
          
          
        />
        <SliderCard
          img="/slider/slider-3.png"
          alineacion="slider3"
          
          
        />
        <SliderCard
          img="/slider/slider-4.png"
          alineacion="slider4"
        />
        <SliderCard
          img="/slider/slider-5.png"
          alineacion="slider5"
        />
      
    </div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>

<script>
import { directive } from "vue-awesome-swiper";
import SliderCard from "@/components/comunes/slider/SliderCard.vue"

export default {
  name: "Slider",
  components: {SliderCard},
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
          autoplay: {
            delay: 6000,
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
