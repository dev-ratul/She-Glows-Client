import React from "react";
import { GoArrowRight } from "react-icons/go";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

const BestSaller = () => {
  const axiosInstance = useAxios();

  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const res = await axiosInstance.get("/all-products");
      return res.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load products 😢</p>;

  return (
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
          {products.map((product) => (
            <div key={product.name} className="bg-white rounded-lg p-4 ">
              <img
                src={product.images.main}
                alt=""
                className="w-full h-80 object-cover rounded-md"
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
                <p>⭐ {product.ratingAverage}</p>
                <p>({product.ratingCount})</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default BestSaller;

// {
//       "id": "prod-001",
//       "name": "Velvet Rouge Lipstick - Crimson Bloom",
//       "shortName": "Velvet Rouge - Crimson",
//       "category": "Lipstick",
//       "ratingAverage": 4.8,
//       "ratingCount": 210,
//       "price": 49,
//       "compareAtPrice": 99,
//       "discountText": "Save 50% right now",
//       "currency": "USD",
//       "images": {
//         "main": "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=1400&auto=format&fit=crop",
//         "thumbnails": [
//           "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1536305030016-8a6f45a1b2ff?q=80&w=400&auto=format&fit=crop"
//         ],
//         "zoom": "https://images.unsplash.com/photo-1542831371-d531d36971e6?q=80&w=2000&auto=format&fit=crop"
//       },
//       "shortDescription": "Long-lasting velvet finish lipstick with rich pigmentation and hydration.",
//       "details": "High-pigment formula with moisturizing emollients for long wear and smooth finish.",
//       "theLowdown": [
//         "Velvet satin finish",
//         "Up to 8 hours wear",
//         "Hydrating with Vitamin E",
//         "Transfer-resistant"
//       ],
//       "whatElse": "Cruelty-free & dermatologically tested.",
//       "uiExtras": {
//         "quantityDefault": 1,
//         "minQuantity": 1,
//         "maxQuantity": 10,
//         "inStock": true
//       }
//     }