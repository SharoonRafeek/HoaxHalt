"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <Link className="text-white text-lg font-semibold" href="/">
          HoaxHalt
        </Link>

        {/* Hamburger menu */}
        <button
          onClick={toggleMenu}
          className={`md:hidden ${menuOpen ? "text-white" : "text-gray-300"}`}
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Cross Icon */}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.12 12l5.94-5.94a1 1 0 00-1.41-1.41L12 10.59 6.06 4.65a1 1 0 00-1.41 1.41L10.59 12l-5.94 5.94a1 1 0 001.41 1.41L12 13.41l5.94 5.94a1 1 0 001.41-1.41L13.41 12l5.94-5.94a1 1 0 00-1.41-1.41L12 10.59 6.06 4.65a1 1 0 00-1.41 1.41L10.59 12 4.65 17.94a1 1 0 001.41 1.41L12 13.41l5.94 5.94a1 1 0 001.41-1.41z"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Hamburger Icon */}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21 4H3a1 1 0 00-1 1v2a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1zM21 10H3a1 1 0 00-1 1v2a1 1 0 001 1h18a1 1 0 001-1v-2a1 1 0 00-1-1zM3 17a1 1 0 100 2h18a1 1 0 100-2H3z"
              />
            </svg>
          )}
        </button>

        {/* Nav links */}
        <div
          className={`md:flex md:items-center ${
            menuOpen ? "block" : "hidden"
          } md:block`}
        >
          <Link
            className="text-white hover:underline hover:text-gray-200 block md:inline-block mt-4 md:mt-0 md:ml-6"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-white hover:underline hover:text-gray-200 block md:inline-block mt-4 md:mt-0 md:ml-6"
            href="/"
          >
            About
          </Link>
          <Link
            className="text-white hover:underline hover:text-gray-200 block md:inline-block mt-4 md:mt-0 md:ml-6"
            href="/"
          >
            Contact
          </Link>
          <Link
            className="text-white font-bold hover:underline hover:text-gray-200 block md:inline-block mt-4 md:mt-0 md:ml-6"
            href="/"
          >
            Login
          </Link>

          {/* Add more nav links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
