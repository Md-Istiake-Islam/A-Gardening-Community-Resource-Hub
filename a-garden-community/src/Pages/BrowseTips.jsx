import React, { Suspense, useState, useEffect, useContext } from "react";
import { useLoaderData } from "react-router";
import BrowseTipCard from "../Components/BrowseTips/BrowseTipCard";

import { BsFilterLeft } from "react-icons/bs";
import LoadingSpinner from "../Components/LoadingSpinner";
import { ThemeContext } from "../Components/ToggleThemeProvider";

const getTipsData = async (category) => {
   const res = await fetch(
      `https://b11a10-server-side-dev-istiake.vercel.app/tipsFilter/${category}`
   );
   return res.json();
};

const BrowseTips = () => {
   const tipsData = useLoaderData();
   const { theme } = useContext(ThemeContext);

   const [displayTipsData, setDisplayTipsData] = useState(tipsData);
   const [loading, setLoading] = useState(false);
   const [sortType, setSortType] = useState("default");
   const [displayShortedData, setDisplayShortedData] = useState([]);

   const sortTips = (data, order) => {
      if (order === "asc") {
         return [...data].sort((a, b) =>
            a.created_at?.localeCompare(b.created_at)
         );
      } else if (order === "desc") {
         return [...data].sort((a, b) =>
            b.created_at?.localeCompare(a.created_at)
         );
      } else {
         return data;
      }
   };

   useEffect(() => {
      const sorted = sortTips([...displayTipsData], sortType);
      setDisplayShortedData(sorted);
   }, [sortType, tipsData, displayTipsData]);

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
      <div className="container lg:max-w-6xl mx-auto relative mb-10 px-2 lg:px-0">
         <div className="mt-10">
            <h1 className="text-3xl font-bold !font-source-serif mb-5 border-b border-green-600 border-dashed pb-3 max-w-md">
               Browse All{" "}
               <span className="text-primary !font-source-serif">
                  Gardening Tips
               </span>
            </h1>
            <p className="text-gray-500 text-sm mb-10">
               Browse All Gardening Tips is your go-to resource for cultivating
               a thriving garden. Whether you're a seasoned gardener or just
               starting, this collection offers expert advice on everything from
               soil preparation and plant care to seasonal maintenance and pest
               control.
            </p>
            <div className="flex items-center mt-5 gap-5 border-l border-gray-400 pl-1.5 mb-3">
               <p className="flex border border-gray-400 rounded-sm px-1 py-0.5">
                  <BsFilterLeft className="text-1xl" />
               </p>
               <div className="flex items-center justify-between gap-2 w-full">
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
                  <div className="flex justify-end items-center gap-2 mt-2">
                     <label
                        htmlFor="sortOrder"
                        className="text-sm text-gray-600"
                     >
                        Sort by date:
                     </label>
                     <select
                        id="sortOrder"
                        value={sortType}
                        onChange={(e) => setSortType(e.target.value)}
                        className={`border px-3 py-1 text-sm rounded ${
                           theme === "light"
                              ? "bg-white"
                              : "bg-stone-900 text-white"
                        }`}
                     >
                        <option value="default">Default</option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending </option>
                     </select>
                  </div>
               </div>
            </div>
         </div>
         <div
            className={`grid ${
               displayShortedData.length > 0
                  ? " grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                  : "grid-cols-1"
            } gap-4 rounded-lg mb-20`}
         >
            {loading ? (
               <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <LoadingSpinner></LoadingSpinner>
               </div>
            ) : displayShortedData.length > 0 ? (
               displayShortedData?.map((tip) => (
                  <BrowseTipCard key={tip._id} tip={tip}></BrowseTipCard>
               ))
            ) : (
               <div
                  classNam
                  e="w-full min-h-48 flex items-center justify-center flex-col "
               >
                  <h2 className="text-xl font-semibold text-gray-600">
                     No Items Found
                  </h2>
                  <p className="text-gray-500 mt-2">
                     It looks like there are no lost or found items posted yet.
                     Please check back later or add a new post.
                  </p>
               </div>
            )}
         </div>
      </div>
   );
};

export default BrowseTips;
