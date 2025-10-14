"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter(); // initialize router

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl shadow-lg p-12 text-center max-w-md">
        <h1 className="text-4xl font-bold text-white mb-6">
          Welcome to Your Assignment
        </h1>
        <p className="text-white mb-8">
          Complete the Next.js assignment and showcase your skills!
        </p>
        <button onClick={()=>{
          router.push('/products')
        }} className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
          View the Assignment
        </button>
      </div>
    </div>
  );
}
