import React, { useState, useEffect } from "react";

const Hero = () => {
  const images = [
    "https://i.ibb.co/KzGY2cxQ/1157cfd8a0d89044407438fa1c4119bdf39ea7fb.jpg",
    "https://i.ibb.co/cS8nD9sg/213fd250bb0bc5f9ffa2d884670fccd9297d1776.jpg",
    "https://i.postimg.cc/rsBgRfqC/female-visagiste-doing-makeup.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // প্রতি 5 সেকেন্ডে image change হবে

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative  lg:w-[100vw] lg:right-[9.05vw] h-screen overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt={`Hero ${index}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Hero Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col  text-white   bg-black/25"></div>

      <div className="relative h-screen  text-white w-5/6   top-50 justify-center items-center mx-auto">
        <h1 className="lg:text-[60px] text-[30px] font-bold">
          Discover your skin's true <br />
          potential
        </h1>
        <p className="font-semibold text-xl  lg:text-2xl lg:mt-[30px] lg:mb-[60px] mt-[20px] mb-[40px]">
          Premium skincare that combines innovation with clean, effective <br />
          ingredients for all skin types.
        </p>
        <div className="flex gap-5 ">
          <button className=" text-black text-[16px]  py-2 px-3 lg:px-5 rounded-full bg-white">
            Shop Now
          </button>
          <button className="text-black text-[16px]  py-2 px-3 lg:px-5 rounded-full bg-white">
            Abut Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
