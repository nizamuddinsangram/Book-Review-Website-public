import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Routers/Routers";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="w-11/12 mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  </React.StrictMode>
);
