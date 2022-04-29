<template>
  <div class="h-screen">
    <h2 class="pt-10 text-xl text-center md:text-2xl lg:text-3xl">
      Productos en tu carrito de compras
    </h2>
    <div class="grid mx-10 mt-10 space-x-6 lg:grid-cols-12">
      <div class="lg:col-span-8 xl:col-span-9">
        <table class="w-full ">
        <thead>
          <tr>
            <th class="px-4" colspan="4">Producto</th>
            <th colspan="2" class="px-4">Precio</th>
            <th colspan="2" class="px-4">Cantidad</th>
            <th colspan="2" class="px-4">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="4">
              <div class="flex items-center justify-center w-full space-x-20">
                <img class="w-20 h-16" src="/bateria.webp" alt="" />
                <p class="">Bateria</p>
              </div>
            </td>
            <td colspan="2">
              <p class="text-center text-gray-400 line-through">6.999.999</p>
              <p class="text-center">$ 616.999</p>
            </td>
            <td colspan="2">
              <div class="flex items-center justify-center space-x-4">
                <div class="flex mt-2">
                  <button class="px-3 py-1 border">-</button>
                  <p class="px-3 py-1 border">1</p>
                  <button class="px-3 py-1 border">+</button>
                </div>
              </div>
            </td>
            <td colspan="2">
              <div class="flex items-center justify-center">
                <p class="">$ 616.999</p>
              </div>
            </td>
            <td colspan="1">
              <div class="flex items-center">
                <button>
                  <img class="h-5" src="/papelera.png" alt="" />
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="4">
              <div class="flex items-center justify-center w-full space-x-20">
                <img class="w-20 h-16" src="/bateria.webp" alt="" />
                <p class="">Bateria</p>
              </div>
            </td>
            <td colspan="2">
              <p class="text-center text-gray-400 line-through">6.999.999</p>
              <p class="text-center">$ 616.999</p>
            </td>
            <td colspan="2">
              <div class="flex items-center justify-center space-x-4">
                <div class="flex mt-2">
                  <button class="px-3 py-1 border">-</button>
                  <p class="px-3 py-1 border">1</p>
                  <button class="px-3 py-1 border">+</button>
                </div>
              </div>
            </td>
            <td colspan="2">
              <div class="flex items-center justify-center">
                <p class="">$ 616.999</p>
              </div>
            </td>
            <td colspan="1">
              <div class="flex items-center">
                <button>
                  <img class="h-5" src="/papelera.png" alt="" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
        
        </table>
        <div class="flex justify-end mt-4 mr-14">
          <img class="h-40 " src="/PayU.png" alt="">
        </div>
      </div>
      
      <div class="right-0 flex justify-center lg:fixed lg:right-8 2xl:right-20">
        <div class="px-4 py-4 mt-10 border lg:mt-0">
          <h3 class="font-bold text-center uppercase border-b">
            Resumen de tu pedido
          </h3>
          <div class="flex justify-between my-4 space-x-10 border-b">
            <p>Subtotal(1)</p>
            <p class="font-semibold text-rojo">$1.139.900</p>
          </div>
          <div class="flex justify-between my-4 space-x-10 border-b">
            <p>Iva:</p>
            <p class="font-semibold text-rojo">$1.139.900</p>
          </div>
          <div class="flex justify-between my-4 space-x-10 border-b">
            <p>Envio:</p>
            <p class="font-semibold text-rojo">$1.139.900</p>
          </div>
          <div>
            <p class="text-sm text-blue-600">
              Tiempo máximo reservado pedido: 2 horas
            </p>
          </div>
          <div class="flex justify-between my-4 space-x-10 border-b">
            <p>TOTAL:</p>
            <p class="font-semibold text-rojo">$1.139.900</p>
          </div>
          <div>
            <nuxt-link to="/register">
              <button class="w-full py-2 text-white rounded bg-rojo">
                Grabar Pedido
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Tienda",
};
</script>

<style>
</style>