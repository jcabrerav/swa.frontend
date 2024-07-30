// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer mr-4"
          onClick={toggleSidebar}
        />
        <Link to="/" className="text-lg font-semibold">
          pages
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
        <div className="relative">
          <img
            src="https://via.placeholder.com/30"
            alt="User avatar"
            className="rounded-full cursor-pointer"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2 z-10">
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-200">
                Your Profile
              </Link>
              <Link to="/activity" className="block px-4 py-2 hover:bg-gray-200">
                Your Activity
              </Link>
              <Link to="/archive" className="block px-4 py-2 hover:bg-gray-200">
                Your Archive
              </Link>
              <hr />
              <Link to="/features" className="block px-4 py-2 hover:bg-gray-200">
                Features
              </Link>
              <Link to="/help" className="block px-4 py-2 hover:bg-gray-200">
                Help
              </Link>
              <Link to="/settings" className="block px-4 py-2 hover:bg-gray-200">
                Settings
              </Link>
              <Link to="/logout" className="block px-4 py-2 hover:bg-gray-200">
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
