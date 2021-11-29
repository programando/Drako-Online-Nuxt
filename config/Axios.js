
import axios from "axios";

let Api = axios.create({
  baseURL: process.env.URL_API
});
 
Api.defaults.withCredentials = true;

//Api.defaults.headers.post['Accept'] = 'application/json'; // for POST requests
//Api.defaults.headers.post['Authorization'] = 'Bearer ' + token
/*
   baseUrl      : process.env.URL_BASE,
   apiUrl    : process.env.URL_API,
   webUrl       : process.env.URL_WEB,
   resetPassword: process.env.URL_RESET_PASS
   */

export default Api;