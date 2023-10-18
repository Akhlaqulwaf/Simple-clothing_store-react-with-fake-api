import React, { useContext, useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";
import { sidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const { isOpen, setIsOpen } = useContext(sidebarContext);
  const { amount } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto h-full flex justify-between items-center">
        <Link to={""}>
          <img className="w-[30px]" src={Logo} alt="" />
        </Link>
        <div
          className="cursor-pointer flex relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {" "}
          <BsBag className="text-2xl" />
          <div className="w-[18px] h-[18px] bg-red-500 text-white absolute -right-2 -bottom-2 rounded-full flex justify-center items-center">
            {amount}
          </div>
        </div>
      </div>
    </header>
  );
}
