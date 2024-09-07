import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import AppContextProvider from "./AuthProvider/AppContext";
import routes from "./Routes/routes";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider>
    <RouterProvider router={routes} />
    <ToastContainer />
  </AppContextProvider>
);
