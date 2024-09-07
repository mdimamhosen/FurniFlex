import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getUserFromLocalStorage } from "../AuthProvider/Utils";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { AppContext } from "../AuthProvider/AppContext";
import { FaCartArrowDown } from "react-icons/fa";
import logo from "../assets/F.png";
import Heading from "../common/Heading";

export default function Navbar() {
  const storedUser = getUserFromLocalStorage();
  const { logout, list } = useContext(AppContext);

  const [isSideMenuOpen, setMenu] = useState(false);
  const navigate = useNavigate();

  const navlinks = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
    // { label: "Categories", link: "/categories" },
    { label: "About us", link: "/aboutus" },
    { label: "Contact us", link: "/contactus" },
  ];

  const handleSignOut = () => {
    logout();
    navigate("/");
  };

  const handleNavLinkClick = () => {
    if (isSideMenuOpen) {
      setMenu(false);
    }
  };

  return (
    <main className="sticky top-0 z-50 bg-white text-black">
      <nav className="flex justify-between container px-6 lg:px-16 mx-auto items-center py-3 ">
        <section className="flex items-center gap-2">
          <FiMenu
            onClick={() => setMenu(true)}
            className="text-xl cursor-pointer lg:hidden"
          />
          <NavLink to="/" className="lg:text-4xl text-xl font-bold">
            <div className="flex items-center gap-1">
              <div className="lg:w-10 hidden   lg:h-10 rounded-full bg-blue-600 lg:flex justify-center items-center">
                <img src={logo} alt="" className=" object-cover" />
              </div>
              <Heading normal="Furni" colored={"flex"} />
            </div>
          </NavLink>
        </section>
        <section className="hidden lg:flex items-center gap-4">
          {navlinks.map((d, i) => (
            <NavLink
              key={i}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-gray-700 text-center  underline underline-thickness-thin"
                  : "  text-center"
              }
              to={d.link}
              onClick={handleNavLinkClick}
            >
              {d.label}
            </NavLink>
          ))}
        </section>

        {/* Cart Menu */}
        <section className="flex items-center gap-4">
          {storedUser && storedUser.isVerified && (
            <Link
              to="/cart"
              className="relative font-bold text-black text-2xl p-2 rounded-full     hover:bg-gray-100 transition-all duration-300 ease-linear"
            >
              <span className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full px-2 py-1 text-xs">
                {list.length}
              </span>
              <FaCartArrowDown />
            </Link>
          )}

          {storedUser && storedUser.isVerified ? (
            <button
              onClick={handleSignOut}
              className="font-semibold  rounded border text-gray-800 border-black hover:scale-105 hover:border-gray-700 transition-all duration-300 ease-linear  px-1 py-1 text-sm  lg:text-base lg:px-2 lg:py-1"
            >
              Logout
            </button>
          ) : (
            <NavLink
              className="font-semibold rounded border text-gray-800 border-black hover:scale-105 hover:border-gray-700 transition-all duration-300 ease-linear   px-1 py-1 text-sm  lg:text-base lg:px-2 lg:py-1"
              to="/login"
            >
              Log In
            </NavLink>
          )}
        </section>

        {/* Side Menu */}
        <div
          className={`fixed h-full w-screen lg:hidden bg-black/50 top-0 right-0 transition-all z-50 ${
            isSideMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-4 z-50 w-[70%]  flex">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer text-gray-700"
            />
            {navlinks.map((d, i) => (
              <NavLink
                key={i}
                className="font-semibold text-gray-800 border border-double border-black px-1 py-2 rounded-lg text-center"
                to={d.link}
                onClick={handleNavLinkClick}
              >
                {d.label}
              </NavLink>
            ))}
          </section>
        </div>
      </nav>
      <hr />
    </main>
  );
}
