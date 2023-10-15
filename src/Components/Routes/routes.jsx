import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "../../Page/Homepage";
import MyflashCard from "../../Page/Myflashcard";
import MyflashcardDetails from "../../Page/FlashCardDetails";
import PageNotFound from "../../Page/PageNotFound";

// This component defines the routing configuration for the app, using the React Router library.
const Routers = () => {
  return (
    <div>
      <Routes>
        {/* This Route renders the Homepage component when the user navigates to the root URL ("/") */}
        <Route index element={<Navigate replace to="Homepage" />} />
        <Route path="Homepage" element={<Homepage />} />

        {/* This Route renders the MyflashCard component when the user navigates to the "/myflashcards/" URL */}
        <Route path="/myflashcards/" element={<MyflashCard />}></Route>

        {/* This Route renders the MyflashcardDetails component when the user navigates to the "/flashCardDetails/:id" URL, where ":id" is a parameter indicating the ID of a specific flashcard */}
        <Route
          path="/flashCardDetails/:id"
          element={<MyflashcardDetails />}
        ></Route>
        {/* This route render the PageNotFound component when user write some another URL that is not in this routes  */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default Routers;
