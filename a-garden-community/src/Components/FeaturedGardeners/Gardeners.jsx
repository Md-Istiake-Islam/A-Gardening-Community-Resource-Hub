import React from "react";

const Gardeners = ({ gardener }) => {
   const { name, image } = gardener;
   return (
      <div>
         <div className="card  image-full w-full shadow-sm group">
            <div className="aspect-[15/16] h-full overflow-hidden rounded-lg ">
               <img
                  src={image}
                  alt="gardeners"
                  className="brightness-60 group-hover:brightness-40 object-top w-full aspect-[15/16] object-cover transition-all duration-200"
               />
            </div>
            <div className="card-body justify-end">
               <div>
                  <h2 className="card-title text-1xl border-b pb-2 mb-2 !font-source-serif  max-w-50 ">
                     {name}
                  </h2>
                  <p>Garden designer and plant enthusiast</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Gardeners;
