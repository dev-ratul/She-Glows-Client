import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../components/HomeLayout/Home/Home";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import AllProducts from "../components/Pages/AllProducts/AllProducts";

import SortProductLayout from "../components/SortProductLayout/SortProductLayout";
import FaceProducts from "../components/Pages/FaceProducts/FaceProducts";
import BrowProducts from "../components/Pages/BrowProducts/BrowProducts";
import LipProducts from "../components/LipProducts/LipProducts";
import ViewDetails from "../components/Pages/AllProducts/ViewDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "product/:id",
        Component: ViewDetails,
      },
      {
        path: "/all-products",
        Component: SortProductLayout,
        children: [
          {
            index: true,
            Component: AllProducts,
          },
          {
            path: "face-products",
            Component: FaceProducts,
          },
          {
            path: "brow-products",
            Component: BrowProducts,
          },
          {
            path: "lip-products",
            Component: LipProducts,
          },
          {
            path: "product/:id",
            Component: ViewDetails,
          },
        ],
      },
    ],
  },
]);
