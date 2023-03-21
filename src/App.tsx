import "./i18n/config"
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import { Theme } from "./styles/theme";
import { createBrowserRouter,RouterProvider,Link } from "react-router-dom";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = () =>
     {
        i18n.changeLanguage(i18n.language === "ar"?"en":"ar")
     }




  const router = createBrowserRouter([
    {
      path:'/',
      element:(
        <div className="App">
          <p>{t('title', { name: 'John' })}</p>
          <button onClick={() => changeLanguageHandler()}>{i18n.language === "ar"?"en":"ar"}</button>
          <Link to="/sample">{t('simpleLink')}</Link>
        </div>
      )
    },
    {
      path:"sample",
      element:(
        <div>
          <p>{t('description.part1')}</p>
          <button onClick={() => changeLanguageHandler()}>{i18n.language === "ar"?"en":"ar"}</button>
          <Link to="/">{t('homeLink')}</Link>
        </div>
      )
    }
  ])
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />

      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
