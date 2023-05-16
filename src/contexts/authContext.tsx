import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { authorizationHeader, defaults } from "../api/config/config";
import { useNavigate } from "react-router";
import { PATHS } from "../router";

interface AuthContextProps{
  setToken:(token:string,rememberMe:boolean)=>void;
  logout:()=>void;
    token:string;
}

const AuthContext = createContext<AuthContextProps>({
  setToken:()=>{},
  logout:()=>{},
  token :"",
 
});

export const useAuth = () => useContext(AuthContext);


export const AuthProvider = ({ children }:{children:React.ReactNode}) => {
  const [token, setToken] = useState("")
  const [cookies, setCookie,removeCookie] = useCookies(['auth-token']);
  const navigate = useNavigate() 
  useEffect(() => {
    if(cookies["auth-token"]){
      authorizationHeader({token:cookies["auth-token"]});
      setToken(cookies["auth-token"])
      navigate(PATHS.HOME)
    }
  }, [])
  
  const customSetToken = (token:string,rememberMe:boolean) =>{
    if(rememberMe){
      setCookie("auth-token",token)
    }
    setToken(token)

  }

  return (
    <AuthContext.Provider value={{
      setToken:customSetToken,
      logout:()=>{},
      token
    }}>
      {children}
    </AuthContext.Provider>
  )
}