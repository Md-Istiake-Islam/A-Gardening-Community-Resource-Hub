import React, { useEffect } from "react";
import { SlLike } from "react-icons/sl";
import { FaRegUserCircle } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const TipsCard = ({ tip }) => {
   const { name, email, title, description, likes, created_at } = tip;

   const [userImg, setUserImg] = React.useState(null);

   useEffect(() => {
      fetch(`https://b11a10-server-side-dev-istiake.vercel.app/users/${email}`)
         .then((res) => res.json())
         .then((data) => {
            if (data) {
               setUserImg(data.photo);
            }
         });
   }, [email]);

   return (
      <div className="flex items-center  justify-center p-4">
         <div className="card w-full shadow-sm  bg-radial from-stone-800  to-zinc-800 relative">
            <div className="border-l-4 border-green-600 pl-4 rounded-xl">
               <div className="flex items-start gap-4 py-6 pr-7">
                  <div className="avatar absolute -left-8 top-[calc(50%-32px)] ">
                     <div className="w-16 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
                        <img src={userImg} alt="Avatar" />
                     </div>
                  </div>
                  <div className="ml-12 flex flex-col ">
                     {<p className="text-5xl text-gray-300 leading-none">“</p>}
                     <h2 className="font-bold text-xl text-gray-300 mb-1">
                        {title}
                     </h2>
                     <p className="text-green-600 flex items-center gap-2 text-sm mb-3">
                        {" "}
                        <FaRegUserCircle />
                        {name}
                     </p>
                     <p className=" line-clamp-3 text-gray-400 text-sm xl:text-base !font-source-serif font-light ">
                        {description}
                     </p>
                     <div className="w-full flex items-center justify-between text-green-600 mt-4 pr-2">
                        <p className="flex items-center gap-2 text-gray-400">
                           <SlLike />
                           Likes: {likes}
                        </p>
                        <p className="text-sm text-gray-400 mt-2 flex items-center gap-2">
                           <SlCalender />
                           {created_at}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default TipsCard;
