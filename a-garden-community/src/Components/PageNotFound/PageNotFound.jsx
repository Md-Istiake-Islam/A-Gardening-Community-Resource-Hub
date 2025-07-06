import React from "react";
import PageNotFoundImg from "../../assets/page-found-error-404-landing.webp";
import { useNavigate } from "react-router";

const PageNotFound = () => {
   const navigate = useNavigate();

   return (
      <div className="mx-auto bg-base-200 min-h-screen rounded-2xl flex flex-col items-center justify-center p-15 gap-6">
         <div className="max-w-2xl  border border-blue-400 rounded-2xl overflow-hidden ">
            <img className="" src={PageNotFoundImg} alt="" />
         </div>
         <div className="flex flex-col items-center ">
            <h1 className="text-red-500 text-3xl font-extrabold mb-3">
               404 - Page Not Found
            </h1>
            <p className="text-base text-gray-500 mb-5">
               Opps! Page you are looking for doesn't exist
            </p>
            <p className="mt-2 text-base text-gray-500 dark:text-gray-400 max-w-md mx-auto text-center mb-5">
               The page you're looking for might have been removed, renamed, or
               doesn't exist.
            </p>
            <button
               onClick={() => navigate("/")}
               className="btn bg-green-500 text-white rounded-3xl px-6"
            >
               {" "}
               Back to Home
            </button>
         </div>
      </div>
   );
};

export default PageNotFound;
