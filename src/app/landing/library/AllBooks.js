"use client";
import React from "react";

const AllBooks = ({ children }) => {
  return (
    <div className="w-full h-full bg-[#e3f6f5]">
      <div class="custom-shape-divider-bottom z-10">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>

      <div className="grid grid-row-2 w-full h-full justify-center p-24">
        <h1 className="font-bold flex text-5xl text-[#1d315b]">Trending</h1>
        <div className="grid w-full gap-8 md:grid md:grid-cols-5 p-6 md:p-0 relative z-10 sm-cols-1 md:my-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
