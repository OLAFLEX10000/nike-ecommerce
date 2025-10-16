import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingCart, Menu, X, Heart } from "lucide-react"; // 👈 added Heart icon
import AboutImg from '../src/assets/About-me-img.jpg'
import { useCartStore } from "../src/store/cartStore";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const accountRef = useRef(null);
  const searchRef = useRef(null);
  const location = useLocation();
  const totalItemCart = useCartStore((state)=> state.getTotalItems())

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setIsAccountOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/product/:id" },
    { name: "Cart", path: "/cart" },
    { name: "Contact", path: "/contact" },
  ];

  const isActivePath = (path) => location.pathname === path;

  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              <span className="text-white font-black text-xl">N</span>
            </div>
            <h1 className="font-black text-xl tracking-tight transition-colors duration-300 group-hover:text-red-500">
              Nike Store
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`relative font-medium transition-colors duration-300 hover:text-red-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full ${
                    isActivePath(link.path)
                      ? "text-red-500 after:w-full"
                      : "text-gray-900"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Desktop Search */}
            <div className="hidden md:block relative" ref={searchRef}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-[200px] lg:w-[300px] border border-gray-300 bg-white 
                  rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 
                  focus:ring-red-500 focus:border-transparent transition-all duration-300 placeholder:text-gray-400"
                  onFocus={() => setIsSearchOpen(true)}
                />
                <Search
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-300 hover:text-red-500 cursor-pointer"
                  size={18}
                />
              </div>
            </div>

            {/* Mobile Search */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search size={22} className="text-gray-900" />
            </button>

            {/* Cart & Wishlist */}
            <div className="flex items-center space-x-3">
              {/* Cart */}
              <Link
                to="/cart"
                className="relative p-2 rounded-full hover:bg-gray-100 transition-all duration-300 group hidden sm:block"
              >
                <ShoppingCart
                  size={22}
                  className="text-gray-900 group-hover:text-red-500 transition-colors duration-300"
                />
                {totalItemCart > 0 && (
  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
    {totalItemCart}
  </span>
)}

              </Link>

              {/* Wishlist */}
              <Link
                to="/wishlist"
                className="relative p-2 rounded-full hover:bg-gray-100 transition-all duration-300 group hidden sm:block"
              >
                <Heart
                  size={22}
                  className="text-gray-900 group-hover:text-red-500 transition-colors duration-300"
                />
              </Link>
            </div>

            {/* Account Dropdown */}
            <div className="relative" ref={accountRef}>
              <button
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                className="group relative"
              >
                <div className="w-10 h-10 rounded-full border-2 border-gray-200 overflow-hidden transition-all duration-300 hover:border-red-500 hover:scale-105">
                  <img
                    src={AboutImg}
                    alt="Account"
                    className="w-full h-full object-cover"
                  />
                </div>
                {isAccountOpen && (
                  <div className="absolute -bottom-1 right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                )}
              </button>

              {isAccountOpen && (
                <div className="absolute right-0 mt-4 w-64 bg-white border border-gray-200 rounded-2xl shadow-2xl p-5 z-50">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-red-500">
                      <img
                        src={AboutImg}
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-bold text-gray-900 text-lg">
                      Awolesi Olamide
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      olamideawolesi21@gmail.com
                    </p>

                    <div className="w-full space-y-2">
                      <Link
                        to="/about-me"
                        className="block w-full text-center py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-all duration-300 text-sm font-medium"
                      >
                        My Profile
                      </Link>
                      <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105">
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu */}
            <button
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-gray-900" />
              ) : (
                <Menu size={24} className="text-gray-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white px-4 py-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full border border-gray-300 bg-white rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                autoFocus
              />
              <Search
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-lg">
          <div className="pt-20 px-6">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-4 px-6 rounded-xl text-lg font-semibold transition-all duration-300 ${
                      isActivePath(link.path)
                        ? "bg-red-500 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="sm:hidden">
                <Link
                  to="/cart"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-4 px-6 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  <span>Cart</span>
                 {totalItemCart > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                   {totalItemCart}
                    </span>
                 )}

                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
