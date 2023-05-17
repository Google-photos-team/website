import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { addTokenToTheAxios } from "../api/config/config";
import { getProfile } from "../api/ProfileAPI";

interface AuthContextProps {
  setToken: (token: string, rememberMe: boolean) => void;
  logout: () => void;
  token: string;
  user:{
    avatar: string;
    username: string;
  },
  setUser: (user: {username:string, avatar: string}) => void;
}

const AuthContext = createContext<AuthContextProps>({
  setToken: () => { },
  logout: () => { },
  token: "",
  user:{
    avatar: "",
    username: ""
  },
  setUser: () => {}
});

export const useAuth = () => useContext(AuthContext);


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState("")
  const [cookies, setCookie, removeCookie] = useCookies(['auth-token']);
  const [user, setUser] = useState<any>({})

  useEffect(() => {
    if (cookies["auth-token"] !== undefined && cookies["auth-token"] !== "") {
      setToken(cookies["auth-token"])
    }else{
      setToken("")
    }
  }, [cookies["auth-token"]])

  useEffect(() => {
    if (token) {
      addTokenToTheAxios(token);
      getProfile()
        .then((profile) => {
          setUser(profile);
        }).catch((error) => {
          removeCookie("auth-token", {path: "/"})
          setToken("")
        })
    }
  }, [token])

  const customSetToken = (token: string, rememberMe: boolean) => {
    if (rememberMe) {
      setCookie("auth-token", token, {path: "/"})
    }else{
      document.cookie = `auth-token=${token}; path=/`;
    }
    addTokenToTheAxios(token);
    setToken(token)
  }

  return (
    <AuthContext.Provider value={{
      setToken: customSetToken,
      logout: () => { },
      token,
      user,
      setUser,
    }}>
      {children}
    </AuthContext.Provider>
  )
}