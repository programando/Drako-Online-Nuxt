<template>
  <div class="relative">
    <Slider />
    <ProductosMasVendidos />
    
    <div v-if="gruposProductos.length > 0" class="px-10 mt-8 text-lg font-bold text-center lg:text-left xl:px-32 lg:text-2xl">
      <h2 class="text-xl md:text-2xl lg:text-3xl">  Grupos  destacados </h2>
    </div>
    <div class="flex justify-center mb-4">
      <div class="grid justify-center col-span-1 mx-4 mt-10 lg:grid-cols-2 xl:grid-cols-3"  >
        <div v-for="productoDestacado in gruposProductos"
          :key="productoDestacado.id_clase_grupo"
          class="relative flex items-center justify-center mx-10 mt-6 bg-cover w-96" >
           <nuxt-link class="flex justify-center" :to="`/productos/destacados/${productoDestacado.idmd5}`" >  
              <img  style="width:80%;" :src="productoDestacado.imagen" alt="" />  
            </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 
 
import GruposProductosClases    from "@/models/ProductosGruposClases";
import ProductosMasVendidos     from "@/components/productos/productosMasVendidos.vue";
import Slider                   from "@/components/comunes/slider/Slider.vue";

export default {
  layout:'default',
  components: { Slider, ProductosMasVendidos,      },
  layout: "defaulLayout",
  data: () => ({
    gruposProductos: [],
  }),

  mounted() {
    GruposProductosClases.destacados().then((response) => {
      this.gruposProductos = response.data;
    });
  },

  methods: {
  },
};
</script>

<style scoped>
.contenedor-principal {
  bottom: 20px;
  right: 0px;
}
</style>
