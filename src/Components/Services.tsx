import React from 'react';
import Image from 'next/image';
import cup from '@/assets/imgs/cup.svg';
import verified from '@/assets/imgs/verified.svg';
import shipping from '@/assets/imgs/shipping.svg';
import support from '@/assets/imgs/Support.svg';

const servicesData = [
  { id: 1, image: cup, title: 'High Quality', subtitle: 'crafted from top materials' },
  { id: 2, image: verified, title: 'Warranty Protection', subtitle: 'Over 2 years' },
  { id: 3, image: shipping, title: 'Free Shipping', subtitle: 'Order over 150 $' },
  { id: 4, image: support, title: '24/7 Support', subtitle: 'Dedicated support' },
];

function Services() {
  return (
    <div className="bg-[#FAF3EA] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-20 p-8 w-fit mx-auto">
      {servicesData.map((service) => (
        <div key={service.id} className="flex items-center space-x-4">
          <Image src={service.image} alt={service.title} width={50} height={50} />
          <div>
            <h1 className="text-[20px] lg:text-[25px] font-semibold">{service.title}</h1>
            <h2 className="text-[15px] lg:text-[20px] font-medium text-[#898989]">{service.subtitle}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
