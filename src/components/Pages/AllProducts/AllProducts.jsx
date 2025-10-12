import React from "react";
import { GoArrowRight } from "react-icons/go";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

const BestSaller = () => {
  const axiosInstance = useAxios();

  const {
    data: products = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const res = await axiosInstance.get("/all-products");
      return res.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load products 😢</p>;

  return (
    <div className="">
      {/* top */}
      <div className="bg-[#F9E4CB] p-3 relative  lg:w-[100vw] lg:right-[9.05vw]">
        <div className="flex justify-between w-5/6 mx-auto">
          <div className="flex gap-10 text-[18px] text-[#000000] font-medium">
            <Link className="font-bold">All Product</Link>
            <Link>Face</Link>
            <Link>Brow</Link>
            <Link>Eye</Link>
            <Link>Lip</Link>
            <Link>Sets</Link>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-bold">Sort:</label>
            <select className="  px-2 py-1 text-[18px]">
              <option value="featured">Featured</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="rating-high-low">Customer Rating</option>
              <option value="newest">Newest Arrivals</option>
              <option value="bestselling">Best Selling</option>
            </select>
          </div>
        </div>
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
            <h3 className="font-semibold text-[20px] ">{product.name}</h3>

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
