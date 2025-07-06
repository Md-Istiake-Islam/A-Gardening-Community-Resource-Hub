import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../ToggleThemeProvider";

const WelcomeCard = () => {
   const { theme } = useContext(ThemeContext);
   return (
      <div>
         <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`${
               theme === "light" ? "bg-[#c1e7d9]" : "bg-[#1b4133b4]"
            } p-6 rounded-xl shadow-md w-full`}
         >
            <h2
               className={`${
                  theme === "light" ? "text-neutral-700" : "text-neutral-200"
               } text-2xl font-bold mb-2`}
            >
               Welcome to Your Dashboard
            </h2>
            <p
               className={`${
                  theme === "light" ? "text-neutral-600" : "text-neutral-300"
               } text-sm lg:text-base`}
            >
               Here you can find an overview of your gardening community
               activities, manage your tips, and see insights into the platform.
            </p>
         </motion.div>
      </div>
   );
};

export default WelcomeCard;
