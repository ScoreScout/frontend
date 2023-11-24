import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/Theme";
import GlobalStyle from "./theme/GlobalStyle";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignInSignUp/SignInPage/SignInPage";
import SignUpPage from "./pages/SignInSignUp/SignUpPage/SignUpPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/score-scout",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/score-scout/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/score-scout/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/score-scout/profile",
    element: <ProfilePage />,
  },
  {
    path: "/score-scout/activate/:uid/:token",
    element: <SignUpPage />
  }
]);

const App = (): React.JSX.Element => {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
