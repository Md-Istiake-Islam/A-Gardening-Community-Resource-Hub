import React from "react";
import Navbar from "../Components/Header/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

const RootLayout = () => {
   return (
      <div>
         <section>
            <Navbar></Navbar>
         </section>
         <section>
            <Outlet></Outlet>
         </section>
         <section>
            <Footer></Footer>
         </section>
      </div>
   );
};

export default RootLayout;
