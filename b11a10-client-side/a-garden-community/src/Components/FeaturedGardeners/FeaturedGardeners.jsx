import React, { use } from "react";
import Gardeners from "./Gardeners";

const FeaturedGardeners = ({ FeaturedGardenersPromise }) => {
   const FeaturedGardenersData = use(FeaturedGardenersPromise);
   return (
      <div>
         <div className="container 2xl:max-w-6xl mx-auto px-5 lg:px-0">
            <h1 className="text-[28px] font-bold !font-source-serif mb-10 pb-4 border-b border-dashed border-green-600  max-w-96 ">
               Our{" "}
               <span className="text-primary !font-source-serif">
                  Active Gardener's
               </span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9.5">
               {FeaturedGardenersData.map((gardener) => (
                  <Gardeners key={gardener._id} gardener={gardener}></Gardeners>
               ))}
            </div>
         </div>
      </div>
   );
};

export default FeaturedGardeners;
