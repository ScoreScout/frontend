import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/Theme";
import GlobalStyle from "./theme/GlobalStyle";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/SignInSignUp/SignInPage/SignInPage";
import SignUpPage from "./pages/SignInSignUp/SignUpPage/SignUpPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import CreatePage from "./pages/CreatePage/CreatePage";
import { Provider } from "react-redux";
import { store } from "./redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfileActivationPage from "./pages/ProfileActivationPage/ProfileActivationPage";
import { CookiesProvider } from "react-cookie";
import ProtectedRoute from "./utils/ProtectedRoute";
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
    path: "/score-scout/activate/:uid/:token",
    element: <ProfileActivationPage />,
  },
  {
    path: "/score-scout/profile",
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/score-scout/create",
    element: <CreatePage />,
  },
  {
    path: "/score-scout/tournaments/:tournamentId",
    element: <TournamentViewPage />,
  },
]);

const App = (): React.JSX.Element => {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <ScoreModal />
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
      <ToastContainer autoClose={2000} position={toast.POSITION.BOTTOM_RIGHT} />
    </CookiesProvider>
  );
};

export default App;
