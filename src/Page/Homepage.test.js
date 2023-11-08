import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider
import store from "./Redux/store";

import Homepage from "./Homepage";

describe("YourComponent", () => {
  test("renders YourComponent component", () => {
    // Render the component within a Router and wrapped in Provider
    render(
      <Router>
        <Provider store={store}>
          <Homepage />
        </Provider>
      </Router>
    );

    // Assert on the output
    // Add more assertions based on your component structure and expected output
  });

  // Add more test cases for other functionalities as needed
});
