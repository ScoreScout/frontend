import React from "react";
import SignUpPage from "../SignUpPage/SignUpPage";
import { renderWithProviders } from "../../../utils/test-utils";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import HomePage from "../../HomePage/HomePage";
import SignInPage from "../SignInPage/SignInPage";

test("SignUp page, and all buttons should load", async () => {
  const routes = [
    {
      path: "/score-scout/sign-up",
      element: <SignUpPage />,
    },
    {
      path: "/score-scout/sign-in",
      element: <SignInPage />,
    },
  ];
  const router = createMemoryRouter(routes, {
    initialEntries: ["/score-scout/sign-up"],
  });
  await renderWithProviders(<RouterProvider router={router} />);
  expect(screen.getByText("Sign up")).not.toBeNull();
  expect(screen.getByPlaceholderText("E-mail")).not.toBeNull();
  expect(screen.getByPlaceholderText("Password")).not.toBeNull();
  expect(screen.getByPlaceholderText("Confirm password")).not.toBeNull();
});

test("Input values can be changed", async () => {
  const routes = [
    {
      path: "/score-scout/sign-up",
      element: <SignUpPage />,
    },
    {
      path: "/score-scout/sign-in",
      element: <SignInPage />,
    },
  ];
  const router = createMemoryRouter(routes, {
    initialEntries: ["/score-scout/sign-up"],
  });
  await renderWithProviders(<RouterProvider router={router} />);
  const email = screen.getByPlaceholderText("E-mail");
  const password = screen.getByPlaceholderText("Password");
  const rePassword = screen.getByPlaceholderText("Confirm password");
  fireEvent.change(email, { target: { value: "ahmad.alhusein@gmail.com" } });
  expect(screen.getByDisplayValue("ahmad.alhusein@gmail.com")).not.toBeNull();
  fireEvent.change(password, { target: { value: "password123" } });
  expect(screen.getByDisplayValue("password123")).not.toBeNull();
  fireEvent.change(rePassword, { target: { value: "password123" } });
});

test("Sign up request can be made successfully, and you will get success notification", async () => {
  const mock = new MockAdapter(axios);
  mock.onPost(/\/auth\/users\//).reply(200, { access: "abc", refresh: "abc" });
  const routes = [
    {
      path: "/score-scout",
      element: <HomePage />,
    },
    {
      path: "/score-scout/sign-up",
      element: <SignUpPage />,
    },
    {
      path: "/score-scout/sign-in",
      element: <SignInPage />,
    },
  ];
  const router = createMemoryRouter(routes, {
    initialEntries: ["/", "/score-scout", "/score-scout/sign-up"],
  });
  await renderWithProviders(<RouterProvider router={router} />);
  const email = screen.getByPlaceholderText("E-mail");
  const password = screen.getByPlaceholderText("Password");
  const rePassword = screen.getByPlaceholderText("Confirm password");
  fireEvent.change(email, { target: { value: "ahmad.alhusein2222@gmail.com" } });
  fireEvent.change(password, { target: { value: "password123" } });
  fireEvent.change(rePassword, { target: { value: "password123" } });
  fireEvent.click(screen.getByText("Create account"));
  await waitFor(() => {
    expect(
      screen.getByText(/You are registered successfully, check your email for activation link/),
    ).not.toBeNull();
  });
});

test("Should not allow user to login with wrong credintials, and display a given error", async () => {
  const mock = new MockAdapter(axios);
  mock.onPost(/\/auth\/users\//).reply(404, { response: { data: { detail: "error" } } });
  const routes = [
    {
      path: "/score-scout",
      element: <HomePage />,
    },
    {
      path: "/score-scout/sign-up",
      element: <SignUpPage />,
    },
    {
      path: "/score-scout/sign-in",
      element: <SignInPage />,
    },
  ];
  const router = createMemoryRouter(routes, {
    initialEntries: ["/", "/score-scout", "/score-scout/sign-up"],
  });
  await renderWithProviders(<RouterProvider router={router} />);
  const email = screen.getByPlaceholderText("E-mail");
  const password = screen.getByPlaceholderText("Password");
  const rePassword = screen.getByPlaceholderText("Confirm password");
  fireEvent.change(email, { target: { value: "ahmad.alhusein2222@gmail.com" } });
  fireEvent.change(password, { target: { value: "password123" } });
  fireEvent.change(rePassword, { target: { value: "password123" } });
  fireEvent.click(screen.getByText("Create account"));
  await waitFor(() => {
    expect(screen.getByText(/fail/)).not.toBeNull();
  });
});
