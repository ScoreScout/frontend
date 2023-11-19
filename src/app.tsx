import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/Theme";
import GlobalStyle from "./theme/GlobalStyle";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/score-scout",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
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
