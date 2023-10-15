import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; // import Bootstrap CSS
import Navbar from "./Components/navbars/navbar"; // import custom Navbar component
import Routers from "./Components/Routes/routes"; // import custom Routes component
import { Toaster } from "react-hot-toast";
import store from "./Page/Redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { saveToLocalStorage } from "./hooks/localStorage";

const root = ReactDOM.createRoot(document.getElementById("root"));
store.subscribe(() => saveToLocalStorage(store.getState())); // calling the function to save the redux state to localstorage
root.render(
  <div>
    <BrowserRouter>
      <Provider store={store}>
        <Navbar /> {/* render Navbar component */}
        <Routers /> {/* render Routes component */}
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </Provider>
    </BrowserRouter>
  </div>
);
