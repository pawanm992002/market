"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch all products
    // console.log("jjj");
    setLoading(true);
    const productList = [
      {
        id: 1,
        name: "product 1",
        img: "/category/category1.webp",
        price: 50,
        shortDescription: "this is a short description of production",
      },
      {
        id: 2,
        name: "product 2",
        img: "/category/category2.webp",
        price: 60,
        shortDescription: "this is a short description of production",
      },
      {
        id: 3,
        name: "product 3",
        img: "/category/category3.webp",
        price: 70,
        shortDescription: "this is a short description of production",
      },
      {
        id: 4,
        name: "product 4",
        img: "/category/category4.webp",
        price: 80,
        shortDescription: "this is a short description of production",
      },
      {
        id: 5,
        name: "product 5",
        img: "/category/category5.webp",
        price: 100,
        shortDescription: "this is a short description of production",
      },
    ];
    setProducts(productList);
    setLoading(false);
  }, [loading]);
  return (
    <div className="w-full flex flex-wrap justify-center">
      {!loading ? (
        products.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className="bg-slate-700 flex flex-wrap w-56 h-80 m-4 justify-center rounded-md"
          >
            <div className="relative w-full max-h-48 h-4/6">
              <Image src={product.img} fill alt="Product" />
            </div>
            <div className="px-3 py-1 w-full h-2/5 border-t-2">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">{product.name}</span>
                <span className="text-sm text-gray-400 ">
                  {product.price} Rs
                </span>
              </div>
              <div className="text-wrap">{product.shortDescription}</div>
            </div>
          </Link>
        ))
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
}
