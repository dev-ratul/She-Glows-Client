import React from "react";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router";
import Loading from "../Loading/Loading";

const FaceProducts = () => {
  const axiosInstance = useAxios();

  const { data: products = [] , error, isLoading} = useQuery({
    queryKey: ["/face-products"],
    queryFn: async () => {
      const result = await axiosInstance.get("/face-products");
      return result.data;
    },
  });

  if(isLoading){
    return <Loading></Loading>
  }
  if (error) return <p>Failed to load products 😢</p>;

  return (
    <>


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

export default FaceProducts;
