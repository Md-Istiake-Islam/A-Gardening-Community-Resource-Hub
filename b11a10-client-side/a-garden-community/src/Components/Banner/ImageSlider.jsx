import React from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const ImageSlider = ({ item, index, sliderLength }) => {
   const { title, description, image } = item;
   return (
      <div id={`slide${index + 1}`} className="carousel-item relative w-full">
         <div
            className="hero min-h-[calc(100vh-150px)]"
            style={{
               backgroundImage: `url(${image})`,
            }}
         >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content justify-center text-center lg:text-start lg:justify-start items-start  md:min-w-xl lg:min-w-3xl xl:min-w-5xl 2xl:min-w-7xl ">
               <div className="w-full flex flex-col items-center lg:items-start">
                  <h1 className="mb-2 xl:mb-5 text-lg xl:text-3xl font-semibold">
                     Garden community events
                  </h1>
                  <h1 className="mb-5 text-[28px] lg:text-3xl xl:text-5xl font-bold">
                     {title}
                  </h1>
                  <p className="mb-5 max-w-md lg:max-w-xl text-sm lg:text-base ">
                     {description}
                  </p>
                  <button className="btn border border-white bg-transparent text-white shadow-none hover:bg-green-600 hover:border-green-900 px-5 xl:px-8 py-3 xl:py-6 mt-4">
                     Visit Events
                  </button>
               </div>
            </div>
         </div>
         <div className="absolute left-10 right-10 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
               href={`#slide${index === 0 ? sliderLength : index}`}
               className="btn bg-transparent border border-white rounded-xl py-3 lg:py-6 px-2 border-dashed hover:bg-white hover:text-gray-900"
            >
               <FaCaretLeft className="text-white text-xl lg:text-3xl hover:text-gray-900" />
            </a>
            <a
               href={`#slide${
                  index === sliderLength - 1 ? sliderLength - index : index + 2
               }`}
               className="btn bg-transparent border border-white rounded-xl py-3 lg:py-6 px-2 border-dashed hover:bg-white"
            >
               <FaCaretRight className="text-white text-xl lg:text-3xl" />
            </a>
         </div>
      </div>
   );
};

export default ImageSlider;
