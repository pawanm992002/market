"use client";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

export default function BootstrapClient() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <ToastContainer />;
}
