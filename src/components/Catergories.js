import React from "react";
import Image from "next/image";

export default function Catergories() {
  const categories = [
    { categoryImg: "/category/category1.webp", categoryName: "Mobile" },
    { categoryImg: "/category/category2.webp", categoryName: "Grocery" },
    { categoryImg: "/category/category3.webp", categoryName: "Fashion" },
    { categoryImg: "/category/category4.webp", categoryName: "Electronics" },
    {
      categoryImg: "/category/category5.webp",
      categoryName: "Home & Furniture",
    },
    {
      categoryImg: "/category/category6.webp",
      categoryName: "Appliances",
    },
    {
      categoryImg: "/category/category7.webp",
      categoryName: "Beauty and Toys",
    },
  ];
  return (
    <div className="py-5 px-2 border-b-2">
      <div className="scrollbar-hide w-full flex flex-row overflow-x-scroll px-auto">
        {categories.map((cat) => (
          <div
            key={cat.categoryName}
            className="min-w-44 h-48 relative flex justify-center mx-auto"
          >
            <Image
              src={cat.categoryImg}
              height={138}
              width={138}
              alt="category"
              style={{ position: "absolute" }}
            />
            <h1 className="absolute bottom-2 bg-black opacity-50 text-white px-2 py-1 rounded-md">
              {cat.categoryName}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
