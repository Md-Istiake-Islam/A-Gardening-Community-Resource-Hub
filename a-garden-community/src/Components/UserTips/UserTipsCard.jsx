import React from "react";
import { useNavigate } from "react-router";
import { GrUpdate } from "react-icons/gr";
import { BiSolidLike } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

const UserTipsCard = ({ tip, handelDelete, setReload }) => {
   const navigate = useNavigate();
   const { _id, title, images_url, category, likes } = tip;

   return (
      <tr className="bg-base-200">
         <td>
            <div className="max-w-56 ">
               <img
                  className="w-full object-cover aspect-[16/13] lg:aspect-[16/7] rounded-lg"
                  src={images_url}
                  alt="Avatar"
               />
            </div>
         </td>
         <td>
            <p className="lg:text-lg font-semibold !font-source-serif">
               {title}
            </p>
         </td>
         <td>{category}</td>
         <td className="hidden lg:table-cell">
            <div className="flex justify-center items-center">
               <p className=" flex items-center lg:text-lg gap-2 text-center">
                  <BiSolidLike className="text-yellow-400 lg:text-[28px]" />
                  <span className="pt-1.5 font-semibold">{likes}</span>
               </p>
            </div>
         </td>
         <th>
            <div className="flex justify-center gap-3">
               <button
                  onClick={() => navigate(`../update-tips/${_id}`)}
                  className="py-2 px-4 text-center text-base bg-green-400 hover:bg-green-500 rounded-sm"
               >
                  <GrUpdate className="text-gray-900" />
               </button>
               <button
                  onClick={() => {
                     handelDelete(_id), setReload((pre) => !pre);
                  }}
                  className="py-1 px-4 text-center text-base bg-red-500 hover:bg-red-500 rounded-sm"
               >
                  <MdDeleteForever className="text-gray-950 text-2xl" />
               </button>
            </div>
         </th>
      </tr>
   );
};

export default UserTipsCard;
