import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import Loading from "../Loading/Loading";
import { NavLink } from "react-router";
import { toast } from "react-hot-toast";

const BestSaller = () => {
  const axiosInstance = useAxios();

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

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

  const handleAddCardData = async (product) => {
    try {
      const res = await axiosInstance.post("/add-to-cart", product);
      if (res.data.success) {
        toast.success("Added to cart!");
      } else {
        toast.error("Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to add to cart!");
    }
  };

  if (isLoading) return <Loading />;
  if (error) return <p>Failed to load products 😢</p>;

  // pagination calculation
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div className="mt-6">
      {/* product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {currentProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg p-4">
            <div className="relative group">
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={product.images.main}
                  alt={product.name}
                  className="w-full h-80 object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-black/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleAddCardData(product)} // ✅ এখন শুধু এই product টা পাঠাচ্ছিস
                  className="bg-white text-black cursor-pointer font-medium px-4 py-2 rounded-full shadow-md hover:bg-gray-100"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <h3 className="font-semibold text-[18px] mt-3">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <p>
              ⭐ {product.ratingAverage} ({product.ratingCount})
            </p>
          </div>
        ))}
      </div>

      {/* pagination */}
      <div className="flex justify-center my-10">
        <nav className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border cursor-pointer rounded disabled:opacity-50"
          >
            ←
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded cursor-pointer ${
                currentPage === i + 1
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 border cursor-pointer rounded disabled:opacity-50"
          >
            →
          </button>
        </nav>
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
