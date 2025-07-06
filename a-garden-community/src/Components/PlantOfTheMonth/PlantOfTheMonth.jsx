import React, { useContext } from "react";
import Lottie from "lottie-react";
import gardening from "../../assets/Animation/Animation-tree.json";
import workshop from "../../assets/Animation/Animation-Workshop.json";
import community from "../../assets/Animation/Animation-community.json";
import kids from "../../assets/Animation/Animation-youth.json";
import butterfly from "../../assets/Animation/Animation-Pollinator.json";
import harvest from "../../assets/Animation/Animation-Seasonal.json";
import { ThemeContext } from "../ToggleThemeProvider";

const PlantOfTheMonth = () => {
   const { theme } = useContext(ThemeContext);
   const cardStyleDynamic =
      theme === "light" ? "bg-green-100 " : "bg-[#132c23]";
   const sectionStyleDynamic =
      theme === "light" ? "bg-green-50 " : "bg-[#0d1a16] text-gray-300";

   const highlights = [
      {
         title: "Sustainable Gardening",
         description:
            "We promote eco-friendly practices that enrich the soil, conserve water, and support local wildlife.",
         animation: gardening,
      },
      {
         title: "Workshops & Events",
         description:
            "Join hands-on sessions to learn composting, seed starting, and seasonal planting techniques.",
         animation: workshop,
      },
      {
         title: "Community Connection",
         description:
            "Grow friendships as well as food. Our garden is a place to gather, share, and support each other.",
         animation: community,
      },
      {
         title: "Youth Programs",
         description:
            "Engaging activities for children and teens to learn about nature, food, and teamwork in the garden.",
         animation: kids,
      },
      {
         title: "Pollinator Habitat",
         description:
            "We create safe spaces for bees, butterflies, and other pollinators that are vital to our ecosystem.",
         animation: butterfly,
      },
      {
         title: "Seasonal Harvests",
         description:
            "Celebrate the bounty of the seasons with shared harvests, fresh produce, and community meals.",
         animation: harvest,
      },
   ];

   return (
      <section className={`py-12 ${sectionStyleDynamic}`}>
         <div className="container 2xl:max-w-6xl mx-auto px-4">
            <h1 className="text-[28px] font-bold !font-source-serif mb-10 pb-4 border-b border-dashed border-green-600  max-w-96 ">
               Community{" "}
               <span className="text-primary !font-source-serif">
                  Highlights
               </span>
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {highlights.map((item, index) => (
                  <div
                     key={index}
                     className={`${cardStyleDynamic} rounded-md shadow-md pb-5 text-center hover:shadow-lg transition duration-300 px-8`}
                  >
                     <Lottie
                        animationData={item.animation}
                        loop
                        className="w-24 h-24 mx-auto mb-2"
                     />
                     <h3 className="text-2xl font-semibold mb-2 !font-source-serif">
                        {item.title}
                     </h3>
                     <p className="!font-open-sans text-sm leading-7">
                        {item.description}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default PlantOfTheMonth;
