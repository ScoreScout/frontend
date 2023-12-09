import React from "react";
import CreatePage from "../CreatePage";
import { renderWithProviders } from "../../../utils/test-utils";
import { screen, fireEvent, waitFor } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

test("Create page, and all buttons should load", async () => {
  const routes = [
    {
      path: "/score-scout/create",
      element: <CreatePage />,
    },
  ];
  const router = createMemoryRouter(routes, {
    initialEntries: ["/score-scout/create"],
  });
  await renderWithProviders(<RouterProvider router={router} />);
  expect(screen.getByText("Create a tournament")).not.toBeNull();
  expect(screen.getByText("Tournament title")).not.toBeNull();
  expect(screen.getByText("Choose rating")).not.toBeNull();
  expect(screen.getByText("Add players")).not.toBeNull();
  expect(screen.getByText("Number of stages")).not.toBeNull();
  expect(screen.getByText("First stage")).not.toBeNull();
  expect(screen.getByText("Second stage")).not.toBeNull();
  expect(screen.getByText("Next")).not.toBeNull();
  expect(screen.queryByTestId("back-button")).not.toBeInTheDocument();
});

test("Input values can be changed", async () => {
  const routes = [
    {
      path: "/score-scout/create",
      element: <CreatePage />,
    },
  ];
  const router = createMemoryRouter(routes, {
    initialEntries: ["/score-scout/create"],
  });
  await renderWithProviders(<RouterProvider router={router} />);
  const title = screen.getByPlaceholderText("Enter tournament title");
  fireEvent.change(title, { target: { value: "Tournament title" } });
  expect(screen.getByDisplayValue("Tournament title")).not.toBeNull();
});

test("Second tab", async () => {
  const routes = [
    {
      path: "/score-scout/create",
      element: <CreatePage />,
    },
  ];
  const router = createMemoryRouter(routes, {
    initialEntries: ["/score-scout/create"],
  });
  await renderWithProviders(<RouterProvider router={router} />);
  fireEvent.click(screen.getByTestId("choose-rating-tab"));
  expect(screen.getByTestId("use-rating-system-title")).not.toBeNull();
  fireEvent.click(screen.getByTestId("rating-system-toggle"));
  expect(screen.getByTestId("rating-system-selector")).not.toBeNull();
});

test("Third tab", async () => {
  const routes = [
    {
      path: "/score-scout/create",
      element: <CreatePage />,
    },
  ];
  const router = createMemoryRouter(routes, {
    initialEntries: ["/score-scout/create"],
  });
  await renderWithProviders(<RouterProvider router={router} />);
  fireEvent.click(screen.getByTestId("add-players-tab"));
  expect(screen.getByTestId("add-players-title")).not.toBeNull();
  expect(screen.getByTestId("add-players-name-input")).not.toBeNull();
  expect(screen.getByTestId("add-players-button")).not.toBeNull();
});
