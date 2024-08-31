import Select from "@/components/Select";
import AdSpace from "@/layouts/AdSpace";
import Advertisement from "@/layouts/Advertisement";
import Shop from "@/layouts/Shop";
import SideBar from "@/layouts/SideBar";
import React from "react";

const Categories = () => {
  const options = [
    { value: "0", label: "Önerilen Sıralama" },
    { value: "1", label: "En düşük Fiyat" },
    { value: "2", label: "En Yüksek Fiyat" },
    { value: "3", label: "En Yeniler" },
    { value: "4", label: "Çok Satanlar" },
    { value: "5", label: "Çok Beğenilenler" },
    { value: "6", label: "Değerlendirme" },
  ];

  return (
    <div className="container d-flex">
      <div className="col-2">
        <SideBar />
      </div>

      <div className="col-10 pl-1 pt-1">
        <div className="d-flex justify-between vertical-centered">
          <h3>İlan Kategoriler</h3>
          <Select options={options} placeholder="Sıralama" />
        </div>
        <AdSpace />
        <Advertisement />
        <div className="pt-1">
          <AdSpace />
          <Shop />
        </div>
      </div>
    </div>
  );
};

export default Categories;
