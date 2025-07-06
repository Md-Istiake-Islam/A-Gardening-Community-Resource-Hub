import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { TiDocumentAdd } from "react-icons/ti";
import { RiAlignItemBottomFill } from "react-icons/ri";
import { NavLink } from "react-router";

const Sidebar = () => {
   return (
      <aside className="w-64 h-full bg-base-100 border-r border-base-300 p-4 hidden lg:block">
         <nav className="flex flex-col gap-4">
            <NavLink to="." end className="btn btn-ghost justify-start gap-2">
               <LuLayoutDashboard className="text-lg" />
               Overview
            </NavLink>
            <NavLink
               to="./all-tips"
               className="btn btn-ghost justify-start gap-2"
            >
               <TiDocumentAdd className="text-lg" />
               All Tips
            </NavLink>
            <NavLink
               to="./share-a-tip"
               className="btn btn-ghost justify-start gap-2"
            >
               <TiDocumentAdd className="text-lg" />
               Share a Tip
            </NavLink>
            <NavLink
               to="./my-tips"
               className="btn btn-ghost justify-start gap-2"
            >
               <RiAlignItemBottomFill className="text-lg" />
               My Items
            </NavLink>
         </nav>
      </aside>
   );
};

export default Sidebar;
