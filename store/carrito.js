export const state = () => ({
    Item :   {
        idproducto : 0,
        idproducto_dt: 0,
        codproducto: '',
        cod_oem: '',
        nombre_impreso: '',
        peso_kg: 0,
        horas_reserva: 0 ,
        precioUnitario: 0,
        cantidad: 0,
        nom_imagen: '',
        iva: 0
    },
    Pedido : [],
    pedidoValorTotal :0,
    pedidoCantidadTotal:0,
    existeProducto:false,
})
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

    removeAllProductoComprado ( state, IdProducto ) {
        state.Pedido.forEach( ( item, index ) => {
            if ( item.idproducto == IdProducto) {
                  state.Pedido.splice(index,1);
            }
        });
    },

    setPedidoValorTotal ( state ){
        state.pedidoCantidadTotal = state.pedido.reduce ( (Total, currentObject ) => {
                return Total + currentObject.precioUnitario * currentObject.cantidad; 
        },0)
    },
    getItemFromProductoComprado ( state, Producto ){
        state.Item =   {
            idproducto : Producto.idproducto,
            idproducto_dt: Producto.idproducto_dt,
            codproducto: Producto.codproducto,
            cod_oem: Producto.cod_oem,
            nombre_impreso: Producto.nombre_impreso,
            peso_kg: Producto.peso_kg,
            horas_reserva: Producto.horas_reserva ,
            precioUnitario: Producto.precio_base >Producto.precio_oferta ?  Producto.precio_base : Producto.precio_oferta,
            cantidad: Producto.cantidad,
            nom_imagen: Producto.imagenes.nom_imagen,
            iva: Producto.iva
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
    }
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
    },

    removeOnlyProductoComprado (context, idproducto) {
        /*  1.  Buscar idproducto dentro de array
            2. Cuando lo encuentre, reducir en uno
            3. Si cantidad es cero, remover producto
        */
          context.commit('removeOnlyProductoComprado', idproducto);
        },

    removeAllProductoComprado (context, idproducto) {
        /*  1.  Buscar idproducto dentro de array
            2. Borrar del carrito
            3. Si no hay mas productos, carrito = null, mostrar vista en cliente
        */
        context.commit('removeAllProductoComprado', idproducto);
       
    },


}

export const getters = {
    getPedido: (state) => {
        return state.pedido;
    },
    getPedidoValorTotal: (state) => {
        return state.pedidoValorTotal;
    },   
    getpedidoCantidadTotal: (state) => {
        return state.pedidoCantidadTotal;
    },   
 
}