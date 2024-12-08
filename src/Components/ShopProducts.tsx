'use client';

import React, { useState } from 'react';
import Allproducts from '@/assets/data/AllProducts';
import Card from './Card';
import Services from './Services';
import { FaFilter } from "react-icons/fa";
import { BsGrid3X3, BsListUl } from "react-icons/bs";

function ShopProducts() {
  const [itemsPerPage, setItemsPerPage] = useState(8);  // Default items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(Allproducts.length / itemsPerPage);

 
  const paginatedProducts = Allproducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle input change for items per page
  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Number(e.target.value) || 1); 
    setItemsPerPage(value);
    setCurrentPage(1); 
  };


  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(startItem + itemsPerPage - 1, Allproducts.length);



  return (
    <div className="overflow-hidden">
      {/* Items Per Page Control */}
      <div className="bg-[#F9F1E7] flex flex-col sm:flex-row items-center justify-between px-6 sm:px-20 py-7 border">
  {/* Left Section */}
  <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 mb-4 sm:mb-0">
    {/* Filter Icon */}
    <button className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-black">
      <FaFilter className="text-lg" />
      <span>Filter</span>
    </button>

    {/* Grid and List Icons */}
    <div className="flex items-center space-x-2 mt-2 sm:mt-0">
      <button className="p-2 rounded-md bg-gray-200 hover:bg-gray-300">
        <BsGrid3X3 className="text-black" />
      </button>
      <button className="p-2 rounded-md bg-gray-200 hover:bg-gray-300">
        <BsListUl className="text-black" />
      </button>
    </div>

    {/* Divider */}
    <div className="w-px h-6 bg-gray-300 mt-2 sm:mt-0" />

    {/* Results Info */}
    <span className="text-sm mt-2 sm:mt-0">
      Showing {startItem}-{endItem} of {Allproducts.length} results
    </span>
  </div>

  {/* Right Section */}
  <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2">
    <div className="flex items-center mb-4 sm:mb-0">
      <label className="mr-2">Show</label>
      <input
        type="number"
        value={itemsPerPage}
        onChange={handleItemsPerPageChange}
        className="w-16 border p-1 rounded"
        min={1}
      />
    </div>

    {/* Sort Dropdown */}
    <div className="flex items-center space-x-2">
      <label htmlFor="sort" className="text-sm">
        Sort by
      </label>
      <select
        id="sort"
        className="p-1 border rounded-md text-sm bg-white"
      >
        <option value="default">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  </div>
</div>


      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto w-fit lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-6">
        {paginatedProducts.map((product, index) => (
          <Card
            id={product.id}
            key={index}
            image={product.image}
            label={product.label}
            title={product.title}
            description={product.description}
            new_price={product.new_price}
            old_price={product.old_price}
            new_product={product.new_product}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 space-x-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === index + 1
                ? 'bg-[#B88E2F] text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    
    </div>
  );
}

export default ShopProducts;
