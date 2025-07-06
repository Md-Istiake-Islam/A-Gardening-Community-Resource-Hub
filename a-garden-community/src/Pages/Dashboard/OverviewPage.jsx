import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import { motion } from "framer-motion";
import {
   FaUsers,
   FaCheckCircle,
   FaUserCircle,
   FaEnvelope,
   FaRegCalendarCheck,
   FaMapMarkerAlt,
   FaPhone,
} from "react-icons/fa";
import { RiFileList2Line } from "react-icons/ri";
import { MdInventory2 } from "react-icons/md";
import CardBg from "../../assets/card-bg.jpg"; // Assuming you have a background image for cards

const WelcomeCard = () => (
   <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="primary-bg  p-6 rounded-xl shadow-md w-full"
   >
      <h2 className="text-2xl font-bold mb-2">Welcome to Your Dashboard</h2>
      <p className="text-sm lg:text-base ">
         Here you can find an overview of your gardening community activities,
         manage your tips, and see insights into the platform.
      </p>
   </motion.div>
);

const StatusCard = ({ icon: Icon, title, count, color }) => (
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
);

const UserInfoCard = ({ user }) => (
   <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-base-100 p-6 rounded-xl shadow-md w-full h-80 flex flex-col justify-between"
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
         <div className="space-y-1">
            <h2 className="text-xl font-semibold text-base-content flex items-center gap-2">
               <FaUserCircle /> {user?.name || "Anonymous"}
            </h2>
            <p className="text-base-content flex items-center gap-2">
               <FaEnvelope /> {user?.email || "Not provided"}
            </p>
            <p className="text-base-content flex items-center gap-2">
               <FaCheckCircle /> Status: Member
            </p>
         </div>
      </div>
   </motion.div>
);

const TipsTable = ({ tips }) => (
   <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-base-100 p-6 rounded-xl shadow-md w-full lg:col-span-2 overflow-x-auto"
   >
      <h2 className="text-xl font-semibold mb-4">Your Shared Tips</h2>
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
);

const OverviewPage = () => {
   const { user } = useContext(AuthContext);
   const [stats, setStats] = useState({
      gardeners: 0,
      activeGardeners: 0,
      tips: 0,
      myItems: 0,
   });
   const [userData, setUserData] = useState(null);
   const [myTips, setMyTips] = useState([]);

   useEffect(() => {
      const fetchStats = async () => {
         try {
            const [gardenersRes, activeRes, tipsRes, userDataRes, myItemsRes] =
               await Promise.all([
                  axios.get(
                     "https://b11a10-server-side-dev-istiake.vercel.app/allGardeners"
                  ),
                  axios.get(
                     "https://b11a10-server-side-dev-istiake.vercel.app/gardeners"
                  ),
                  axios.get(
                     "https://b11a10-server-side-dev-istiake.vercel.app/publicTips"
                  ),
                  axios.get(
                     `https://b11a10-server-side-dev-istiake.vercel.app/users/${user?.email}`
                  ),
                  axios.get(
                     `https://b11a10-server-side-dev-istiake.vercel.app/userTips/${user?.email}`
                  ),
               ]);
            setStats({
               gardeners: gardenersRes.data.length,
               activeGardeners: activeRes.data.length,
               tips: tipsRes.data.length,
               myItems: myItemsRes.data.length,
            });
            setUserData(userDataRes.data);
            setMyTips(myItemsRes.data);
         } catch (error) {
            console.error("Failed to load dashboard data", error);
         }
      };
      fetchStats();
   }, [user]);

   return (
      <div className="space-y-8">
         <WelcomeCard />
         <h2 className="text-xl font-semibold mb-4">Platform Statistics</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatusCard
               icon={FaUsers}
               title="Total Gardeners"
               count={stats.gardeners}
               color="#22c55e"
            />
            <StatusCard
               icon={FaCheckCircle}
               title="Active Members"
               count={stats.activeGardeners}
               color="#10b981"
            />
            <StatusCard
               icon={RiFileList2Line}
               title="Tips Shared"
               count={stats.tips}
               color="#3b82f6"
            />
            <StatusCard
               icon={MdInventory2}
               title="My Contributions"
               count={stats.myItems}
               color="#f59e0b"
            />
         </div>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
            <TipsTable tips={myTips} />
            <UserInfoCard user={userData} />
         </div>
      </div>
   );
};

export default OverviewPage;
