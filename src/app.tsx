import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/Theme";
import GlobalStyle from "./theme/GlobalStyle";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ProfilePage />
      </ThemeProvider>
    </Fragment>
  );
};

export default App;

