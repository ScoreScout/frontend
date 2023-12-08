import React from "react";
import HomePage from "../HomePage";
import { renderWithProviders } from "../../../utils/test-utils";
import { screen, prettyDOM } from "@testing-library/react";
import {
  BrowserRouter,
  MemoryRouter,
  Route,
  RouterProvider,
  Routes,
  createMemoryRouter,
} from "react-router-dom";

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
  // screen.debug(); //uncomment to see the whole screen
  expect(screen.getByText("Start right now!")).not.toBeNull();
});
