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
import { Provider } from "react-redux";
import { store } from "./redux";
import ScoreModal from "./components/Modal/ScoreModal";
import TournamentViewPage from "./pages/TournamentViewPage/TournamentViewPage";

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
    path: "/score-scout/tournament/:tournamentId",
    element: <TournamentViewPage />
  },
]);

const App = (): React.JSX.Element => {
  return (
    <Fragment>
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <ScoreModal />
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </Fragment>
  );
};

export default App;
