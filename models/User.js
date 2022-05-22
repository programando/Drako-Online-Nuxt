import Api  from "@/config/Axios";
 

export default {

  async nuevoRegistro( $formDara ) {
    return Api.post('/usuarios/registro',   $formDara ) ;
},


    async existeEmail( $email ) {
      return Api.post('/usuarios/buscar/email', {'email' : $email } ) ;
  },

    
   
 
}
