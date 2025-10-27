import React from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import Loading from "../Loading/Loading";

const ViewDetails = () => {
  const axiosInstance = useAxios();
  const { id } = useParams();

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await axiosInstance.get(`/product/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <Loading></Loading>;

  return (
    <div className="flex">
      <div className="flex flex-3 gap-7 ">
        {/* 1st div */}
        <div className="flex flex-col gap-5 flex-1">
          <img
            className="h-1/5 object-cover rounded"
            src={product.images.thumbnails[0]}
            alt=""
          />
          <img
            className="h-1/5 object-cover rounded"
            src={product.images.thumbnails[1]}
            alt=""
          />
          <img
            className="h-1/5 object-cover rounded"
            src={product.images.thumbnails[2]}
            alt=""
          />
          <img
            className="h-1/5 object-cover rounded"
            src={product.images.thumbnails[3]}
            alt=""
          />
        </div>

        {/* 2nd div */}
        <div className="flex-3 w-fit flex items-center justify-center">
          <img
            className="h-full object-cover rounded"
            src={product.images.main}
            alt=""
          />
        </div>
      </div>

      <div className="flex-2">
        <h2>{product.name}</h2>
        <p>{product.shortDescription}</p>
      </div>
    </div>
  );
};

export default ViewDetails;

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
