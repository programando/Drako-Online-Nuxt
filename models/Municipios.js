import Api  from "@/config/Axios";
 

export default {

    async listadoActivos( ) {
      return Api.get('/municipios/listado/activos'    ) ;
  },

    
   
 
}
