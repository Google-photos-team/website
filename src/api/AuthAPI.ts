import axios from "axios"


export const AuthLogin = async (username:string, password:string) => {
  // const {data} =  await axios.post('https://image-project.onrender.com/auth/login',{
  //   username,password
  // })

  // console.log("data",{
  //   status :true,
  //   data:{
  //     username,
  //     password
  //   }
  // })
  // try {
  //   if (data.token) {
  //     return data.token     
  //   }else{
  //     return {error:"Wrong username or password"}
  //   }
  // } catch (error) {
  //   return {error:"Something went wrong"}
  // }

  const data = await axios.post('https://image-project.onrender.com/auth/login',
    {
     username,password
    });
  try {
    const { token, username } = data.data;
    if(data.status){
        console.log(data.data)      
    }
    // console.log('Token:', token);
    // console.log('Username:', username);
    
    // You can store the token in the state or perform any other action with the response data
  } catch (error) {
    console.error('Login failed:', error);
  }
}


export const AuthSignup =  async(username:string, password:string,passwordConfirm:string) => {
    const {data} =  await axios.post('https://image-project.onrender.com/auth/signup',{
      username,password,passwordConfirm
    })
    try {
      if (data.token) {
        return data.token     
      }else{
        return {error:"Wrong username or password"}
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