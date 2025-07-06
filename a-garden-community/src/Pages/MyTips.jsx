import React, { Suspense, useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";

import { BsFilterLeft } from "react-icons/bs";
import LoadingSpinner from "../Components/LoadingSpinner";
import { AuthContext } from "../Provider/AuthProvider";
import UserTipsCard from "../Components/userTips/userTipsCard";

const getTipsData = async (email) => {
   const res = await fetch(
      `https://b11a10-server-side-dev-istiake.vercel.app/userTips/${email}`
   );
   return res.json();
};

const MyTips = () => {
   const { user } = useContext(AuthContext);

   const [displayTipsData, setDisplayTipsData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [reload, setReload] = useState(false);

   const handelDelete = (_id) => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(
               `https://b11a10-server-side-dev-istiake.vercel.app/deleteTips/${_id}`,
               {
                  method: "DELETE",
               }
            )
               .then((res) => res.json())
               .then((data) => {
                  Swal.fire({
                     title: "Deleted!",
                     text: "Your file has been deleted.",
                     icon: "success",
                  });
               });
         }
      });
   };

   useEffect(() => {
      const loadData = () => {
         setLoading(true);
         const email = user.email;
         getTipsData(email).then((data) => {
            setDisplayTipsData(data);
            setLoading(false);
         });
      };
      loadData();
      if (reload) {
         loadData();
      }
   }, [setLoading, user, setDisplayTipsData, reload]);

   return (
      <div className="container lg:max-w-6xl mx-auto relative min-h-[calc(100vh-120px)]">
         <div className="mt-6  bg-base-100 p-4 px-8 mb-5 rounded-lg">
            <h1 className="text-3xl font-bold !font-source-serif mb-3 max-w-md">
               Your{" "}
               <span className="text-primary !font-source-serif">Tips</span>
            </h1>
            <p className="text-gray-500 text-sm max-w-4xl">
               Browse your Gardening Tips is your go-to resource for cultivating
               a thriving garden. Whether you're a seasoned gardener or just
               starting, this collection offers expert advice on everything from
               soil preparation and plant care to seasonal maintenance and pest
               control.
            </p>
         </div>
         <div className="bg-base-100 p-4 px-8 rounded-lg">
            <div className="flex items-center mt-5 gap-5 border-l border-gray-400 pl-1.5 mb-3">
               <p className="flex border border-gray-400 rounded-sm px-1 py-0.5">
                  <BsFilterLeft className="text-1xl" />
               </p>
            </div>
            <div className="overflow-x-auto border border-gray-300 rounded-lg">
               <table className="table px-3">
                  <thead>
                     <tr className="bg-base-200">
                        <th className=" lg:text-lg">Image</th>
                        <th className=" lg:text-lg">Title</th>
                        <th className=" lg:text-lg">Category</th>
                        <th className="text-center lg:text-lg hidden lg:flex">
                           Total likes
                        </th>
                        <th className="text-center lg:text-lg">Options</th>
                     </tr>
                  </thead>
                  {
                     <tbody className="gap-2">
                        {loading ? (
                           <tr>
                              <td>
                                 <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                    <LoadingSpinner></LoadingSpinner>
                                 </div>
                              </td>
                           </tr>
                        ) : displayTipsData.length > 0 ? (
                           displayTipsData.map((tip) => (
                              <UserTipsCard
                                 key={tip._id}
                                 tip={tip}
                                 handelDelete={handelDelete}
                                 setReload={setReload}
                              ></UserTipsCard>
                           ))
                        ) : (
                           <tr>
                              <td>
                                 <h1>Tips Not Found</h1>
                              </td>
                           </tr>
                        )}
                     </tbody>
                  }
               </table>
            </div>
         </div>
      </div>
   );
};

export default MyTips;
