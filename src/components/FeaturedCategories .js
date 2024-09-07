import React from "react";
import { FaBed, FaChair, FaCouch, FaTable } from "react-icons/fa";
import { LuLamp } from "react-icons/lu";

const FeaturedCategories = () => {
  return (
    <div className="container px-6 lg:px-16 mx-auto py-7 mt-4">
      <p className="text-center md:text-3xl text-xl lg:text-4xl font-bold tracking-normal animate__backInLeft animate__heartBeat text-richblack-5">
        Featured Furniture <span className="text-blue-600">Categories</span>
      </p>
      <p className="md:text-sm text-xs text-gray-600   text-center  ">
        Discover Our Top Furniture Selections.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6   mx-auto">
        <div className="flex flex-col py-2 shadow-md rounded-lg hover:scale-105 bg-slate-50 transition-all ease-linear duration-300 cursor-pointer bg-richblack-5 hover:bg-richblack-25">
          <p className="text-4xl flex justify-center items-center text-center mt-4 mb-3 text-richblue-900">
            <FaCouch />
          </p>
          <span className=" text-sm lg:text-lg font-semibold text-center block  ">
            Sofas & Couches
          </span>
          <span className="text-gray-500 text-xs lg:text-sm  text-center block">
            150 Items
          </span>
        </div>
        <div className="flex flex-col py-2 shadow-md rounded-lg hover:scale-105 bg-slate-50 transition-all ease-linear duration-300 cursor-pointer bg-richblack-5 hover:bg-richblack-25">
          <p className="text-4xl text-center flex justify-center items-center mt-4 mb-3 text-caribbeangreen-900">
            <FaBed />
          </p>
          <span className="lg:text-lg text-sm font-semibold text-center block   0">
            Beds & Mattresses
          </span>
          <span className="text-gray-500 text-xs lg:text-sm text-center block">
            80 Items
          </span>
        </div>
        <div className="flex flex-col py-2 shadow-md rounded-lg bg-slate-50 hover:scale-105 transition-all ease-linear duration-300 cursor-pointer bg-richblack-5 hover:bg-richblack-25">
          <p className="text-4xl flex justify-center items-center text-center mt-4 mb-3 text-brown-900">
            <FaTable />
          </p>
          <span className="text-sm lg:text-lg font-semibold text-center block  ">
            Tables
          </span>
          <span className="text-gray-500 text-xs lg:text-sm text-center block">
            120 Items
          </span>
        </div>
        <div className="flex flex-col bg-slate-50 py-2 shadow-md rounded-lg hover:scale-105 transition-all ease-linear duration-300 cursor-pointer bg-richblack-5 hover:bg-richblack-25">
          <p className="text-4xl flex justify-center items-center text-center mt-4 mb-3  ">
            <FaChair />
          </p>
          <span className="lg:text-lg text-sm font-semibold text-center block  ">
            Chairs
          </span>
          <span className="text-gray-500 text-xs lg:text-sm text-center block">
            90 Items
          </span>
        </div>
        <div className="flex flex-col py-2 bg-slate-50 shadow-md rounded-lg hover:scale-105 transition-all ease-linear duration-300 cursor-pointer bg-richblack-5 hover:bg-richblack-25">
          <p className="text-4xl flex justify-center items-center text-center mt-4 mb-3  ">
            <LuLamp />
          </p>
          <span className="lg:text-lg text-sm font-semibold text-center block  ">
            Lighting
          </span>
          <span className="text-gray-500 text-xs lg:text-sm text-center block">
            60 Items
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
