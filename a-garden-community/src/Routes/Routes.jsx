import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home";
import ExploreGardeners from "../Pages/ExploreGardeners";
import BrowseTips from "../Pages/BrowseTips";
import ShareAGardenTip from "../Pages/ShareAGardenTip";
import MyTips from "../Pages/MyTips";
import LoadingSpinner from "../Components/LoadingSpinner";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import PrivateRoute from "../Provider/PrivateRoute";
import TipDetails from "../Pages/TipDetails";
import UpdateTips from "../Pages/UpdateTips";
import ErrorPage from "../Pages/ErrorPage";
import DashboardLayout from "../Layout/DashboardLayout";
import OverviewPage from "../Pages/Dashboard/OverviewPage";
import AllTips from "../Pages/Dashboard/AllTips";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import VIewTips from "../Pages/Dashboard/VIewTips";

const Routes = createBrowserRouter([
   {
      path: "/",
      Component: RootLayout,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            index: true,
            hydrateFallbackElement: <LoadingSpinner />,
            Component: Home,
            loader: async () => {
               const res = await fetch(
                  "https://b11a10-server-side-dev-istiake.vercel.app/events"
               );
               return res.json();
            },
         },
         {
            path: "login",
            Component: Login,
         },
         {
            path: "register",
            Component: Register,
         },
         {
            path: "explore-gardeners",
            Component: ExploreGardeners,
            hydrateFallbackElement: <LoadingSpinner />,
            loader: async () => {
               const res = await fetch(
                  "https://b11a10-server-side-dev-istiake.vercel.app/allGardeners"
               );
               return res.json();
            },
         },
         {
            path: "browse-tips",
            hydrateFallbackElement: <LoadingSpinner />,
            Component: BrowseTips,
            loader: async () => {
               const res = await fetch(
                  "https://b11a10-server-side-dev-istiake.vercel.app/publicTips"
               );
               return res.json();
            },
         },
         {
            path: "tip/:id",
            hydrateFallbackElement: <LoadingSpinner />,
            element: (
               <PrivateRoute>
                  <TipDetails></TipDetails>
               </PrivateRoute>
            ),
            loader: async ({ params }) => {
               const res = await fetch(
                  `https://b11a10-server-side-dev-istiake.vercel.app/tipDetails/${params.id}`
               );
               return res.json();
            },
         },
         {
            path: "my-tips",
            hydrateFallbackElement: <LoadingSpinner />,
            element: (
               <PrivateRoute>
                  <MyTips></MyTips>
               </PrivateRoute>
            ),
         },
         {
            path: "share-a-garden-tip",
            element: (
               <PrivateRoute>
                  <ShareAGardenTip />
               </PrivateRoute>
            ),
         },
         {
            path: "update-tips/:id",
            hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
            element: (
               <PrivateRoute>
                  <UpdateTips></UpdateTips>
               </PrivateRoute>
            ),
            loader: async ({ params }) => {
               const res = await fetch(
                  `https://b11a10-server-side-dev-istiake.vercel.app/tipDetails/${params.id}`
               );
               return res.json();
            },
         },
         {
            path: "about-us",
            Component: AboutUs,
         },
         {
            path: "contact-us",
            Component: ContactUs,
         },
      ],
   },
   {
      path: "dashboard",
      element: (
         <PrivateRoute>
            <DashboardLayout />
         </PrivateRoute>
      ),
      children: [
         {
            index: true,
            element: <OverviewPage />,
         },
         {
            path: "my-tips",
            hydrateFallbackElement: <LoadingSpinner />,
            element: (
               <PrivateRoute>
                  <MyTips></MyTips>
               </PrivateRoute>
            ),
         },
         {
            path: "all-tips",
            hydrateFallbackElement: <LoadingSpinner />,
            Component: AllTips,
            loader: async () => {
               const res = await fetch(
                  "https://b11a10-server-side-dev-istiake.vercel.app/publicTips"
               );
               return res.json();
            },
         },
         {
            path: "share-a-tip",
            element: (
               <PrivateRoute>
                  <ShareAGardenTip />
               </PrivateRoute>
            ),
         },
         {
            path: "tip/:id",
            hydrateFallbackElement: <LoadingSpinner />,
            element: (
               <PrivateRoute>
                  <VIewTips />
               </PrivateRoute>
            ),
            loader: async ({ params }) => {
               const res = await fetch(
                  `https://b11a10-server-side-dev-istiake.vercel.app/tipDetails/${params.id}`
               );
               return res.json();
            },
         },
      ],
   },
]);

export default Routes;
