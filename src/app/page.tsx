import Categories from "@/Components/Category";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import ImageSlider from "@/Components/ImageSlider";
import Navbar from "@/Components/Navbar";
import Product_listing from "@/Components/Product_listing";
import Promotion from "@/Components/Promo";
import YourSetup from "@/Components/YourSetup";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Categories/>
      <Product_listing/>
      <Promotion/>
      <YourSetup/>
      <Footer/>
    </div>
  );
}
