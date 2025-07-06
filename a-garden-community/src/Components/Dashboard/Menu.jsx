import React from "react";
import { NavLink } from "react-router";
import { LuLayoutDashboard } from "react-icons/lu";
import { TiDocumentAdd } from "react-icons/ti";
import { RiAlignItemBottomFill } from "react-icons/ri";

const Menu = () => {
   return (
      <div className="dropdown ">
         <div tabIndex={0} role="button" className="btn m-1">
            <svg
               stroke="currentColor"
               fill="currentColor"
               strokeWidth="0"
               viewBox="0 0 16 16"
               aria-hidden="true"
               focusable="false"
               height="1em"
               width="1em"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h8A1.5 1.5 0 0 1 11 1.5v2A1.5 1.5 0 0 1 9.5 5h-8A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"></path>
               <path d="m7.823 2.823-.396-.396A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"></path>
            </svg>
         </div>
         <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52  shadow-sm px-6 py-4"
         >
            <li>
               <NavLink
                  to="."
                  end
                  className="btn btn-ghost justify-start gap-2"
               >
                  <LuLayoutDashboard className="text-lg" />
                  Overview
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="./all-tips"
                  className="btn btn-ghost justify-start gap-2"
               >
                  <TiDocumentAdd className="text-lg" />
                  All Tips
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="/dashboard/share-a-tip"
                  className="btn btn-ghost justify-start gap-2"
               >
                  <TiDocumentAdd className="text-lg" />
                  Share a Tip
               </NavLink>
            </li>
            <li>
               <NavLink
                  to="./my-tips"
                  className="btn btn-ghost justify-start gap-2"
               >
                  <RiAlignItemBottomFill className="text-lg" />
                  My Items
               </NavLink>
            </li>
         </ul>
      </div>
   );
};

export default Menu;
