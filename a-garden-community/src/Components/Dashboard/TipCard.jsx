import React from "react";
import { useNavigate } from "react-router";
import { BiSolidLike } from "react-icons/bi";
import { ImEye } from "react-icons/im";

const TipCard = ({ tip }) => {
   const navigate = useNavigate();
   const { _id, title, images_url, category, likes } = tip;

   return (
      <tr className="bg-base-200">
         <td>
            <div className="max-w-56 ">
               <img
                  className="w-full object-cover aspect-[16/12] lg:aspect-[16/7] rounded-lg"
                  src={images_url}
                  alt="Avatar"
               />
            </div>
         </td>
         <td>
            <p className="text-base lg:text-lg font-semibold !font-source-serif">
               {title}
            </p>
         </td>
         <td>
            <p className="text-xs lg:text-base">{category}</p>
         </td>
         <td className="hidden lg:table-cell items-center">
            <div className="flex justify-center items-center">
               <p className=" flex items-center text-lg gap-2 text-center">
                  <BiSolidLike className="text-yellow-400 lg:text-[28px]" />
                  <span className="pt-1.5 font-semibold">{likes}</span>
               </p>
            </div>
         </td>
         <th>
            <div className="flex justify-center">
               <button
                  onClick={() => navigate(`../tip/${_id}`)}
                  className="py-2 px-5  text-center text-lg bg-green-500 rounded-sm hover:bg-green-400"
               >
                  <ImEye className="text-gray-900" />
               </button>
            </div>
         </th>
      </tr>
   );
};

export default TipCard;
