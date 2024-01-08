"use client";
import Catergories from "@/components/Catergories";
import Products from "@/components/Products";
import { useSelector } from "react-redux";

export default function Home() {
  const authData = useSelector((state) => state.Auth);
  console.log("home", authData);
  return (
    <main className="">
      <Catergories />
      <h1 className="text-center font-bold text-2xl my-5 mx-auto">
        Top Deal's and Special Offers
      </h1>
      <Products />
      <h1 className="text-center font-bold text-2xl my-5 mx-auto">
        Top Purchased Items
      </h1>
      <Products />
    </main>
  );
}
