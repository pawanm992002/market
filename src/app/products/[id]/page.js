"use client";
import { useEffect, useState } from "react";

export default function Product({ params }) {
  const productId = params.id;
  const [quantity, setQuantity] = useState(0);

  const productDetail = {
    productName: "TShirt",
    price: "40",
    catergory: ["category 1", "category 2", "category 3", "category 4"],
    shortDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    detailDescription:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam asperiores aliquid iusto sequi, maiores est provident vitae id voluptas iure tenetur autem aut, labore incidunt eos perferendis expedita nihil. Quod.",
    imgs: [
      "https://i.imgur.com/Rx7uKd0.jpg",
      "https://i.imgur.com/Dhebu4F.jpg",
    ],
    discount: "40",
    maxQuantity: 87,
  };

  function changeImage(e) {
    const image = e.target.src;
    var container = document.getElementById("main-image");
    container.src = image;
  }

  const setQuantityBtn = (btn, e = 0) => {
    let input = parseInt(e === "" ? 0 : e);
    if (btn === "inc" && quantity < productDetail?.maxQuantity) {
      setQuantity(quantity + 1);
    }
    if (btn === "dec" && quantity > 0) {
      setQuantity(quantity - 1);
    }
    if (btn === "inp" && input >= 0 && input <= productDetail?.maxQuantity) {
      setQuantity(input);
    }
  };

  const addToCart = async () => {
    // add cart and pass productId, userId, quantity
  };

  useEffect(() => {
    // fetch product by its id
  }, []);
  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <div className="card bg-slate-600">
            <div className="row">
              <div className="col-md-6">
                <div className="images p-3">
                  <div className="text-center p-4 flex flex-col lg:flex-row">
                    <img
                      id="main-image"
                      src={productDetail.imgs[0]}
                      width="250"
                      className="mb-4 mr-4"
                    />
                    <div className="thumbnail text-center">
                      {productDetail?.imgs.map((productImg, i) => (
                        <img
                          key={i}
                          onClick={(e) => changeImage(e)}
                          src={productImg}
                          width="80"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-4 bg-slate-300">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-long-arrow-left"></i>
                      <span className="ml-1 font-bold text-lg">
                        {productDetail?.productName}
                      </span>
                    </div>
                    <i className="fa fa-shopping-cart text-muted"></i>
                  </div>
                  <div className="my-3">
                    <h3 className="text-wrap my-2">
                      {productDetail?.shortDescription}
                    </h3>
                    <div className="price d-flex flex-row align-items-center">
                      <span className="text-red-600 font-bold">
                        Rs {productDetail?.price}
                      </span>
                      <div className="ml-2">
                        <span> {productDetail?.discount}% OFF</span>
                      </div>
                    </div>
                    <div className="text-wrap flex flex-wrap">
                      {productDetail?.catergory?.map((cat, i) => (
                        <span
                          key={i}
                          className="bg-slate-900 m-1 px-3 py-2 text-white rounded-md"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-wrap">
                    {productDetail?.detailDescription}
                  </p>
                  <div className="my-4">
                    <h6 className="mb-1">Add Quantity</h6>
                    <div className="btn-group">
                      <button
                        className="bg-slate-200 h-8 w-8"
                        onClick={() => setQuantityBtn("inc")}
                      >
                        +
                      </button>
                      <input
                        className="w-20 px-3"
                        type="number"
                        name="quantity"
                        value={quantity}
                        onChange={(e) => setQuantityBtn("inp", e.target.value)}
                      />
                      <button
                        className="bg-slate-200 h-8 w-8"
                        value={quantity}
                        onClick={() => setQuantityBtn("dec")}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className="cart mt-4 align-items-center">
                    <button
                      className="btn btn-danger text-uppercase mr-2 px-4"
                      onClick={() => addToCart()}
                    >
                      Add to cart
                    </button>
                    <i className="fa fa-heart text-muted"></i>
                    <i className="fa fa-share-alt text-muted"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
