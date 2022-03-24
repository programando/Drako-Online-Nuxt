<template>
  <div
    v-swiper="swiperOption"
    class="relative w-full ml-auto"
    :loadtheme="false"
  >
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div
          class="bg-center bg-cover py-80"
          style="background-image: url('slider/SLIDE1.png')"
        >
        <div class="lg:flex lg:justify-between">
          <div class="px-16 ">
            
            <button
              class="py-2 mx-4 mt-2 text-xl text-white uppercase rounded w-44 bg-azul"
            >
              Ir a la tienda
            </button>
          </div>
          <div class="mx-10 mt-20 lg:mx-2 lg:-mt-14 xl:-mt-20 lg:mr-4 xl:mr-24">
            
          </div>
        </div>
          
        </div>
      </div>
      <div class="swiper-slide">
        <div
          class="bg-center bg-cover py-80"
          style="background-image: url('slider/SLIDE2.jpg')"
        >
          <div class="lg:flex xl:justify-between">
            <div class="px-16">
              <button
                class="py-2 mx-4 mt-2 text-xl text-white uppercase rounded w-44 bg-azul"
              >
                Ir a la tienda
              </button>
            </div>
            <div class="mx-10 lg:mx-2 lg:-mt-14 xl:-mt-20 lg:mr-4 xl:mr-24">
              <p class="text-2xl font-semibold text-white xl:text-3xl">SUSPENSIÓN CAMPEROS Y CAMIONETAS</p>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div
          class="bg-center bg-cover py-80"
          style="background-image: url('slider/SLIDE3.jpg')"
        >
          <div class="">
            <div class="px-16 -mt-24">
              <button
                class="py-2 mx-4 mt-2 text-xl text-white uppercase rounded w-44 bg-azul"
              >
                Ir a la tienda
              </button>
            </div>
            <div class="pt-10 pl-20 mx-14">
              <p class="text-2xl font-semibold text-white xl:text-3xl">SUSPENSIÓN CAMPEROS Y CAMIONETAS</p>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div
          class="bg-center bg-cover py-80"
          style="background-image: url('slider/slider4.jpeg')"
        >
          <div class="px-16">
            <button
              class="py-2 mx-4 mt-2 text-xl text-white uppercase rounded w-44 bg-azul"
            >
              Ir a la tienda
            </button>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div
          class="bg-center bg-cover py-80"
          style="background-image: url('slider/slider5.jpg')"
        >
          <div class="px-16">
            <button
              class="py-2 mx-4 mt-2 text-xl text-white uppercase rounded w-44 bg-azul"
            >
              Ir a la tienda
            </button>
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
        //   delay: 3000
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
</style>
