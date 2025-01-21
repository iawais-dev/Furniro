// 'use client';
// import React, { useEffect, useState } from 'react';
// import sanityClient from '@sanity/client';
// import Card from './Card';

// const sanity = sanityClient({
//   projectId: "j2bjwxq6",
//   dataset: 'production',
//   apiVersion: '2023-01-01',
//   useCdn: true,
// });

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   description: string;
//   isNew: boolean;
//   discountPercentage: number;
//   imageUrl: string;
//   productImage: {
//     asset: {
//       _ref: string;
//     };
//   };
//   tags: string[];
// }

// function Products() {
//   const [products, setProducts] = useState<Product[]>([]);

//   const fetchProducts = async () => {
//     try {
//       const query = `*[_type=="product"]{
//         _id,
//         title,
//         price,
//         description,
//         discountPercentage,
//         "imageUrl": productImage.asset->url,
//         tags
//       }`;
//       const data = await sanity.fetch(query);
//       setProducts(data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };


//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div className="px-4 mb-5 lg:mb-20">
//       <h1 className="text-center text-3xl font-bold my-6">API PRODUCTS</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto mt-10 w-fit">
//         {products.map((product, index) => (
//           <Card
//           id={product._id}
//           key={index}
//           image={product.imageUrl}
//           label={product.discountPercentage}
//           title={product.title}
//           description={product.description}
//           new_price={product.price}
//           new_product={product.isNew}
//         />
//         ))}
//       </div>

//     </div>
//   );
// }

// export default Products;
