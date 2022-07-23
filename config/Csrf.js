import Api      from "@/config/Axios";
 
export default {
   async getCookie () {
       return  await Api.get('sanctum/csrf-cookie')
    }
}
