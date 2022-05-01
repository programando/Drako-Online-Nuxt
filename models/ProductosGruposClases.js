import Api  from "@/config/Axios";
 

export default {

      async listadoGeneral() {
        return Api.get('/productos/clases/listado');
  },
  
   
 
}
