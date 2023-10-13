import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./mySlice";
export default configureStore({
  reducer: {
    card: cardReducer,
  },
});
