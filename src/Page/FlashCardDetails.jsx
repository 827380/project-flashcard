import React, { useState } from "react";
import { useSelector } from "react-redux";
import ShareModal from "./ModalWindow";
import {
  MdOutlinePrint,
  MdWest,
  MdDownload,
  MdOutlineNavigateNext,
  MdOutlineNavigateBefore,
} from "react-icons/md";
import { GrRedo } from "react-icons/gr";
import { Link, useParams } from "react-router-dom";

import { useLocation } from "react-router-dom";

const FlashCardDetails = () => {
  // Get the parameters from the URL using the `useParams` hook from React Router.
  // const params = useParams();
  // console.log(params);

  // Get the `id` parameter from the URL using the `useParams` hook.
  const { id } = useParams();
  console.log(id);

  // Get the `dispatch` function from the Redux store using the `useDispatch` hook.
  // const dispatch = useDispatch();

  // Get the current location using the `useLocation` hook from React Router.
  const location = useLocation();
  // console.log(location.pathname);

  // Get the `cardId` from the last segment of the current URL path.
  const cardId = location.pathname.split("/").pop();
  console.log(cardId);
  // Get the list of cards from the Redux store using the `useSelector` hook.

  const cards = useSelector((state) => state.card.cards);
  console.log(cards);

  const [slideIndex, setSlideIndex] = useState(1);
  const [imageURL, setImageURL] = useState(
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80"
  );

  //state for handling popup modal to open and close.
  const [openModal, setOpenModal] = useState(false);
  const nextSlide = (card) => {
    if (card && card.flashterms && slideIndex !== card.flashterms.length) {
      setSlideIndex(slideIndex + 1);
    } else if (
      card &&
      card.flashterms &&
      slideIndex === card.flashterms.length
    ) {
      setSlideIndex(1);
    }
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const prevSlide = (card) => {
    if (slideIndex > 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(card.flashterms.length);
    }
  };

  return (
    <div>
      <div className="card-detail capitalize">
        {/* using filter method to match url id with oncliked card id.
        apply map method to view card details only if card id is matched with useparams id  */}
        {cards
          .filter((card) => card.id === id)
          .map((card, index) => (
            <div key={index} className="mx-7 sm:mx-12 md:mx-20 lg:mx-24">
              <div className="flex pt-4 break-all">
                <Link to="/myflashcards">
                  <MdWest className="mr-4 mt-1.5 text-lg" />
                </Link>

                <div className="pr-6">
                  <h1 className=" font-bold">{card.groupname}</h1>
                  <p className="text-gray-500 mb-6">{card.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-6  gap-6 ">
                <div className="term-list">
                  <div className="bg-slate-50 p-5 rounded-md border border-gray-200 shadow-md overflow-hidden ">
                    <h2 className="mb-3 font-semibold text-gray-400">
                      Flashcards
                    </h2>
                    <hr className="text-lg" />

                    <ul className="text-gray-500  font-semibold overflow-hidden text-ellipsis whitespace-pre">
                      {card.flashterms.map((term, index) => (
                        <li
                          key={index}
                          className={
                            slideIndex - 1 === index
                              ? "my-3 px-1 flex justify-center rounded-md bg-red-100 text-red-500"
                              : "my-3 text-gray-500"
                          }
                          onClick={() => nextSlide(index + 1)}
                        >
                          {card.flashterms[index].term}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative md:grid md:grid-flow-col md:gap-6 md:col-span-4">
                  <div className=" bg-slate-50 flex px-10 py-8 mb-10 rounded-md border border-gray-200 shadow-md">
                    <div className="flex items-center p-4 justify-center sm:h-auto sm:w-40 lg:w-60 lg:h-40 border-2 rounded-md">
                      {imageURL ? (
                        <img
                          className="text-center text-slate-300 max-w-full max-h-full object-contain"
                          src={imageURL}
                          alt=""
                        />
                      ) : (
                        <span className="flex items-center justify-center leading-3 text-gray-400 bg-red-100 h-12 w-12 rounded-full text-xs">
                          No Image
                        </span>
                      )}
                    </div>

                    <div className="w-auto">
                      <p className=" text-gray-500 pl-5 break-all">
                        {card.flashterms[slideIndex - 1].defination}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 w-full flex items-center justify-center mt-5 text-3xl text-gray-400">
                    <MdOutlineNavigateBefore
                      className="before"
                      onClick={() => prevSlide(card)}
                    />
                    <small className="text-base mx-6">
                      {slideIndex}/{card.flashterms.length}
                    </small>
                    <MdOutlineNavigateNext
                      className="after"
                      onClick={() => nextSlide(card)}
                    />
                  </div>
                </div>

                <div className="grid h-40 lg:grid-cols-1 md:grid-cols-1 text-gray-500 overflow-hidden ">
                  <button
                    onClick={handleModalOpen}
                    className="btn flex items-center justify-center"
                  >
                    <GrRedo className="my-3" />
                    <div className="ml-6 cursor-pointer "> Share </div>
                  </button>
                  <button className="btn flex items-center justify-center">
                    <MdDownload className="my-3" />
                    <div className="my-1.5 ml-6"> Download </div>
                  </button>
                  <button className="btn flex items-center justify-center">
                    <MdOutlinePrint className="my-3" />
                    <div className="my-1.5 ml-6"> Print </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        <ShareModal
          open={openModal}
          onClose={handleModalClose}
          linkToShare={location.pathname}
        />
      </div>
    </div>
  );
};

export default FlashCardDetails;
