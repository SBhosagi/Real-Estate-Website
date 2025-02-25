import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-orange-500 flex items-center gap-2">
        <span className="text-3xl">🏠</span>
        <span>REAL ESTATE</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-6 text-lg font-semibold">
        {["HOME", "ABOUT", "PROPERTIES", "SERVICES", "TESTIMONIALS", "CONTACT"].map(
          (item) => (
            <li key={item} className="hover:text-orange-500 cursor-pointer">
              {item}
            </li>
          )
        )}
        {/* Icons */}
        <li className="text-orange-500 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-telephone-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
            />
          </svg>
        </li>
        <li className="text-orange-500 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
        </li>
      </ul>

     
    </nav>
  );
};

export default Navbar;
