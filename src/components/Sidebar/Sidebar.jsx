// Sidebar.js
import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = ({ open, toggleSidebar }) => {
  const menus = [
    {
      categoryName: "Main",
      categoryIcon: RiSettings4Line,
      options: [
        { name: "dashboard", icon: MdOutlineDashboard, link: "/" },
        { name: "user", icon: AiOutlineUser, link: "/" },
      ],
    },
    {
      categoryName: "Management",
      categoryIcon: RiSettings4Line,
      options: [
        { name: "messages", icon: FiMessageSquare, link: "/" },
        { name: "analytics", icon: TbReportAnalytics, link: "/" },
        { name: "File Manager", icon: FiFolder, link: "/" },
      ],
    },
    {
      categoryName: "Shop",
      categoryIcon: FiShoppingCart,
      options: [
        { name: "Cart", icon: FiShoppingCart, link: "/" },
        { name: "Saved", icon: AiOutlineHeart, link: "/" },
      ],
    },
    {
      categoryName: "Settings",
      categoryIcon: RiSettings4Line,
      options: [{ name: "Setting", icon: RiSettings4Line, link: "/" }],
    },
  ];

  return (
    <div
      className={`bg-[#0e0e0e] min-h-screen ${
        open ? "w-72" : "w-16"
      } duration-500 text-gray-100 px-4`}
    > 
      <div className="mt-4 flex flex-col gap-4 relative">
        {menus.map((menu, i) => (
          <div key={i} className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              {React.createElement(menu.categoryIcon, { size: 20 })}
              <span className={`text-sm font-medium ${!open && "hidden"}`}>
                {menu.categoryName}
              </span>
            </div>
            {menu.options.map((option, j) => (
              <Link
                to={option.link}
                key={j}
                className={`${
                  j > 0 && "mt-2"
                } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
              >
                <div>{React.createElement(option.icon, { size: 20 })}</div>
                <h2
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {option.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
                >
                  {option.name}
                </h2>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
