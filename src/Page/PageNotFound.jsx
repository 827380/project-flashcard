import React from "react";
import { useMoveBack } from "../hooks/useMoveBack"; ////Custom hook

function PageNotFound() {
  const moveBack = useMoveBack();
  //  Page not found with the "Go Back " button
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-12">
      <div className="bg-white border border-gray-100 rounded-md p-12 flex-shrink-0 w-96 text-center">
        <h1 className="mb-8 text-3xl font-bold">
          The page you are looking for could not be found 😢
        </h1>
        <button
          onClick={moveBack}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          &larr; Go back
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;
