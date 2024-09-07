import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-center p-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-2">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-500 mb-6">
          Sorry, the page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <div className="flex    justify-center items-center space-x-4">
          <Link
            to="/"
            className="px-6 py-3 bg-black hover:bg-gray-700 text-white   text-lg font-semibold transition-all duration-300"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
