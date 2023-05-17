import { async } from "q";
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

export const updateProfile = async (data: {username?:string, avatar?:string}) => {
  try {
    const { data: res } = await myAxios.post("/profile/update", data);
    if (res.status) {
      return res.data;
    }
  } catch (error: any) {
    throw new Error(error.response.data.message)
  }
}

export const deleteProfile = async () => {
  try {
    const { data: res } = await myAxios.delete("/profile/delete");
    if (res.status) {
      return res.data;
    }
  } catch (error: any) {
    throw new Error(error.response.data.message)
  }
}