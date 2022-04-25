<template>
  <div
    v-swiper="swiperOption"
    class="relative w-full ml-auto"
    :loadtheme="false"
  >
    <div class="swiper-wrapper">
      <div class="relative swiper-slide">
        <img class="w-full altura" src="/slider/2.png" alt="">
        <div class="absolute -mt-20 bg-center bg-cover slider1">
          <div class="lg:flex lg:justify-between">
            <div class="px-16"></div>
            <div class="mx-10 lg:mx-2 lg:-mt-14 xl:-mt-20 lg:mr-4 xl:mr-24">
              <p
                class="font-semibold text-white md:text-xl lg:text-3xl xl:text-3xl"
              >
                PUNTAS DE EJE - RÓTULAS - TERMINALES DE DIRECCIÓN
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="relative swiper-slide">
        <img class="w-full altura" src="/slider/1.png" alt="">
        <div class="absolute -mt-20 bg-center bg-cover slider1">
          <div class="lg:flex lg:justify-between">
            <div class="px-16"></div>
            <div class="mx-10 lg:mx-2 lg:-mt-14 xl:-mt-20 lg:mr-4 xl:mr-24">
              <p
                class="text-xl font-semibold text-white lg:text-3xl xl:text-3xl"
              >
                PUNTAS DE EJE - RÓTULAS - TERMINALES DE DIRECCIÓN
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="relative swiper-slide">
        <img class="w-full altura" src="/slider/1.png" alt="">
        <div class="absolute -mt-20 bg-center bg-cover slider1">
          <div class="lg:flex lg:justify-between">
            <div class="px-16"></div>
            <div class="mx-10 lg:mx-2 lg:-mt-14 xl:-mt-20 lg:mr-4 xl:mr-24">
              <p
                class="text-xl font-semibold text-white lg:text-3xl xl:text-3xl"
              >
                PUNTAS DE EJE - RÓTULAS - TERMINALES DE DIRECCIÓN
              </p>
            </div>
          </div>
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
        // autoplay: {
        //   delay: 5000,
        // },
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

.altura {
  height: 250px;
 
  
}

@media (min-width: 768px ) {
  .altura {
    height: 350px;
  }
}

@media (min-width: 1280px ) {
  .altura {
    height: 520px;
  }
}

</style>
