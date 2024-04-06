import React, { useEffect, useState } from "react";

const MainImageSlider = ({ imageLinks }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(goToNext, 4000); // Change slide every 4 seconds
    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [currentIndex]); // Re-run effect when currentIndex changes

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
      <div className="w-full lg:max-h-[calc(100vh-20vh)] object-cover overflow-hidden">
        <div className="image-slider relative h-auto">
          <div className="w-full h-auto">
            <img
              className=" w-full lg:max-h-[calc(100vh-20vh)] object-cover h-[70vh] sm:h-auto"
              src={imageLinks[currentIndex]}
              alt={`Slide ${currentIndex}`}
              loading="eager"
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
      </div>
    </>
  );
};

export default MainImageSlider;
