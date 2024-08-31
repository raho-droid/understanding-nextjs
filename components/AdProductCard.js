"use client";
import Image from "next/image";
import React from "react";
import StarRating from "react-star-rating-component";
import { useState } from "react";
const AdProductCard = ({
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
    <div className="product-card pl-1">
      <div className="d-flex vertical-centered">
        <Image
          src={productImage}
          alt={productName}
          width={85}
          height={100}
          className="product-image"
        />
        <div className="  p-1 product-title">
          <h3 className="product-title pl-1">{productName}</h3>
          <StarRating
            value={rating}
            onStarClick={(nextValue, prevValue, name) =>
              handleStarClick(nextValue, prevValue, name)
            }
            starCount={5}
            starColor={"#ffb400"}
            emptyStarColor={"#ccc"}
          />{" "}
          (76 yorum)
          <div className="d-flex vertical-centered gap-1">
            <p>{status}</p>
            <p>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdProductCard;
