import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-900">
      <div className="md:w-64 md:flex-shrink-0">
        <div className="flex justify-between items-center px-4 py-3 md:px-6">
          <h2 className="text-xl font-bold text-white">Sidebar</h2>
          <button
            type="button"
            className="md:hidden rounded-md p-2 hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
            onClick={toggleMenu}
          >
            <svg
              className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav
          className={`md:block ${isOpen ? 'block' : 'hidden'} px-4 py-6 md:p-0 md:bg-gray-900 md:overflow-y-auto`}
        >
          <ul className="md:divide-y md:divide-gray-800">
            <li>
              <Link
                to="/agent/dashboard"
                className="text-white block hover:text-gray-400 font-semibold py-2 md:py-3 md:pl-3"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/agent/add-house"
                className="text-white block hover:text-gray-400 font-semibold py-2 md:py-3 md:pl-3"
              >
                Add House
              </Link>
            </li>
            <li>
              <Link
                to="/agent/house-list"
                className="text-white block hover:text-gray-400 font-semibold py-2 md:py-3 md:pl-3"
              >
                House List
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
