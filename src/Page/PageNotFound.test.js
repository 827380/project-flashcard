import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useNavigate } from "react-router-dom";
import PageNotFound from "./PageNotFound";
// Mock the useNavigate hook from react-router-dom
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("PageNotFound", () => {
  test("renders PageNotFound component", () => {
    // Render the component
    render(<PageNotFound />);

    // Assert on the output
    expect(
      screen.getByText("The page you are looking for could not be found 😢")
    ).toBeInTheDocument();
    expect(screen.getByText("Go back")).toBeInTheDocument();
  });

  test('calls moveBack function when "Go back" button is clicked', () => {
    // Mock the useNavigate function
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    // Render the component
    render(<PageNotFound />);

    // Click the "Go back" button
    fireEvent.click(screen.getByText("Go back"));

    // Assert that the navigate function is called with -1
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
