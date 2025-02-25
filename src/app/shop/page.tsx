import Footer from '@/Components/Footer'
import ShopHero from '@/Components/HeroShop'
import Navbar from '@/Components/Navbar'
import Services from '@/Components/Services'
import ShopProducts from '@/Components/ShopProducts'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar/>
        <ShopHero/>
        <ShopProducts/>
        <div className='w-full bg-[#FAF3EA] mt-10'>
       <Services/>
      </div>
        <Footer/>
    </div>
  )
}

export default page