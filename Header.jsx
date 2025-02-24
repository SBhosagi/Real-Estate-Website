import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import { FaPhoneAlt, FaUserCircle } from "react-icons/fa";
import { useDarkMode } from "../components/DarkmodeContext";

const Header = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Properties", path: "properties" },
    { link: "Services", path: "services" },
    { link: "Testimonials", path: "testimonials" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <nav
      className={`${
        darkMode ? "dark:bg-black" : "bg-[#f3f3f3]"
      } flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold text-orange-500 flex items-center gap-2">
        <span className="text-3xl">🏠</span>
        <span>REAL ESTATE</span>
      </div>

      {/* Desktop Navigation */}
      <ul className="lg:flex justify-center items-center gap-8 hidden">
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

      {/* Mobile menu button */}
      <div className="flex justify-center items-center lg:hidden" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FaXmark className="text-black dark:text-white text-2xl cursor-pointer" />
        ) : (
          <FaBars className="text-black dark:text-white text-2xl cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="w-full bg-slate-800 p-4 absolute top-[80px] left-0">
          <ul className="flex flex-col justify-center items-center gap-2 w-full">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center"
                  to={path}
                  spy={true}
                  offset={-100}
                  smooth={true}
                  onClick={closeMenu}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
      )}

    </nav>
  );
};

export default Header;
