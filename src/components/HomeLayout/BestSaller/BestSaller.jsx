import React from "react";
import { Link } from "react-router";
import { GoArrowRight } from "react-icons/go";

const BestSaller = () => {
  const productData = [
    {
      id: 1,
      category: "Serums",
      name: "Brightening Vitamin C Serum",
      price: 65,
      rating: 4.9,
      reviews: 86,
      imageUrl:
        "https://i.postimg.cc/9XwjLjb1/0d2e235052edbb334f6ee92194c1f68fb02111f3.jpg",
      collection: "Brightening",
    },
    {
      id: 2,
      category: "Moisturizers",
      name: "Hydra Deep Dive Cream",
      price: 52,
      rating: 4.7,
      reviews: 124,
      imageUrl:
        "https://i.postimg.cc/prwG64WV/28cf4a746213816b287cdffbf7695b00c7a59b7e.jpg",
      collection: "Hydration",
    },
    {
      id: 3,
      category: "Cleansers",
      name: "Gentle Amino Acid Wash",
      price: 35,
      rating: 4.8,
      reviews: 62,
      imageUrl:
        "https://i.postimg.cc/wxRdwd2W/e976a8375e6ef2b097ef89b317924ed0d1b9ab5e.jpg",
      collection: "Sensitive Skin",
    },
    {
      id: 4,
      category: "Toners",
      name: "AHA/BHA Clarifying Toner",
      price: 45,
      rating: 4.5,
      reviews: 45,
      imageUrl:
        "https://i.postimg.cc/bv6jByKf/8dabda51c7e8761d170749f77a9ddd94e53356e6.jpg",
      collection: "Anti-Aging",
    },
    {
      id: 5,
      category: "Masks",
      name: "Overnight Repair Sleeping Mask",
      price: 78,
      rating: 5.0,
      reviews: 201,
      imageUrl:
        "https://placehold.co/300x300/fbcfe8/be185d?text=Sleeping+Mask",
      collection: "Anti-Aging",
    },
    {
      id: 6,
      category: "Essences",
      name: "Snail Mucin Power Essence",
      price: 59,
      rating: 4.6,
      reviews: 98,
      imageUrl:
        "https://placehold.co/300x300/d1fae5/065f46?text=Snail+Essence",
      collection: "Hydration",
    },
    {
      id: 7,
      category: "Serums",
      name: "Hyaluronic Acid Plump Serum",
      price: 68,
      rating: 4.9,
      reviews: 155,
      imageUrl:
        "https://placehold.co/300x300/bfdbfe/1d4ed8?text=HA+Serum",
      collection: "Hydration",
    },
    {
      id: 8,
      category: "Moisturizers",
      name: "Ceramide Barrier Lotion",
      price: 48,
      rating: 4.7,
      reviews: 78,
      imageUrl:
        "https://placehold.co/300x300/fef2f2/ef4444?text=Ceramide+Lotion",
      collection: "Sensitive Skin",
    },
    {
      id: 9,
      category: "Cleansers",
      name: "Oil Control Foaming Cleanser",
      price: 32,
      rating: 4.4,
      reviews: 30,
      imageUrl:
        "https://placehold.co/300x300/ffe4e6/be123c?text=Oil+Cleanser",
      collection: "Brightening",
    },
    {
      id: 10,
      category: "Masks",
      name: "Calming Centella Sheet Mask (5pc)",
      price: 25.0,
      rating: 4.8,
      reviews: 92,
      imageUrl:
        "https://placehold.co/300x300/dcfce7/047857?text=Sheet+Mask",
      collection: "Sensitive Skin",
    },
  ];

  return (
    <>
      <div className="my-12">
        {/* top */}
        <div className="flex justify-between">
          <h3 className="text-[24px] font-medium text-[#000000CC]">
            Bestsellers
          </h3>
          <Link
            to="/all-products"
            className="flex justify-center items-center text-[24px] font-medium text-[#000000CC]"
          >
            View all products <GoArrowRight />
          </Link>
        </div>

        {/* bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
          {productData.slice(0, 4).map((product) => (
            <div key={product.name} className="bg-white rounded-lg p-4 ">
              <img
                src={product.imageUrl}
                alt=""
                className="w-full h-60 object-cover rounded-md"
              />
              <p className="text-[#000000] my-2 font-medium">
                {product.category}
              </p>
              <h3 className="font-semibold text-[20px] ">
                {product.name}
              </h3>

              {/* price design */}
              <div className="flex items-end text-[40px] pb-3">
                <span className="font-bold leading-none">
                  ${String(product.price).charAt(0)}
                </span>
                <span className="font-semibold relative top-4 ">
                  {String(product.price).slice(1)}
                </span>
              </div>

              <div className="flex gap-2 text-sm text-gray-600">
                <p>⭐ {product.rating}</p>
                <p>({product.reviews})</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BestSaller;
