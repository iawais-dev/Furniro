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
      id: 1, // Unique ID for each product
      image: prod1,
      label: "30%",  // Discount percentage
      title: "Syltherine",
      description: "Stylish cafe chair",
      new_price: "2.500.000",
      old_price: "3.500.000",
      new_product: false,  // For marking "New" products
    },
    {
      id: 2, // Unique ID for each product
      image: prod2,
      label: "",  // CTA label
      title: "Leviosa",
      description: "Stylish cafe chair",
      new_price: "2.500.000",
      old_price: null,
      new_product: false,  // This is a new product
    },
    {
      id: 3, // Unique ID for each product
      image: prod3,
      label: "-50%",  // Discount percentage
      title: "Lolito",
      description: "Luxury big sofa",
      new_price: "7.000.000",
      old_price: "14.000.000",
      new_product: false,
    },
    {
      id: 4, // Unique ID for each product
      image: prod4,
      label: "New",  // Label indicating this product is new
      title: "Respira",
      description: "Outdoor bar table and stool",
      new_price: "500.000",
      old_price: null,
      new_product: true,  // This is a new product
    },
    {
      id: 5, // Unique ID for each product
      image: prod5,
      label: "",  // Discount
      title: "Grifo",
      description: "Night lamp",
      new_price: "1.500.000",
      old_price: "2.000.000",
      new_product: false,
    },
    {
      id: 6, // Unique ID for each product
      image: prod6,
      label: "New",  // New product label
      title: "Muggo",
      description: "Small mug",
      new_price: "150.000",
      old_price: null,
      new_product: true,
    },
    {
      id: 7, // Unique ID for each product
      image: prod7,
      label: "-50%",  // New product label
      title: "Pingky",
      description: "Cute bed set",
      new_price: "7.000.000",
      old_price: "14.000.000",
      new_product: false,
    },
    {
      id: 8, // Unique ID for each product
      image: prod8,
      label: "New",  // New product label
      title: "Potty",
      description: "Minimalist flower pot",
      new_price: "500.000",
      old_price: null,
      new_product: true,
    }
];

export default products;
