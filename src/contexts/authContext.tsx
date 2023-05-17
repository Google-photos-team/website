import { createContext, useContext, useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import { addTokenToTheAxios } from "../api/config/config";

interface AuthContextProps {
  setToken: (token: string, rememberMe: boolean) => void;
  logout: () => void;
  token: string;
}

const AuthContext = createContext<AuthContextProps>({
  setToken: () => { },
  logout: () => { },
  token: "",

});

export const useAuth = () => useContext(AuthContext);


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState("")
  const [cookies, setCookie, removeCookie] = useCookies(['auth-token']);

  useEffect(() => {
    if (cookies["auth-token"] !== 'undefined') {
      setToken(cookies["auth-token"])
      addTokenToTheAxios(cookies["auth-token"]);
    }
  }, [])

  const customSetToken = (token: string, rememberMe: boolean) => {
    if (rememberMe) {
      setCookie("auth-token", token)
    }
    addTokenToTheAxios(token);
    setToken(token)
  }

  return (
    <AuthContext.Provider value={{
      setToken: customSetToken,
      logout: () => { 
        removeCookie("auth-token")
        addTokenToTheAxios('');
        setToken('')
      },
      token
    }}>
      {children}
    </AuthContext.Provider>
  )
}