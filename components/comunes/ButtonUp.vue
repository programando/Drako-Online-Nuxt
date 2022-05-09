<template>
  <button @click="scroll" class="p-4 bg-white btn-scrolltop" id="btn_scrolltop">
    <img class="h-6" src="/arrow-arriba.png" alt="">
  </button>
</template>

<script>
export default {
  name: "ButtonUp",
  mounted() {
    this.scrollOn();
  },
  methods: {
    scroll() {
      console.log("Hola");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },

    scrollOn() {
      const btn = document.getElementById("btn_scrolltop");
      console.log(btn);
      window.onscroll = () => {
        if (window.scrollY < 300) {
          btn.classList.remove("btn-scrolltop-on");
        } else {
          btn.classList.add("btn-scrolltop-on");
        }
      };
    },
  },
};
</script>

<style scoped>
.btn-scrolltop {
  position: fixed;
  bottom: 10px;
  border: 1px black solid;
  right: 10px;
  border-radius: 100%;
  padding: 10px;
  cursor: pointer;
  transform: translateY(200px);
  transition: 0.3s;
}

.btn-scrolltop-on {
  transform: translateY(0px);
}
</style>
