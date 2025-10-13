import React from "react";
import { GoArrowRight } from "react-icons/go";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Link, NavLink } from "react-router";
import Loading from "../Loading/Loading";

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

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (error) return <p>Failed to load products 😢</p>;

  return (
    <div className="">
      {/* top */}
      <div className="bg-[#F9E4CB] p-3 relative  lg:w-[100vw] lg:right-[9.05vw]">
        <div className="flex justify-between w-5/6 mx-auto">
          <div className="flex gap-10 text-[18px] text-[#000000] ">
            <NavLink
              to="/all-products"
              className={({ isActive }) =>
                isActive ? "font-bold text-black" : "text-black"
              }
            >
              All Product
            </NavLink>

            <NavLink
              to="/face-products"
              className={({ isActive }) =>
                isActive ? "font-bold text-black" : "text-black"
              }
            >
              Face
            </NavLink>

            <NavLink
              to="/brow-products"
              className={({ isActive }) =>
                isActive ? "font-bold text-black" : "text-black"
              }
            >
              Brow
            </NavLink>

            <NavLink
              to="/eye-products"
              className={({ isActive }) =>
                isActive ? "font-bold text-black" : "text-black"
              }
            >
              Eye
            </NavLink>

            <NavLink
              to="/lip-products"
              className={({ isActive }) =>
                isActive ? "font-bold text-black" : "text-black"
              }
            >
              Lip
            </NavLink>

            <NavLink
              to="/sets-products"
              className={({ isActive }) =>
                isActive ? "font-bold text-black" : "text-black"
              }
            >
              Sets
            </NavLink>
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
            <div className="relative group w-full">
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={product.images.main}
                  alt={product.name}
                  className="w-full h-80 object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Overlay Background (fade effect) */}
              <div className="absolute inset-0 bg-black/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Center Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white cursor-pointer text-black font-medium flex items-center gap-2 px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition-all duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 2.25h1.386c.51 0 .955.343 1.087.835l.383 1.436M7.5 14.25a3 3 0 11-6 0 3 3 0 016 0zm13.5 0a3 3 0 11-6 0 3 3 0 016 0zM3.75 6h16.5l-1.5 6H5.25L3.75 6z"
                    />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>

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
//       "id": "prod-016",
//       "name": "Brightening Cleanser - Enzyme",
//       "shortName": "Enzyme Cleanser",
//       "category": "Cleansers",
//       "productArea": "Face",
//       "ratingAverage": 4.3,
//       "ratingCount": 132,
//       "price": 19,
//       "compareAtPrice": 29,
//       "discountText": "15% off",
//       "currency": "USD",
//       "images": {
//         "main": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1400&auto=format&fit=crop",
//         "thumbnails": [
//           "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1600180758895-0a5f8a9d8f2b?q=80&w=400&auto=format&fit=crop",
//           "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=400&auto=format&fit=crop"
//         ],
//         "zoom": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2000&auto=format&fit=crop"
//       },
//       "shortDescription": "Gentle enzyme cleanser to exfoliate and brighten dull skin.",
//       "details": "Papain and mild surfactants remove dead skin without irritation.",
//       "theLowdown": [
//         "Brightens",
//         "Mild exfoliation",
//         "Non-abrasive",
//         "Smooth finish"
//       ],
//       "whatElse": "Use 2-3 times weekly.",
//       "uiExtras": {
//         "quantityDefault": 1,
//         "minQuantity": 1,
//         "maxQuantity": 6,
//         "inStock": true
//       }
//     }
