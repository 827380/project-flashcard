import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import CreateInputs from "./CreateInputs";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

describe("CreateInputs Component", () => {
  test("renders CreateInputs component", () => {
    render(
      <Router>
        <CreateInputs />
      </Router>
    );

    expect(screen.getByText("Create Group *")).toBeInTheDocument();
  });

  test("handles form submission", async () => {
    render(
      <Router>
        <CreateInputs />
      </Router>
    );

    const addCardMock = jest.fn();

    useDispatch.mockReturnValue(addCardMock);

    fireEvent.change(screen.getByPlaceholderText("Enter Groupname"), {
      target: { value: "Test Group" },
    });

    fireEvent.click(screen.getByText("Create"));
  });
});
