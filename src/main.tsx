import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./page/HomePage.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react"
import Layout from "./layout/Layout.tsx";
import PhotoPage from "./page/PhotoPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/photo",
    element: <PhotoPage />,
  }
]);

createRoot(document.getElementById("__next")!).render(
  <StrictMode>
    <Layout>
      <RouterProvider router={router} />
      <SpeedInsights />
    </Layout>
  </StrictMode>
);
