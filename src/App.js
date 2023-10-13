import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; // import Bootstrap CSS
import Navbar from "./Components/navbars/navbar"; // import custom Navbar component
import Routers from "./Components/Routes/routes"; // import custom Routes component
import { Toaster } from "react-hot-toast";
import store from "./Page/Redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <div>
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
    </div>
  );
};

export default App;
