import {useCallback} from "react"
import "./i18n/config"
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import { Theme } from "./styles/theme";
// Router
import Router from "./router";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router";
import { useCookies } from "react-cookie";
import { AuthProvider } from "./contexts/authContext";


function App() {
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = () => {
    i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar")
  }

  const {pathname} = useLocation();


  const checkForLoginOrSignUp = useCallback(
    () =>{
      // console.log(pathname)
      if(pathname.toLocaleLowerCase() === "/login" || pathname.toLocaleLowerCase() === "/signup"){
        return true
      }
  
      return false;
    },
    [pathname]
  )
  

  return (
    <AuthProvider>
      <ThemeProvider theme={Theme}>
        {checkForLoginOrSignUp() || <Navbar />}
        <GlobalStyle noPadding={checkForLoginOrSignUp()} />
        <Router />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
