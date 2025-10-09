import React from "react";

const OurSkincarePhilosophy = () => {
  return (
    <div className="bg-[#F9E4CB]  mb-12 relative  lg:w-[100vw] lg:right-[9.05vw]">
      <div className="w-5/6  lg:flex  mx-auto">
        <div className="flex-1 py-24 pr-32">
          <h1 className="text-[32px] text-[#000000CC] font-semibold">
            Our Skincare Philosophy
          </h1>
          <p className="text-[18px] py-7 font-medium text-[#000000CC]">
            Seoul Mirage was born from a deep appreciation for Korean skincare
            innovation and the belief that effective products should be
            accessible to everyone. <br /> <br /> We combine time-tested Korean
            ingredients with modern science to create formulations that deliver
            visible results. Each product is meticulously crafted to honor the
            tradition of the multi-step skincare ritual while fitting seamlessly
            into your daily routine. x
          </p>
          <button className="py-2 px-5 bg-white text-black rounded-full">
            About Us
          </button>
        </div>
        <div className="flex-1">
          <img
            className="w-full h-full"
            src="https://i.ibb.co.com/fVymwhtM/9cbca66683f361cd55645b6e434daf901a06f875.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurSkincarePhilosophy;
