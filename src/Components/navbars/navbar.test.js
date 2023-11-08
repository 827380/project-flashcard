import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./navbar";

test("Navbar renders correctly", () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );

  // Check if the "Create Flashcard" heading is rendered
  expect(screen.getByText("Create Flashcard")).toBeInTheDocument();

  // Check if the "Create New" and "My Flashcards" links are rendered
  expect(screen.getByText("Create New")).toBeInTheDocument();
  expect(screen.getByText("My Flashcards")).toBeInTheDocument();
});

test('Clicking on "Create New" link navigates to the correct route', () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );

  // Simulate a click on the "Create New" link
  fireEvent.click(screen.getByText("Create New"));

  // Check if the correct route is navigated to
  expect(window.location.pathname).toBe("/");
});

test('Clicking on "My Flashcards" link navigates to the correct route', () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );

  // Simulate a click on the "My Flashcards" link
  fireEvent.click(screen.getByText("My Flashcards"));

  // Check if the correct route is navigated to
  expect(window.location.pathname).toBe("/myflashcards");
});
