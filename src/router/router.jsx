import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import Home from "../components/HomeLayout/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
            index: true,
            Component: Home
        }
    ]
  },
]);

