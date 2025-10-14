import React from 'react'

function PLPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 🔍 Search Bar Section */}
      <div className="bg-purple-600 py-4 px-6 flex shadow-sm">
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
      </div>

      {/* Products Section */}
      <div className="p-6">
        <div>
          <h1 className='font-bold text-black text-3xl' >Shop Products</h1>
        </div>
      </div>
    </div>
  )
}

export default PLPage
