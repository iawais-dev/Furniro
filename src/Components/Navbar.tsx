'use client'
import Image from "next/image";
import cart from '@/assets/imgs/cart.svg'
import heart from '@/assets/imgs/heart.svg'
import profile from '@/assets/imgs/profile.svg'
import search from '@/assets/imgs/search.svg'
import logo from '@/assets/imgs/logo.png'
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import Link from "next/link";

export default function Navbar() {
    const[menu,setMenu]= useState(false)
    const[Cart,setCart]= useState(false)
    
    // handler
    const handleMenu = ()=>{
        setMenu(!menu)
    }
    const handleCart=()=>{
        setCart(!Cart)
    }

    return (
        <div className="">
            {/* navbar for the desktop */}
            <nav className="lg:block hidden py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image src={logo} className="w-[60px] h-auto" alt="logo" />
            <h1 className="text-[34px] font-bold">Furniro</h1>
          </div>
          <ul className="flex gap-20 font-medium text-[16px] text-sm">
          <Link href='/'> <li className="hover:hover:scale-105 cursor-pointer">Home</li></Link>
           <Link href='/shop'> <li className="hover:scale-105 cursor-pointer">Shop</li></Link>
           <Link href='/blogs'><li className="hover:hover:scale-105 cursor-pointer">Blog</li></Link>
           <Link href='/contact'><li className="hover:hover:scale-105 cursor-pointer">Contact</li></Link>
          </ul>
          <div className="flex gap-10">
            <Image src={profile} className="w-[23px]" alt="profile" />
            <Image src={search} className="w-[23px]" alt="search" />
            <Image src={heart} className="w-[23px]" alt="heart" />
           <Link href='/cart'> <Image src={cart} className="w-[23px]" alt="cart" /></Link>
          </div>
        </div>
      </nav>
       {/* navbar for the mobile */}
       <nav className=" py-2 px-5 lg:hidden relative">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image src={logo} className="w-[60px] h-auto" alt="logo" />
            <h1 className="text-[22px] font-bold">Furniro</h1>
          </div>
          {/* menu icon */}    
          <div className="flex items-center gap-4">
               <Image src={search} className="w-[20px]" alt="search" />
               <Image src={cart} onClick={handleCart} className="w-[20px]" alt="cart" />
          <RiMenu3Fill size={20} className="" onClick={handleMenu}/>
          </div>
         
          {
            menu ? <div className="absolute py-10 bg-[#FAF3EA] w-full text-center top-0 z-50 left-0">
            <ul className="flex flex-col gap-5 font-medium text-[16px] text-sm">
            <MdOutlineCancel onClick={handleMenu} className="absolute top-5 right-5 text-2xl cursor-pointer" />
            <Link href='/'> <li className="hover:hover:scale-105 cursor-pointer">Home</li></Link>
           <Link href='/shop'> <li className="hover:scale-105 cursor-pointer">Shop</li></Link>
           <Link href='/blogs'><li className="hover:hover:scale-105 cursor-pointer">Blog</li></Link>
           <Link href='/contact'><li className="hover:hover:scale-105 cursor-pointer">Contact</li></Link>
          </ul>
          <div className="flex w-fit mt-10 mx-auto  gap-10">
            <Image src={profile} className="w-[20px]" alt="profile" />
            <Image src={heart} className="w-[20px]" alt="heart" />
            <Image src={cart} className="w-[20px]" alt="cart" />
          </div> </div>: null
          }
       
        </div>
      </nav>
        </div>
      
    );
  }
  