import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import ShareModal from "./ModalWindow";

describe("ShareModal", () => {
  test("renders ShareModal component", () => {
    // Mock props
    const props = {
      open: true,
      onClose: jest.fn(),
      linkToShare: "https://example.com",
    };

    // Render the component
    render(<ShareModal {...props} />);

    // Assert on the output
    expect(screen.getByText("Share")).toBeInTheDocument();
    expect(screen.getByText(props.linkToShare)).toBeInTheDocument();
    expect(screen.getByText("Copy Link")).toBeInTheDocument();
    expect(screen.getByText("WhatsApp")).toBeInTheDocument();
    expect(screen.getByText("Facebook")).toBeInTheDocument();
  });

  test("handles copy to clipboard", async () => {
    const props = {
      open: true,
      onClose: jest.fn(),
      linkToShare: "https://example.com",
    };

    render(<ShareModal {...props} />);

    // Trigger copy to clipboard
    fireEvent.click(screen.getByRole("button", { name: /Copy Link/i }));

    // Assert that "Copied!" is displayed
    await waitFor(() => {
      expect(screen.getByText("Copied!")).toBeInTheDocument();
    });

    // Assert that "Copied!" disappears after a delay
    await waitFor(
      () => {
        expect(screen.queryByText("Copied!")).toBeNull();
      },
      { timeout: 3000 }
    ); // Adjust the timeout value as needed
  });

  // Add more test cases for other functionalities as needed
});
