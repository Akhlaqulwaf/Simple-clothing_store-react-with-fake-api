import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";

export default function ProductDetail() {
  const { addToCart } = useContext(CartContext);
  const product = useContext(ProductContext);
  const { id } = useParams();

  const produks = product.find((item) => item.id === parseInt(id));

  if (!produks) {
    <section className="h-screen flex justify-center items-center">
      Loading...
    </section>;
  }
  console.log(produks);
  const { title, price, category, description, image } = produks;
  return (
    <section className="pt-32 pb-12 lg: py-32 h-screen flex justify-center items-center">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center md:gap-x-7">
          <div className="max-w-[200px] lg:max-w-[300px]">
            <img src={image} alt="" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-semibold mt-2 uppercase">{title}</h1>
            <div className="font-medium text-red-500 py-2">
              <h1>${price}</h1>
            </div>
            <p className="text-black">{description}</p>
            <button onClick={() => addToCart(produks, produks.id)} className="mt-3 w-20 h-12 border border-b bg-black text-white shadow-sm">Add Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}
