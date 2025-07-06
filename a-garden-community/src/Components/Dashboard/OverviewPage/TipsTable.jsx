import React from "react";
import { motion } from "framer-motion";

const TipsTable = ({ tips }) => {
   return (
      <div className="bg-base-100 w-full lg:col-span-2">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className=" p-6 rounded-xl shadow-md w-full overflow-x-auto"
         >
            <h2 className="text-xl font-semibold mb-4">Your Tips</h2>
            <table className="table w-full">
               <thead>
                  <tr>
                     <th>Image</th>
                     <th>Title</th>
                     <th className="hidden xl:table-cell">Category</th>
                     <th>Publish Date</th>
                  </tr>
               </thead>
               <tbody>
                  {tips.map((tip) => (
                     <tr key={tip._id}>
                        <td>
                           <img
                              src={tip.images_url}
                              alt={tip.title}
                              className="w-16 h-16 rounded object-cover"
                           />
                        </td>
                        <td>{tip.title}</td>
                        <td className="hidden xl:table-cell">{tip.category}</td>
                        <td>{tip.created_at || "N/A"}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </motion.div>
      </div>
   );
};

export default TipsTable;
