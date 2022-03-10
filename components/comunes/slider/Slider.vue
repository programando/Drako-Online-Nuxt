<template>
  <div
    v-swiper="swiperOption"
    class="relative w-full ml-auto"
    :loadtheme="false"
  >
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div
          class="py-48 bg-center bg-cover"
          style="background-image: url('slider/SLIDE1.png')"
        >
        <div class="lg:flex lg:justify-between">
          <div class="px-16 ">
            <h2 class="text-3xl font-bold text-white uppercase md:text-4xl">
              Black Friday 1
            </h2>
            <h3 class="mx-4 mt-2 text-xl text-white md:text-2xl">
              Hasta 50% de descuento
            </h3>
            <button
              class="py-2 mx-4 mt-2 text-xl text-white uppercase rounded w-44 bg-azul"
            >
              Ir a la tienda
            </button>
          </div>
          <div class="mx-10 mt-20 lg:mx-2 lg:-mt-14 xl:-mt-20 lg:mr-4 xl:mr-24">
            <p class="text-2xl font-semibold text-white xl:text-3xl">PUNTAS DE EJE • ROTULAS•
              TERMINALES DE DIRECCIÓN</p>
          </div>
        </div>
          
        </div>
      </div>
      <div class="swiper-slide">
        <div
          class="py-48 bg-center bg-cover"
          style="background-image: url('slider/SLIDE2.jpg')"
        >
          <div class="lg:flex xl:justify-between">
            <div class="px-16">
              <h2 class="text-3xl font-bold text-white uppercase md:text-4xl">
                Black Friday 1
              </h2>
              <h3 class="mx-4 mt-2 text-xl text-white md:text-2xl">
                Hasta 50% de descuento
              </h3>
              <button
                class="py-2 mx-4 mt-2 text-xl text-white uppercase rounded w-44 bg-azul"
              >
                Ir a la tienda
              </button>
            </div>
            <div class="mx-10 mt-20 lg:mx-2 lg:-mt-14 xl:-mt-20 lg:mr-4 xl:mr-24">
              <p class="text-2xl font-semibold text-white xl:text-3xl">SUSPENSIÓN CAMPEROS Y CAMIONETAS</p>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div
          class="py-48 bg-center bg-cover"
          style="background-image: url('slider/SLIDE3.jpg')"
        >
          <div class="lg:flex ">
            <div class="px-16">
              <h2 class="text-3xl font-bold text-white uppercase md:text-4xl">
                Black Friday 1
              </h2>
              <h3 class="mx-4 mt-2 text-xl text-white md:text-2xl">
                Hasta 50% de descuento
              </h3>
              <button
                class="py-2 mx-4 mt-2 text-xl text-white uppercase rounded w-44 bg-azul"
              >
                Ir a la tienda
              </button>
            </div>
            <div class="mx-10 mt-20 lg:mt-56 lg:mx-2 lg:mr-4 xl:mr-24">
              <p class="text-2xl font-semibold text-white xl:text-3xl">SUSPENSIÓN CAMPEROS Y CAMIONETAS</p>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div
          class="py-48 bg-center bg-cover"
          style="background-image: url('slider/slider4.jpeg')"
        >
          <div class="px-16">
            <h2 class="text-4xl font-bold text-white uppercase md:text-5xl">
              Black Friday
            </h2>
            <h3 class="mx-4 mt-2 text-xl text-white md:text-2xl">
              Hasta 50% de descuento
            </h3>
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
          class="py-48 bg-center bg-cover"
          style="background-image: url('slider/slider5.jpg')"
        >
          <div class="px-16">
            <h2 class="text-4xl font-bold text-white uppercase md:text-5xl">
              Black Friday
            </h2>
            <h3 class="mx-4 mt-2 text-xl text-white md:text-2xl">
              Hasta 50% de descuento
            </h3>
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
