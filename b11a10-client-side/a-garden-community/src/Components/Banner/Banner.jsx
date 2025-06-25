import React from "react";
import ImageSlider from "./ImageSlider";

const Banner = ({ eventsData }) => {
   const sliderLength = eventsData.length;

   return (
      <div className="carousel w-full">
         {eventsData.map((item, index) => {
            return (
               <ImageSlider
                  key={index}
                  item={item}
                  index={index}
                  sliderLength={sliderLength}
               />
            );
         })}
      </div>
   );
};

export default Banner;
