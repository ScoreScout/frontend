import React from "react";
import HomePage from "../HomePage";
import { renderWithProviders } from "../../../utils/test-utils";
import { screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

test("Home page, and all buttons should load", async () => {
  const routes = [
    {
      path: "/score-scout",
      element: <HomePage />,
    },
  ];
  const router = createMemoryRouter(routes, {
    initialEntries: ["/score-scout"],
  });
  await renderWithProviders(<RouterProvider router={router} />);
  expect(screen.getByText("Start right now!")).not.toBeNull();
  expect(screen.getByText("Sign in")).not.toBeNull();
  expect(screen.getByText("Sign up")).not.toBeNull();
});
