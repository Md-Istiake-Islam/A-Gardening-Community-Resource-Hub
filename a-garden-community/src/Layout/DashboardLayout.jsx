import React from "react";
import Sidebar from "../Components/Dashboard/Sidebar";
import { Outlet } from "react-router";
import Navbar from "../Components/Header/Navbar";
import Menu from "../Components/Dashboard/Menu";

const DashboardLayout = () => {
   return (
      <div>
         <section className="sticky w-full z-18 top-0">
            <Navbar></Navbar>
         </section>
         <div className="flex h-[calc(100vh-98px)] bg-base-200">
            <Sidebar />
            <main className="flex-1 p-5 overflow-y-auto">
               <div className="flex lg:hidden mb-2">
                  <Menu />
               </div>
               <Outlet />
            </main>
         </div>
      </div>
   );
};

export default DashboardLayout;
