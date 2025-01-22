'use client';
import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { FaRegHeart } from 'react-icons/fa';
import { IoMdShare } from 'react-icons/io';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { useLike } from '@/contexts/LikeContext';

interface CardProps {
  id: string;
  image: string | StaticImageData;
  label: number;
  title: string;
  description: string;
  new_price: number;
  new_product: boolean;
}

const Card: React.FC<CardProps> = ({
  id,
  image,
  label,
  title,
  description,
  new_price,
  new_product,
}) => {
  const { addToCart } = useCart();
  const { addLike } = useLike();

  const handleAddLike = () => {
    addLike({ id, image, title, new_price });
  };

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
          <Link href={`/detail/${id}`}>
            <div className="text-white flex items-center gap-1 cursor-pointer">Details</div>
          </Link>
          <div
            className="text-white flex items-center gap-1 z-50 relative cursor-pointer"
            onClick={handleAddLike}
          >
            <FaRegHeart color="white" />
            Like
          </div>
        </div>
      </div>
      <div className="relative h-[300px] overflow-hidden">
        <Image src={image} alt={title} width={280} height={300} className="h-full w-full object-cover" />
        {new_product && (
          <span className="absolute top-2 right-2 bg-[#2EC1AC] text-white text-[16px] font-medium h-12 w-12 p-2 rounded-full">
            <p className="top-[15%] relative">New</p>
          </span>
        )}
        {label && (
          <span className="absolute top-2 right-2 bg-[#E97171] text-white text-[16px] font-medium h-12 w-12 p-2 rounded-full">
            <p className="top-[15%] relative">{label}</p>
          </span>
        )}
      </div>
      <div className="pl-5 pt-4 pb-4">
        <h2 className="font-semibold text-[24px]">{title}</h2>
        <p className="text-[#898989] text-[16px] truncate font-medium">{description}</p>
        <div className="mt-2 flex items-center space-x-2">
          <span className="font-semibold text-[20px]">Rp {new_price.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
