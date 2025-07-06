import React, { useContext, useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import Logo from "../../assets/logo.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { ThemeContext } from "../ToggleThemeProvider";
import { FaUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { LuLayoutDashboard } from "react-icons/lu";
import { TiDocumentAdd } from "react-icons/ti";
import { RiAlignItemBottomFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const isDashboardPage = location.pathname.startsWith("/dashboard");

   const { user, logOut } = useContext(AuthContext);
   const { toggleTheme } = useContext(ThemeContext);

   const [currentUser, setCurrentUser] = useState(null);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

   // Close the dropdown when clicking outside of it
   const dropdownRef = useRef(null);

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
         ) {
            setIsDropdownOpen(false);
         }
      };

      if (isDropdownOpen) {
         document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [isDropdownOpen]);

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
               to={`${
                  isDashboardPage
                     ? "./../explore-gardeners"
                     : "./explore-gardeners"
               }`}
            >
               <p className="text-sm xl:text-base">Explore Gardeners</p>
            </NavLink>
         </li>
         <li className="text-white font-semibold hover:text-green-400  rounded-lg">
            <NavLink
               className="hover:bg-transparent"
               to={`${isDashboardPage ? "./../browse-tips" : "./browse-tips"}`}
            >
               <p className="text-sm xl:text-base">Browse Tips</p>
            </NavLink>
         </li>
         <li className="text-white font-semibold hover:text-green-400  rounded-lg">
            <NavLink
               className="hover:bg-transparent"
               to={`${isDashboardPage ? "./../about-us" : "./about-us"}`}
            >
               <p className="text-sm xl:text-base">About us</p>
            </NavLink>
         </li>
         <li className="text-white font-semibold hover:text-green-400  rounded-lg">
            <NavLink
               className="hover:bg-transparent"
               to={`${isDashboardPage ? "./../contact-us" : "./contact-us"}`}
            >
               <p className="text-sm xl:text-base">Contact</p>
            </NavLink>
         </li>
      </>
   );

   const dpdNavLinks = (
      <>
         <li className="!px-2 active:bg-primary">
            <NavLink
               to={`${isDashboardPage ? "./../dashboard" : "./dashboard"}`}
               className={"!font-source-serif4 mb-1 gap-3 hover:text-primary"}
            >
               <LuLayoutDashboard className="text-xl" />
               Dashboard
            </NavLink>
         </li>
         <li className="!px-2">
            <NavLink
               to={`${
                  isDashboardPage
                     ? "./../share-a-garden-tip"
                     : "./share-a-garden-tip"
               }`}
               className={"!font-source-serif4 mb-1 gap-3 hover:text-primary"}
            >
               <TiDocumentAdd className="text-xl" />
               Share a Garden Tip
            </NavLink>
         </li>
         <li className="!px-2 border-b border-primary pb-2 mb-2 gap-3 hover:text-primary">
            <NavLink
               to={`${isDashboardPage ? "./../my-tips" : "./my-tips"}`}
               className={"!font-source-serif4  "}
            >
               <RiAlignItemBottomFill className="text-xl" />
               Manage My Items
            </NavLink>
         </li>
      </>
   );

   return (
      <div className="bg-[#0B1306] ">
         <div className="container mx-auto navbar justify-between py-2">
            <div className="flex items-center justify-start ">
               <div className="dropdown">
                  <div
                     tabIndex={0}
                     role="button"
                     className="btn btn-ghost lg:hidden shadow-none"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
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
                  <div className="flex">
                     {user ? (
                        <div className="relative z-20" ref={dropdownRef}>
                           <div
                              className="btn btn-ghost btn-circle avatar w-10 lg:w-13"
                              role="button"
                              onClick={() => setIsDropdownOpen((prev) => !prev)}
                           >
                              <div className=" rounded-full ring-2 ring-[#545f72]">
                                 <img
                                    src={currentUser && currentUser.photo}
                                    alt="user_image"
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content={
                                       currentUser && currentUser.name
                                    }
                                 />
                              </div>
                           </div>
                           <Tooltip id="my-tooltip" className="z-50 text-sm" />

                           <AnimatePresence>
                              {isDropdownOpen && (
                                 <motion.div
                                    initial={{ opacity: 0, scaleY: 0 }}
                                    animate={{ opacity: 1, scaleY: 1 }}
                                    exit={{ opacity: 0, scaleY: 0 }}
                                    transition={{
                                       duration: 0.5,
                                       ease: "easeInOut",
                                       type: "spring",
                                       stiffness: 200,
                                       damping: 20,
                                    }}
                                    className="menu menu-md absolute right-0 bg-base-100 rounded-box mt-3 min-w-96 p-0 pb-2 shadow font-medium top-[62px] border-primary border border-t-0 origin-top"
                                    style={{
                                       transformOrigin: "top",
                                       overflow: "hidden",
                                       display: "block",
                                    }}
                                 >
                                    <ul>
                                       <li className="!px-2 border-b border-primary mb-4 py-1">
                                          <div className="flex items-center gap-4 justify-between">
                                             <h1 className="text-lg font-semibold text-primary flex gap-2">
                                                <FaUser className="text-xl" />
                                                {currentUser?.name}
                                             </h1>
                                             <button className="btn bg-primary rounded-md text-white text-xs">
                                                Update to plus
                                             </button>
                                          </div>
                                       </li>
                                       {dpdNavLinks}
                                       <li className="!px-2">
                                          <button
                                             onClick={handelLogout}
                                             className="text-red-600"
                                          >
                                             <CiLogout className="text-xl font-bold" />
                                             Log out
                                          </button>
                                       </li>
                                    </ul>
                                 </motion.div>
                              )}
                           </AnimatePresence>
                        </div>
                     ) : (
                        <button
                           onClick={() => {
                              navigate("./login");
                           }}
                           className="btn px-4 lg:px-10 text-base border border-green-700 bg-transparent shadow-sm text-green-500 rounded-xl hover:bg-green-700 hover:text-white"
                        >
                           Login
                        </button>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
