import axios from "axios"


export const AuthLogin = async (username:string, password:string) => {
  const data = await axios.post('/auth/login',
    {
     username,password
    });
    try {
      if (data.status) {
        return data.data
      } else {
        throw new Error(data.data.message)
      }
    } catch (error) {
      return {
      error:"Something went wrong"
  
      }
    }
}


export const AuthSignup =  async(username:string, password:string,passwordConfirm:string) => {
    const {data} =  await axios.post('/auth/signup',{
      username,password,passwordConfirm
    })
    try {
      if (data.status) {
        return data.token
      } else {
        throw new Error(data.message)
      }
    } catch (error) {
      return {
      error:"Something went wrong"
  
      }
    }
  }

export const AuthLogout =  async() => {
  const {data} =  await axios.post('https://image-project.onrender.com/auth/logout',{
    
  })  
}