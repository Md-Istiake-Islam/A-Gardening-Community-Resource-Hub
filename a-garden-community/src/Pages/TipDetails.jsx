import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { IoIosTimer } from "react-icons/io";
import { SlLike } from "react-icons/sl";
import { IoTimerOutline } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillLike } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { LuFileType } from "react-icons/lu";
import { TbCategoryPlus } from "react-icons/tb";
import { ThemeContext } from "../Components/ToggleThemeProvider";

const TipDetails = () => {
   const { theme } = useContext(ThemeContext);
   const tipsData = useLoaderData();
   const {
      _id,
      name,
      title,
      plant_type,
      description,
      images_url,
      category,
      likes,
      created_at,
   } = tipsData;
   const [latestPosts, setLatestPosts] = useState([]);
   const [isLiked, setIsLiked] = useState(false);
   const [likesCount, setLikesCount] = useState(likes);

   const handleLike = () => {
      console.log("hello");
      fetch(
         `https://b11a10-server-side-dev-istiake.vercel.app/updateTipsSV/${_id}`,
         {
            method: "PATCH",
            headers: {
               "Content-Type": "application/json",
            },

            body: JSON.stringify({ likes: Number(likes) + 1 }),
         }
      )
         .then((res) => res.json())
         .then((data) => {
            if (data) {
               setIsLiked(true);
               setLikesCount(Number(likes) + 1);
            }
         });
   };

   useEffect(() => {
      fetch("https://b11a10-server-side-dev-istiake.vercel.app/topTips/6")
         .then((res) => res.json())
         .then((data) => {
            setLatestPosts(data);
         });
   }, [setLatestPosts]);

   return (
      <div className="container lg:max-w-7xl mx-auto mt-14 pb-14 px-3 lg:px-0">
         <div>
            <h1 className="text-[28px] font-bold !font-source-serif text-primary-content border-b border-green-600 border-dashed pb-3 max-w-md mb-3">
               Best{" "}
               <span className="text-primary !font-source-serif">
                  Gardening Tips
               </span>
            </h1>
            <p className="text-sm mb-10">
               Gardening is both an art and a science, requiring patience,
               knowledge, and a touch of creativity. The best gardening tips
               help ensure lush, thriving plants while making the process
               enjoyable and efficient.
            </p>
         </div>
         <div className=" relative mt-6  grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 border border-stone-300 pb-10 rounded-lg overflow-hidden">
               <div>
                  <img
                     src={images_url}
                     alt=""
                     className="aspect-[16/8] object-cover object-center"
                  />
               </div>
               <div className="w-full px-10">
                  <div className="lg:px-5 py-8 border-b border-green-600 border-dashed w-full">
                     <h1 className="text-[28px] font-semibold text-primary-content">
                        {title}
                     </h1>
                     <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-5 mt-2 w-full">
                        <div className="flex items-center gap-3 w-full lg:col-span-3">
                           <p className="flex items-center gap-2 mt-2 text-xs lg:text-base">
                              <FaRegUserCircle className="text-green-600 text-lg" />
                              {name}
                           </p>
                           <p className="flex items-center gap-2 mt-2 text-xs lg:text-base">
                              <TbCategoryPlus className="text-green-600 text-lg" />
                              {category}
                           </p>
                           <p className="flex items-center gap-2 mt-2 text-xs lg:text-base">
                              <LuFileType className="text-green-600 text-lg" />
                              {plant_type}
                           </p>
                        </div>
                        <div className="flex justify-start gap-3 w-full lg:col-span-2 lg:justify-end">
                           <p className="flex items-center gap-2 mt-2 text-xs lg:text-base">
                              {" "}
                              <IoIosTimer className="text-lg text-green-600" />
                              {created_at}
                           </p>
                           <p className="flex items-center gap-2 mt-2 order-last text-xs lg:text-base">
                              <SlLike className="text-green-600 text-lg" />
                              {likesCount} likes
                           </p>
                        </div>
                     </div>
                  </div>
                  <p className="mt-7 font-source-serif text-sm border-b border-green-600 border-dashed pb-7 text-secondary-content">
                     {description}
                  </p>

                  <div className="flex w-full items-center justify-between px-6">
                     <ul className="flex text-2xl gap-3 mt-3">
                        <li>
                           <a href="http://www.facebook.com" target="blank">
                              <CiFacebook
                                 style={{
                                    borderRadius: "50%",
                                    border: `1px solid ${
                                       theme === "light" ? "#9ca3af" : "white"
                                    }`,
                                    padding: "",
                                    color: `theme === "light" ? "#9ca3af" : "white"`,
                                 }}
                              />
                           </a>
                        </li>
                        <li>
                           <a href="https://x.com/home?lang=en" target="blank">
                              <FaXTwitter
                                 style={{
                                    borderRadius: "50%",
                                    border: `1px solid ${
                                       theme === "light" ? "#9ca3af" : "white"
                                    }`,
                                    padding: "4px",
                                    color: `theme === "light" ? "#9ca3af" : "white"`,
                                 }}
                              />
                           </a>
                        </li>
                        <li>
                           <a href="https://www.linkedin.com/" target="blank">
                              <GrLinkedinOption
                                 style={{
                                    borderRadius: "50%",
                                    border: `1px solid ${
                                       theme === "light" ? "#9ca3af" : "white"
                                    }`,
                                    padding: "4px",
                                    color: `theme === "light" ? "#9ca3af" : "white"`,
                                 }}
                              />
                           </a>
                        </li>
                     </ul>
                     <div className="flex items-center gap-2 mt-3">
                        <button onClick={() => handleLike()} disabled={isLiked}>
                           <AiFillLike
                              className={`text-amber-300 text-[28px] ${
                                 !isLiked && "hover:text-amber-400"
                              } active:scale-95 ${isLiked && "text-gray-700"}`}
                           />
                        </button>
                        <p className="mt-1">{isLiked ? "Liked" : "Like"}</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-5">
               <h1 className="text-xl font-medium !font-jost border-b border-green-700 max-w-max pb-1.5">
                  Latest Post
               </h1>
               {latestPosts.length > 0
                  ? latestPosts.map((post) => {
                       const { _id, images_url, title, created_at } = post;
                       return (
                          <div key={_id} className="flex items-center gap-4">
                             <img
                                src={images_url}
                                alt=""
                                className="max-w-24 aspect-[16/9]"
                             />
                             <div>
                                <h1 className="text-sm mb-2">{title}</h1>
                                <p className="text-xs flex items-center gap-1">
                                   <IoTimerOutline />
                                   {created_at}
                                </p>
                             </div>
                          </div>
                       );
                    })
                  : ""}
            </div>
         </div>
      </div>
   );
};

export default TipDetails;
