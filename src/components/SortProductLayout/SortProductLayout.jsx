import React from "react";
import { NavLink, Outlet } from "react-router";

const SortProductLayout = () => {
  return (
    <div>
      <div>
        {/* top */}
        <div className="bg-[#F3F2EC] p-3 relative  lg:w-[100vw] lg:right-[9.05vw]">
          <div className="flex justify-between w-5/6 mx-auto">
            <div className="flex gap-10 text-[18px] text-[#000000] ">
              <NavLink
                to="/all-products"
                end
                className={({ isActive }) =>
                  isActive ? "font-bold text-black" : "text-black"
                }
              >
                All Product
              </NavLink>

              <NavLink
                to="face-products"
                className={({ isActive }) =>
                  isActive ? "font-bold text-black" : "text-black"
                }
              >
                Face
              </NavLink>

              <NavLink
                to="brow-products"
                className={({ isActive }) =>
                  isActive ? "font-bold text-black" : "text-black"
                }
              >
                Brow
              </NavLink>

              <NavLink
                to="eye-products"
                className={({ isActive }) =>
                  isActive ? "font-bold text-black" : "text-black"
                }
              >
                Eye
              </NavLink>

              <NavLink
                to="lip-products"
                className={({ isActive }) =>
                  isActive ? "font-bold text-black" : "text-black"
                }
              >
                Lip
              </NavLink>

              <NavLink
                to="sets-products"
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
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default SortProductLayout;
