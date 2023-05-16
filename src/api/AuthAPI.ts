import { myAxios } from "./config/config"

export const AuthLogin = async (username: string, password: string) => {
  try {
    const { data } = await myAxios.post('/auth/login', { username, password });
    if (data.status) {
      return data.data.token
    }
  } catch (error: any) {
    throw new Error(error.response.data.message)
  }
}


export const AuthSignup = async (username: string, password: string) => {
  try {
    const { data } = await myAxios.post('/auth/signup', { username, password })
    if (data.status) {
      return data.data.token
    }
  } catch (error: any) {
    throw new Error(error.response.data.message)
  }
}

export const AuthLogout = async () => {
  const { data } = await myAxios.post('https://image-project.onrender.com/auth/logout', {

  })
}