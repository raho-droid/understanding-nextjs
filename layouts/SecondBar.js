import Link from "next/link";
import React from "react";

const SecondBar = () => {
  return (
    <div className="second-bar d-flex gap-1">
      <Link href="#">Yazılım Otomasyon</Link>
      <Link href="#">Elektrik-Montaj</Link>
      <Link href="#">Mekanik-Tesisat</Link>
      <Link href="#">Hidrolik-Pinomatik</Link>
    </div>
  );
};

export default SecondBar;
