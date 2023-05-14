import axios from "axios"


export const getProfile = async () => {
  return await axios.get("/profile")
  .then((response) => response.data.user);
}