import products from "@/assets/data/Product";
import Card from "./Card";
export default function Product_listing() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-[40px] text-center">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto mt-10 w-fit">
        {products.map((product, index) => (
          <Card
            id={product.id}
            key={index}
            image={product.image}
            label={product.label}
            title={product.title}
            description={product.description}
            new_price={product.new_price}
            old_price={product.old_price}
            new_product={product.new_product}
          />
        ))}
      </div>
      <button className="border my-10 border-[#B88E2F] text-[#B88E2F] px-10 py-5 mx-auto w-[200px]">Show More</button>
        </div>
        
    );
  }
  