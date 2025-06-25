import React, { useContext } from "react";
import LeafImg from "../assets/leaf.png";
import { MdTipsAndUpdates } from "react-icons/md";
import { MdEmojiEvents } from "react-icons/md";
import { GiCottonFlower } from "react-icons/gi";
import { ThemeContext } from "./ToggleThemeProvider";

const WelcomeToHub = () => {
   const { theme } = useContext(ThemeContext);

   const cardStyleDynamic =
      theme === "light"
         ? "ring-stone-100 before:bg-primary "
         : "ring-stone-600 before:bg-green-900 ";

   const cardStyleFixed =
      "relative rounded-sm ring z-1 shadow-lg before:absolute before:top-0 before:left-0 before:content-[''] before:z-1 before:w-full before:h-full before:scale-0 hover:before:scale-100 before:origin-top before:duration-150";

   return (
      <div className="container bg-base-100 mx-auto text-center pt-10 flex flex-col items-center justify-center px-5 lg:px-0">
         <div className="flex items-center flex-col gap-6 mb-6">
            <h1 className="text-[32px] lg:text-4xl font-bold !font-source-serif">
               Welcome To{" "}
               <span className="text-primary !font-source-serif">
                  our Garden Community
               </span>
            </h1>
            <div className="border-b border-dashed border-green-600 min-w-40 flex justify-center">
               <img src={LeafImg} alt="" className="w-6 " />
            </div>
         </div>
         <p className="max-w-4xl text-secondary-content !font-roboto-serif font-light tracking-wide px-6 lg:px-0 text-xs md:text-sm lg:text-base">
            A thriving space where nature lovers, gardening enthusiasts, and
            eco-conscious individuals come together to grow, share, and
            cultivate greener connections. Whether you're a seasoned gardener or
            just starting.
         </p>
         <div className="grid grid-cols-1 lg:grid-cols-3 max-w-6xl mt-16 gap-7 mb-10">
            <div className={` ${cardStyleDynamic} ${cardStyleFixed}`}>
               <div className="relative px-6 py-10 z-10 group">
                  <div className=" flex justify-center w-full mb-3 ">
                     <MdTipsAndUpdates className="text-3xl text-primary group-hover:text-white" />
                  </div>

                  <h1 className="text-xl mb-2 font-semibold !font-open-sans group-hover:text-white">
                     Learn from Experts
                  </h1>
                  <p className="text-sm font-normal leading-7 !font-open-sans text-secondary-content group-hover:text-white">
                     Stay updated with seasonal tips, soil hacks, and plant
                     care.
                  </p>
               </div>
            </div>
            <div className={` ${cardStyleDynamic} ${cardStyleFixed}`}>
               <div className="relative px-6 py-10 z-10 group">
                  <div className="flex justify-center w-full mb-3 ">
                     <MdEmojiEvents className="text-3xl text-primary group-hover:text-white" />
                  </div>
                  <h1 className="text-xl mb-2 font-semibold !font-open-sans group-hover:text-white">
                     Join & Grow Together
                  </h1>
                  <p className="text-sm font-normal leading-7 !font-open-sans text-secondary-content group-hover:text-white">
                     Participate in local gardening meetups, workshops, and
                     plant.
                  </p>
               </div>
            </div>
            <div className={` ${cardStyleDynamic} ${cardStyleFixed}`}>
               <div className="relative px-6 py-10 z-10 group">
                  <div className="flex justify-center w-full mb-3 ">
                     <GiCottonFlower className="text-3xl text-primary group-hover:text-white" />
                  </div>
                  <h1 className="text-xl mb-2 font-semibold !font-open-sans group-hover:text-white">
                     Inspire Others
                  </h1>
                  <p className="text-sm font-normal leading-7 !font-open-sans text-secondary-content group-hover:text-white">
                     Share photos and stories of your garden, get featured.
                  </p>
               </div>
            </div>
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-12 max-w-6xl">
            <div className="col-span-6 flex flex-col items-center min-h-full justify-center">
               <div className="text-start mb-7 ">
                  <h1 className="text-2xl font-semibold mb-2 !font-source-serif">
                     Our Vision
                  </h1>
                  <p className="!font-open-sans text-sm leading-7 text-secondary-content">
                     At the heart of our garden community lies a shared dream:
                     to cultivate a thriving, sustainable space where nature and
                     people grow together. We envision a vibrant, green
                     sanctuary that fosters connection, learning, and well-being
                     for all.
                  </p>
               </div>
               <div className="text-start">
                  <h1 className="text-2xl font-semibold mb-2 !font-source-serif">
                     Our Mission
                  </h1>
                  <p className="!font-open-sans text-sm leading-7 text-secondary-content">
                     Our mission is to create and nurture a welcoming green
                     space where individuals of all ages and backgrounds can
                     come together to grow food, share knowledge, and build
                     lasting connections. We are dedicated to promoting
                     sustainability, environmental education, and community
                     resilience through hands-on gardening events.
                  </p>
                  <p className="!font-open-sans text-sm leading-7 mt-4 text-secondary-content">
                     Our mission is to cultivate a flourishing green space where
                     community and education grow hand in hand. We are committed
                     to transforming our shared environment into a vibrant hub.
                  </p>
               </div>
            </div>
            <div className="col-span-6">
               <img src="leap-tree.webp" alt="" />
            </div>
         </div>
      </div>
   );
};

export default WelcomeToHub;
