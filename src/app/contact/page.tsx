import Contact from '@/Components/Contact'
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import ReuseableHero from '@/Components/ReuseableHero'
import Services from '@/Components/Services'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar/>
        <ReuseableHero pagename='Contact'/>
        <Contact/>
        <div className='w-full bg-[#FAF3EA] mt-10'>
       <Services/>
      </div>
        <Footer/>
    </div>
  )
}

export default page