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
            v-model="formData.confirmEmail"
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Confirma tu Email"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Nombre</label>
          <input
            v-model="formData.nombre"
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Nombre"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Apellido</label>
          <input
            v-model="formData.apellido"
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Apellido"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Contraseña</label>
          <input
            v-model="formData.contrasena"
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Contraseña"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Confirmar Contraseña</label>
          <input
            v-model="formData.confirmContrasena"
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Confirmar Contraseña"
            type="text"
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
            v-model="formData.tipoPersona"
          >
            <option value="value1">Jurídica</option>
            <option value="value2" selected>Natural</option>
          </select>
        </div>
        <div class="mt-5">
          <label class="text-sm font-semibold">Ciudad</label>

          <select
            class="block px-2 py-1 border rounded w-72"
            v-model="idmcipio"
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
            >Identificacion (cédula/nit)</label
          >
          <input
            v-model="formData.identificacion"
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Identificacion (cedula/nit)"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Dirección destinatario</label>
          <input
            v-model="formData.direccion"
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Destinatario"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Observaciones</label>
          <input
            v-model="formData.observaciones"
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="observacion"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Télefono</label>
          <input
            v-model="formData.telefono"
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
    idmcipio: 0,

    formData: {
      nombre: "",
      email: "",
      confirmEmail: "",
      apellido: "",
      contrasena: "",
      confirmContrasena: "",
      tipoPersona: "",
      ciudad: "",
      identificacion: "",
      direccion: "",
      observaciones: "",
      telefono: "",
    },
  }),

  mounted() {
    Municipios.listadoActivos().then((response) => {
      this.municipios = response.data;
    });
  },

  methods: {
    registrarUsuario() {
      if (this.formData.nombre == "") {
        this.$swal.fire("Por favor introduce el nombre");
      } else if (this.formData.email == "") {
        this.$swal.fire("Por favor introduce el email");
      } else if (this.formData.apellido == "") {
        this.$swal.fire("Por favor introduce tu apellido");
      } else if (this.formData.contrasena == "") {
        this.$swal.fire("Por favor introduce tu contraseña");
      } else if (this.formData.identificacion == "") {
        this.$swal.fire("Por favor introduce tu identificación");
      } else if (this.formData.direccion == "") {
        this.$swal.fire("Por favor introduce tu direccion");
      } else if (this.formData.telefono == "") {
        this.$swal.fire("Por favor introduce tu telefono");
      } 
      
      
      
      
      else {
        this.$swal.fire("Informacion enviada con exito!");
      }
    },
  },
};
</script>

<style scoped>
.ancho-register {
  max-width: 1000px;
}
</style>
