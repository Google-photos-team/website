import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { authorizationHeader, defaults } from "../api/config/config";
import { getProfile } from "../api/ProfileAPI";

interface AuthContextProps{
  login:()=>void;
  logout:()=>void;
  signup:()=>void;
  user:{
    username:string;
    avatar:string;
  };
}

const AuthContext = createContext<AuthContextProps>({
  login:()=>{},
  logout:()=>{},
  signup:()=>{},
  user:{
    username:"",
    avatar:""
  }
});

export const useAuth = () => useContext(AuthContext);

function useAuthProvider(){
  const [user,setUser] = useState<{username:string,avatar:string}>({username:"",avatar:""});
  const [cookies, setCookie] = useCookies(['auth-token']);

  const signup = () => {
    console.log("Signup")
  }
  
  const login = () => {
    console.log("Login")
  }

  const logout = () => {
    console.log("Logout")
  }

  const token = async () => {
    const data = await getProfile();
    setUser({
      username:data.username,
      avatar:data.avatar
    });
  }

  useEffect(() => {
    defaults();
  
    return () => {}
  }, [])
  
  useEffect(() => {
    if(cookies["auth-token"]){
      authorizationHeader({token:cookies["auth-token"]});

      token();
    }else{
      console.log("Token does not exist")
    }
  
    return () => {}
  }, [cookies["auth-token"]])
  
  

  return {
    login,
    logout,
    signup,
    token,
    user
  }
}


export const AuthProvider = ({ children }:{children:React.ReactNode}) => {
  const auth = useAuthProvider();
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}