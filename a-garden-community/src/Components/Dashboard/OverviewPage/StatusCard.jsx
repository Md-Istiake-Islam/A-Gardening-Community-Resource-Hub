import React from "react";
import { motion } from "framer-motion";

const StatusCard = ({ icon: Icon, title, count, color }) => {
   return (
      <div>
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center bg-base-100 rounded-xl p-6 shadow-md w-full text-center border-t-4"
            style={{ borderTopColor: color }}
         >
            <Icon className={"text-3xl mb-2 text-primary"} />
            <h2 className="text-lg font-semibold text-base-content">{title}</h2>
            <p className="text-2xl font-bold text-gray-800">{count}</p>
         </motion.div>
      </div>
   );
};

export default StatusCard;
