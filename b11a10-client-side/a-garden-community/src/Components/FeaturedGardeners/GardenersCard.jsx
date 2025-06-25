import React from "react";
import { GoDotFill } from "react-icons/go";
import { GiHumanTarget } from "react-icons/gi";
import { MdMoreTime } from "react-icons/md";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";

const GardenersCard = ({ gardener }) => {
   const { name, age, gender, status, image, experiences, total_shared_tips } =
      gardener;

   const active = status === "Active" ? "text-green-400" : "text-red-400";

   return (
      <div>
         <div className="card card-side bg-base-100 shadow-sm flex-col lg:flex-row">
            <div className="w-full  lg:max-w-md">
               <img
                  src={image}
                  alt="Movie"
                  className="object-top rounded-tl-lg rounded-tr-lg lg:rounded-tl-lg lg:rounded-tr-none lg:rounded-bl-lg aspect-[16/9] object-cover "
               />
            </div>
            <div className="card-body">
               <h2 className="card-title text-[28px] pb-2 border-b border-green-600 max-w-md mb-4">
                  {name}
               </h2>
               <p className="flex items-center gap-1 max-h-max bg-base-300 rounded-sm max-w-max pr-2 text-secondary-content">
                  <GoDotFill className={`text-sm ${active}`} />
                  {status}
               </p>
               <div className="border-l-2 border-green-600 pl-2 mt-2 flex gap-4 ml-1">
                  <h1 className="text-[11px] flex gap-1 items-center text-secondary-content">
                     <GiHumanTarget className={`text-sm ${active}`} />
                     {gender}
                  </h1>
                  <div className="grid grid-cols-6 max-w-max gap-1 items-center">
                     <RxCountdownTimer className={`text-sm ${active}`} />
                     <h1 className="text-[11px] col-span-5 text-secondary-content">
                        {age} years old
                     </h1>
                  </div>
               </div>
               <p className="text-[13px] font-source-serif border-l-2 border-green-600 pl-2 ml-1 flex items-center gap-2 font-medium text-secondary-content">
                  <MdMoreTime className={`text-base ${active}`} /> {experiences}
               </p>
               <div className="card-actions justify-end  flex-col lg:flex-row items-start lg:items-center">
                  <p className="ml-1 flex items-center gap-2 border-l-2 border-green-600 pl-2 font-medium text-secondary-content">
                     <MdOutlineTipsAndUpdates
                        className={`text-base ${active}`}
                     />
                     Total shared Tips: {total_shared_tips}
                  </p>
                  <button className="btn border-green-600 text-green-600 hover:text-white hover:bg-green-600">
                     View Profile
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default GardenersCard;
