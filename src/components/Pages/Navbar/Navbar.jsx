import React, { useState, useRef, useEffect } from "react";
// FiSearch, FiUser, FiLogOut, AiOutlineMenu, AiOutlineClose আইকন ব্যবহার করা হয়েছে
import { FiSearch, FiUser, FiLogOut, FiLogIn } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { user } = useAuth();
  console.log(user);

  const userRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userRef.current && !userRef.current.contains(event.target)) {
        setIsUserOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // মোবাইল মেনু টগল ফাংশন
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsUserOpen(false);
    setIsSearchOpen(false);
  };

  // সার্চ টগল ফাংশন
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsUserOpen(false);
  };

  // ইউজার মেনু টগল ফাংশন
  const toggleUserMenu = () => {
    setIsUserOpen(!isUserOpen);
    setIsSearchOpen(false);
  };

  return (
    <div className=" ">
      <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
        <div className="lg:max-w-5/6 mx-auto flex items-center justify-between px-6 py-3 h-20">
          {/* Logo + Menu */}
          <div className="flex items-center gap-14">
            {/* Logo */}
            <a href="#">
              <img
                src="https://i.postimg.cc/4Nyzy4fV/Gemini-Generated-Image-f6i1hhf6i1hhf6i1-removebg-preview-Picsart-Background-Remover.png"
                alt="Logo"
                className="h-12 w-auto transform scale-250 object-contain"
              />
            </a>

            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-12 text-[17px] font-medium text-gray-700 h-full">
              {/* Skincare Dropdown */}
              <li className="relative group/skincare h-full flex items-center">
                <button className="hover:text-pink-500 text-[18px] cursor-pointer flex items-center h-full">
                  Skincare ▾
                </button>
                {/* ড্রপডাউন মেনুর প্রস্থ বাড়ানো হয়েছে (w-96) এবং flex gap কমানো হয়েছে (gap-8) */}
                <div className="absolute left-0 top-full pt-2 hidden group-hover/skincare:flex bg-white shadow-lg rounded-xl w-96 p-6 gap-8 z-10 transition-all duration-200 origin-top-left animate-in fade-in zoom-in-95">
                  <div className="flex flex-col gap-2 min-w-[120px]">
                    <a
                      href="#"
                      className="hover:text-pink-500 cursor-pointer transition-colors"
                    >
                      Cleansers
                    </a>
                    <a
                      href="#"
                      className="hover:text-pink-500 cursor-pointer transition-colors"
                    >
                      Essences
                    </a>
                    <a
                      href="#"
                      className="hover:text-pink-500 cursor-pointer transition-colors"
                    >
                      Moisturizers
                    </a>
                  </div>
                  <div className="flex flex-col gap-2 min-w-[120px]">
                    <a
                      href="#"
                      className="hover:text-pink-500 cursor-pointer transition-colors"
                    >
                      Toners
                    </a>
                    <a
                      href="#"
                      className="hover:text-pink-500 cursor-pointer transition-colors"
                    >
                      Serums
                    </a>
                    <a
                      href="#"
                      className="hover:text-pink-500 cursor-pointer transition-colors"
                    >
                      Masks
                    </a>
                  </div>
                </div>
              </li>

              {/* Collections Dropdown */}
              <li className="relative group/collections h-full flex items-center">
                <button className="hover:text-pink-500 text-[18px] cursor-pointer flex items-center h-full">
                  Collections ▾
                </button>
                {/* ড্রপডাউন মেনুর প্রস্থ বাড়ানো হয়েছে (w-80) এবং flex gap কমানো হয়েছে (gap-6) */}
                <div className="absolute left-0 top-full pt-2 hidden group-hover/collections:flex bg-white shadow-lg rounded-xl w-80 p-6 gap-6 z-30 transition-all duration-200 origin-top-left animate-in fade-in zoom-in-95">
                  <div className="flex flex-col gap-2 min-w-[100px]">
                    <a
                      href="#"
                      className="hover:text-pink-500 cursor-pointer transition-colors"
                    >
                      Hydration
                    </a>
                    <a
                      href="#"
                      className="hover:text-pink-500 cursor-pointer transition-colors"
                    >
                      Brightening
                    </a>
                  </div>
                  <div className="flex flex-col gap-2 min-w-[100px]">
                    <a
                      href="#"
                      className="hover:text-pink-500 cursor-pointer transition-colors"
                    >
                      Anti-Aging
                    </a>
                    <a
                      href="#"
                      className="hover:text-pink-500 cursor-pointer transition-colors"
                    >
                      Sensitive Skin
                    </a>
                  </div>
                </div>
              </li>

              <li className="hover:text-pink-500 text-[18px] cursor-pointer flex items-center">
                <a href="#">About</a>
              </li>
              <li className="hover:text-pink-500 text-[18px] cursor-pointer flex items-center">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Right Icons */}
          <div className="flex items-center  gap-5">
            {/* Search */}
            <div className="flex items-center">
              {isSearchOpen ? (
                <input
                  type="text"
                  placeholder="Search"
                  className="border border-gray-300 rounded-full px-5 py-3 outline-none text-sm transition-all duration-300 w-40 sm:w-52 focus:w-64 focus:ring-2 focus:ring-pink-500"
                  onBlur={() => setIsSearchOpen(false)}
                  autoFocus
                />
              ) : (
                <FiSearch
                  className="text-xl text-gray-700 cursor-pointer hover:text-pink-500 transition-colors"
                  onClick={toggleSearch}
                />
              )}
            </div>

            {/* User Dropdown */}
            <div ref={userRef} className="relative">
              <FiUser
                className="text-xl text-gray-700 cursor-pointer hover:text-pink-500 transition-colors"
                onClick={toggleUserMenu}
              />
              {isUserOpen && (
                <div className="absolute right-0 mt-3 bg-white border border-gray-100 shadow-xl rounded-lg p-2 w-40 text-sm z-20 animate-in fade-in slide-in-from-top-1">
                  <a
                    href="#"
                    className="block hover:bg-gray-50 text-gray-700 cursor-pointer p-2 rounded-md transition-colors"
                  >
                    My Account
                  </a>
                  <a
                    href="#"
                    className="block hover:bg-gray-50 text-gray-700 cursor-pointer p-2 rounded-md transition-colors"
                  >
                    Order History
                  </a>
                  <div className="my-1 border-t border-gray-100"></div>

                  {user ? (
                    <button
                      onClick={() => {
                        /* Log out logic here */ toggleUserMenu();
                      }}
                      className="w-full text-left  text-red-500  cursor-pointer p-2 rounded-md transition-colors flex items-center gap-2"
                    >
                      <FiLogOut /> Log Out
                    </button>
                  ) : (
                    <Link
                      to={"/login"}
                      className="w-full text-left  text-[#1877F2]  cursor-pointer p-2 rounded-md transition-colors flex items-center gap-2"
                    >
                      <FiLogIn /> Log In
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* Shopping Bag Icon (যোগ করা হলো) */}
            <a href="#" className="relative">
              <svg
                className="w-6 h-6 text-gray-700 hover:text-pink-500 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                ></path>
              </svg>
              {/* ডেমো ব্যাজ */}
              <span className="absolute top-0 right-0 h-2 w-2 bg-pink-500 rounded-full ring-2 ring-white"></span>
            </a>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              {isMenuOpen ? (
                <AiOutlineClose
                  className="text-2xl cursor-pointer text-gray-700 hover:text-pink-500 transition-colors"
                  onClick={toggleMobileMenu}
                />
              ) : (
                <AiOutlineMenu
                  className="text-2xl cursor-pointer text-gray-700 hover:text-pink-500 transition-colors"
                  onClick={toggleMobileMenu}
                />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu  */}
        <div
          className={`md:hidden bg-white shadow-xl absolute w-full transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-60 opacity-100 py-4 border-t border-gray-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-6 space-y-3">
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="block hover:text-pink-500 cursor-pointer py-1 font-medium text-gray-700"
            >
              Skincare
            </a>
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="block hover:text-pink-500 cursor-pointer py-1 font-medium text-gray-700"
            >
              Collections
            </a>
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="block hover:text-pink-500 cursor-pointer py-1 font-medium text-gray-700"
            >
              About
            </a>
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="block hover:text-pink-500 cursor-pointer py-1 font-medium text-gray-700"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
