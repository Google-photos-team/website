import { myAxios } from "./config/config"

export const getProfile = async () => {
  try {
    const { data } = await myAxios.get("/profile");
    if (data.status) {
      return data.data;
    }
  } catch (error: any) {
    throw new Error(error.response.data.message)
  }
}