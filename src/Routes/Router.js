import { createBrowserRouter } from "react-router-dom";
import Donation from "../components/Donation/Donation";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Events from "../components/Events/Events";
import Home from "../components/Home/Home";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
    ],
  },
]);
