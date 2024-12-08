import img1 from '@/assets/imgs/range1.png'
import img2 from '@/assets/imgs/range2.png'
import img3 from '@/assets/imgs/range3.png'
import Image from 'next/image';

export default function Categories() {


    return (
        <section className="py-16 ">
            <div className="container mx-auto">
                <div className="flex flex-col justify-center items-center gap-0">
                    <h2 className="text-[25px] lg:text-[32px] font-bold text-center">
                        Browse The Range
                    </h2>
                    <p className="text-[14px] lg:text-[20px] text-center text-[#666666] font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center mt-20 gap-20">
                    {[
                        { src: img1, label: "Dining" },
                        { src: img2, label: "Living" },
                        { src: img3, label: "Bedroom" },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            {/* Card Container */}
                            <div className="w-[300px] h-[400px] overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src={item.src}
                                    alt={item.label}
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            {/* Text Outside the Card */}
                            <h2 className="text-[16px] lg:text-[24px] font-semibold text-center mt-4">
                                {item.label}
                            </h2>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}
