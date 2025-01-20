'use client';
import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { FaRegHeart } from 'react-icons/fa';
import { IoMdShare } from 'react-icons/io';
import compare from '@/assets/imgs/compare.svg';
import { useCart } from '@/contexts/CartContext'; // Import the useCart hook
import Link from 'next/link';

interface CardProps {
  id: string;
  image: string | StaticImageData;
  label: number;
  title: string;
  description: string;
  new_price: number;  // Change to number here
  // old_price:  string | null;  // Change to number here
  new_product: boolean;
}

function Card({
  id,
  image,
  label,
  title,
  description,
  new_price,
  // old_price,
  new_product,
}: CardProps) {
  const { addToCart } = useCart(); // Destructure the addToCart function

  const handleAddToCart = () => {
    addToCart({
      id,
      image,
      title,
      new_price,
      quantity: 1, 
    });
  };
  

  return (
    <div className="relative group border bg-[#F4F5F7] h-[450px] w-[280px] shadow-md">
      <Link href={`/detail/${id}`}>
      {/* Full Card Overlay on Hover */}
      <div className="absolute flex-col top-0 left-0 right-0 bottom-0 bg-[#3a3a3ac4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex justify-center items-center">
        <button
          onClick={handleAddToCart}
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
            <Image src={compare} alt="compare" />
            Compare
          </div>
          <div className="text-white flex items-center gap-1">
            <FaRegHeart color="white" />
            Like
          </div>
        </div>
      </div></Link>

      {/* Image */}
      <div className="relative h-[300px] overflow-hidden">
        <Image src={image} alt={title} width={280} height={300} className="h-full w-full object-cover" />

        {/* Conditionally render the "New" label */}
        {new_product && (
          <span className="absolute top-2 right-2 bg-[#2EC1AC] text-white text-[16px] font-medium h-12 w-12 p-2 rounded-full">
            <p className="top-[15%] relative">New</p>
          </span>
        )}

        {/* Show other labels like discounts */}
        {label &&  (
          <span className="absolute top-2 right-2 bg-[#E97171] text-white text-[16px] font-medium h-12 w-12 p-2 rounded-full">
            <p className="top-[15%] relative">{label}</p>
          </span>
        )}
      </div>

      {/* Content (Text Part) */}
      <div className="pl-5 pt-4 pb-4">
        <h2 className="font-semibold text-[24px]">{title}</h2>
        <p className="text-[#898989] text-[16px] truncate font-medium">{description}</p>

        {/* Price */}
        <div className="mt-2 flex items-center space-x-2">
          <span className="font-semibold text-[20px]">
            Rp {new_price.toLocaleString()} 
          </span>
          {/* {old_price && (
            <span className="text-gray-400 line-through text-[16px]">
              Rp {old_price.toLocaleString()} 
            </span>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default Card;
