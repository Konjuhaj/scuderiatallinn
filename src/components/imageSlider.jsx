import React, { useState } from "react";

const ImageSlider = ({ imageLinks }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageLinks.length - 1 : prevIndex - 1
    );
  };
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageLinks.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <>
      <div className="image-slider relative w-full lg:w-3/5 mx-auto ">
        <div className="w-full h-auto">
          <img
            className="w-full h-auto"
            src={imageLinks[currentIndex]}
            alt={`Slide ${currentIndex}`}
          />
        </div>
        <button
          onClick={goToPrevious}
          className="absolute inset-y-0 left-1 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-10 h-10 bg-white bg-opacity-50 p-2 rounded-full shadow-lg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute inset-y-0 right-1 flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-10 h-10 bg-white bg-opacity-50 p-2 rounded-full shadow-lg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ImageSlider;
