import React,{useContext} from 'react'
import {IoMdArrowForward} from "react-icons/io"
import {FaTrash} from "react-icons/fa"
import { sidebarContext } from '../context/SidebarContext'
import { CartContext } from '../context/CartContext';
import Cart from "./Cart"

export default function Sidebar() {
  const {isOpen, handleClose} = useContext(sidebarContext);
  const {cart, clearCart, total, amount} = useContext(CartContext)
  return (
    <div>
      <div className={` ${isOpen ? "right-0" : "-right-full"} h-full w-full shadow-2xl z-10 top-0 bg-white fixed md:w-[35vw] xl:w-[30vw] transition-all duration-300`}>
        <div className='flex justify-between items-center p-4'>
          <div className='uppercase font-semibold text-sm'>
            shoping bag({amount})
          </div>
          <div className='cursor-pointer w-8 h-8 flex justify-center items-center' onClick={handleClose}>
            <IoMdArrowForward className='text-2xl'/>
          </div>
        </div>
        <div className='w-[full] h-[350px] overflow-y-scroll overflow-x-hidden'>
            {cart.map(item => <Cart key={item.id} itemCart={item}/>)}
        </div>
        <div className='w-full h-12 flex justify-between items-center p-3'>
          <div className='font-semibold'><span>Total: </span>${parseFloat(total).toFixed(2)}</div>
          <div onClick={clearCart} className='w-12 h-12 bg-red-500 flex justify-center items-center text-white text-xl cursor-pointer'><FaTrash/></div>
        </div>
        <div className='bg-gray-300 text-gray-500 mx-3 mt-2 w-[427px] h-12 flex justify-center items-center'>
          <button>View Cart</button>
        </div>
        <div className='bg-black text-white mx-3 mt-2 w-[427px] h-12 flex justify-center items-center'>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  )
}
