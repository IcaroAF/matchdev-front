import React from "react";
import ReactDOM from "react-dom";
import "./styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import MyRoutes from "./routes";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <React.StrictMode>
    <MyRoutes />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
