import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../../Page/Homepage";
import MyflashCard from "../../Page/Myflashcard";
import MyflashcardDetails from "../../Page/FlashCardDetails";

// This component defines the routing configuration for the app, using the React Router library.
const Routers = () => {
  return (
    <div>
      <Routes>
        {/* This Route renders the Homepage component when the user navigates to the root URL ("/") */}
        <Route path="/" element={<Homepage></Homepage>}></Route>
        
        {/* This Route renders the MyflashCard component when the user navigates to the "/myflashcards/" URL */}
        <Route
          path="/myflashcards/"
          element={<MyflashCard></MyflashCard>}
        ></Route>
        
        {/* This Route renders the MyflashcardDetails component when the user navigates to the "/flashCardDetails/:id" URL, where ":id" is a parameter indicating the ID of a specific flashcard */}
        <Route
          path="/flashCardDetails/:id"
          element={<MyflashcardDetails></MyflashcardDetails>}
        ></Route>
      </Routes>
    </div>
  );
};

export default Routers;
