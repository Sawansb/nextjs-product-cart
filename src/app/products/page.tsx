"use client"; 

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../store/store';
import { fetchProducts } from './productSlice';
import Link from 'next/link'; 
import { addToCart, removeFromCart, decreaseQuantity, increaseQuantity } from '../cart/cartSlice';



function PLPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [showPopup, setShowPopup] = useState(false);

  const { items, loading, error } = useSelector((state: any) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
    
    console.log("Added to cart:", product);
    // Show popup
    setShowPopup(true);
    
    setTimeout(() => {
      setShowPopup(false);
    }, 300);

  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar: Search + View Cart */}
      <div className="bg-purple-600 py-4 px-6 flex justify-between items-center shadow-sm">
        {/* Search Bar */}
        <div className="flex items-center w-full max-w-md bg-white rounded-full shadow-sm overflow-hidden">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 px-4 py-2 outline-none bg-transparent text-gray-700"
          />
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2">
            Search
          </button>
        </div>

        {/* View Cart Button */}
        <Link href="/cart">
          <button className="ml-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">
            View Cart
          </button>
        </Link>
      </div>

      {/* Products Section */}
      <div className="p-6">
        <h1 className='font-bold text-black text-3xl'>Shop Products</h1>

        {loading && <p className="text-gray-500 mt-4">Loading products...</p>}
        {error && <p className="text-red-500 mt-4">Error: {error}</p>}

        {!loading && !error && (!items || items.length === 0) && (
          <p className="text-gray-500 mt-4">No products available.</p>
        )}

        {!loading && !error && items?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {items.map((product: any) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg flex flex-col">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded"
                />
                <h2 className="mt-2 font-semibold">{product.name}</h2>
                <p className="text-gray-600 mt-1">${product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-4 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
                >
                  Add to Cart
                </button>
                {/* Popup */}
      {showPopup && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          ✅ Product added to cart!
        </div>
      )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default PLPage;
