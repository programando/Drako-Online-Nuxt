<template>
  <div class="p-1 min-h-screen grid grid-cols-12 bg-slate-100">
    <div class="col-span-3 bg-white">
      <h2 class="ml-10 my-4 font-semibold text-lg">Acciones</h2>
      <div class="border-t-2">
        <div class="flex justify-center mt-6">
          <button class="bg-blue-600 rounded-lg text-white w-56 py-2">
            Aceptar
          </button>
        </div>
        <div class="flex justify-center mt-2">
          <button class="bg-gray-400 rounded-lg text-white w-56 py-2">
            Rechazar
          </button>
        </div>
        <div class="flex justify-center mt-2">
          <button class="bg-blue-700 rounded-lg text-white w-56 py-2">
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
        <h2
          class="font-semibold text-lg text-blue-700 border-b-2 border-blue-700"
        >
          Detalles
        </h2>
        <h2 class="font-semibold text-lg">Descargas</h2>
      </div>
      <div class="border mt-10">
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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
