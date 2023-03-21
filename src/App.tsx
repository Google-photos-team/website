import "./i18n/config"
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import { Theme } from "./styles/theme";
// Router
import Router from "./router";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = () => {
    i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar")
  }

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
