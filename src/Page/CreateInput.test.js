import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CreateInputs from "./CreateInputs";
import { BrowserRouter as Router } from "react-router-dom";

test("renders CreateInputs component", () => {
  render(
    <Router>
      <CreateInputs />
    </Router>
  );

  // You can add more specific assertions based on the content of your component
  expect(screen.getByText(/Create Group/i)).toBeInTheDocument();
  expect(screen.getByText(/Add more/i)).toBeInTheDocument();
});

test("submitting the form triggers the onSubmit function", async () => {
  render(
    <Router>
      <CreateInputs />
    </Router>
  );

  // Mock the addCard function
  const mockAddCard = jest.fn();
  jest.mock("./Redux/mySlice", () => ({
    ...jest.requireActual("./Redux/mySlice"),
    addCard: mockAddCard,
  }));

  // Fill out the form
  fireEvent.change(screen.getByPlaceholderText(/Enter Groupname/i), {
    target: { value: "Test Group" },
  });

  fireEvent.change(screen.getByPlaceholderText(/Enter Term/i), {
    target: { value: "Test Term" },
  });

  fireEvent.change(screen.getByPlaceholderText(/Enter Defination/i), {
    target: { value: "Test Definition" },
  });

  fireEvent.click(screen.getByText(/Create/i));

  // Wait for the onSubmit function to be called
  await screen.findByText(/Card submitted successfully/i);

  // Assertions
  expect(mockAddCard).toHaveBeenCalledWith({
    id: expect.any(String),
    groupname: "Test Group",
    description: "",
    flashterms: [{ term: "Test Term", defination: "Test Definition" }],
  });
});
