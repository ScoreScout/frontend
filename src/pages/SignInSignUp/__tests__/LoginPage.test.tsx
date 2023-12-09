import React from "react";
import SignInPage from "../SignInPage/SignInPage";
import { renderWithProviders } from "../../../utils/test-utils";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import HomePage from "../../HomePage/HomePage";

test("SignIn page, and all buttons should load", async () => {
  const routes = [
    {
      path: "/score-scout/sign-in",
      element: <SignInPage />,
    },
  ];
  const router = createMemoryRouter(routes, {
    initialEntries: ["/score-scout/sign-in"],
  });
  await renderWithProviders(<RouterProvider router={router} />);
  expect(screen.getByText("Sign in")).not.toBeNull();
  expect(screen.getByPlaceholderText("E-mail")).not.toBeNull();
  expect(screen.getByPlaceholderText("Password")).not.toBeNull();
});

test("Input values can be changed", async () => {
  const routes = [
    {
      path: "/score-scout/sign-in",
      element: <SignInPage />,
    },
  ];
  const router = createMemoryRouter(routes, {
    initialEntries: ["/score-scout/sign-in"],
  });
  await renderWithProviders(<RouterProvider router={router} />);
  const email = screen.getByPlaceholderText("E-mail");
  const password = screen.getByPlaceholderText("Password");
  fireEvent.change(email, { target: { value: "ahmad.alhusein@gmail.com" } });
  expect(screen.getByDisplayValue("ahmad.alhusein@gmail.com")).not.toBeNull();
  fireEvent.change(password, { target: { value: "password123" } });
  expect(screen.getByDisplayValue("password123")).not.toBeNull();
});

test("Login request can be made successfully, and you will get success notification", async () => {
  const mock = new MockAdapter(axios);
  mock.onPost(/\/auth\/jwt\/create\//).reply(200, { access: "abc", refresh: "abc" });
  const routes = [
    {
      path: "/score-scout",
      element: <HomePage />,
    },
    {
      path: "/score-scout/sign-in",
      element: <SignInPage />,
    },
  ];
  const router = createMemoryRouter(routes, {
    initialEntries: ["/", "/score-scout", "/score-scout/sign-in"],
  });
  await renderWithProviders(<RouterProvider router={router} />);
  const email = screen.getByPlaceholderText("E-mail");
  const password = screen.getByPlaceholderText("Password");
  fireEvent.change(email, { target: { value: "ahmad.alhusein2222@gmail.com" } });
  fireEvent.change(password, { target: { value: "password123" } });
  fireEvent.click(screen.getByText("Log in account"));
  await waitFor(() => {
    expect(screen.getByText(/Welcome/)).not.toBeNull();
  });
});

test("Should not allow user to login with wrong credintials, and display a given error", async () => {
  const mock = new MockAdapter(axios);
  mock.onPost(/\/auth\/jwt\/create\//).reply(404, { response: { data: { detail: "error" } } });
  const routes = [
    {
      path: "/score-scout",
      element: <HomePage />,
    },
    {
      path: "/score-scout/sign-in",
      element: <SignInPage />,
    },
  ];
  const router = createMemoryRouter(routes, {
    initialEntries: ["/", "/score-scout", "/score-scout/sign-in"],
  });
  await renderWithProviders(<RouterProvider router={router} />);
  const email = screen.getByPlaceholderText("E-mail");
  const password = screen.getByPlaceholderText("Password");
  fireEvent.change(email, { target: { value: "ahmad.alhusein2222@gmail.com" } });
  fireEvent.change(password, { target: { value: "password123" } });
  fireEvent.click(screen.getByText("Log in account"));
  await waitFor(() => {
    expect(screen.getByText(/error/)).not.toBeNull();
  });
});
