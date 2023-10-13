import { createSlice } from "@reduxjs/toolkit";

// create a new slice of the Redux store for flashcards
const flashcardSlice = createSlice({
  // specify the name of the slice
  name: "card",

  // set the initial state for the slice
  initialState: {
    cards: [
      {
        groupname: "",
        description: "",
        flashterms: [{ term: "", defination: "" }],
      },
    ],
  },

  // specify the reducers for the slice
  reducers: {
    addCard: (state, action) => {
      // localStorage.setItem("formData", state.cards);
      state.cards = [action.payload, ...state.cards];

      //  console.log(state.cards);
    },
    updateFromLocalStorage: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },

    // a reducer for deleting a card from the list of flashcards
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((el) => el.id !== action.payload);
    },
  },
});

// export the individual reducers as named exports
export const { addCard, deleteCard, updateFromLocalStorage } =
  flashcardSlice.actions;

// export the default reducer for the flashcard slice
export default flashcardSlice.reducer;
