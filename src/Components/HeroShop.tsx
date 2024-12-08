import React from 'react';
import bg from '@/assets/imgs/ShopHero.jpg';
import { IoIosArrowForward } from "react-icons/io";


function ShopHero() {
  
  return (
    <section className="relative bg-gray-100 sm:p-20 md:p-32 bg-cover bg-center flex justify-center items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>

      {/* Content */}
      <div className='flex flex-col py-10 sm:py-0 items-center'>
        <h1 className="relative text-[30px] lg:text-[48px] font-medium text-black z-10">Shop</h1>
      <h2 className='font-light text-[16px] flex items-center z-10'> <span className='font-semibold'>Home </span><IoIosArrowForward/>Shop</h2>
      </div>
      
    </section>
  );
}

export default ShopHero;
