'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import sanityClient from '@sanity/client';
import { useCart } from '@/contexts/CartContext';
import Navbar from '@/Components/Navbar';
import Card from '@/Components/Card'; // Import the Card component
import Footer from '@/Components/Footer';

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

const ProductDetail = ({ params }: { params: Promise<{ id: string }> }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]); // State to hold related products
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [visibleProducts, setVisibleProducts] = useState<number>(4); // Track how many products are visible

  const { id } = React.use(params);

  const fetchProduct = async () => {
    const query = `*[_type=="product" && _id == $id][0]{
      _id,
      title,
      price,
      description,
      isNew,
      discountPercentage,
      "imageUrl": productImage.asset->url,
      tags
    }`;
    const data = await sanity.fetch(query, { id });
    setProduct(data);
  };

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
    setRelatedProducts(data);
  };

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4); // Increment by 4 each time
  };

  useEffect(() => {
    if (id) {
      fetchProduct();
      fetchAllProducts(); // Fetch all products
    }
  }, [id,fetchProduct]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product._id,
        title: product.title,
        image: product.imageUrl,
        new_price: product.price,
        quantity,
      });
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, parseInt(e.target.value));
    setQuantity(value);
  };

  if (!product) {
    return <div className="text-center mt-10">Product not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <div className="flex flex-col w-fit mx-auto lg:flex-row items-center gap-8">
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={500}
          height={500}
          className="rounded-md"
        />
        <div className='lg:w-[700px]'>
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-3xl text-gray-400 font-semibold mt-4">
            Rs. {product.price.toFixed(2)}
            {product.discountPercentage > 0 && (
              <span className="text-sm text-red-500 ml-2">
                -{product.discountPercentage}% Off
              </span>
            )}
          </p>
          <p className="text-gray-600 mt-2">{product.description}</p>

          {product.isNew && (
            <span className="text-green-500 block mt-2">New Product</span>
          )}

          <div className='flex items-center mt-5 gap-4'>
            <div className="flex items-center ">
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                className="w-16 pl-5 p-2 border-2 border-black text-center rounded-lg"
              />
            </div>

            <button
              onClick={handleAddToCart}
              className="border-2 border-black py-2 px-6 rounded-lg"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Tags:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section (Show all products with pagination) */}
      <div className="mt-16">
        <h2 className="text-3xl text-center font-semibold">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          {relatedProducts.slice(0, visibleProducts).map((relatedProduct) => (
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
        {visibleProducts < relatedProducts.length && (
          <div className="text-center mt-8">
                  <button className="border my-10 border-[#B88E2F] text-[#B88E2F] px-10 py-5 mx-auto w-[200px]" onClick={loadMoreProducts}>Show More</button>

          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default ProductDetail;
