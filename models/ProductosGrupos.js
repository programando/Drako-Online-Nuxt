import Api  from "@/config/Axios";
 

export default {

      async listadoGeneral() {
        return Api.get('/grupos/listado');
  },
  
  
 
 
}
