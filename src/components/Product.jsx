import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import {CartContext} from "../context/CartContext"

export default function Product({ produk }) {
  const { category, id, image, title, price } = produk;
  const {addToCart} = useContext(CartContext)
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-3 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] flex mx-auto justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 duration-300"
              src={image}
              alt=""
            />
          </div>
          <div className="absolute top-0 -right-10 group-hover:right-0 bg-red-500/50 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button onClick={() => addToCart(produk, id)}>
              <div className="w-12 h-12 flex justify-center items-center text-white bg-red-500">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <Link
              to={`product/${id}`}
              className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="text-gray-600">{category}</div>
        <Link to={`product/${id}`}><h2 className="font-semibold my-1">{title}</h2></Link>
        <div>{price}</div>
      </div>
    </div>
  );
}
