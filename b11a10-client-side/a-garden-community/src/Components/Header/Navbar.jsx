import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import Logo from "../../assets/logo.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { ThemeContext } from "../ToggleThemeProvider";

const Navbar = () => {
   const navigate = useNavigate();
   const { user, logOut } = useContext(AuthContext);
   const { toggleTheme } = useContext(ThemeContext);

   const [currentUser, setCurrentUser] = useState(null);

   useEffect(() => {
      const email = user ? user.email : null;
      if (user) {
         fetch(
            `https://b11a10-server-side-dev-istiake.vercel.app/users/${email}`
         )
            .then((res) => res.json())
            .then((data) => {
               if (data) {
                  setCurrentUser(data);
               }
            });
      }
   }, [user]);

   const handelLogout = () => {
      logOut()
         .then(() => {
            toast.success("logout successfully");
         })
         .catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage);
         });
   };
   const links = (
      <>
         <li className="text-white font-semibold hover:text-green-400 rounded-lg">
            <NavLink className="hover:bg-transparent" to={"/"}>
               <p className="text-sm xl:text-base"> Home</p>
            </NavLink>
         </li>
         <li className="text-white font-semibold hover:text-green-400  rounded-lg">
            <NavLink
               className="hover:bg-transparent"
               to={"./explore-gardeners"}
            >
               <p className="text-sm xl:text-base">Explore Gardeners</p>
            </NavLink>
         </li>
         <li className="text-white font-semibold hover:text-green-400  rounded-lg">
            <NavLink className="hover:bg-transparent" to={"./browse-tips"}>
               <p className="text-sm xl:text-base">Browse Tips</p>
            </NavLink>
         </li>
      </>
   );

   const privateLinks = (
      <>
         <li className="text-white font-semibold hover:text-green-400  rounded-lg">
            <NavLink
               className="hover:bg-transparent"
               to={"./share-a-garden-tip"}
            >
               <p className="text-sm xl:text-base">Share a Garden Tip</p>
            </NavLink>
         </li>
         <li className="text-white font-semibold hover:text-green-400  rounded-lg">
            <NavLink className="hover:bg-transparent" to={"./my-tips"}>
               <p className="text-sm xl:text-base">My Tips</p>
            </NavLink>
         </li>
      </>
   );

   return (
      <div className="bg-gray-800 ">
         <div className="container mx-auto navbar justify-between py-2">
            <div className="flex items-center justify-start ">
               <div className="dropdown">
                  <div
                     tabIndex={0}
                     role="button"
                     className="btn bg-transparent lg:hidden shadow-none"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                     >
                        {" "}
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h8m-8 6h16"
                        />{" "}
                     </svg>
                  </div>
                  <div>
                     <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-700 rounded-box z-1 mt-3 w-52 p-2 shadow text-gray-900 gap-6"
                     >
                        {links}
                        {privateLinks}
                     </ul>
                  </div>
               </div>
               <Link className="hidden lg:block" to={"/"}>
                  <div className="max-w-30 max-h-max py-2">
                     <img src={Logo} alt="" />
                  </div>
               </Link>
            </div>
            <div className="h-full">
               <div className=" gap-3 lg:gap-4  items-center justify-end flex">
                  <ul className="menu menu-horizontal px-1 gap-5 hidden lg:flex items-center">
                     {links}
                     {user ? privateLinks : ""}

                     <li>
                        <div className="flex-none">
                           <label className="swap swap-rotate">
                              {/* this hidden checkbox controls the state */}
                              <input
                                 type="checkbox"
                                 onChange={toggleTheme}
                                 className="theme-controller"
                                 value="synthwave"
                              />
                              {/* sun icon */}
                              <svg
                                 className="swap-off h-10 w-10 fill-gray-200"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 28 24"
                              >
                                 <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                              </svg>

                              {/* moon icon */}
                              <svg
                                 className="swap-on h-10 w-10 fill-gray-300"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 28 24"
                              >
                                 <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                              </svg>
                           </label>
                        </div>
                     </li>
                  </ul>
                  <div>
                     {user ? (
                        <div className="dropdown dropdown-start">
                           <div
                              tabIndex={0}
                              className="aspect-[16/14]"
                              role="button"
                           >
                              <img
                                 className="max-w-12 lg:max-w-14 h-full rounded-full"
                                 src={currentUser && currentUser.photo}
                                 alt="user_image"
                                 data-tooltip-id="my-tooltip"
                                 data-tooltip-content={
                                    currentUser && currentUser.name
                                 }
                              />
                           </div>
                           <Tooltip id="my-tooltip" className="z-50 text-sm" />
                           <ul
                              tabIndex={0}
                              className="dropdown-content menu rounded-box z-1 w-max p-2  -left-7 top-13"
                           >
                              <li>
                                 <button
                                    onClick={() => {
                                       handelLogout();
                                    }}
                                    className=" py-2 px-6 text-xs shadow-sm rounded-md bg-green-700 text-white border-none hover:bg-green-800"
                                 >
                                    Log out
                                 </button>
                              </li>
                           </ul>
                        </div>
                     ) : (
                        ""
                     )}
                  </div>
                  <div>
                     {!user ? (
                        <button
                           onClick={() => {
                              navigate("./login");
                           }}
                           className="btn px-4 lg:px-10 text-base border border-green-700 bg-transparent shadow-sm text-green-500 rounded-xl hover:bg-green-700 hover:text-white"
                        >
                           Login
                        </button>
                     ) : (
                        ""
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
