// data.js
import prod1 from '@/assets/imgs/prod1.png'
import prod2 from '@/assets/imgs/prod2.png'
import prod3 from '@/assets/imgs/prod3.png'
import prod4 from '@/assets/imgs/prod4.jpg'
import prod5 from '@/assets/imgs/prod5.png'
import prod6 from '@/assets/imgs/prod6.png'
import prod7 from '@/assets/imgs/prod7.jpg'
import prod8 from '@/assets/imgs/prod8.jpg'

const products = [
    {
      id: "1", 
      image: prod1,
      label: 30,  
      title: "Syltherine",
      description: "Stylish cafe chair",
      new_price: 2500,
      new_product: false, 
    },
    {
      id: "2", 
      image: prod2,
      label: 0, 
      title: "Leviosa",
      description: "Stylish cafe chair",
      new_price: 2500,
      new_product: false,  
    },
    {
      id: "3",
      image: prod3,
      label: 50,  
      title: "Lolito",
      description: "Luxury big sofa",
      new_price: 7000,
      new_product: false,
    },
    {
      id: "4",
      image: prod4,
      label: 0,  
      title: "Respira",
      description: "Outdoor bar table and stool",
      new_price: 500,
      new_product: true,  
    },
    {
      id: "5", 
      image: prod5,
      label: 0,  
      title: "Grifo",
      description: "Night lamp",
      new_price: 1500,
      new_product: false,
    },
    {
      id: "6", 
      image: prod6,
      label: 0,  
      title: "Muggo",
      description: "Small mug",
      new_price: 1500,
      new_product: true,
    },
    {
      id: "7",
      image: prod7,
      label: 50,  
      title: "Pingky",
      description: "Cute bed set",
      new_price: 7000,
      new_product: false,
    },
    {
      id: "8", 
      image: prod8,
      label: 0, 
      title: "Potty",
      description: "Minimalist flower pot",
      new_price: 500,
      new_product: true,
    }
];

export default products;
