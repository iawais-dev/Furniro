'use client';
import Card from "./Card";
import { useEffect, useState } from "react";
import sanityClient from '@sanity/client';

const sanity = sanityClient({
  projectId: 'j2bjwxq6',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  isNew: boolean;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
}

export default function Product_listing() {
  const [visibleProducts, setVisibleProducts] = useState<number>(8); // Track how many products are visible
  const [Products, setProducts] = useState<Product[]>([]); // State to hold related products

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4); // Increment by 4 each time
  };
  const loadLessProducts =()=>{
    setVisibleProducts((prev) => Math.max(prev - 4, 4));

  }

  const fetchAllProducts = async () => {
    const query = `*[_type=="product"]{
      _id,
      title,
      price,
      description,
      isNew,
      discountPercentage,
      "imageUrl": productImage.asset->url,
      tags
    }`;
    const data = await sanity.fetch(query);
    setProducts(data);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-[40px] text-center">Our Products</h1>
      <div className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {Products.slice(0, visibleProducts).map((relatedProduct) => (
            <Card
              key={relatedProduct._id}
              id={relatedProduct._id}
              image={relatedProduct.imageUrl}
              label={relatedProduct.discountPercentage}
              title={relatedProduct.title}
              description={relatedProduct.description}
              new_price={relatedProduct.price}
              new_product={relatedProduct.isNew}
            />
          ))}
        </div>

        {/* Show More Button */}
     <div className="text-center flex flex-col mt-8">   
      {
        visibleProducts < Products.length && (
          
            <button
              className="border mb-5 border-[#B88E2F] text-[#B88E2F] px-10 py-5 mx-auto w-[200px] hover:bg-[#B88E2F] hover:text-white transition duration-300"
              onClick={loadMoreProducts}
            >
              Show More
            </button>
            )}
            {
              visibleProducts > 8 && (
                 <button className={`border mb-10 border-[#B88E2F] text-[#B88E2F] px-10 py-5 mx-auto w-[200px] hover:bg-[#B88E2F] hover:text-white transition duration-300`}
            onClick={loadLessProducts}
            >
              Show less
            </button>
              )
            }
           
          </div>
        
      </div>
    </div>
  );
}
