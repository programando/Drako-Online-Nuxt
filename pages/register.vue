<template>
  <div class="">
    <h2 class="mt-10 text-3xl text-center">Crear cuenta</h2>
    <div class="justify-center mt-5 mb-20 space-x-20 lg:flex">
      <div class="mx-10">
        <div>
          <label class="text-sm font-semibold">Email</label>
          <input
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Ingresar Email"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Confirma tu Email</label>
          <input
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Confirma tu Email"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Nombre</label>
          <input
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Nombre"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Apellido</label>
          <input
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Apellido"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Contraseña</label>
          <input
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Contraseña"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Confirmar Contraseña</label>
          <input
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Confirmar Contraseña"
            type="text"
          />
        </div>
        <div class="mt-10 w-72">
          <input type="checkbox" name="" id="" />
          <label
            >Acepto los
            <span class="text-yellow-400">Términos y Condiciones</span> y las
            <span class="text-yellow"
              >Politicas de Privacidad y Tratamiento de Datos.</span
            >
          </label>
        </div>
      </div>
      <div class="mx-10">
        <div class="mt-6">
          <label>Tipo de persona</label>
          <select class="px-2 py-1 border" name="select">
            <option value="value1">Jurídica</option>
            <option value="value2" selected>Natural</option>
          </select>
        </div>
        <div class="mt-5">
          <label class="text-sm font-semibold">Ciudad</label>

          <select class="block px-2 py-1 border rounded w-72" v-model="idmcipio">
            <option value="0" selected>Seleccione un municipio</option>
            <option  v-for="municipio in municipios" :key="municipio.idmcipio" value="municipio.idmcipio" >
              {{ municipio.nommcipio }}</option>
          </select>

        </div>

 
        <div class="mt-4">
          <label class="text-sm font-semibold"
            >Identificacion (cédula/nit)</label
          >
          <input
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Identificacion (cedula/nit)"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Dirección destinatario</label>
          <input
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Destinatario"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Observaciones</label>
          <input
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Contraseña"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Télefono</label>
          <input
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Télefono"
            type="text"
          />
        </div>
        <div class="flex justify-end mt-4">
          <button class="w-40 px-4 py-1 text-white rounded bg-rojo">Crear Cuenta</button>
        </div>
      </div>
      
    </div>

  </div>
</template>

<script>
    import Municipios from "@/models/Municipios.js";
    export default {
      name:'RegistroUsuarios',
      data: () => ({
          municipios: [],
          idmcipio  : 0,
      }),

      mounted (){
          Municipios.listadoActivos()
          .then( response => {
              this.municipios = response.data;
          })
      }

    };
</script>

<style>
</style>