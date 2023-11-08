// Myflashcard.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

import Myflashcard from "./Myflashcard";
import cardReducer, { addCard } from "./Redux/mySlice"; // Adjust the import path

describe("Myflashcard", () => {
  let store;

  beforeEach(() => {
    // Clear any previous mock implementation between tests
    jest.clearAllMocks();

    // Create a mock store with your cardReducer
    store = configureStore({
      reducer: {
        card: cardReducer,
      },
    });
  });

  test("renders Myflashcard component with flashcards", () => {
    // Dispatch an action to populate the store with flashcards
    store.dispatch(
      addCard({
        groupname: "Group 1",
        description: "Flashcard 1",
        flashterms: [{ term: "Term 1", definition: "Definition 1" }],
      })
    );
    store.dispatch(
      addCard({
        groupname: "Group 2",
        description: "Flashcard 2",
        flashterms: [{ term: "Term 2", definition: "Definition 2" }],
      })
    );

    render(
      <Provider store={store}>
        <BrowserRouter>
          {" "}
          <Myflashcard />
        </BrowserRouter>
      </Provider>
    );

    // Assert that the flashcards are rendered
    expect(screen.getByText("Flashcard 1")).toBeInTheDocument();
    expect(screen.getByText("Flashcard 2")).toBeInTheDocument();
  });
});
