<template>
  <div>
    <Header />
    <div
      class="py-40 md:py-56 lg:py-80 xl:py-96 bg-no-repeat bg-cover"
      style="background-image: url('nosotros.jpg')"
    >
      <div class="bg-azul flex justify-start w-44 lg:w-56">
        <button
          class="uppercase text-white text-lg py-4 px-4 font-semibold lg:text-2xl"
        >
          quiénes somos
        </button>
      </div>
    </div>
    <div
      class="sm:container mx-4 py-10 sm:mx-auto grid grid-cols-1 lg:grid-cols-5 lg:gap-4"
    >
      <div class="lg:border-r-2">
        <button
          class="text-lg mt-2 lg:mt-4 lg:text-center lg:text-xl block px-4 py-2"
          v-on:click="toggleTabs(1)"
          v-bind:class="{
            'text-gray-600 bg-white': openTab !== 1,
            'text-azul bg-white border-b-2': openTab === 1,
          }"
        >
          Historia
        </button>
        <button
          class="text-lg mt-2 lg:mt-4 lg:text-center lg:text-xl block px-4 py-2"
          v-on:click="toggleTabs(2)"
          v-bind:class="{
            'text-gray-600 bg-white': openTab !== 2,
            'text-azul bg-white border-b-2': openTab === 2,
          }"
        >
          Mision
        </button>
        <button
          class="text-lg mt-2 lg:mt-4 lg:text-center lg:text-xl blok px-4 py-2"
          v-on:click="toggleTabs(3)"
          v-bind:class="{
            'text-gray-600 bg-white': openTab !== 3,
            'text-azul bg-white border-b-2': openTab === 3,
          }"
        >
          Vision
        </button>
      </div>
      <div class="border-b-2 mt-3 mb-3 lg:hidden"></div>
      <div class="lg:col-span-4 lg:ml-4 relative">
        <div
           v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
        >
          <h2 class="text-center text-lg">Historia</h2>
          <p class="text-lg mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
            cupiditate iste tenetur libero repellendus qui. Eius, ea ex
            consequatur ratione quas suscipit modi illum, dolores, culpa amet
            ipsa blanditiis non.
          </p>
          <p class="text-lg mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
            cupiditate iste tenetur libero repellendus qui. Eius, ea ex
            consequatur ratione quas suscipit modi illum, dolores, culpa amet
            ipsa blanditiis non.
          </p>
          <p class="text-lg mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
            cupiditate iste tenetur libero repellendus qui. Eius, ea ex
            consequatur ratione quas suscipit modi illum, dolores, culpa amet
            ipsa blanditiis non.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minus aliquam veniam sint aut eum similique quaerat error incidunt quibusdam.</p>
          <p
            class="mt-4 mr-4 text-xl lg:text-2xl text-right text-gray-600 font-semibold"
          >
            Más de 20 años en vocación de servicios.
          </p>
        </div>
        <div
           v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
        >
          <h2 class="text-center text-lg">Mision</h2>
          <p class="text-lg mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
            cupiditate iste tenetur libero repellendus qui. Eius, ea ex
            consequatur ratione quas suscipit modi illum, dolores, culpa amet
            ipsa blanditiis non.
          </p>
          <p class="text-lg mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
            cupiditate iste tenetur libero repellendus qui. Eius, ea ex
            consequatur ratione quas suscipit modi illum, dolores, culpa amet
            ipsa blanditiis non.
          </p>
          <p class="text-lg mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
            cupiditate iste tenetur libero repellendus qui. Eius, ea ex
            consequatur ratione quas suscipit modi illum, dolores, culpa amet
            ipsa blanditiis non.
          </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint perspiciatis nihil quasi facere quos, iusto aperiam impedit optio repellendus dolorum possimus voluptatem eaque eligendi eius ad magni repudiandae tenetur sequi magnam harum mollitia, vero molestiae inventore. Aspernatur asperiores at voluptate?</p>
          <p
            class="mt-4 mr-4 text-xl lg:text-2xl text-right text-gray-600 font-semibold"
          >
            Más de 20 años en vocación de servicios.
          </p>
        </div>
        <div
           v-bind:class="{ hidden: openTab !== 3, block: openTab === 3 }"
        >
          <h2 class="text-center text-lg">Vision</h2>
          <p class="text-lg mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
            cupiditate iste tenetur libero repellendus qui. Eius, ea ex
            consequatur ratione quas suscipit modi illum, dolores, culpa amet
            ipsa blanditiis non.
          </p>
          <p class="text-lg mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
            cupiditate iste tenetur libero repellendus qui. Eius, ea ex
            consequatur ratione quas suscipit modi illum, dolores, culpa amet
            ipsa blanditiis non.
          </p>
          <p class="text-lg mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
            cupiditate iste tenetur libero repellendus qui. Eius, ea ex
            consequatur ratione quas suscipit modi illum, dolores, culpa amet
            ipsa blanditiis non.
          </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque deleniti animi a ducimus harum corrupti voluptatibus officia deserunt, molestias tempore alias sequi exercitationem iste vitae dignissimos atque aspernatur dolore voluptate voluptas, earum consequatur maiores cum. Doloribus provident magnam repellendus libero et numquam vero quo. Asperiores excepturi veritatis dolorum in ut.</p>
          <p
            class="mt-4 mr-4 text-xl lg:text-2xl text-right text-gray-600 font-semibold"
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
    toggleTabs: function(tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>

<style></style>
