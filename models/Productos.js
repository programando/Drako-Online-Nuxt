import Api  from "@/config/Axios";
 

export default {
      async getProductosFromUrl(Url) {
        return Api.get( Url );
      }, 
      async buscarPorIdProducto( idproducto ) {
        return Api.post('/productos/buscar/idproducto',   { 'idproducto' : idproducto }    );
      },  
      async masVendidos() {
            return Api.get('/productos/mas/vendidos');
      },
  
      async listaGeneral() {
            return Api.get('/productos/listado');
      },
  
      async porGrupos(formData) {
        return Api.post('/productos/grupos',  formData    );
      },

      async busqueda(formData) {
        return Api.post('/productos/busqueda',  formData    );
      },      
      async porIdGrupo( idgrupo ) {
        return Api.post('/productos/por/grupo',   { 'idgrupo' : idgrupo }    );
      },      
  
 
 
}
