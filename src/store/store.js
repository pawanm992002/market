"use client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import AuthReducer, { setAuthData } from "./slices/authSlice";
import productReducer from "./slices/productSlice";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const store = configureStore({
  reducer: {
    Auth: AuthReducer,
    Product: productReducer,
  },
});

export const StoreProvider = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      router.replace("/");
    } else {
      store.dispatch(setAuthData({ ...userData, loggedIn: true }));
    }
  }, []);
  return <Provider store={store}>{children}</Provider>;
};
