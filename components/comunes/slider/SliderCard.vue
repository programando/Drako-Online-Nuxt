<template>
  <div class="relative swiper-slide">
    <img class="w-full altura" :src="img" alt="" />
    <div :class="[setAlineacion]" class="absolute bg-center bg-cover slider1">
      <div class="mx-4">
        <p
          class="w-40 font-semibold text-white sm:w-56 lg:w-72 xl:w-96"
        >
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderCard",
  props: {
    img: String,
    position: String,
    text: String,
    alineacion: String,
  },

  computed: {
    setAlineacion() {
      switch (this.alineacion) {
        case "slider1":
          return "right-0 bottom-16 text-right text-xs sm:text-2xl md:text-4xl xl:text-6xl lg:text-center";
          break;
        case "slider2":
          return "bottom-10 left-4  text-left text-xs sm:text-center sm:text-base lg:text-center sm:text-2xl md:text-2xl xl:text-4xl xl:bottom-20";
          break;
        case "slider3":
          return "bottom-8 left-4  text-left text-xs sm:text-center sm:text-base lg:text-center md:text-lg lg:text-2xl xl:text-3xl xl:left-10 ";
          break;
        case "slider4":
          return "top-16 text-xs sm:text-base md:text-xl lg:text-2xl xl:text-4xl left-4 sm:left-10 md:top-24 lg:top-32 xl:top-44";
          break;
        case "slider5":
          return "top-20 text-xs sm:text-base md:text-xl md:left-20 lg:text-3xl xl:text-5xl left-4 sm:left-10 lg:top-32 xl:top-44";
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
.altura {
  height: 250px;
}

@media (min-width: 768px) {
  .altura {
    height: 350px;
  }
}

@media (min-width: 1280px) {
  .altura {
    height: 520px;
  }
}
</style>
