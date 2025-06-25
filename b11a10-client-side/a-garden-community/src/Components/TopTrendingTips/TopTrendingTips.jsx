import React, { use } from "react";
import TipsCard from "./TipsCard";

const TopTrendingTips = ({ TopTrendingTipsPromise }) => {
   const TipsData = use(TopTrendingTipsPromise);

   return (
      <div className="container lg:max-w-[1230px] mx-auto px-5">
         <h2 className="text-3xl font-bold  text-gray-200 mb-8 border-b border-green-800 border-dashed pb-5 max-w-xs ml-4 !font-source-serif">
            Top{" "}
            <span className="!font-source-serif text-primary">
               Trending Tips
            </span>
         </h2>
         <div className="grid grid-cols-1 lg:grid-cols-2  gap-3">
            {TipsData.map((tip) => (
               <TipsCard key={tip._id} tip={tip}></TipsCard>
            ))}
         </div>
      </div>
   );
};

export default TopTrendingTips;
