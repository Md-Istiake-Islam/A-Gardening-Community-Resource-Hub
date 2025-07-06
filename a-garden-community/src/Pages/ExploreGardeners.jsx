import React from "react";
import { useLoaderData } from "react-router";
import GardenersCard from "../Components/FeaturedGardeners/GardenersCard";

const ExploreGardeners = () => {
   const gardenersData = useLoaderData();

   return (
      <div className="bg-base-200 w-full py-14 px-2 lg:px-0">
         <div className="container lg:max-w-6xl mx-auto relative min-h-[calc(100vh-150px)]">
            <div className="">
               <h1 className="text-3xl font-bold !font-source-serif mb-5 border-b border-green-600 border-dashed pb-3 max-w-lg text-primary-content">
                  Explore Talented{" "}
                  <span className="text-primary !font-source-serif">
                     Gardeners Near You
                  </span>
               </h1>
               <p className="text-secondary-content text-sm mb-10">
                  Discover a diverse community of skilled gardeners ready to
                  bring your green space to life. Browse profiles, view past
                  projects, and connect with the perfect gardener for your
                  needs—whether you're planning a new landscape, maintaining
                  your garden, or looking for expert advice.
               </p>
            </div>
            <div className="grid grid-cols-1 gap-8">
               {gardenersData.map((gardener) => (
                  <GardenersCard key={gardener._id} gardener={gardener} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default ExploreGardeners;
