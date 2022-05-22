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
            type="email"
            :disabled="!emailDisabled"
            :class="{ 'bg-rojo': !emailDisabled}"
            @blur="emailExistVerify()"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Confirma tu email</label>
          <input
            v-model="formData.email_confirmation"
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Confirma tu Email"
            type="email"
            @blur="emailExistVerify()"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Nombre/Razón social</label>
          <input
            v-model="formData.pnombre"
            class="block px-4 py-1 border rounded w-72 2xl:w-96 focus:outline-none"
            placeholder="Nombre"
            type="text"
          />
        </div>
        <div class="mt-4">
          <label class="text-sm font-semibold">Apellido (persona natural)</label>
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
        <div class="mt-10 w-72 flex space-x-2 flex-alignment-left">
          <input class="mt-2" type="checkbox" name="" id="" v-model="chkPoliticaDatos"/>
          <PoliticasPrivacidad
            text='Acepto los términos y condiciones de la Política prara el tratamiento de datos personales' >
          </PoliticasPrivacidad>
        </div>
      </div>
      <div class="mx-4">
        
        <div class="mt-6">
          <label>Tipo de persona</label>
          <select  class="px-2 py-1 border"  name="select"  v-model="formData.tipo_persona"  >
            <option value="1" selected>Natural</option>
            <option value="2">Jurídica</option>
          </select>
        </div>
        <div class="mt-6">
          <label>Régimen triburtario</label>
          <select  class="px-2 py-1 border"  name="select"  v-model="formData.regimen"  >
            <option value="1" >Común</option>
            <option value="2" selected>Simplificado</option>
          </select>
        </div>

        <div class="mt-5">
          <label class="text-sm font-semibold">Ciudad o municipio</label>

          <select class="block px-2 py-1 border rounded w-72" v-model="formData.idmcipio" >
            <option value="0" selected >Seleccione un municipio</option>
            <option v-for="municipio in municipios" :key="municipio.idmcipio"  :value = "municipio.idmcipio" >
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
          <label class="text-sm font-semibold">Dirección paara despachos</label>
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
          <button  @click="registrarUsuario" class="w-40 px-4 py-1 text-white rounded bg-rojo" >
            Crear Cuenta
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Municipios           from "@/models/Municipios.js";
import PoliticasPrivacidad  from '@/components/comunes/PoliticasPrivacidad.vue'
import Messages             from "@/mixins/sweetalert2";
import ApiUser              from "@/models/User.js";
export default {
  name: "RegistroUsuarios",
  mixins: [ Messages ] ,
  components: {
    PoliticasPrivacidad
  },
  data: () => ({
    municipios: [],
    emailDisabled: true,
    formData: {
      pnombre              : "",
      email                : "",
      email_confirmation   : "",
      papellido            : "",
      password             : "",
      password_confirmation: "",
      tipo_persona         : 1,
      idmcipio             : 0,
      regimen              : 2,
      identificacion       : "",
      direccion            : "",
      direccion_cmplmnto   : '',
      celular              : "",
    },
    chkPoliticaDatos       : false,
  }),

  mounted() {
    Municipios.listadoActivos().then((response) => {
      this.municipios = response.data;
    });
    if ( this.$route.params.email != undefined ){
        this.formData.email = this.$route.params.email;
        this.emailDisabled  = true;
    }
     
  },

  methods: {
    emailExistVerify () {
        ApiUser.existeEmail ( this.formData.email)
        .then( response => {
            if ( response.data == 'OkUsuario') { this.$router.push({ path: '/login/' }); }
        });
    },

    registrarUsuario() {
        let textoValidation = this.dataRegisterValidation ();
        if ( textoValidation !='dataOk') {
            this.Message("Datos incompletos" ,  textoValidation , 'error', 'Cerrar' ); 
            return ;
        }
        ApiUser.nuevoRegistro ( this.formData)
          .then ( () =>{
             this.$router.push({ path: '/login' }); 
          })
    },

    dataRegisterValidation() {
      let form = this.formData; let textoValidation = 'dataOk';

      if ( form.email.length              == 0                                  )     {  textoValidation = 'Es necesario que registre un email válido para enviar datos de pago' ; }
      if ( form.email_confirmation.length == 0                                  )     {  textoValidation = 'Es necesario que confirme su email para continuar' ; }
      if ( form.email                     != form.email_confirmation            )     {  textoValidation = 'Su email y la confirmación deben ser iguales' ; }
      if ( form.pnombre.length            == 0                                  )     {  textoValidation = 'Indique su nombre o razón social' ; }
      if ( form.password.length           == 0                                  )     {  textoValidation = 'Registre su contraseña' ; }
      if ( form.password                  != form.password_confirmation         )     {  textoValidation = 'La contraseña y su confirmación no coinciden' ; }
      if ( form.tipo_persona              == 0                                  )     {  textoValidation = 'Es necesario que indique el tipo de persona: Natural o jurídica' ; }
      if ( form.regimen                   == 0                                  )     {  textoValidation = 'Es necesario que indique régimen: Común o simplificado' ; }
      if ( form.idmcipio                  == 0                                  )     {  textoValidation = 'Seleccione el municpio a donde enviaremos el domicilio' ; }
      if ( form.direccion.length          == 0                                  )     {  textoValidation = 'Registre la dirección a donde enviaremos el pedido' ; }
      if ( form.celular.length            == 0                                  )     {  textoValidation = 'Registre número de teléfono para contacto ' ; }
      if ( form.tipo_persona              == 1  &&  form.papellido.length == 0  )     {  textoValidation =  'Para personas naturales debe indicar el apellido.' ; }
      if ( this.chkPoliticaDatos          ==   false                            )     {  textoValidation =  'Debe aceptar nuestra política para el tratamiento de datos personales' ; }
        
      return textoValidation;
        
    }

  },
};
</script>

<style scoped>
.ancho-register {
  max-width: 1000px;
}
</style>
