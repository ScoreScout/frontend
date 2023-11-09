import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/Theme";
import GlobalStyle from "./theme/GlobalStyle";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignInSignUp/SignUpPage/SignUpPage";
import SignInPage from "./pages/SignInSignUp/SignInPage/SignInPage";

const App = () => {
    return (
        <Fragment>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                {/* <HomePage /> */}
                <SignUpPage />
                {/* <SignInPage /> */}
            </ThemeProvider>
        </Fragment>
    );
};

export default App;
