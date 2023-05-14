import axios from "axios";
import https from "https"

// const httpsAgent = new https.Agent({rejectUnauthorized: false})

export const defaults = () =>{
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;
  // axios.defaults.httpsAgent = httpsAgent;
  
}

export const authorizationHeader = ({token}:{token:string}) =>{
  axios.defaults.headers.common.Authorization = "Bearer " + token;
}