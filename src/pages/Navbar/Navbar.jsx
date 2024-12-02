import React, { useState } from "react";
import logo from "../../assests/images/image 1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import staticServices from "../../CommonServices/Static";
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="text-lg font-bold">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-[#6D6E71] hover:text-black">
            Find Suppliers
          </a>
          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center text-[#6D6E71] hover:text-black focus:outline-none"
            >
              <span>Find Service Tags</span>
              <svg
                className={`w-4 h-4 ml-1 transform transition-transform ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute top-full mt-2 bg-white border rounded shadow-lg w-48 z-20">
                {staticServices.ServiceTag.map((tag) => (
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-[#6D6E71] hover:bg-gray-100"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            )}
          </div>
          {/* Login/Signup */}
          <a
            href="/"
            className="border-2 border-[#00732F] text-[#00732F] px-4 py-2 rounded hover:bg-[#00732F] hover:text-white transition duration-300"
          >
            Login/Signup
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden" onClick={toggleMenu}>
          <FaBars size={24} className="text-[#6D6E71]" />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-30 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between p-4 border-b">
          <span className="text-lg font-bold">Menu</span>
          <FaTimes size={24} onClick={toggleMenu} />
        </div>
        <div className="p-4 space-y-4">
          <a href="/" className="block text-[#6D6E71] hover:text-black">
            Find Suppliers
          </a>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center w-full text-[#6D6E71] hover:text-black"
            >
              <span>Find Service Tags</span>
              <svg
                className={`w-4 h-4 ml-1 transform transition-transform ${
                  dropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="mt-2 bg-white border rounded shadow-lg w-full z-20">
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-[#6D6E71] hover:bg-gray-100"
                >
                  Service Tag 1
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-[#6D6E71] hover:bg-gray-100"
                >
                  Service Tag 2
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-[#6D6E71] hover:bg-gray-100"
                >
                  Service Tag 3
                </a>
              </div>
            )}
          </div>
          <a
            href="/"
            className="block text-[#00732F] border-2 border-[#00732F] px-4 py-2 rounded hover:bg-[#00732F] hover:text-white transition duration-300"
          >
            Login/Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
