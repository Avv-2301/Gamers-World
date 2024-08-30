import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header class="text-gray-600 body-font bg-blue-500">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <span class="ml-3 text-xl title-font font-medium text-gray-900">Gamer's Vault</span>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <NavLink to={"/"}>
              <a class="mr-5 text-white hover:text-gray-900">Home</a>
            </NavLink>
            <NavLink to={"/all-games"}>
              <a class="mr-5 text-white hover:text-gray-900">Games</a>
            </NavLink>
            <NavLink to={"/contact-us"}>
              <a class="mr-5 text-white hover:text-gray-900">Contact Us</a>
            </NavLink>
            <a class="mr-5 text-white hover:text-gray-900">About Us</a>
          </nav>
          <Link to={"/login"}>
            <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 mr-4 shadow-lg">
              Login
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
          <Link to={"/register"}>
            <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 shadow-lg">
              Register
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src={""}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover cursor-pointer ml-8"
            />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
