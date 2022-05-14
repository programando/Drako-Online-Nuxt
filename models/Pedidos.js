import Api  from "@/config/Axios";
 

export default {

    async grabarNuevoRegistro( $formData ) {
      return Api.post('/pedidos/nuevo/registro', $formData ) ;
  },

    
   
 
}
