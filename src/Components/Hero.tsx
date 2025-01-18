import bg from "@/assets/imgs/HeroBg.jpg";

export default function Hero() {
  return (
    <section
      className="bg-gray-100 sm:p-20 md:p-32  bg-cover bg-center lg:flex lg:justify-end lg:p-0 lg:pr-20 lg:py-32 xl:py-52 xl:pr-48"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className=" p-10 w-full md:w-[500px] mx-auto lg:mx-0 lg:w-auto bg-[#FFF3E3]">
        <div className=" ">
        <h2 className="font-semibold lg:text-[16px]">New Arrival</h2>
          <h1 className=" font-bold  text-[35px] lg:text-[52px] lg:w-[600px] lg:pr-48  text-[#B88E2F]">
            Discover Our New Collection
          </h1>
          <p className="text-[#333333] font-medium lg:text-[18px] mt-4">
            perfect furniture to match your style.
          </p>
          <button className="mt-6 py-[10px] px-[40px] lg:py-[25px] lg:px-[72px] bg-[#B88E2F] text-white text-[16px] font-bold transition-all hover:bg-[#a5802a]">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}
