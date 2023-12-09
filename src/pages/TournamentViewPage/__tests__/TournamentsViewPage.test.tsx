import React from "react";
import { screen, act } from "@testing-library/react";
import TournamentViewPage from "../TournamentViewPage";
import { renderWithProviders } from "../../../utils/test-utils";
test("renders loading spinner while fetching data", () => {
  act(() => {
    renderWithProviders(<TournamentViewPage />);
  });
  expect(screen.getByTestId("loading-spinner")).toBeTruthy();
});

const mockTournament = {
  title: "Sample Tournament",
  date: new Date().toISOString(),
  players: [
    { name: "Player 1" },
    { name: "Player 2" },
    // Add more players as needed
  ],
  amountGamesPlayed: 5,
  isFinished: false,
  firstStage: {
    // Your bracket data
    matches: [],
  },
};