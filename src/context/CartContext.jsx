import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if(cart){
      const amounts = cart.reduce((acc, curr) => acc + curr.amount, 0)
      setAmount(amounts)
    }
  }, [cart])

  useEffect(() => {
    if(cart){
      const totals = cart.reduce((acc, curr) => acc + curr.amount * curr.price, 0)
      setTotal(totals)
    }
  }, [cart])

  const addToCart = (produk, id) => {
    const newItem = { ...produk, amount: 1 };

    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  const removeX = (id) => {
    const removeItem = cart.filter((item) => item.id !== id);
    setCart(removeItem);
  };
  const clearCart = () => {
    setCart([]);
  };
  const increase = (id) => {
    const newItem = cart.find((item) => item.id === id);
    addToCart(newItem, id);
  };
  const decrease = (id) => {
    const newItem = cart.find((item) => item.id === id);
    if (newItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: newItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (newItem.amount < 2) {
      removeX(id);
    }
  };
  return (
    <CartContext.Provider
      value={{ addToCart, cart, removeX, clearCart, increase, decrease, amount, total }}
    >
      {children}
    </CartContext.Provider>
  );
}
