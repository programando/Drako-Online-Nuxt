<template>
  <div class="h-screen">
      
      <div v-if="getPedido.length==0"> 
          NO HAS AGREGADO REPUESTOS A TU CARRITO DE COMPRA
      </div>

    <div v-if="getPedido.length > 0">
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
          
          <tr v-for="(Pedido, index) in getPedido" :key="Pedido.idproducto">

            <td colspan="4">
              <div class="flex items-center justify-left w-full space-x-20">
                <img class="w-20 h-16" :src="Pedido.nom_imagen" alt="" />
                <p class="">{{ Pedido.nombre_impreso }}</p>
              </div>
            </td>

            <td colspan="2">
              <p v-if="Pedido.precioOferta>0" class="text-center text-gray-400 line-through">$ {{ Pedido.precioOfertaFormat }}</p>
              <p class="text-center">$ {{ Pedido.precioUnitarioFormat }}</p>
            </td>

            <td colspan="2">

              <div class="flex items-center justify-center space-x-4">
                <div class="flex mt-2">
                  <button class="px-3 py-1 border" @click="disminuirCantidad(index)">-</button>
                  <p class="px-3 py-1 border">{{ Pedido.cantidad }}</p>
                  <button class="px-3 py-1 border" @click="aumentarCantidad(index)" >+</button>
                </div>
              </div>

            </td>

            <td colspan="2">
              <div class="flex items-center justify-center">
                <p class="">$ {{ Pedido.cantidad  * Pedido.precioUnitario | NumeroEntero }}</p>
              </div>
            </td>

            <td colspan="1">
              <div class="flex items-center">
                <button @click="removeProductoFromPedido ( index )">
                  <img class="h-5" src="/papelera.png" alt="" />
                </button>
              </div>
            </td>

          </tr>
        </tbody>
        
        </table>

        <ProductosMasVendidos />
           
      </div>
      
      <div class="right-0 flex justify-center lg:fixed lg:right-8 2xl:right-20">
        <div class="px-4 py-4 mt-10 border lg:mt-0">
          <h3 class="font-bold text-center uppercase border-b">
            Resumen de tu pedido
          </h3>
          <div class="flex justify-between my-4 space-x-10 border-b">
            <p>Subtotal</p>
            <p class="font-semibold text-rojo">$ {{getPedidoSubtotal | NumeroEntero }}</p>
          </div>
          <div class="flex justify-between my-4 space-x-10 border-b">
            <p>Iva:</p>
            <p class="font-semibold text-rojo">$ {{ getPedidoTotalIva | NumeroEntero }}</p>
          </div>

          <div v-if="getPedidoHorasReserva>0">
            <p class="text-sm text-blue-600 text-center">
              Tiempo máximo reserva de pedido <br> {{ getPedidoHorasReserva }} &nbsp; horas
            </p>
          </div>

          <div class="flex justify-between my-4 space-x-10 border-b">
            <p>TOTAL:</p>
            <p class="font-semibold text-rojo">$ {{ getPedidoValorTotal | NumeroEntero }}</p>
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
  
  </div> <!-- Carrito de compra -->

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductosMasVendidos     from "@/components/productos/productosMasVendidos.vue";
export default {
  name: "carrito-compras",
 components: {  ProductosMasVendidos,      },
      computed: {
        ...mapGetters("carrito", [
                  "getPedido","getPedidoSubtotal","getPedidoTotalIva","getPedidoValorTotal", "getPedidoHorasReserva"
                ])
      },
    
    methods:{
        removeProductoFromPedido( index ) {
            this.$store.dispatch("carrito/removeAllProductoComprado", index);
        },
        disminuirCantidad(index) {
          this.$store.dispatch("carrito/removeOnlyProductoComprado", this.getPedido[index].idproducto );
        },

        aumentarCantidad(index) {
          this.$store.dispatch( "carrito/addProductoComprado", this.getPedido[index] );
        },

    },


    mounted (){
      //console.log( this.getPedido )
      //this.$store.dispatch('carrito/resetState');
    /*    //this.$store.replaceState({});
        ;
        let state = this.$store.state;
        let newState = {};

        Object.keys(state).forEach(key => {
          newState[key] = null; // or = initialState[key]
        });
        this.$store.replaceState(newState);
        */
    },

};


</script>

<style>
</style>