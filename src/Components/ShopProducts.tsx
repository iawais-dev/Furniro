'use client';
import React, { useEffect, useState } from 'react';
import sanityClient from '@sanity/client';
import Card from "./Card";
import { FaFilter } from "react-icons/fa";
import { BsGrid3X3, BsListUl } from "react-icons/bs";

const sanity = sanityClient({
  projectId: "j2bjwxq6",
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  isNew: boolean;
  discountPercentage: number;
  imageUrl: string;
  productImage: {
    asset: {
      _ref: string;
    };
  };
  tags: string[];
}

function ShopProducts() {
  const [itemsPerPage, setItemsPerPage] = useState(8); // Default items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [sortMethod, setSortMethod] = useState<string>('default'); // New state for sort method

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const fetchProducts = async () => {
    try {
      const query = `*[_type=="product"]{
        _id,
        title,
        price,
        description,
        isNew,
        discountPercentage,
        "imageUrl": productImage.asset->url,
        tags
      }`;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase()) ||
      product.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortMethod) {
        case 'price-asc':
          return a.price - b.price; // Low to High
        case 'price-desc':
          return b.price - a.price; // High to Low
        case 'title-asc':
          return a.title.localeCompare(b.title); // Alphabetical A-Z
        case 'title-desc':
          return b.title.localeCompare(a.title); // Alphabetical Z-A
        default:
          return 0; 
      }
    });

  const paginatedProducts = filteredProducts.slice(
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
  const endItem = Math.min(startItem + itemsPerPage - 1, filteredProducts.length);

  return (
    <div className="overflow-hidden">
      {/* Items Per Page Control */}
      <div className="bg-[#F9F1E7] flex flex-col lg:flex-row items-center justify-between px-6 sm:px-20 py-7 border">
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
            Showing {startItem}-{endItem} of {filteredProducts.length} results
          </span>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2">
          <div>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none py-2 px-4"
            />
          </div>
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
              value={sortMethod}
              onChange={(e) => setSortMethod(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="title-asc">Title: A-Z</option>
              <option value="title-desc">Title: Z-A</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto w-fit lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-6">
        {paginatedProducts.map((product, index) => (
          <Card
            id={product._id}
            key={index}
            image={product.imageUrl}
            label={product.discountPercentage}
            title={product.title}
            description={product.description}
            new_price={product.price}
            new_product={product.isNew}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 space-x-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded ${currentPage === index + 1
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
