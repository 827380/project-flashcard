import React from "react";
import "../App.css";
import CreateInputs from "./CreateInputs";
import { Provider } from "react-redux";
import store from "./Redux/store";

const Homepage = () => {
  return (
    <>
      <div className="container pt-3 background-color ">
        <Provider store={store}>
          <CreateInputs />
        </Provider>
      </div>
    </>
  );
};

export default Homepage;
