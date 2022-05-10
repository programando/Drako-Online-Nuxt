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
        <p class="text-center">Whatsapp</p>
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
  height: 55px;
  width: 150px;
  transition: 1s;
  overflow: hidden;
}

.boton {
  display: none;
  transition: 1s;
}

.imagen {
 
  margin-left: 80px;
  transition: width 1s;
  
}

.contenedor:hover > .imagen {
  
  margin-right: -40px;
  margin-left: 0;
  transition: 1s;
}

.contenedor:hover > .boton {
  display: block;
  transition: 1s;
  
}

.contenedor:hover {
  width: 220px;
  overflow: hidden;
  transition: 1s;
}
</style>