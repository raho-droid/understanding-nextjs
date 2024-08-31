import ProductCard from "@/components/ProductCard";
import React from "react";
import AirPods from "../public/products/airpods.jpg";
import Button from "@/components/Button";

const Advertisement = () => {
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
    {
      productImage: AirPods,
      productName: "Apple Airpods Pro",
      status: "İkinciel",
      price: "4.999 TL",
    },
  ];

  return (
    <div>
      <h3 className="part-title">İlan Kategorisi</h3>
      <div className="opportunities ">
        <div className="d-flex gap-1">
          {" "}
          {products.map((product, index) => (
            <div className="col-2-4 col-sm-6 col-md-6" key={index}>
              <ProductCard
                productImage={product.productImage}
                productName={product.productName}
                status={product.status}
                price={product.price}
              />
            </div>
          ))}
        </div>

        <div className="w-full centered pt-1">
          <Button bgColor="#D9D9D9" color="#04724D" name="Daha Fazla Göster" />
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
