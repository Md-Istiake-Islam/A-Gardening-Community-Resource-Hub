import React, { Suspense } from "react";
import Banner from "../Components/Banner/Banner";
import { useLoaderData } from "react-router";
import FeaturedGardeners from "../Components/FeaturedGardeners/FeaturedGardeners";
import WelcomeToHub from "../Components/WelcomeToHub";
import LoadingSpinner from "../Components/LoadingSpinner";
import TopTrendingTips from "../Components/TopTrendingTips/TopTrendingTips";
import homeBG from "../assets/home1-bg.jpg";
import PlantOfTheMonth from "../Components/PlantOfTheMonth/PlantOfTheMonth";

const getFeaturedGardenersPromise = async () => {
   const res = await fetch(
      "https://b11a10-server-side-dev-istiake.vercel.app/gardeners"
   );
   return res.json();
};

const getTopTrendingTipsPromise = async () => {
   const res = await fetch(
      "https://b11a10-server-side-dev-istiake.vercel.app/topTips/8"
   );
   return res.json();
};

const Home = () => {
   // Get promise data from the server
   const FeaturedGardenersPromise = getFeaturedGardenersPromise();
   const TopTrendingTipsPromise = getTopTrendingTipsPromise();

   // Get events data from the loader
   const eventsData = useLoaderData();

   return (
      <div>
         <section className="mb-8 flex">
            <Banner eventsData={eventsData}></Banner>
         </section>
         <section className="mt-6">
            <WelcomeToHub></WelcomeToHub>
         </section>
         <section className="bg-base-200 py-14">
            <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
               <FeaturedGardeners
                  FeaturedGardenersPromise={FeaturedGardenersPromise}
               ></FeaturedGardeners>
            </Suspense>
         </section>
         <section
            style={{ backgroundImage: `url(${homeBG})` }}
            className="py-14 bg-base-100"
         >
            <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
               <TopTrendingTips
                  TopTrendingTipsPromise={TopTrendingTipsPromise}
               ></TopTrendingTips>
            </Suspense>
         </section>
         <section>
            <PlantOfTheMonth></PlantOfTheMonth>
         </section>
      </div>
   );
};

export default Home;
