"use client";

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { increaseQuantity, decreaseQuantity, removeFromCart } from './cartSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function CartPage() {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: any) => state.cart.items);
  const router = useRouter();

  const totalPrice = cartItems.reduce(
    (total: number, item: any) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Your Cart</h1>

      {cartItems.length === 0 ? (
  <div className="flex flex-col items-center justify-center mt-20 space-y-4">
    <p className="text-gray-500 text-lg text-center">Your cart is empty.</p>
   
      <button onClick={()=>{
        router.replace('/products');
      }} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors">
        Shop Now
      </button>
  </div>
) 
 : (
        <div className="space-y-6">
          {cartItems.map((item: any) => (
            <div
              key={item.id}
              className="flex items-center bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200 relative"
            >
              {/* Image container */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-lg"
                />
                {/* Quantity badge */}
                <div className="absolute top-0 right-0 -mt-2 -mr-2 w-7 h-7 bg-purple-600 text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg">
                  {item.quantity}
                </div>
              </div>

              <div className="ml-6 flex-1">
                <h2 className="font-semibold text-lg text-gray-900">{item.name}</h2>
                <p className="text-gray-600 mt-1 text-sm">${item.price}</p>

                <div className="flex items-center mt-3 space-x-3">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    -
                  </button>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 hover:text-red-700 font-semibold ml-4"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-6">
            <p className="text-2xl font-bold text-gray-900">Total: ${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
