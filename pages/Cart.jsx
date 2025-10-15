// src/components/Cart.jsx
import React from "react";
import { useCartStore } from "../src/store/cartStore";
import {motion} from 'framer-motion';
import { Minus, Plus } from "lucide-react";

const Cart = () => {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity} = useCartStore();

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4 text-center">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500 w-full text-center">Your cart is empty</p>
      ) : (
        <>
          <ul className="grid  place-items-center grid-cols-[repeat(auto-fill,minmax(300px,1fr))] space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex flex-col justify-between items-center 
                 bg-gray-200 shadow-lg mb-7  py-4 px-2 rounded-[10px]  
                 w-9/10 h-fit "
              >
                <div className="">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className=' object-contain w-full h-60 '
                    />
                 <h3 className='text-lg font-semibold mt-4 mb-2' 
                  >{item.name}</h3>
                  <p className='text-gray-700 text-[16px]'>{item.category}</p>
                  <p className='font-bold text-red-600 hover:text-red-500'>${item.price}</p>

                </div>
                <div className="flex gap-3 items-center">
                    <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="text-red-500 hover:text-red-700 active:bg-gray-300 rounded-full px-2 py-2"
                >
                  <Minus/>
                </button>
                <div>
                    <p className="bg-black text-white rounded-full p-3">{item.quantity}</p>
                </div>
                <button 
                onClick={()=> increaseQuantity(item.id)}
                className="active:bg-gray-300 rounded-full px-2 py-2"
                >
                    <Plus/>
                </button>
                </div>
                <div>
                    <button
                    onClick={()=> removeFromCart(item.id)}
                    >Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={clearCart}
            className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Clear Cart
          </button>
        </>
      )}
      <p className="text-lg font-semibold">
  Total: $
  {cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2)}
</p>

    </div>
  );
};

export default Cart;
