import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Header from "../Shared/Header/Header";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/bookings",
        element: <Bookings></Bookings>,
      },
      {
        path: "/book/:id",
        element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/cars/${params.id}`)
      },
    ],
  },
]);