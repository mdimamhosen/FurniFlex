import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/F.png";
import Heading from "../common/Heading";

const Footer = () => {
  return (
    <div className="bg-black text-white py-10">
      {/* Grid Layout */}
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1: Logo */}
          <div className="flex  gap-1">
            <div className="flex flex-col w-10 h-10 bg-blue-500 justify-center   rounded-full items-center">
              <img src={logo} alt="Logo" className="  " />
            </div>
            <Heading normal="Furni" colored="Flex" />
          </div>

          {/* Column 2: About Us */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-4">About Us</h4>
            <ul className="space-y-2">
              <li>Master Plan</li>
              <li>Jobs</li>
              <li>Invest</li>
              <li>Pressroom</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Column 3: Explore EEVE */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-4">Explore EEVE</h4>
            <ul className="space-y-2">
              <li>Unlock my robot power</li>
              <li>Strainglight</li>
              <li>Robot platform</li>
              <li>EEVE Roadmap</li>
              <li>EEVE for business</li>
              <li>EEVE for education</li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>Help Center</li>
              <li>Warranty</li>
              <li>Contact us</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-600" />

        {/* Social Media and Info */}
        <div className="flex  sm:text-[8px] md:text-sm     flex-row w-full justify-between  items-center  ">
          {/* Social Media Links */}
          <div className="flex gap-4    ">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaWhatsapp className="hover:text-green-500 cursor-pointer" />
          </div>

          {/* Last Section: Location, Language, Currency */}
          <div className="text-center   ">
            <span>United States, English, $ USD</span>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="mt-8   text-center text-gray-400">
          2024 © FurniFlex. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
