import axios from "axios";
import https from "https"

// const httpsAgent = new https.Agent({rejectUnauthorized: false})

export const defaults = () => {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;
  // axios.defaults.httpsAgent = httpsAgent;

}

export const authorizationHeader = ({ token }: { token: string }) => {
  // axios.defaults.headers.common.Authorization = "Bearer " + token;
  axios.defaults.headers.common.Authorization = "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTUzOTQ2NmE1ZjJiNzcwODM1MjE1ZSIsImlhdCI6MTY4NDA2MDM3NiwiZXhwIjoxNjg0MzE5NTc2fQ.W2szKcLOstBmbR-Mccf5YFHk7vazToAvK_MuiXZZLuc";
}