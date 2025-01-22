'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLike } from '@/contexts/LikeContext';
import { GiCancel } from 'react-icons/gi';

const Like: React.FC = () => {
  const { likedItems, removeLike } = useLike();

  if (likedItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <p className="text-lg text-gray-500">Your liked products list is empty.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-8">
      <div className="w-full max-w-6xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Liked Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {likedItems.map((item) => (
            <div
              key={item.id}
              className="relative border bg-[#F4F5F7] h-[450px] w-[280px] shadow-md"
            >
              <Link href={`/detail/${item.id}`}>
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={280}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Link>

              <div className="pl-5 pt-4 pb-4">
                <h2 className="font-semibold text-[24px]">{item.title}</h2>
                <span className="font-medium text-gray-600">
                  Rs. {item.new_price.toLocaleString()}
                </span>
                <button
                  onClick={() => removeLike(item.id)}
                  className="absolute top-2 right-2 bg-[#E97171] text-white rounded-full p-2"
                >
                  <GiCancel size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Like;
