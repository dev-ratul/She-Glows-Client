import React from "react";

const ShopbyCategory = () => {
  const homepageCategories = [
    {
      id: 1,
      name: "Cleansers",
      tagline: "Start fresh with every wash.",
      link: "/shop/cleansers",
      imageUrl:
        "https://i.postimg.cc/GpLYdK9b/d4777029f0c871b9e5983c22e65adb4dd8910efd.jpg",
    },
    {
      id: 2,
      name: "Serums",
      tagline: "Target concerns with potent actives.",
      link: "/shop/serums",
      imageUrl:
        "https://i.postimg.cc/9XwjLjb1/0d2e235052edbb334f6ee92194c1f68fb02111f3.jpg",
    },
    {
      id: 3,
      name: "Moisturizers",
      tagline: "Lock in hydration all day long.",
      link: "/shop/moisturizers",
      imageUrl:
        "https://i.postimg.cc/bv6jByKf/8dabda51c7e8761d170749f77a9ddd94e53356e6.jpg",
    },
    {
      id: 4,
      name: "Masks",
      tagline: "Intense weekly skin nourishment.",
      link: "/shop/masks",
      imageUrl:
        "https://i.postimg.cc/RZQfkySk/f70b48818e64930084c86f863425a882edcf050e-1.jpg",
    },
  ];

  return (
    <div className="bg-[#EBCAD04D] relative lg:w-[100vw] lg:right-[9.05vw]">
      <div className="w-5/6 mx-auto">
        <h1 className="text-2xl py-12 font-medium">Shop by Category</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          {homepageCategories.map((data) => (
            <div key={data.id} className="relative rounded-md overflow-hidden group cursor-pointer">
              {/* image */}
              <img
                src={data.imageUrl}
                alt={data.name}
                className="w-full h-80 object-cover rounded-md group-hover:scale-105 transition duration-500"
              />

              {/* black overlay */}
              <div className="absolute inset-0 bg-black/40 rounded-md group-hover:bg-black/20 transition duration-500"></div>

              {/* text on image */}
              <h2 className="absolute inset-0 flex items-center justify-center text-white font-semibold text-[32px]">
                {data.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopbyCategory;
