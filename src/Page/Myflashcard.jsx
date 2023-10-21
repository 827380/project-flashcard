import { useSelector } from "react-redux";
import SingleFlashCard from "../Components/SingleFlashCard";
import "../index.css";
import { Link } from "react-router-dom";
import { GiClick } from "react-icons/gi";

const Myflashcard = () => {
  // const parsedData = JSON.parse(localStorage.getItem("formData"));
  let c = useSelector((state) => state.card.cards);
  console.log(c);
  let cards = [];
  c.map((card) => (card.description !== "" ? cards.push(card) : ""));

  return (
    <div className="bg-purple-100 rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">My Flashcards</h2>
      <div className="flex flex-wrap justify-center">
        {/* check if cards.length>0 and show cards otherwise show no flashcard*/}
        {cards && cards.length > 0 ? (
          <div className="mx-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:mx-12 md:mx-20 lg:mx-24 mt-6 gap-4 ">
            <>
              {cards.map((card, index) => (
                <SingleFlashCard
                  key={index}
                  card={card}
                  className="border border-gray-300 shadow-md"
                />
              ))}
            </>
          </div>
        ) : (
          <div className="mx-24 my-10 font-semibold text-xl">
            <h3 className="text-red-600 ">
              No Flash Cards to Show.
              <br />
            </h3>
            <h2 className="mt-8 "> Click Below to Create Your Flash Cards </h2>
            <Link to="/" className="flex text-blue-600">
              <GiClick />
              <GiClick />
              <GiClick />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Myflashcard;
