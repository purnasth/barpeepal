import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  { label: "Home", link: "/" },
  { label: "About Us", link: "/about" },
  {
    label: "Rooms",
    subItems: [
      { label: "Deluxe Room", link: "/rooms/deluxe" },
      { label: "Super Deluxe Room", link: "/rooms/super-deluxe" },
      { label: "Executive Suite", link: "/rooms/executive-suite" },
    ],
  },
  { label: "Restaurant & Bar", link: "/restaurant-bar" },
  { label: "Facilities", link: "/facilities" },
  { label: "Meeting & Events", link: "/events" },
  { label: "Recreation", link: "/recreation" },
  { label: "Gallery", link: "/gallery" },
  { label: "Contact Us", link: "/contact" },
];

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isRoomsOpen, setIsRoomsOpen] = useState(false);
  const location = useLocation();

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

  const gradientStyle = {
    background: "radial-gradient(at center bottom, #ffffff, #454723)",
  };

  return (
    <nav className={`fixed top-0 w-full transition-all z-50 `}>
      <div
        className={`flex items-center justify-between px-4 z-[99] transition-all duration-300 h-20 ${
          isSticky ? "gradient-background" : "bg-transparent"
        }`}
        style={isSticky ? gradientStyle : {}}
      >
        <div
          className={`flex items-center justify-center gap-1 lg:gap-2 text-white cursor-pointer transition-all duration-300 ${
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
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            )}
          </svg>
          <span className="text-white text-base opacity-0 lg:text-xl">
            Menu
          </span>
        </div>

        <Link
          to="/"
          className={`text-white font-bold transition-all duration-300 ${
            isSticky ? "scale-100 md:scale-[0.65]" : "bg-transparent mt-10"
          }`}
        >
          <img
            src="https://www.barpeepalresort.com/images/preference/3aIeR-bar-peepal-logo.png"
            alt="Bar Peepal Resort Logo"
            className="w-20 h-20 md:w-40 md:h-40 object-contain drop-shadow-lg"
          />
        </Link>

        <button
          className={`px-4 md:px-6 py-2 bg-transparent my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#454722] before:to-[#696935] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff] text-xl lg:text-lg ${
            isSticky ? "scale-90" : ""
          }`}
        >
          Book
          <FaArrowRight className="ml-2 hidden lg:block" />
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
        } duration-300 ease-in-out bg-light-primary z-[99] list-none overflow-y-auto`}
      >
        <div className="flex items-center justify-between text-white p-4">
          <Link to="/">
            <img
              src="https://www.barpeepalresort.com/images/preference/3aIeR-bar-peepal-logo.png"
              alt="Bar Peepal Resort Logo"
              className="w-28 h-20 lg:w-40 lg:h-28 object-contain drop-shadow-lg bg-white rounded-lg"
            />
          </Link>
          <svg
            className="w-8 h-8 mr-5"
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
                  className={`flex items-center justify-between text-white p-4 text-base md:text-lg transition-all duration-300 ${
                    isRoomsOpen ? "" : ""
                  } ${
                    location.pathname.includes(item.link) ? "bg-red-500" : ""
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
                  className={`text-white block p-4 text-base md:text-lg transition-all duration-200 ${
                    location.pathname === item.link
                      ? "bg-white text-primary rounded-xl"
                      : ""
                  }`}
                  onClick={closeNav}
                >
                  {item.label}
                </Link>
              )}
              {item.subItems && isRoomsOpen && (
                <ul
                  className={`ml-6 text-white block p-4 py-0 ${
                    isRoomsOpen ? "-translate-y-0" : "-translate-y-full"
                  }`}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={subItem.link}
                        className={`text-white block p-2 text-base md:text-lg ${
                          location.pathname === subItem.link ? "bg-red-500" : ""
                        }`}
                        onClick={closeRooms}
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
