import React from "react";
import { FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="w-5/6 mx-auto mb-10">
      <div className="flex justify-between   items-center mb-12">
        {/* 1st */}
        <div className="flex-1">
          <img
            src="https://i.postimg.cc/4Nyzy4fV/Gemini-Generated-Image-f6i1hhf6i1hhf6i1-removebg-preview-Picsart-Background-Remover.png"
            className="h-12 w-auto transform scale-250 object-contain"
            alt=""
          />
          <p className="text-[#000000CC] text-[18px] pt-4 pb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Laborum saepe aspernatur placeat.
          </p>
          <div className="flex gap-3">
            {/* 1. Google Logo (Tailwind: Medium Size, Blue Color) */}
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F092B0] hover:text-red-600 transition duration-300"
            >
              <FaGoogle className="w-5 h-5" />
            </a>

            {/* 2. Facebook Logo (Tailwind: Medium Size, Brand Blue Color) */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F092B0] hover:text-blue-700 transition duration-300"
            >
              <FaFacebook className="w-5 h-5" />
            </a>

            {/* 3. Instagram Logo (Tailwind: Medium Size, Brand Pink/Purple Gradient simulation) */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F092B0] hover:text-pink-600 transition duration-300"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        {/* 2nd */}
        <div className="flex-1">
          <h1 className="text-[32px] font-medium text-[#000000CC]">Shop</h1>
          <div className="flex flex-col py-8 gap-3 text-[18px] text-[#000000CC]">
            <Link to={"/"}>All Products</Link>
            <Link to={"/"}>Bestsellers</Link>
            <Link to={"/"}>New Arrivals</Link>
          </div>
        </div>
        {/* 3rd */}
        <div className="">
          <h1 className="text-[32px] font-medium text-[#000000CC]">About</h1>
          <div className="flex flex-col py-8 gap-3 text-[18px] text-[#000000CC]">
            <Link to={"/"}>About Us</Link>
            <Link to={"/"}>Contact Us</Link>
            <Link to={"/"}>Shipping & Returns</Link>
            <Link to={"/"}>Privacy Policy</Link>
          </div>
        </div>
        1
      </div>
      {/* 2nd part */}
      <div className="w-full h-px bg-[#00000033] mb-5"></div>
      {/* 3rd part */}
      <div>
        <p className="text-[14px] text-[#000000CC]">
          © 2025 Seoul Mirage. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
