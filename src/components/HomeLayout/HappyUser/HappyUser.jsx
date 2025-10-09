import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const HappyUser = () => {
  const userReview = [
    {
      id: 1,
      name: "Sarah Miller",
      rating: 5,
      review:
        "Landfolio is incredibly user-friendly! It was a game-changer for our project. The customization options are outstanding and easy to implement.",
      image_url:
        "https://i.ibb.co.com/Gf6Hny2r/5339b573abd28080a2df783262f824706fd0c9c0.jpg",
    },
    {
      id: 2,
      name: "Alex Johnson",
      rating: 4,
      review:
        "A great tool for our design team. They could quickly build layouts. However, I wish there were a few more advanced templates available.",
      image_url:
        "https://i.ibb.co.com/YBxXVBrj/303615638e094f1584d930db5f3aba99441332fb.jpg",
    },
    {
      id: 3,
      name: "Devon Lane",
      rating: 5,
      review:
        "We love Landfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
      image_url:
        "https://i.ibb.co.com/YBxXVBrj/303615638e094f1584d930db5f3aba99441332fb.jpg",
    },
    {
      id: 4,
      name: "Maria Garcia",
      rating: 5,
      review:
        "Landfolio helped us get quick approvals from our clients. The user interface is very clean, intuitive, and highly functional.",
      image_url:
        "https://i.ibb.co.com/YBxXVBrj/303615638e094f1584d930db5f3aba99441332fb.jpg",
    },
    {
      id: 5,
      name: "Ethan Brown",
      rating: 4,
      review:
        "It is much more cost-effective compared to other platforms, and the core functionality is strong. A perfect solution for smaller teams.",
      image_url:
        "https://i.ibb.co.com/YBxXVBrj/303615638e094f1584d930db5f3aba99441332fb.jpg",
    },
    {
      id: 6,
      name: "Jessica White",
      rating: 5,
      review:
        "This platform is simply the best! It has streamlined our workflow significantly and elevated the quality of our design outputs.",
      image_url:
        "https://i.ibb.co.com/YBxXVBrj/303615638e094f1584d930db5f3aba99441332fb.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // প্রতি ৪ সেকেন্ড পর ২টা নতুন রিভিউ দেখাবে
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 2 >= userReview.length ? 0 : prevIndex + 2
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [userReview.length]);

  // বর্তমানে দেখানো ২টা রিভিউ
  const visibleReviews = userReview.slice(currentIndex, currentIndex + 2);

  // কতগুলো dot লাগবে
  const totalDots = Math.ceil(userReview.length / 2);
  const activeDot = Math.floor(currentIndex / 2);

  return (
    <div className=" py-12">
      {/* Title */}
      <div className="text-center mb-12">
        <h3 className="text-[18px] text-[#000000CC] font-medium">
          3020+ Happy Users
        </h3>
        <h1 className="text-[#C7A18A] font-bold text-[40px]">
          Don’t just take our words
        </h1>
      </div>

      {/* Reviews */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-30">
        {visibleReviews.map((review) => (
          <div key={review.id} className="flex bg-white rounded-2xl p-6 lg:py-6">
            {/* Image */}
            <div className="w-1/3">
              <img
                className="h-52 w-52 object-cover rounded-2xl"
                src={review.image_url}
                alt={review.name}
              />
            </div>

            {/* Text */}
            <div className="flex-1 pl-6 flex flex-col justify-center">
              {/* ⭐ Rating */}
              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < review.rating ? "text-yellow-400" : "text-gray-300"
                    }
                  />
                ))}
              </div>

              {/* Review */}
              <p className="pt-6 pb-8 text-[18px] text-[#090914] font-medium leading-relaxed">
                “{review.review}”
              </p>

              {/* Name */}
              <h4 className="text-[18px] text-[#595959] font-semibold">
                {review.name}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-10 gap-3">
        {Array.from({ length: totalDots }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeDot ? "bg-pink-500 scale-110" : "bg-pink-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HappyUser;
