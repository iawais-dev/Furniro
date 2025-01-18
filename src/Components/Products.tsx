'use client';
import React, { useEffect, useState } from 'react';
import sanityClient from '@sanity/client';
import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa';
import { IoMdShare } from 'react-icons/io';
import compare from '@/assets/imgs/compare.svg';

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
  discountPercentage: number;
  imageUrl: string;
  productImage: {
    asset: {
      _ref: string;
    };
  };
  tags: string[];
}

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `*[_type=="product"]{
        _id,
        title,
        price,
        description,
        discountPercentage,
        "imageUrl": productImage.asset->url,
        tags
      }`;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
    alert(`${product.title} successfully added to the cart`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="px-4 mb-5 lg:mb-20">
      <h1 className="text-center text-3xl font-bold my-6">API PRODUCTS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-fit mx-auto">
        {products.map((product) => (
          <div key={product._id} className="relative group border bg-[#F4F5F7] h-[450px] w-[280px] shadow-md">
            <div className="absolute flex-col top-0 left-0 right-0 bottom-0 bg-[#3a3a3ac4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex justify-center items-center">
              <button
                onClick={() => addToCart(product)}
                className="bg-white text-[#B88E2F] py-4 px-10 text-[16px] font-medium"
              >
                Add to Cart
              </button>
              <div className="flex gap-4 mt-5">
                <div className="text-white flex items-center gap-1">
                  <IoMdShare color="white" />
                  Share
                </div>
                <div className="text-white flex items-center gap-1">
                  <Image src={compare} alt="compare" width={20} height={20} />
                  Compare
                </div>
                <div className="text-white flex items-center gap-1">
                  <FaRegHeart color="white" />
                  Like
                </div>
              </div>
            </div>

            <div className="relative h-[300px] overflow-hidden">
              <Image
                src={product.imageUrl}
                alt={product.title}
                className="h-full w-full object-cover"
                width={280}
                height={300}
              />

              {product.discountPercentage === 0 && (
                <span className="absolute top-2 right-2 bg-[#2EC1AC] text-white text-[16px] font-medium h-12 w-12 p-2 rounded-full">
                  <p className="top-[15%] relative">New</p>
                </span>
              )}

              {product.discountPercentage > 0 && (
                <span className="absolute top-2 right-2 bg-[#E97171] text-white text-[16px] font-medium h-12 w-12 p-2 rounded-full">
                  <p className="top-[15%] relative">{product.discountPercentage}% OFF</p>
                </span>
              )}
            </div>

            <div className="pl-5 pt-4 pb-4">
              <h2 className="font-semibold text-[24px]">{product.title}</h2>
              <p className="text-[#898989] text-[16px] font-medium truncate">{product.description}</p>

              <div className="mt-2 flex items-center space-x-2">
                <span className="font-semibold text-[20px]">
                $ {(product.price - (product.price * product.discountPercentage) / 100).toLocaleString()}
                </span>
                {product.discountPercentage > 0 && (
                  <span className="text-gray-400 line-through text-[16px]">
                    Rp {product.price.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
  <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
  
  {cart.length > 0 ? (
    <div className="space-y-4">
      {cart.map((cartItem, index) => (
        <div
          key={index}
          className="flex items-center p-4 bg-white shadow-md rounded-md border border-gray-200 hover:shadow-lg transition-all duration-300"
        >
          {/* Product Details */}
          <div className="flex-grow">
            <h3 className="text-lg font-medium text-gray-800">{cartItem.title}</h3>
            <p className="text-sm text-gray-600">${cartItem.price.toFixed(2)}</p>
          </div>

          {/* Product Image */}
          <div className="ml-4">
            <Image
              src={cartItem.imageUrl}
              alt={cartItem.title}
              width={60}
              height={60}
              className="object-cover rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center text-gray-500">Your cart is empty</p>
  )}
</div>

    </div>
  );
}

export default Products;
