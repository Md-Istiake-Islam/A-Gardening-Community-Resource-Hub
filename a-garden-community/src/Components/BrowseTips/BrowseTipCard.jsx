import React from "react";
import { useNavigate } from "react-router";

const BrowseTipCard = ({ tip }) => {
   const navigate = useNavigate();
   const { _id, title, images_url, description } = tip;

   return (
      <div>
         <div className="card bg-base-100 w-full shadow-sm p-4 hover:shadow-lg transition-shadow duration-300">
            <figure className="aspect-[16/9] mb-2">
               <img
                  src={images_url}
                  alt="Shoes"
                  className="w-full h-full object-cover object-center rounded-xl"
               />
            </figure>
            <div className="card-body pb-2 pr-0.5 pl-3 ">
               <h2 className="cline-clamp-1 ard-title text-lg mb-1 text-gray-700">
                  {title}
               </h2>

               <p className="flex items-center gap-2 text-xs  text-gray-500 mb-2">
                  {" "}
                  <samp className="line-clamp-2">{description}</samp>
               </p>
               <div className="card-actions justify-end">
                  <button
                     onClick={() => navigate(`../tip/${_id}`)}
                     className="secondary-bg px-4 py-1.5 text-sm rounded-md hover:text-white hover:!bg-primary transition-colors duration-300"
                  >
                     View Details
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BrowseTipCard;
