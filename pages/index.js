import React from "react";
// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="text-4xl font-bold underline text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-poppins mb-4 ">
        Welcome to the Future of Digital Art
      </p>
      <p className="text-xl text-gray-700 dark:text-gray-300 font-poppins text-center">
        Discover, Collect, and Trade Extraordinary NFTs
      </p>
    </div>
  );
}
