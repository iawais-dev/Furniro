// pages/index.tsx
import React from 'react';
import img1 from '@/assets/imgs/recentpost1.jpg'
import img2 from '@/assets/imgs/recentpost2.jpg'
import img3 from '@/assets/imgs/recentpost3.jpg'
import img4 from '@/assets/imgs/recentpost4.jpg'
import img5 from '@/assets/imgs/recentpost5.jpg'
import blog1 from '@/assets/imgs/blogImage1.jpg'
import blog2 from '@/assets/imgs/blogImage2.jpg'
import blog3 from '@/assets/imgs/blogImage3.jpg'
import Image from 'next/image';
import search from '@/assets/imgs/search.svg'

const Blogs = () => {
    return (
        <div className="min-h-screen flex flex-col items-center p-4 overflow-hidden">
            <div className="max-w-7xl w-full">
                <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <section className="lg:col-span-2">
                        <article className="bg-white p-6 rounded-lg  mb-6">
                            <div className='lg:h-[500px] overflow-hidden'>
                                 <Image src={blog1} alt='blog' />
                            </div>
                           <div>

                           </div>
                            <h2 className="text-2xl font-medium mb-2">Going all-in with millennial design</h2>
                            <p className='text-[#9F9F9F]  text-[13px] lg:text-[15px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                                vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                                tristique posuere.
                            </p>
                        </article>
                        <article className="bg-white p-6 rounded-lg  mb-6">
                        <div className='lg:h-[500px] overflow-hidden'>
                        <Image src={blog2} alt='blog' />
                        </div>
                            <h2 className="text-2xl font-medium mb-2">Exploring new ways of decorating</h2>
                            <p className='text-[#9F9F9F] text-[13px] lg:text-[15px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                                vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                                tristique posuere.
                            </p>
                        </article>
                        <article className="bg-white p-6 rounded-lg  mb-6">
                        <div className='lg:h-[500px] overflow-hidden'>
                        <Image src={blog3} alt='blog' />
                        </div>
                            <h2 className="text-2xl font-medium mb-2">Handmade pieces that took time to make</h2>
                            <p className='text-[#9F9F9F]  text-[13px] lg:text-[15px]'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                                tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                                vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                                tristique posuere.
                            </p>
                        </article>
                    </section>
                    <aside className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg mb-6">
                            <div className='w-full relative '>
                               <input type="text"  className='border w-full rounded-lg py-2'/>
                               <Image src={search} alt='search' className='absolute h-5 top-3 right-3' />
                            </div>
                            <h3 className="text-[24px] font-medium my-4">Categories</h3>
                            <div className='text-[#9F9F9F]'>
                                 <p className='flex justify-between'>Crafts <span>2</span></p>
                                <p className='flex justify-between'>Design <span> 1</span></p>
                                <p className='flex justify-between'>Handmade <span> 2</span></p>
                                <p className='flex justify-between'>Interior <span> 1</span></p>
                                <p className='flex justify-between'>Wood <span> 3</span></p>
                            
                            </div>
                               
                        </div>
                        <div className="bg-white p-6 rounded-lg  mb-6">
                            <h3 className="text-[24px] font-medium mb-4">Recent Posts</h3>
                            <div>
                                <div className='flex gap-4'>
                                    <Image src={img1} className='h-16 w-16 rounded-xl' alt='img' />
                                    <div>
                                         <h2 className='w-[130px] text-[14px]'>Going all-in with millennial design</h2>
                                    <p className='text-[12px] text-[#9F9F9F]'>03 Aug 2022</p>
                                    </div>
                                   
                                </div>
                                <div className='flex mt-10 gap-4'>
                                    <Image src={img2} className='h-16 w-16 rounded-xl' alt='img' />
                                    <div>
                                         <h2 className='w-[130px] text-[14px]'>Exploring new ways of decorating</h2>
                                    <p className='text-[12px] text-[#9F9F9F]'>03 Aug 2022</p>
                                    </div>
                                   
                                </div>

                                <div className='flex mt-10 gap-4'>
                                    <Image src={img3} className='h-16 w-16 rounded-xl' alt='img' />
                                    <div>
                                         <h2 className='w-[130px] text-[14px]'>Handmade pieces that took time to make</h2>
                                    <p className='text-[12px] text-[#9F9F9F]'>03 Aug 2022</p>
                                    </div>
                                   
                                </div>

                                <div className='flex mt-10 gap-4'>
                                    <Image src={img4} className='h-16 w-16 rounded-xl' alt='img' />
                                    <div>
                                         <h2 className='w-[130px] text-[14px]'>Modern French style</h2>
                                    <p className='text-[12px] text-[#9F9F9F]'>03 Aug 2022</p>
                                    </div>
                                   
                                </div>

                                <div className='flex mt-10 gap-4'>
                                    <Image src={img5} className='h-16 w-16 rounded-xl' alt='img' />
                                    <div>
                                         <h2 className='w-[130px] text-[14px]'>Creative artists</h2>
                                    <p className='text-[12px] text-[#9F9F9F]'>03 Aug 2022</p>
                                    </div>
                                   
                                </div>
                                
                                

                            </div>


                        </div>
                    </aside>
                </main>
                <nav className="mt-6">
                    <ul className="flex justify-center space-x-2">
                        <li className="p-2 px-4 bg-[#B88E2F] text-white rounded-lg shadow-md">1</li>
                        <li className="p-2 px-4 bg-[#F9F1E7] rounded-lg ">2</li>
                        <li className="p-2 px-4 bg-[#F9F1E7] rounded-lg ">3</li>
                        <li className="p-2 px-6 bg-[#F9F1E7]  rounded-lg ">Next</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Blogs;
