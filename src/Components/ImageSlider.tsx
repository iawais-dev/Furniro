'use client'
import { useState } from "react";
import Image from "next/image";
import img1 from '@/assets/imgs/sliderImage1.png';
import img2 from '@/assets/imgs/sliderImage2.png';
import img3 from '@/assets/imgs/sliderImage3.png';

const images = [
  {
    id: 1,
    src: img1,  
    alt: "Image 1",
    title: "Inner Peace",
    subtitle: "Bed Room",
  },
  {
    id: 2,
    src: img2,  
    alt: "Image 2",
    title: "Tranquil Bedroom",
    subtitle: "Living Room",
  },
  {
    id: 3,
    src: img3,  
    alt: "Image 3",
    title: "Serenity",
    subtitle: "Living Room",
  },
];
const slideStyles = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  transition: 'transform 0.5s ease-in-out',
};



function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative flex items-center overflow-hidden">
      {/* Left Side Text and Button */}
      <div className="absolute left-10 bottom-10 z-10 p-5 bg-white bg-opacity-85">
        <h2 className="text-[28px] font-semibold">{images[currentSlide].title}</h2>
        <p className="text-lg mt-2">{images[currentSlide].subtitle}</p>
        <button className="mt-6 px-6 py-2 bg-[#B88E2F] text-white -right-14 bottom-0 absolute">
        &#10095;
        </button>
      </div>

      {/* Image Slider */}
      <div className=" w-full h-[700px] overflow-hidden  relative">
        <Image
          src={images[currentSlide].src}
          alt={images[currentSlide].alt}
          className="object-cover h-full w-full"
        />
      </div>

      {/* Slider Controls (Arrows and Dots) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        {/* Dots */}
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#B88E2F]' : 'bg-white'}`}
            />
          ))}
        </div>
      </div>

      {/* Previous and Next Arrow Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl"
      >
        &#10095;
      </button>
    </div>
  );
}

export default ImageSlider;
