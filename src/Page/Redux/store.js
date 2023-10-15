import { configureStore } from "@reduxjs/toolkit";
import { loadFromLocalStorage } from "../../hooks/localStorage";
import cardReducer from "./mySlice";

const preloadedState = loadFromLocalStorage();
export default configureStore({
  reducer: {
    card: cardReducer,
  },
  preloadedState,
});
