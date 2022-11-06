import { createBrowserRouter } from "react-router-dom";
import AddEvents from "../components/Admin/AddEvents";
import AdminLayout from "../components/Admin/AdminLayout";
import DonnerList from "../components/Admin/DonnerList";
import Blog from "../components/Blog/Blog";
import Donation from "../components/Donation/Donation";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Events from "../components/Events/Events";
import Home from "../components/Home/Home";
import Register from "../components/LogIn/Register";
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
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/addDonation',
        element: <AddEvents></AddEvents>
      },
      
      {
        path: '/donnerList', 
        element: <DonnerList/>
      },
      {
        path: '/adminlayout',
        element: <AdminLayout/>,
      },
      {
        path: '/register',
        element: <Register/>
      }
    ],
  },
]);
