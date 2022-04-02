import Api  from "@/config/Axios";
 

export default {

          async listaGeneral() {
            return Api.get('/productos/listado');
      },
  
      async porGrupos(formData) {
        return Api.post('/productos/grupos',  formData    );
      },

      async busqueda(formData) {
        return Api.post('/productos/busqueda',  formData    );
      },      
  
 
 
}
