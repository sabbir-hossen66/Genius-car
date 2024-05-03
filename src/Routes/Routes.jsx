import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Header from "../Shared/Header/Header";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <div>This is about</div>,
      },
    ],
  },
]);