"use client";
import Image from "next/image";
import React from "react";
import ReactCountryFlag from "react-country-flag";
import { GoDeviceCameraVideo } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa6";
import StarRating from "react-star-rating-component";
import { useState } from "react";
const ProductCard = ({
  productName,
  productImage,
  like,
  star,
  status,
  country,
  video = 1,
  price,
}) => {
  const [rating, setRating] = useState(0);
  const handleStarClick = (nextValue, prevValue, name) => {
    setRating(nextValue);
  };
  return (
    <div className="product-card">
      <div className="d-flex justify-between p-1">
        <div className="gap-1 vertical-centered">
          <span className="circle">
            <ReactCountryFlag
              countryCode="TR"
              style={{
                fontSize: "2em",
                lineHeight: "2em",
              }}
              svg
            />
          </span>
          {video && (
            <span className="circle">
              <GoDeviceCameraVideo />
            </span>
          )}
        </div>
        <span className="circle basic-shadow vertical-centered heart ">
          <FaRegHeart />
        </span>
      </div>
      <div className="w-full centered">
        <Image
          src={productImage}
          alt={productName}
          width={200}
          height={250}
          className="product-image"
        />
      </div>

      <h3 className="product-title pl-1">{productName}</h3>
      <div className="d-flex justify-between p-1 product-title">
        <StarRating
          value={rating}
          onStarClick={(nextValue, prevValue, name) =>
            handleStarClick(nextValue, prevValue, name)
          }
          starCount={5}
          starColor={"#ffb400"}
          emptyStarColor={"#ccc"}
        />
        <p>{status}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
