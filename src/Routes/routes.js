import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import SignUp from "./../Pages/SignUp";
import Login from "../Pages/Login";
import Products from "./../Pages/Products";
import Cart from "../Pages/Cart";
import Checkout from "./../Pages/Checkout";
import About from "./../Pages/About";
import ContactUs from "../Pages/ContactUs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/aboutus",
        element: <About />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
    ],
  },
]);

export default routes;
