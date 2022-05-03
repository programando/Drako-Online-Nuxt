import Api  from "@/config/Axios";
 

export default {

    async destacados() {
      return Api.get('/productos/clases/destacadas');
  },

      async listadoGeneral() {
        return Api.get('/productos/clases/listado');
  },
  
   
 
}
