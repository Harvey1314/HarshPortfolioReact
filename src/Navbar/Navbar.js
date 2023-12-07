import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar(props) {
  const isActive = props.isActive;
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-[#27374D] text-[#DDE6ED] w-screen">
      <div className="container mx-auto flex lg:flex-row items-center justify-between p-5">
        <NavLink to="/" className="text-2xl font-quicksand font-bold">
          HARSH
        </NavLink>
        <div className="lg:hidden p-4">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none focus:text-white"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {!isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 6H5a1 1 0 000 2h14a1 1 0 100-2zM19 11H5a1 1 0 100 2h14a1 1 0 100-2zM19 16H5a1 1 0 100 2h14a1 1 0 100-2z"
                />
              ) : (
                <></>
              )}
            </svg>
          </button>
        </div>
        <div
          className={`lg:flex lg:flex-row lg:items-center lg:justify-between mt-4 lg:mt-0 ${
            isOpen ? "flex flex-col items-center" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <li className="transform translate-x-0 hover:translate-y-1 transition-transform duration-300 ease-in-out">
              <Link
                to="/Home"
                onClick={toggleNavbar}
                className={`px-8 font-quicksand hover:shadow-custom rounded-3xl py-2 ${
                  isActive === "1"
                    ? "py-2 text-[#27374D] bg-[#DDE6ED] rounded-3xl font-bold"
                    : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li className="transform translate-x-0 hover:translate-y-1 transition-transform duration-300 ease-in-out">
              <Link
                to="/Projects"
                onClick={toggleNavbar}
                className={`px-8 font-quicksand hover:shadow-custom rounded-3xl py-2 ${
                  isActive === "2"
                    ? "py-2 text-[#27374D] bg-[#DDE6ED] rounded-3xl font-bold"
                    : ""
                }`}
              >
                Projects
              </Link>
            </li>
            <li className="transform translate-x-0 hover:translate-y-1 transition-transform duration-300 ease-in-out">
              <Link
                to="/Contact"
                onClick={toggleNavbar}
                className={`px-8 font-quicksand hover:shadow-custom rounded-3xl py-2 ${
                  isActive === "3"
                    ? "py-2 text-[#27374D] bg-[#DDE6ED] rounded-3xl font-bold"
                    : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
