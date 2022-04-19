<template>
  <div
    v-swiper="swiperOption"
    class="relative w-full ml-auto"
    :loadtheme="false"
  >
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div
          class="-mt-20 bg-cover slider1"
          style="background-image: url('slider/1.png')"
        >
          <div class="lg:flex lg:justify-between">
            <div class="px-16">
 
            </div>
            <div class="mx-10 lg:mx-2 lg:-mt-14 xl:-mt-20 lg:mr-4 xl:mr-24">
              <p class="text-xl font-semibold text-white lg:text-3xl xl:text-3xl">
                PUNTAS DE EJE - RÓTULAS - TERMINALES DE DIRECCIÓN
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="swiper-slide">
        <div
          class="bg-center bg-cover slider2"
          style="background-image: url('slider/2.png')"
        >
          <div class="lg:flex xl:justify-between">
            <div class="px-16">
 
            </div>
            <div class="mx-10 lg:mx-2 lg:-mt-14 xl:-mt-20 lg:mr-4 xl:mr-24">
              <p class="text-3xl font-semibold text-white xl:text-3xl">
                SUSPENSIONES PARA CAMPEROS Y CAMIONETAS
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-slide">
        <div
          class="bg-center bg-cover slider3"
          style="background-image: url('slider/3.png')"
        >
          <div class="">
            <div class="px-16 -mt-24">
 
            </div>
            <div class="pt-10 pl-20 mx-14">
              <p class="text-3xl font-semibold text-white xl:text-3xl">
                KIT DISTRIBUCIÓN Y BOMBAS DE AGUA
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

.slider1 {
  padding: 520px 0;
  margin-top: -250px;
  }
.slider2 {
  padding: 520px 0;
  margin-top: -250px;
  }

.slider3 {
  padding: 520px 0;
  margin-top: -250px;
  }




 
</style>
