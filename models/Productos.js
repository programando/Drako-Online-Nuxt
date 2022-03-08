import Api  from "@/config/Axios";
 

export default {

      async listaGeneral() {
        return Api.get('/productos/listado');
  },
  
  
 
 
}
