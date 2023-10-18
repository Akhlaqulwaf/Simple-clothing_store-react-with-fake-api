import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../context/CartContext";

export default function Cart({ itemCart }) {
  const { image, title, amount, price, id } = itemCart;
  const {removeX, increase, decrease} = useContext(CartContext)
  return (
    <div className="flex gap-x-4 p-3 lg:px-6 border-b border-gray-200 w-full font-light text-gray-600">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between">
            <Link
              to={`product/${id}`}
              className="text-sm uppercase font-medium max-w-[250px] hover:underline text-primary"
            >
              {title}
            </Link>
            <div onClick={() => removeX(id)}>
              <IoMdClose className="text-gray-500 hover:text-red-500 transition cursor-pointer" />
            </div>
          </div>
          <div className="w-full h-[30px] flex gap-x-4 mt-2">
            <div className="flex justify-between items-center p-1 border border-b w-[70px]">
              <div onClick={() => decrease(id)}><IoMdRemove className="cursor-pointer"/></div>
              <div>{amount}</div>
              <div onClick={() => increase(id)}>{<IoMdAdd className="cursor-pointer"/>}</div>
            </div>
            {/* price */}
            <div className="flex-1 flex justify-around items-center">{`$${price}`}</div>
            {/* total price */}
            <div className="flex-1 flex justify-end items-center ">{ `$${parseFloat(price*amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
