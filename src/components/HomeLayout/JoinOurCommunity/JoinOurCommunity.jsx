import React from "react";

const JoinOurCommunity = () => {
  return (
    <div className="mb-15">
      <div className="text-center my-15">
        <h1 className="text-[32px] font-bold text-[#000000CC]">
          Join Our Community
        </h1>
        <p className="font-medium text-[#000000CC] text-[18px] pt-3">
          Subscribe to our newsletter for exclusive offers, skincare tips, and
          new product <br /> announcements.
        </p>
      </div>
      
      {/* 2nd div */}
      <div className="flex gap-8 justify-center">
        <input
          type="email"
          className=" px-5 text-base w-2/6 h-12 rounded-full  text-[#1E2A38]  border border-[#00000033] focus:ring-0 placeholder:text-gray-400"
          placeholder="Your email address"
          name="email"
          id="email"
        />
        <button className="py-3 px-7 cursor-pointer bg-[#F092B0] rounded-full text-white"  type="submit">Submit</button>
      </div>
    </div>
  );
};

export default JoinOurCommunity;