import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <div>This is home</div>,
      },
      {
        path: "/about",
        element: <div>This is about</div>,
      },
    ],
  },
]);