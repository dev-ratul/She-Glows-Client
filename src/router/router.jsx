import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../components/HomeLayout/Home/Home";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import AllProducts from "../components/Pages/AllProducts/AllProducts";
import FaceProducts from "../components/Pages/FaceProducts/FaceProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
            index: true,
            Component: Home
        },
        {
          path: '/login',
          Component: Login
        },
        {
          path: '/register',
          Component: Register
        },
        {
          path: '/all-products',
          Component: AllProducts
        },
        {
          path: '/face-products',
          Component: FaceProducts
        }
    ]
  },
]);

