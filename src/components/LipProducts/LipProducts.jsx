import React from "react";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router";
import useAxios from "../../hooks/useAxios";
import Loading from "../Pages/Loading/Loading";

const LipProducts = () => {
  const axiosInstance = useAxios();

  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ["lip-products"],
    queryFn: async () => {
      const result = await axiosInstance.get("/lip-products");
      return result.data;
    },
  });

  if(isLoading){
    return <Loading></Loading>
  }
  if (error) return <p>Failed to load products 😢</p>;

  return (
    <>
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
    </>
  );
};

export default LipProducts;
