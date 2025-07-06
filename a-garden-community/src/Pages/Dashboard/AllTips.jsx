import React, { Suspense, useState, useEffect, useContext } from "react";
import { useLoaderData } from "react-router";
import BrowseTipCard from "../../Components/BrowseTips/BrowseTipCard";

import { BsFilterLeft } from "react-icons/bs";
import LoadingSpinner from "../../Components/LoadingSpinner";
import { ThemeContext } from "../../Components/ToggleThemeProvider";
import TipsCard from "../../Components/Dashboard/TipCard";

const getTipsData = async (category) => {
   const res = await fetch(
      `https://b11a10-server-side-dev-istiake.vercel.app/tipsFilter/${category}`
   );
   return res.json();
};

const AllTips = () => {
   const tipsData = useLoaderData();
   const { theme } = useContext(ThemeContext);

   const [displayTipsData, setDisplayTipsData] = useState(tipsData);
   const [loading, setLoading] = useState(false);

   const handelEasy = () => {
      setLoading(true);
      const tipsPromise = getTipsData("Easy");
      tipsPromise.then((data) => {
         setDisplayTipsData(data);
         setLoading(false);
      });
   };
   const handelMedium = () => {
      setLoading(true);
      const tipsPromise = getTipsData("Medium");
      tipsPromise.then((data) => {
         setDisplayTipsData(data);
         setLoading(false);
      });
   };
   const handelHard = () => {
      setLoading(true);
      const tipsPromise = getTipsData("Hard");
      tipsPromise.then((data) => {
         setDisplayTipsData(data);
         setLoading(false);
      });
   };
   const handelAll = () => {
      setLoading(true);
      setDisplayTipsData(tipsData);
      setLoading(false);
   };

   return (
      <div className="container lg:max-w-7xl mx-auto relative mb-10 px-2 lg:px-0">
         <div className="mt-10">
            <div className="bg-base-100 p-4 px-8 mb-5 rounded-lg">
               <h1 className="text-3xl font-bold !font-source-serif mb-3 max-w-md">
                  All{" "}
                  <span className="text-primary !font-source-serif">
                     Gardening Tips
                  </span>
               </h1>
               <p className="text-gray-500 text-sm  max-w-4xl">
                  Browse All Gardening Tips is your go-to resource for
                  cultivating a thriving garden. Whether you're a seasoned
                  gardener or just starting, this collection offers expert
                  advice on everything from soil preparation and plant care to
                  seasonal maintenance and pest control.
               </p>
            </div>
         </div>
         <div className="bg-base-100 p-4 px-8 rounded-lg">
            <div className="flex items-center mt-5 gap-5 border-l border-gray-400 pl-1.5 mb-3">
               <p className="flex border border-gray-400 rounded-sm px-1 py-0.5">
                  <BsFilterLeft className="text-1xl" />
               </p>
               <div className="flex items-center gap-2">
                  <button
                     onClick={() => handelAll()}
                     className={`py-1.5 px-4 ${
                        theme === "light" ? "bg-stone-300" : "bg-stone-900"
                     } border-stone-600 text-xs rounded-sm`}
                  >
                     All
                  </button>
                  <button
                     onClick={() => handelEasy()}
                     className={`py-1.5 px-4  ${
                        theme === "light" ? "bg-stone-300" : "bg-stone-900"
                     } border-stone-600 text-xs rounded-sm`}
                  >
                     Easy
                  </button>
                  <button
                     onClick={() => handelMedium()}
                     className={`py-1.5 px-4  ${
                        theme === "light" ? "bg-stone-300" : "bg-stone-900"
                     } border-stone-600 text-xs rounded-sm`}
                  >
                     Medium
                  </button>
                  <button
                     onClick={() => handelHard()}
                     className={`py-1.5 px-4  ${
                        theme === "light" ? "bg-stone-300" : "bg-stone-900"
                     } border-stone-600 text-xs rounded-sm`}
                  >
                     Hard
                  </button>
               </div>
            </div>
            <div className="overflow-x-auto border border-gray-300 rounded-lg">
               <table className="table ">
                  {/* head */}
                  <thead>
                     <tr className="bg-base-200">
                        <th className=" text-lg">Image</th>
                        <th className=" text-lg">Title</th>
                        <th className=" text-lg">Category</th>
                        <th className="text-center text-lg hidden lg:flex">
                           Total likes
                        </th>
                        <th className="text-center text-lg">Options</th>
                     </tr>
                  </thead>
                  <tbody className="gap-3">
                     {loading ? (
                        <tr>
                           <td>
                              <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                 <LoadingSpinner></LoadingSpinner>
                              </div>
                           </td>
                        </tr>
                     ) : (
                        displayTipsData.map((tip) => (
                           <TipsCard key={tip._id} tip={tip}></TipsCard>
                        ))
                     )}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default AllTips;
