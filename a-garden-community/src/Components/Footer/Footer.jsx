import React, { useContext, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { GrLinkedinOption } from "react-icons/gr";
import { ThemeContext } from "../ToggleThemeProvider";
import { FaGooglePlusG } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, NavLink } from "react-router";
import { MdPhoneMissed } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineWrongLocation } from "react-icons/md";

const Footer = () => {
   const { user } = useContext(AuthContext);
   const { theme } = useContext(ThemeContext);
   const [openPrivacy, setOpenPrivacy] = useState(false);
   const [openTerms, setOpenTerms] = useState(false);

   const links = (
      <>
         <li className="text-white  hover:text-green-400 rounded-lg">
            <Link className="hover:bg-transparent p-0" to={"/"}>
               <p className="text-sm xl:text-sm !font-source-serif font-light mb-1.5">
                  {" "}
                  Home
               </p>
            </Link>
         </li>
         <li className="text-white  hover:text-green-400  rounded-lg">
            <Link
               className="hover:bg-transparent p-0"
               to={"./explore-gardeners"}
            >
               <p className="text-sm xl:text-sm !font-source-serif font-light mb-1.5">
                  Explore Gardeners
               </p>
            </Link>
         </li>
         <li className="text-white hover:text-green-400  rounded-lg">
            <Link className="hover:bg-transparent p-0" to={"./browse-tips"}>
               <p className="text-sm xl:text-sm !font-source-serif font-light mb-1.5">
                  Browse Tips
               </p>
            </Link>
         </li>
      </>
   );

   const sectionStyleDynamic =
      theme === "light" ? "bg-stone-800" : "bg-[#101512] !text-gray-200";

   return (
      <div className={`w-full ${sectionStyleDynamic}`}>
         <div className="">
            <footer className="footer sm:footer-horizontal p-10 text-base-300 container mx-auto lg:max-w-[1200px] px-3">
               <nav>
                  <h6 className="text-1xl font-semibold mb-3 text-gray-100">
                     About us
                  </h6>
                  <p className="max-w-46 text-sm font-open-sans leading-6 text-gray-300">
                     At the heart of our Garden Community lies a shared passion
                     for plants, people, and the planet.
                  </p>
                  <nav className="md:place-self-start mt-3">
                     <div className="mb-3">
                        <ul className="grid grid-flow-col  text-3xl gap-3">
                           <li>
                              <a href="http://www.facebook.com" target="blank">
                                 <CiFacebook
                                    style={{
                                       borderRadius: "50%",
                                       border: "1px solid white",
                                       padding: "",
                                       color: "white",
                                       fontSize: "28px",
                                    }}
                                 />
                              </a>
                           </li>
                           <li>
                              <a
                                 href="https://x.com/home?lang=en"
                                 target="blank"
                              >
                                 <FaXTwitter
                                    style={{
                                       borderRadius: "50%",
                                       border: "1px solid white",
                                       padding: "4px",
                                       color: "white",
                                       fontSize: "28px",
                                    }}
                                 />
                              </a>
                           </li>
                           <li>
                              <a
                                 href="https://www.linkedin.com/"
                                 target="blank"
                              >
                                 <GrLinkedinOption
                                    style={{
                                       borderRadius: "50%",
                                       border: "1px solid white",
                                       padding: "4px",
                                       color: "white",
                                       fontSize: "28px",
                                    }}
                                 />
                              </a>
                           </li>
                           <li>
                              <a
                                 href="https://myaccount.google.com/"
                                 target="blank"
                              >
                                 <FaGooglePlusG
                                    style={{
                                       borderRadius: "50%",
                                       border: "1px solid white",
                                       padding: "4px",
                                       color: "white",
                                       fontSize: "28px",
                                    }}
                                 />
                              </a>
                           </li>
                        </ul>
                     </div>
                  </nav>
               </nav>

               <nav>
                  <h6 className="text-1xl font-semibold mb-2 text-gray-100">
                     Legal
                  </h6>

                  <button
                     className="text-sm xl:text-sm !font-source-serif font-light text-gray-300"
                     onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                     }
                  >
                     Terms of Use
                  </button>
                  <button
                     className="text-sm xl:text-sm !font-source-serif font-light text-gray-300"
                     onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                     }
                  >
                     Privacy Policy
                  </button>
               </nav>
               <nav>
                  <h1 className="text-1xl font-semibold mb-1 text-gray-100">
                     Quick Links
                  </h1>
                  <ul className="menu menu-horizontal flex flex-col items-start p-0">
                     {links}
                  </ul>
               </nav>
               <nav>
                  <h6 className="text-1xl font-semibold mb-2 text-gray-100">
                     Quick contact
                  </h6>
                  <a className="text-sm xl:text-sm !font-source-serif font-light flex items-center gap-2 text-gray-300">
                     <MdOutlineWrongLocation />
                     10/2 Mohakahli, Dhaka, Bangladesh
                  </a>
                  <a className="text-sm xl:text-sm !font-source-serif font-light flex items-center gap-2 text-gray-300">
                     <MdPhoneMissed />
                     +880 017231038456
                  </a>
                  <a className="text-sm xl:text-sm !font-source-serif font-light flex items-center gap-2 text-gray-300">
                     <TfiEmail />
                     Email: garden.community@gmail.com
                  </a>
               </nav>
            </footer>
            <div className="border-gray-700 border-t ">
               <footer className="container mx-auto footer text-base-300 px-3 py-4 gap-5 lg:gap-0 lg:max-w-[1200px]">
                  <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                     <div className="flex items-center">
                        <img src={logo} alt="" className="w-12" />
                        <h2 className="text-lg font-semibold tracking-wide text-primary">
                           Garden Community
                        </h2>
                     </div>

                     <div className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-right flex items-center">
                        <p>© {new Date().getFullYear()} All rights reserved.</p>
                        <p>Built with 🌱 by Plant Lovers</p>
                     </div>
                  </div>
               </footer>
            </div>
         </div>

         <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
               <p>
                  Welcome to Garden Community. By accessing and using this
                  website, you agree to the following terms:
               </p>
               <ul className="list-disc pl-5">
                  <li>
                     You must be at least 13 years old to use this platform.
                  </li>
                  <li>
                     You agree to share original and respectful content only.
                  </li>
                  <li>
                     We reserve the right to remove any content that violates
                     our guidelines.
                  </li>
                  <li>
                     Your account may be suspended for misuse, spam, or abusive
                     behavior.
                  </li>
                  <li>
                     All shared tips and content remain the intellectual
                     property of their creators.
                  </li>
               </ul>
               <div className="modal-action">
                  <form method="dialog">
                     {/* if there is a button in form, it will close the modal */}
                     <button className="btn">Close</button>
                  </form>
               </div>
            </div>
         </dialog>
         <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
               <p>
                  Your privacy is important to us. This policy outlines how we
                  handle your data:
               </p>
               <ul className="list-disc pl-5">
                  <li>
                     We collect your name and email for account and
                     communication purposes.
                  </li>
                  <li>Your data is never sold or shared with third parties.</li>
                  <li>
                     We use cookies to improve site performance and user
                     experience.
                  </li>
                  <li>
                     You can request data removal by contacting
                     support@gardencommunity.com.
                  </li>
                  <li>
                     Security measures are in place to protect your information.
                  </li>
               </ul>
               <div className="modal-action">
                  <form method="dialog">
                     {/* if there is a button in form, it will close the modal */}
                     <button className="btn">Close</button>
                  </form>
               </div>
            </div>
         </dialog>
      </div>
   );
};

export default Footer;
