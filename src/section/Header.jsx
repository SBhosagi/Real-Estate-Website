import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";
import { useDarkMode } from "../components/DarkmodeContext";

const Header = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const navItems = [
    { link: "Home", path: "hero" },
    { link: "About", path: "about" },
    { link: "Properties", path: "properties" },
    { link: "Services", path: "services" },
    { link: "Testimonials", path: "testimonials" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <nav
      className={`${
        darkMode ? 'dark:bg-black' : 'bg-[#f3f3f3]'
      } flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-orange-500 flex items-center gap-2">
        <span className="text-3xl">🏠</span>
        <span>REAL ESTATE</span>
      </div>

      {/* Desktop Navigation */}
      <ul className={`${darkMode ? 'text-white' : 'text-black'} lg:flex justify-center items-center gap-8`}>
        {navItems.map(({ link, path }) => (
          <li key={path}>
            <Link
              className="text-black text-[15px] uppercase font-semibold cursor-pointer px-3 py-2 dark:text-black rounded-lg hover:bg-red-600 hover:text-white"
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile menu icon */}
      <div className="flex justify-center items-center lg:hidden" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaXmark className="text-black dark:text-white text-2xl cursor-pointer" />
        ) : (
          <FaBars className="text-black dark:text-white text-2xl cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0" onClick={closeMenu}>
          <ul className="flex flex-col justify-center items-center gap-2 w-full">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center"
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className='flex justify-center items-center lg:gap-8 gap-2'>
        <div className='flex justify-center items-center lg:gap-3 gap-1'>
          <FaPhoneAlt className='size-5 text-red-600'/>
          <h1 className={`${darkMode ? 'text-white' : 'text-black'} lg:text-xl text-sm font-semibold`}>
            930 829 0912
          </h1>
        </div>

        <div className="flex">
          <div
            onClick={toggleProfileDropdown}
            className=" items-center cursor-pointer p-2  hover:bg-gray-100  rounded-3xl"
          >
            <FaUserCircle className="size-6 text-red-600" />
            {/* <i className="fa-solid fa-angle-down ml-2"></i> */}
          </div>

          {isProfileOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
              <li className="p-2 hover:bg-gray-100">
                <a href="RegisterForm.jsx">Sign up</a>
              </li>
              <li className="p-2 hover:bg-gray-100">
                <a href="LoginForm.jsx">Log in</a>
              </li>
            
             
              <li className="p-2 hover:bg-gray-100">
                <a href="">Log out</a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;