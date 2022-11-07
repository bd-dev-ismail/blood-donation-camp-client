import { createBrowserRouter } from "react-router-dom";
import AddEvents from "../components/Admin/AddEvents";
import AdminLayout from "../components/Admin/AdminLayout";
import DonnerList from "../components/Admin/DonnerList";
import Blog from "../components/Blog/Blog";

import ErrorPage from "../components/ErrorPage/ErrorPage";
import Events from "../components/Events/Events";
import Home from "../components/Home/Home";
import Location from "../components/Location/Location";
import Register from "../components/LogIn/Register";
import SignIn from "../components/LogIn/SignIn";
import DonnerForm from "../DonnerForm/DonnerForm";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

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
        path: "/distric",
        element: <Location></Location>,
      },
      {
        path: "/events",
        element: (
          <PrivateRoute>
            <Events></Events>
          </PrivateRoute>
        ),
      }, 
      {
        path: "/donnerform/:id",
        element: (
          <PrivateRoute>
            <DonnerForm></DonnerForm>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/donation/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/adminlayout",
        element: <AdminLayout />,
      },
      {
        path: "/donnerlist",
        element: <DonnerList />,
      },
      {
        path: "/addDonation",
        element: <AddEvents />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);
