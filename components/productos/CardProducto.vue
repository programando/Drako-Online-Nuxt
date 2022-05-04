<template>
  <div class="">
    <div class="relative flex justify-center">
      <p
        v-if="producto.precio_oferta"
        class="absolute left-0 w-20 px-2 py-1 -ml-4 text-center text-white rounded-sm bg-rojo top-2"
      >
        Oferta
      </p>
      <nuxt-link
        :to="{
          name: 'productos-detalles-idmd5',
          params: { idmd5: producto.idmd5 },
        }"
      >
        <img
          class="h-44"
          v-for="imagen in producto.imagenes.slice(0, 1)"
          :key="imagen.idregistro"
          alt=""
          :src="imagen._240x240"
        />
      </nuxt-link>
    </div>
    <p class="h-16 text-gray-700 text-start">
      {{ producto.nombre_impreso }}
    </p>
    <div class="h-12">
      <p
        class="mt-4 mr-2 font-semibold text-right"
        :class="{
          'line-through text-gray-500': producto.precio_oferta,
        }"
      >
        {{ producto.precio_base_format }}
      </p>
      <p v-if="producto.precio_oferta" class="mr-2 font-semibold text-right">
        {{ producto.precio_oferta_format }}
      </p>
    </div>

    <div class="flex items-center space-x-4">
      <div class="flex items-center mt-2">
        <button class="px-2 py-1 border" @click="disminuirCantidad(index)">
          -
        </button>
        <p class="px-2 py-1 border" disabled="disabled">
          {{ producto.cantidad }}
        </p>
        <button class="px-2 py-1 border" @click="aumentarCantidad(index)">
          +
        </button>
      </div>

      <div class="">
        <button
          @click="addProductoCarito(producto)"
          class="px-4 py-1 mt-2 border rounded-lg hover-boton"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProducto",
  props: {
    producto: Object,
    index: Number,
    productos: Array,
  },

  methods: {
    addProductoCarito(productoComprado) {
      this.$store.dispatch("carrito/addProductoComprado", productoComprado);
    },

    disminuirCantidad(index) {
      if (this.productos[index].cantidad > 0) {
        this.productos[index].cantidad--;
        this.$store.dispatch(
          "carrito/removeOnlyProductoComprado",
          this.productos[index].idproducto
        );
      }
    },

    aumentarCantidad(index) {
      this.productos[index].cantidad++;
      this.$store.dispatch(
        "carrito/addProductoComprado",
        this.productos[index]
      );
    },
  },
};
</script>

<style></style>
