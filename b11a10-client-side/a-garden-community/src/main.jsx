import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routes from "./Routes/Routes.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { RouterProvider } from "react-router";
import ToggleThemeProvider from "./Components/ToggleThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <ToggleThemeProvider>
         <AuthProvider>
            <RouterProvider router={Routes}></RouterProvider>
         </AuthProvider>
      </ToggleThemeProvider>
   </StrictMode>
);
