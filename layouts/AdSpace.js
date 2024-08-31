import AdProductCard from "@/components/AdProductCard";
import React from "react";
import AirPods from "../public/products/airpods.jpg";

const AdSpace = () => {
  const products = [
    {
      productImage: AirPods,
      productName: "Apple Airpods Pro",
      status: "İkinciel",
      price: "4.999 TL",
    },
    {
      productImage: AirPods,
      productName: "Apple Airpods Pro",
      status: "İkinciel",
      price: "4.999 TL",
    },
    {
      productImage: AirPods,
      productName: "Apple Airpods Pro",
      status: "İkinciel",
      price: "4.999 TL",
    },
    {
      productImage: AirPods,
      productName: "Apple Airpods Pro",
      status: "İkinciel",
      price: "4.999 TL",
    },
  ];
  return (
    <div className="container ad-space">
      <div className="d-flex vertical-centered gap-1">
        <h2 className="h-full">Logo</h2>
        <span className="text-green text-bold">
          <strong>Reklam Alanı</strong>
          <br />
          <span className="ad-space-sponsor">Sponsorlu</span>
        </span>
      </div>
      <div className="d-flex gap-1 p-1">
        {products.map((product, index) => (
          <div className="col-3 " key={index}>
            <AdProductCard
              productImage={product.productImage}
              productName={product.productName}
              status={product.status}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdSpace;
