<template>
  <div class="border px-4 py-4 mx-4 md:mx-10 md:my-10 my-4 shadow-xl">
    <div class="items-center md:flex md:space-x-10 justify-center xl:space-x-20">
      <div>
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
        <div class="flex justify-start mt-4">
          <button class="w-40 px-4 py-1 text-white rounded bg-rojo">
            Ingresar
          </button>
        </div>
        <div class="mt-4 text-rojo flex space-x-10">
          <nuxt-link to="/">Olvido su Contraseña</nuxt-link>
          <nuxt-link to="/register">Registro</nuxt-link>
        </div>
      </div>

      <!-- beneficios buscaLibre   -->
      <div class="ancho-beneficios">
        <div class="border border-rojo p-4 mt-10">
          <p class="text-sm">
            Beneficios de comprar en
            <span class="text-rojo">Busca</span>Libre<span class="text-rojo"
              >.com</span
            >
          </p>
          <div class="mt-2 flex space-x-2 items-center">
            <img class="h-8" src="/tarjeta-de-debito.png" alt="" />
            <div>
              <p class="text-rojo text-sm">Multiples medios de Pago</p>
              <p class="text-sm">Paga con tarjeta de crédito o débito</p>
            </div>
          </div>
          <div class="mt-2 flex space-x-2 items-center">
            <img class="h-8" src="/proteger.png" alt="" />
            <div>
              <p class="text-rojo text-sm">Gárantia de devolucion</p>
              <p class="text-sm">
                Si tu producto falla, puedes devolverlo y te devolvemos el
                dinero o remplazaremos tu producto
              </p>
            </div>
          </div>
          <div class="mt-2 flex space-x-2 items-center">
            <img class="h-8" src="/entrega-urgente.png" alt="" />
            <div>
              <p class="text-rojo text-sm">Envíos a todo Colombia</p>
              <p class="text-sm">BuscaLibre llega a la puerta de tu casa</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- metodos de pago -->
    <div class="mt-10 md:mt-14">
      <div class="md:flex justify-evenly">
        <h2 class="md:text-2xl">Nuestras formas de pago</h2>
      </div>
      
      <div class="md:mt-10">
        <div class="md:flex justify-evenly 2xl:justify-center 2xl:space-x-20">
          <div class="flex space-x-4 items-center">
            <nuxt-link class="mt-4" to="/">
              <img class="" src="/visa.png" alt="" />
            </nuxt-link>
            <nuxt-link to="/">
              <img class="" src="/pse2.png" alt="" />
            </nuxt-link>
          </div>
          <div class="flex space-x-4 items-center">
            <nuxt-link class="mt-4" to="/">
              <img class="" src="/payu.png" alt="" />
            </nuxt-link>
            <nuxt-link to="/">
              <img class="" src="/mastercard2.png" alt="" />
            </nuxt-link>
          </div>
        </div>
        <div class="md:flex justify-evenly 2xl:justify-center 2xl:space-x-20">
          <div class="flex space-x-4 items-center">
            <nuxt-link class="mt-4" to="/">
              <img class="" src="/efecty.png" alt="" />
            </nuxt-link>
            <nuxt-link to="/">
              <img class="" src="/davivienda.png" alt="" />
            </nuxt-link>
          </div>
          <div class="flex space-x-4 items-center">
            <nuxt-link class="mt-4" to="/">
              <img class="" src="/bancolombia.png" alt="" />
            </nuxt-link>
            <nuxt-link to="/">
              <img class="" src="/via.png" alt="" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PagarCarrito",
};
</script>

<style scoped>
.ancho-beneficios {
  max-width: 500px;
}
</style>
