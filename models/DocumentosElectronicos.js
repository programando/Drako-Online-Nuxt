import Api  from "@/config/Axios";
 

export default {

    async BuscarFacturaPorUuid( UIID ) {
      return await Api.post('/invoices/search-document-by-uuid', {'uuid' : UIID } ) ;
  },

    
   
 
}
