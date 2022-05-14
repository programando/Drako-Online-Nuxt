export const getDefaultState = () => ({
    Item :   {
        idproducto          : 0,
        idproducto_dt       : 0,
        codproducto         : '',
        cod_oem             : '',
        nombre_impreso      : '',
        peso_kg             : 0,
        horas_reserva       : 0,
        precioOferta        : 0,
        precioUnitario      : 0,
        precioOfertaFormat  : '',
        precioUnitarioFormat: '',
        cantidad            : 0,
        nom_imagen          : '',
        iva                 : 0
    },
    Pedido                    : [],
    pedidoValorTotal          : 0,
    pedidoCantidadTotal       : 0,
    existeProducto            : false,
    pedidoTotalIva            : 0,
    pedidoSubtotal            : 0,
    pedidoHorasReserva        : 0,
 

})
export const state = getDefaultState();
/*
cantidad: 2
cod_oem: (…)
codproducto: (…)
horas_reserva: (…)
idgrupo: (…)
idproducto: (…)
idproducto_dt: (…)
idregistro: (…)
imagenes: Array(1)
inactivo: (…)
iva: 19
nombre_impreso: (…)
peso_kg: (…)
precio_base: 57450
precio_base_format: "57.450"
precio_oferta: 0
precio_oferta_format: "0"
*/
export const mutations = {

    addProductoComprado (state,  productoComprado) {
        state.Pedido.push( productoComprado );
    },

    removeOnlyProductoComprado ( state, IdProducto ) {
        state.Pedido.forEach( ( item, index ) => {
            if ( item.idproducto == IdProducto) {
               item.cantidad -- ;  
               if ( item.cantidad  == 0 ) {
                  state.Pedido.splice(index,1);
               }
            }
        });
    },

    removeAllProductoComprado ( state, index ) {
       /*state.Pedido.forEach( ( item, index ) => {
            if ( item.idproducto == IdProducto) {
                  state.Pedido.splice(index);
            }
        });
        */
        state.Pedido.splice(index);
    },

    setpedidoHorasReserva ( state ){
        state.pedidoHorasReserva = state.Pedido.reduce ( (Total, currentObject ) => {
                return Total + currentObject.horas_reserva ; 
        },0);
        if ( state.Pedido.length > 0 ) {
            state.pedidoHorasReserva = state.pedidoHorasReserva / state.Pedido.length;
        }else{
            state.pedidoHorasReserva = 0; 
        }
    },


    setpedidoSubtotal ( state ){
        state.pedidoSubtotal = state.Pedido.reduce ( (Total, currentObject ) => {
                return Total + ( currentObject.precioUnitario * currentObject.cantidad)  ; 
        },0)
    },

    setPedidoTotalIva ( state ){
        state.pedidoTotalIva = state.Pedido.reduce ( (Total, currentObject ) => {
                return Total + ( currentObject.precioUnitario * currentObject.cantidad) * currentObject.iva/100; 
        },0)
    },

    setPedidoValorTotal ( state ){
        state.pedidoValorTotal = state.Pedido.reduce ( (Total, currentObject ) => {
                return Total + (currentObject.precioUnitario * currentObject.cantidad) + (( currentObject.precioUnitario * currentObject.cantidad) * currentObject.iva/100); 
        },0)
    },
    setPedidoCantidadTotal ( state ){
        state.pedidoCantidadTotal = state.Pedido.reduce ( (Total, currentObject ) => {
                return Total + currentObject.cantidad; 
        },0)
    },
    
    getItemFromProductoComprado ( state, Producto ){
        
        state.Item =   {
            idproducto          : Producto.idproducto,
            idproducto_dt       : Producto.idproducto_dt,
            codproducto         : Producto.codproducto,
            cod_oem             : Producto.cod_oem,
            nombre_impreso      : Producto.nombre_impreso,
            peso_kg             : Producto.peso_kg,
            horas_reserva       : Producto.horas_reserva,
            precioUnitario      : Producto.precio_base >Producto.precio_oferta ?  Producto.precio_base: Producto.precio_oferta,
            cantidad            : Producto.cantidad,
            nom_imagen          : Producto.imagenes[0]._70x70,
            iva                 : Producto.iva,
            iva                 : Producto.iva,
            precioUnitarioFormat: Producto.precio_base_format,
            precioOfertaFormat  : Producto.precio_oferta_format,
            precioOferta        : Producto.precio_oferta,
 
        };
    },

    existeProductoEnPedido ( state, Producto ) {
        let IdProducto = Producto.idproducto;
        state.existeProducto = false ;
        state.Pedido.forEach( (item) => {
            if ( item.idproducto == IdProducto) {
               item.cantidad ++ ;  // Producto existe, incremento cantidad
               state.existeProducto = true ;
            }
        });
    },

    RESET_STATE(state) {
        Object.assign(state, getDefaultState())
      },


}

export const actions = {
    addProductoComprado (context, productoComprado ) {
        /*     1.  verificar si producto ya existe en pedido
                2.  Si no existe, agregar a pedido
                3.  Si existe aumentar cantidad 
        */
        context.commit('existeProductoEnPedido', productoComprado);
        if ( context.state.existeProducto == false ) {
            context.commit('getItemFromProductoComprado', productoComprado );
            context.commit('addProductoComprado', context.state.Item);
        }
        context.dispatch('updateTotals'); 
    },

    removeOnlyProductoComprado (context, idproducto) {
        /*  1.  Buscar idproducto dentro de array
            2. Cuando lo encuentre, reducir en uno
            3. Si cantidad es cero, remover producto
        */
          context.commit('removeOnlyProductoComprado', idproducto);
          context.dispatch('updateTotals');       
        },

    removeAllProductoComprado (context, index ) {
        /*  1.  Buscar idproducto dentro de array
            2. Borrar del carrito
            3. Si no hay mas productos, carrito = null, mostrar vista en cliente
        */
        context.commit('removeAllProductoComprado', index);
        context.dispatch ('updateTotals'); 
    },
 
    updateTotals ( context){
        context.commit('setpedidoSubtotal');
        context.commit('setPedidoTotalIva');
        context.commit('setPedidoValorTotal');
        context.commit('setPedidoCantidadTotal');   
        context.commit('setpedidoHorasReserva');
    },

    resetState({ commit }) {
        commit('RESET_STATE')
      },
}

export const getters = {

    getPedido             : (state) => {   return state.Pedido;                 },
    getpedidoCantidadTotal: (state) => {   return state.pedidoCantidadTotal;    },
    getPedidoSubtotal     : (state) => {   return state.pedidoSubtotal;         },
    getPedidoTotalIva     : (state) => {   return state.pedidoTotalIva;      },
    getPedidoValorTotal   : (state) => {   return state.pedidoValorTotal;       },
    getPedidoHorasReserva : (state) => {   return state.pedidoHorasReserva;       },
 
}