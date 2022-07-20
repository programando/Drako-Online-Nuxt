<template>
  <div class="p-1 min-h-screen grid grid-cols-12 bg-slate-100">
    <div class="col-span-3 bg-white">
      <h2 class="ml-10 my-4 font-semibold text-lg">Acciones</h2>
      <div class="border-t-2 text-sm">
        <div class="flex justify-center mt-6">
          <button class="bg-rojo rounded-lg text-white w-56 py-2">
            Aceptar
          </button>
        </div>
        <div class="flex justify-center mt-2">
          <button class="bg-gray-400 rounded-lg text-white w-56 py-2">
            Rechazar
          </button>
        </div>
        <div class="flex justify-center mt-2">
          <button class="bg-red-700 rounded-lg text-white w-56 py-2">
            Desc. Pronto Pago
          </button>
        </div>

        <p class="mt-10 ml-10">Abierto por:</p>
      </div>
    </div>
    <div class="col-span-6">
      <div class="flex justify-center">
        <h2>Factura</h2>
      </div>
    </div>
    <div class="col-span-3 bg-white">
      <div class="flex ml-14 space-x-10 mt-4">
        <button
          @click="mostrarDetalles"
          class="font-semibold text-lg"
          :class=[setClassDetalles]
        >
          Detalles
        </button>
        <button 
          @click="mostrarDescarga"
          class="font-semibold text-lg"
          :class=[setClassDescarga]
        >
          Descargas
        </button>
      </div>
      <div v-if="detalles == true" class="border mt-10 text-xs">
        <div class="flex pl-10 py-4 bg-gray-300">
          <p class="w-40">Tipo</p>
          <p class="w-40">Factura</p>
        </div>
        <div class="flex pl-10 py-4  bg-white">
          <p class="w-40">Documento</p>
          <p class="w-40">FVL - 637029</p>
        </div>
        <div class="flex pl-10 py-4 bg-gray-300">
          <p class="w-40">Fecha de Emisión:</p>
          <p class="w-40">12/07/2022</p>
        </div>
        <div class="flex pl-10 py-4  bg-white">
          <p class="w-40">Emisor:</p>
          <p class="w-40">Drako</p>
        </div>
        <div class="flex pl-10 py-4  bg-gray-300">
          <p class="w-40">Receptor</p>
          <p class="w-40">Jhon James Montaño Gonzales 94491178</p>
        </div>
        <div class="flex pl-10 py-4  bg-white">
          <p class="w-40">Valor Total</p>
          <p class="w-40">111.679.38</p>
        </div>
        <div class="flex pl-10 py-4  bg-gray-300">
          <p class="w-40">Cufe</p>
          <p class="w-40">Jhon James Montaño Gonzales 94491178</p>
        </div>
        <div class="flex pl-10 py-4  bg-white">
          <p class="w-40">Estado Trámite:</p>
          <p class="w-40">Entregada</p>
        </div>
        <div class="flex pl-10 py-4  bg-gray-300">
          <p class="w-40">Estado DIAN:</p>
          <p class="w-40">Exitosa</p>
        </div>
        <div class="flex pl-10 py-4  bg-white">
          <p class="w-40">En la DIAN</p>
          <p class="w-40"> aqui</p>
        </div>
      </div>
      <div v-if="descarga == true" class="border mt-10 text-xs">
        <div class="flex justify-center items-center pl-10 py-4 bg-gray-300">
          <p class="w-40">PDF</p>
          <button class="w-40 ml-16">
            <img class="h-8 pb-2" src="/descarga.png" alt="">
          </button>
        </div>
        <div class="flex pl-10 py-4 justify-center items-center  bg-white">
          <p class="w-40">Documento</p>
          <button class="w-40 ml-16">
            <img class="h-8 pb-2" src="/descarga.png" alt="">
          </button>
        </div>
        <div class="flex pl-10 py-4 justify-center items-center bg-gray-300">
          <p class="w-40">Fecha de Emisión:</p>
          <button class="w-40 ml-16">
            <img class="h-8 pb-2" src="/descarga.png" alt="">
          </button>
        </div>
        <div class="flex pl-10 py-4 justify-center items-center  bg-white">
          <p class="w-40">Emisor:</p>
          <button class="w-40 ml-16">
            <img class="h-8 pb-2" src="/descarga.png" alt="">
          </button>
        </div>
        <div class="flex justify-center py-4 bg-white text-sm">
          <button class="bg-rojo rounded-lg text-white w-56 py-2">
            Descargar Todo
          </button>
        </div>
        

        
        </div>
      </div>
    </div>
  
</template>

<script>
export default {
  name: 'factura',

  data() {
    return {
      detalles: true,
      descarga: false
    }
  },

  methods: {
    mostrarDetalles() {
      this.detalles = true
      this.descarga = false

    },

    mostrarDescarga() {
      this.detalles = false
      this.descarga = true
    }
  },

  computed: {
    setClassDetalles() {
      if (this.detalles == true) {
        return 'text-blue-700 border-b-2 border-blue-700'
      }
    },

    setClassDescarga() {
      if (this.descarga == true) {
        return 'text-blue-700 border-b-2 border-blue-700'
      }
    }
  }
}
</script>

<style></style>
