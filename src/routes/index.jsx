import { createBrowserRouter } from "react-router-dom";

import Layout from "../layouts/Layout";
import Download from "../pages/Download";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Support from "../pages/Support";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout /> ,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/download",
        element: <Download /> ,
      },
      {
        path: "/support",
        element: <Support /> ,
      },
      
    ],
  },
]);