import React from "react";
import Link from "next/link";
import { CiGrid41 } from "react-icons/ci";
import { LuBell } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import SearchBar from "@/components/SearchBar";
import Button from "@/components/Button";
const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <Link className="logo" href="/">
          Logo
        </Link>
        <Link className="header-text-color " href="/categories">
          <strong className="header-text-color vertical-centered p-1 text-size-header">
            <CiGrid41 size={25} />
            Kategoriler
          </strong>
        </Link>
        <SearchBar />
        <div className="gap-1">
          <strong className="header-text-color text-size-header ">
            <FiHeart size={25} />
          </strong>
          <strong className="header-text-color text-size-header ">
            <LuBell size={25} />
          </strong>
        </div>
        <div className="header-buttons gap-1">
          <Link className=" vertical-centered" href="#">
            <Button
              name="İlan Giriş"
              bgColor="green"
              color="white"
              icon={<FaRegUser />}
              iconPosition="left"
            />
          </Link>
          <Link className=" vertical-centered" href="#">
            <Button
              name="Üye Giriş"
              bgColor="#1f332c"
              color="white"
              icon={<FaRegUser />}
              iconPosition="left"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
