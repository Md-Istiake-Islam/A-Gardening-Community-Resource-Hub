import React from "react";
import { motion } from "framer-motion";
import CardBg from "../../../assets/card-bg.jpg";
import { FaCheckCircle, FaUserCircle, FaEnvelope } from "react-icons/fa";

const UserInfoCard = ({ user }) => {
   return (
      <div className="w-full bg-white rounded-xl">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className=" p-6 rounded-xl shadow-md w-full h-80 flex flex-col justify-between"
            style={{
               backgroundImage: `url(${CardBg})`,
               backgroundSize: "cover",
               backgroundPosition: "center",
            }}
         >
            <div className="flex flex-col items-start gap-6">
               <img
                  src={user?.photo || "/default-avatar.png"}
                  alt="User Avatar"
                  className="w-24 h-24 rounded-full border border-base-300"
               />
               <div className="space-y-1 ">
                  <h2 className="text-xl font-semibold flex items-center gap-2 text-neutral-900">
                     <FaUserCircle /> {user?.name || "Anonymous"}
                  </h2>
                  <p className="text-neutral-900 flex items-center gap-2">
                     <FaEnvelope /> {user?.email || "Not provided"}
                  </p>
                  <p className="text-neutral-900 flex items-center gap-2">
                     <FaCheckCircle /> Status: Member
                  </p>
               </div>
            </div>
         </motion.div>
      </div>
   );
};

export default UserInfoCard;
