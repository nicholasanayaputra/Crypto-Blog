import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: "/", link: "Home" },
    { path: "/company", link: "Company" },
    { path: "/about", link: "About" },
    { path: "/pricing", link: "Pricing" },
    { path: "/team", link: "Team" },
    { path: "/contact", link: "Contact" },
    { path: "/blog", link: "Blog" },
  ];
  return (
    <header className="px-4 pt-6 lg:px-[135px] ">
      <nav className="container mx-auto flex justify-between items-center">
        <div>
          <img src={Logo} alt="logo" />
        </div>

        {/* navItem for PC */}
        <ul className="hidden lg:flex gap-5 ">
          {navLinks.map(({ path, link }) => (
            <li key={path} className="text-white text-lg font-normal">
              <NavLink to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>

        {/* button trade */}
        <div>
          <button className="py-3 px-[30px] bg-[#C4C4C4]/10 rounded-full border border-orange text-md shadow-2xl text-white font-semibold hidden lg:block text-sm">
            Trade Now
          </button>

          {/* hamburger menu */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="curson-pointer">
              {isOpen ? (
                <FaXmark className="h-5 w-5 text-white" />
              ) : (
                <FaBars className="h-5 w-5 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Menu items Mobile */}
      </nav>
      <div>
        <ul
          className={`md:hidden gap-12 block text-lg space-y-4 px-4 py-6 mt-14 bg-white ${
            isOpen
              ? "fixed top-0 right-0 w-[200px] h-screen transition-all ease-out duration-300"
              : "fixed top-0 right-[-100%] w-[200px] h-screen bg-white z-10 duration-300"
          }`}
        >
          {navLinks.map(({ path, link }) => (
            <li key={path} className="text-black text-base font-semibold">
              <NavLink to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavbarComponent;
