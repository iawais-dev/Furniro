import ImageSlider from "./ImageSlider";

export default function Promotion() {
    return (
      <section className="py-16 lg:px-10 flex flex-col  lg:flex-row  lg:items-center lg:justify-center overflow-hidden bg-[#FCF8F3]">
        <div className=" flex flex-col p-10 lg:flex-row "><div className="w-fit">
          <h2 className="text-[32px] lg:text-[40px] font-bold text-[#3A3A3A] w-[500px]">
            50+ Beautiful Rooms Inspiration
          </h2>
          <p className="text-[#616161]  font-medium text-[14px] lg:text-[16px] mt-4">
            Explore curated furniture collections for your dream home.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#B88E2F] font-semibold text-[16px] text-white ">
           Explore More
          </button>
        </div>
        </div>
        <ImageSlider/>
      </section>
    );
  }
  