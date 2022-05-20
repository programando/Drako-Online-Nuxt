<template>
  <div class="border shadow-xl mx-4 sm:mx-10 my-4 md:mt-10 lg:mx-32 xl:mx-56 2xl:mx-80">
    <h2 class="mt-10 text-3xl text-center">Crear cuenta</h2>
    <div class="justify-center mt-5 mb-20 md:flex md:space-x-14 lg:space-x-24">
      <div class="mx-4">
        <div>
          <label class="text-sm font-semibold">Email</label>
          <input
            v-model="formData.email"
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Ingresar Email"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Confirma tu Email</label>
          <input
            v-model="formData.email_confirmation"
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Confirma tu Email"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Nombre</label>
          <input
            v-model="formData.pnombre"
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Nombre"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Apellido</label>
          <input
            v-model="formData.papellido"
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Apellido"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Contraseña</label>
          <input
            v-model="formData.password"
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Contraseña"
            type="password"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Confirmar Contraseña</label>
          <input
            v-model="formData.password_confirmation"
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Confirmar Contraseña"
            type="password"
          />
        </div>
        <div class="mt-10 w-72 flex space-x-2">
          <input class="mt-2" type="checkbox" name="" id="" />
          <PoliticasPrivacidad
            text='Acepto los
            Términos y Condiciones y las
            Politicas de Privacidad y Tratamiento de Datos.'
          >
          </PoliticasPrivacidad>
        </div>
      </div>
      <div class="mx-4">
        <div class="mt-6">
          <label>Tipo de persona</label>
          <select
            class="px-2 py-1 border"
            name="select"
            v-model="formData.tipo_persona"
          >
            <option value="value1">Jurídica</option>
            <option value="value2" selected>Natural</option>
          </select>
        </div>
        <div class="mt-5">
          <label class="text-sm font-semibold">Ciudad</label>

          <select
            class="block px-2 py-1 border rounded w-72"
            v-model="formData.idmcipio"
          >
            <option value="0" selected>Seleccione un municipio</option>
            <option
              v-for="municipio in municipios"
              :key="municipio.idmcipio"
              value="municipio.idmcipio"
            >
              {{ municipio.nommcipio }}
            </option>
          </select>
        </div>

        <div class="mt-4">
          <label class="text-sm font-semibold"
            >Identificación (cédula/nit)</label
          >
          <input
            v-model="formData.identificacion"
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Identificacion (cedula/nit)"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Dirección </label>
          <input
            v-model="formData.direccion"
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Destinatario"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Complemento dirección</label>
          <input
            v-model="formData.direccion_cmplmnto"
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="bloque apartamento casa ...."
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Número celular</label>
          <input
            v-model="formData.celular"
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Télefono"
            type="text"
          />
        </div>
        <div class="flex justify-end mt-4">
          <button
            @click="registrarUsuario"
            class="w-40 px-4 py-1 text-white rounded bg-rojo"
          >
            Crear Cuenta
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Municipios from "@/models/Municipios.js";
import PoliticasPrivacidad from '@/components/comunes/PoliticasPrivacidad.vue'
export default {
  name: "RegistroUsuarios",
  components: {
    PoliticasPrivacidad
  },
  data: () => ({
    municipios: [],
    

    formData: {
      pnombre              : "James",
      email                : "jhonjamesmg@hotmail.com",
      email_confirmation   : "jhonjamesmg@hotmail.com",
      papellido            : "Montaño",
      password             : "1234567",
      password_confirmation: "",
      tipo_persona         : "",
      idmcipio             : 1,
      identificacion       : "",
      direccion            : "",
      direccion_cmplmnto   : '',
      celular              : "",
    },
  }),

  mounted() {
    Municipios.listadoActivos().then((response) => {
      this.municipios = response.data;
    });
  },

  methods: {
    registrarUsuario() {
 
    },
  },
};
</script>

<style scoped>
.ancho-register {
  max-width: 1000px;
}
</style>
