import React from 'react'
import img from '@/assets/imgs/YourSetup.svg'
import Image from 'next/image'

function YourSetup() {
  return (
    <div className='mt-16'>
      <h2 className='font-semibold text-center text-[#616161] text-[16px] lg:text-[20px]'>Share your setup with</h2>
      <h1 className='font-bold text-center text-[24px] lg:text-[40px]'>#FuniroFurniture</h1>
      <div>
      <Image className='mx-auto w-full' src={img} alt='img'/>
      </div>
      <hr className='mt-10' />
    </div>
  )
}

export default YourSetup