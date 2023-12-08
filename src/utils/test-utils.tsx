import React from "react";
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import type { RootState } from "../redux";
import userReducer from "../redux/slices/user/userSlice";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/Theme";
import { ToastContainer, toast } from "react-toastify";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Partial<RootState>;
  store?;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({ reducer: { user: userReducer }, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
): any {
  function Wrapper({ children }: any): JSX.Element {
    return (
      <Provider store={store}>
        <ToastContainer autoClose={2000} position={toast.POSITION.BOTTOM_RIGHT} />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
