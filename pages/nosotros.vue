<template>
  <div>
    <Header />
    <div
      class="py-40 bg-no-repeat bg-cover md:py-56 lg:py-80 xl:py-80"
      style="background-image: url('nosotros2.jpg')"
    >
      <div class="flex justify-start bg-azul w-44 lg:w-56">
        <button
          class="px-4 py-4 text-lg font-semibold text-white uppercase lg:text-2xl"
        >
          quiénes somos
        </button>
      </div>
    </div>
    <div
      class="grid grid-cols-1 py-10 mx-4 sm:container sm:mx-auto lg:grid-cols-5 lg:gap-4"
    >
      <div class="lg:border-r-2">
        <button
          class="block px-4 py-2 mt-2 text-lg lg:mt-4 lg:text-center lg:text-xl"
          v-on:click="toggleTabs(1)"
          v-bind:class="{
            'text-gray-600 bg-white': openTab !== 1,
            'text-azul bg-white border-b-2': openTab === 1,
          }"
        >
          Historia
        </button>
        <button
          class="block px-4 py-2 mt-2 text-lg lg:mt-4 lg:text-center lg:text-xl"
          v-on:click="toggleTabs(2)"
          v-bind:class="{
            'text-gray-600 bg-white': openTab !== 2,
            'text-azul bg-white border-b-2': openTab === 2,
          }"
        >
          Mision
        </button>
        <button
          class="px-4 py-2 mt-2 text-lg lg:mt-4 lg:text-center lg:text-xl blok"
          v-on:click="toggleTabs(3)"
          v-bind:class="{
            'text-gray-600 bg-white': openTab !== 3,
            'text-azul bg-white border-b-2': openTab === 3,
          }"
        >
          Vision
        </button>
      </div>
      <div class="mt-3 mb-3 border-b-2 lg:hidden"></div>
      <div class="relative lg:col-span-4 lg:ml-4">
        <div v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }">
          <h2 class="text-xl text-center">Historia</h2>
          <p class="mt-4 text-lg">
            Drako es el fruto del trabajo continuo durante más de 18 años de
            dedicación y esfuerzo. Iniciando como Lubrioriente en el año 2004 en
            la ciudad de Cali, Valle del Cauca, Frenos y Muelle Toro en
            Santander de Quilichao y Frenos Toro en Santander de Quilichao. Hoy
            Drako Autopartes, es líder en el norte del Cauca en la distribución
            de lubricantes y partes con el respaldo de las mejores marcas:
            Lubricantes Nissan, Motul, Mobil, Varta, Borg Warner, Kross, Duncan,
            Bosch, Acdelco.
          </p>

          <p
            class="mt-4 mr-4 text-xl font-semibold text-right text-gray-600 lg:text-2xl"
          >
            Más de 20 años en vocación de servicios.
          </p>
        </div>
        <div v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }">
          <h2 class="text-xl text-center">Mision</h2>
          <p class="mt-4 text-lg">
            En DRAKO AUTOPARTES hemos asumido el compromiso de ser una de las mejores empresas distribuidora de lubricantes, piezas (autopartes) y accesorios para vehículos automotores con el respaldo de las mejores marcas del mercado. Nuestra prioridad es satisfacer las necesidades y requerimientos de nuestros clientes y proveedores permitiéndonos crecer como una empresa líder en el mercado autopartista. 
          </p>
          
          <p
            class="mt-4 mr-4 text-xl font-semibold text-right text-gray-600 lg:text-2xl"
          >
            Más de 20 años en vocación de servicios.
          </p>
        </div>
        <div v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }">
          <h2 class="text-xl text-center">Vision</h2>
          <p class="mt-4 text-lg">
            Ser una empresa reconocida, líderes en el sector de comercio de partes, piezas y lubricantes para automotores obteniendo la preferencia de nuestros clientes, mayoristas y proveedores. Ofrecer soluciones integrales, brindar un servicio de la más alta calidad. generando siempre para todos servicios y productos innovadores para una mejor experiencia con nuestra empresa DRAKO. 
          </p>
          
          <p
            class="mt-4 mr-4 text-xl font-semibold text-right text-gray-600 lg:text-2xl"
          >
            Más de 20 años en vocación de servicios.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/comunes/Footer.vue";
export default {
  name: "nosotros",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      openTab: 1,
    };
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>

<style></style>
