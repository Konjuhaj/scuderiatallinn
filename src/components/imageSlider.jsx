import { useState } from "react";

const ImageSlider = ({ imageLinks }) => {
  //   const [currentIndex, setCurrentIndex] = useState(0);
  //   const goToPrevious = () => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === 0 ? imageLinks.length - 1 : prevIndex - 1
  //     );
  //   };
  //   const goToNext = () => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === imageLinks.length - 1 ? 0 : prevIndex + 1
  //     );
  //   };
  //   return (
  //     <div className="image-slider relative">
  //       <div className="">
  //         <img src={imageLinks[currentIndex]} alt={`Slide ${currentIndex}`} />
  //       </div>
  //       <button
  //         onClick={goToPrevious}
  //         className="absolute inset-y-0 left-0 flex items-center"
  //       >
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           stroke-width="2"
  //           stroke="currentColor"
  //           class="w-6 h-6"
  //         >
  //           <path
  //             stroke-linecap="round"
  //             stroke-linejoin="round"
  //             d="M15.75 19.5 8.25 12l7.5-7.5"
  //           />
  //         </svg>
  //       </button>
  //       <button
  //         onClick={goToNext}
  //         className="absolute inset-y-0 left-2 flex items-center"
  //       >
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           stroke-width="2"
  //           stroke="currentColor"
  //           class="w-6 h-6"
  //         >
  //           <path
  //             stroke-linecap="round"
  //             stroke-linejoin="round"
  //             d="m8.25 4.5 7.5 7.5-7.5 7.5"
  //           />
  //         </svg>
  //       </button>
  //     </div>
  //   );
};

export default ImageSlider;
