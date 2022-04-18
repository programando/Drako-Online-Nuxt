<template>
  <div class="absolute z-50 cursor-pointer contenedor-principal ">
    <a
      class="flex items-center contenedor"
      href="https://api.whatsapp.com/send?phone=573152701964"
    >
      <img class="z-40 h-14 imagen" src="/whatsapp2.svg" alt="" />
      <div
        class="z-10 py-1 text-sm text-white bg-green-600 rounded-full cursor-pointer px-14 boton "
      >
        <p>Contáctenos</p>
        <p class="text-center">por Whatsapp</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "WsContact"
};
</script>

<style>
.contenedor {
  height: 25px;
  width: 265px;
  transition: width 0.8s;
}

.boton {
  display: none;
}

.imagen {
  margin-right: -50px;
  margin-left: 200px;
  transition: width 0.8s;
}

.contenedor:hover > .imagen {
  margin-left: 0;
}

.contenedor:hover > .boton {
  display: block;
}

.contenedor:hover {
  width: 350px;
}
</style>