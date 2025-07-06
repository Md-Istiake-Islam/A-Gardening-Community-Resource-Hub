import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaUsers, FaCheckCircle } from "react-icons/fa";
import { RiFileList2Line } from "react-icons/ri";
import { MdInventory2 } from "react-icons/md";
// Assuming you have a background image for cards
import WelcomeCard from "../../Components/Dashboard/OverviewPage/WelcomeCard";
import StatusCard from "../../Components/Dashboard/OverviewPage/StatusCard";
import UserInfoCard from "../../Components/Dashboard/OverviewPage/UserInfoCard";
import TipsTable from "../../Components/Dashboard/OverviewPage/TipsTable";
import LoadingSpinner from "../../Components/LoadingSpinner";

const OverviewPage = () => {
   const { user } = useContext(AuthContext);
   const [stats, setStats] = useState({
      gardeners: 0,
      activeGardeners: 0,
      tips: 0,
      myItems: 0,
   });
   const [loading, setLoading] = useState(false);
   const [userData, setUserData] = useState(null);
   const [myTips, setMyTips] = useState([]);

   useEffect(() => {
      const fetchStats = async () => {
         try {
            setLoading(true);
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
            setLoading(false);
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
         {loading && (
            <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
               <LoadingSpinner></LoadingSpinner>
            </div>
         )}
      </div>
   );
};

export default OverviewPage;
