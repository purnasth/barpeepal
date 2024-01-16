import React, { useState, useEffect } from "react";
import logo from "/logo.svg";
import logoWhite from "/logo_white.svg";
import { HiArrowLongRight } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  { label: "Home", link: "/home" },
  { label: "About Us", link: "/about" },
  {
    label: "Rooms & Suites",
    subItems: [
      { label: "Deluxe Room", link: "/rooms/deluxe" },
      { label: "Super Deluxe Room", link: "/rooms/super-deluxe" },
      { label: "Executive Suite", link: "/rooms/executive-suite" },
    ],
  },
  { label: "Restaurant & Bar", link: "/restaurant-bar" },
  { label: "Meeting & Events", link: "/events" },
  { label: "Facilities", link: "/services" },
  { label: "Recreation", link: "/recreation" },
  { label: "Gallery", link: "/gallery" },
  { label: "Contact Us", link: "/contact" },
];

// Helper function to check if a given link is active
const isActive = (link) => {
  return location.pathname.includes(link);
};

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isRoomsOpen, setIsRoomsOpen] = useState(false);
  const location = useLocation();

  const logoToRender = isSticky ? logo : logoWhite;

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setIsRoomsOpen(false); // Close the rooms dropdown when the nav is toggled
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const toggleRooms = () => {
    setIsRoomsOpen(!isRoomsOpen);
  };

  const closeRooms = () => {
    setIsRoomsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed top-0 w-full transition-all z-50 bg-gradient-to-t from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.8)]`}
    >
      <div
        className={`flex items-center justify-between px-4 z-[99] transition-all duration-300 h-20 ${
          isSticky ? "backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div
          className={`flex items-center justify-center gap-1 lg:gap-2 text-peepal-300 cursor-pointer transition-all duration-300 ${
            isSticky ? "scale-90" : ""
          }`}
          onClick={toggleNav}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isNavOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h8M4 12h16m-7 6h7"
              ></path>
            )}
          </svg>
          <span className="text-peepal-300 text-base opacity-0 lg:opacity-100 lg:text-xl">
            Menu
          </span>
        </div>

        <Link
          to="/"
          className={`text-peepal-300 font-bold transition-all duration-300 ${
            isSticky ? "scale-100 md:scale-[0.65]" : "bg-transparent mt-10"
          }`}
          style={{
            mixBlendMode: isSticky ? "normal" : "difference", // Use 'difference' when background is transparent
          }}
        >
          <img
            src={logoToRender}
            alt="Bar Peepal Resort Logo"
            className="w-20 h-20 md:w-40 md:h-40 object-contain drop-shadow-lg"
          />
        </Link>

        <button
          className={`px-4 md:px-6 py-2 bg-transparent my-3 flex items-center justify-center cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#454722] before:to-[#696935] before:transition-all before:duration-500 before:ease-in-out before:z-[-1]  hover:before:left-0 text-[#fff] text-xl lg:text-lg ${
            isSticky ? "scale-90 hidden md:flex" : ""
          }`}
        >
          Book
          <HiArrowLongRight className="text-2xl ml-2 hidden lg:block" />
        </button>
      </div>

      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black opacity-80 z-[-1]"
          onClick={closeNav}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 w-3/4 lg:w-1/4 h-full transition-all ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } duration-300 ease-in-out bg-peepal-900 z-[99] list-none overflow-y-auto`}
      >
        <div className="flex items-center justify-between text-peepal-300 p-4">
          <Link to="/">
            <img
              src={logo}
              alt="Bar Peepal Resort Logo"
              className="w-28 h-20 lg:w-40 lg:h-24 object-contain drop-shadow-lg bg-peepal-300 rounded-lg"
            />
          </Link>
          <svg
            className="w-8 h-8 mr-5 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={closeNav}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <ul className="px-4">
          {navigationItems.map((item, index) => (
            <li key={index}>
              {item.subItems ? (
                <div
                  className={`flex items-center justify-between text-peepal-300 px-4 py-3 my-2 text-base md:text-lg transition-all duration-300 cursor-pointer hover:bg-peepal-300 hover:text-peepal-800 rounded-xl [word-spacing:5px] ${
                    isActive(item.link)
                      ? "bg-peepal-300 text-peepal-800 rounded-xl"
                      : ""
                  }`}
                  onClick={toggleRooms}
                >
                  {item.label}
                  <IoMdArrowDropdown
                    className={`inline-block ml-2 text-2xl transform ${
                      isRoomsOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              ) : (
                <Link
                  to={item.link}
                  className={`block px-4 py-3 my-2 text-base md:text-lg transition-all duration-200 hover:bg-peepal-300 hover:text-peepal-800 rounded-xl [word-spacing:5px] ${
                    isActive(item.link)
                      ? "bg-peepal-300 text-peepal-800 rounded-xl"
                      : "text-peepal-300"
                  }`}
                  onClick={() => {
                    closeNav();
                    closeRooms(); // Close the rooms dropdown when a link is clicked
                  }}
                >
                  {item.label}
                </Link>
              )}
              {item.subItems && isRoomsOpen && (
                <ul
                  className={`ml-2 text-peepal-300 block px-4 py-0 my-2 ${
                    isRoomsOpen ? "-translate-y-0" : "-translate-y-full"
                  }`}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={subItem.link}
                        className={`block px-4 py-3 my-1 text-base md:text-lg hover:bg-peepal-300 hover:text-peepal-800 rounded-xl ${
                          isActive(subItem.link)
                            ? "bg-peepal-300 text-peepal-800 rounded-xl"
                            : "text-peepal-300"
                        }`}
                        onClick={() => {
                          closeNav();
                          closeRooms(); // Close the rooms dropdown when a link is clicked
                        }}
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
