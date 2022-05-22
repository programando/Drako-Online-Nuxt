<template>
  <div class="">
      
      <div class="flex justify-center mb-8" v-if="getPedido.length==0">
          <div>
            <img class="carrito-vacio w-3/4 mx-auto" src="/carrito-vacio.png" alt=""  >
            <p class="text-xl text-center lg:text-3xl">Tu carrito está vacío...</p>
            <p class="mt-4 text-center lg:text-xl">
              <nuxt-link class="text-rojo" to="/productos">Te invitamos a revisar nuestro catálogo de productos</nuxt-link> 
              
            </p>
          </div>
          
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
              <button   class="w-full px-4 py-2 text-white rounded bg-rojo" @click="verifyAuthenticate()">
                Grabar Pedido
              </button>
          </div>
        </div>
      </div>
    </div>
  
  </div> <!-- Carrito de compra -->

  </div>
</template>

<script>
import { mapGetters }           from "vuex";
import Pedidos                  from "@/models/Pedidos.js";
import ProductosMasVendidos     from "@/components/productos/productosMasVendidos.vue";
import Messages           from "@/mixins/sweetalert2";

export default {
  name: "carrito-compras",
    components: {  ProductosMasVendidos,      },
    mixins: [Messages],
    data :()=> ({
        formData :{ 'idtercero' : 0, 'horas_reserva':0, 'subtotal':0,'iva':0,'flete':0, 'total':0, 'detallePedido': [] }
    }),
    
      computed: {
        ...mapGetters("carrito",
                [ 
                     "getPedido","getPedidoSubtotal","getPedidoTotalIva","getPedidoValorTotal", "getPedidoHorasReserva"
                ])
      },
    
    methods:{
        verifyAuthenticate() {
          console.log (this.$auth);
          if ( this.$auth.loggedIn == false ){
               this.$router.push({ path: '/login/' });
               return ;
          }
          this.grabarNuevoPedido() ;
          this.showMessagePedidoSaved (); 
          this.$router.push({ path: '/' });
        },
        
        grabarNuevoPedido ( ) {
            this.formData.idtercero     = this.$auth.user.idtercero_web;
            this.formData.horas_reserva = this.getPedidoHorasReserva;
            this.formData.subtotal      = this.getPedidoSubtotal;
            this.formData.iva           = this.getPedidoTotalIva;
            this.formData.flete         = 0;
            this.formData.total         = this.getPedidoValorTotal;
            this.formData.detallePedido = this.getPedido;
            Pedidos.grabarNuevoRegistro ( this.formData)
            .then( () => {
                this.$store.dispatch('carrito/resetState');
            });
        },

        showMessagePedidoSaved() {
          let Texto = `El pedido fue almacenado con éxito. A partir de ahora cuenta con: 
                        ${this.getPedidoHorasReserva }  horas para realizar el pago y enviar comprobante por alguno de los medios legido.
                        Pasado este tiempo sin comprobar el pago, el sistema borrará el pedido y deberá inciar el proceso nuevamente.
                        En unos minutos recibirá un correo electrónico con la información necesaria para enviar el comprobante de pago.`; 
          this.Message("Pedido grabado" ,  Texto , 'success', 'Cerrar' );                        
        },
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

<style scoped>
.carrito-vacio {
  max-height: 600px;
  max-width: 850px;
}
</style>