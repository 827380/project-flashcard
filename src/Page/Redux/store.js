import { configureStore } from "@reduxjs/toolkit";
import { loadFromLocalStorage } from "../../hooks/localStorage";
import cardReducer from "./mySlice";

const preloadedState = loadFromLocalStorage();
const store = configureStore({
  reducer: {
    card: cardReducer,
  },
  preloadedState,
});
export default store;
