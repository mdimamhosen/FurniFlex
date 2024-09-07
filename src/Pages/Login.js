import React, { useState, useContext } from "react";
import image from "../assets/bg.png";
import { AppContext } from "../AuthProvider/AppContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Heading from "../common/Heading";
import f from "../assets/F.png";

const Login = () => {
  const { login } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="flex flex-col md:flex-row-reverse h-screen">
      {/* Right Side: Image */}
      <div
        className="relative w-full flex   md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="   bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-10">
          <div
            className="text-4xl font-bold mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-blue-600 text-white"
            style={{ fontFamily: "Lucida Calligraphy" }}
          >
            <img src={f} alt="" />
          </div>
          <Heading normal="Furni" colored="Flex" />
          <p className="text-center text-sm text-gray-300 w-11/12 mx-auto">
            Discover a seamless shopping experience with our curated collection
            of products. From fashion to electronics, we bring quality.
          </p>
        </div>
      </div>

      {/* Left Side: Login Form */}
      <div className="w-full md:w-1/2 bg-white flex flex-col   h-full justify-center items-center p-6 md:p-8">
        <div className="w-full max-w-md    ">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Welcome to <br /> <Heading normal="Furni" colored="Flex" />
          </h2>
          <p className="mb-6 text-sm text-gray-500 text-center">
            Enter your credentials to access your account
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
                required
              />
            </div>
            {/* Password Input */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-all duration-300 ease-linear"
            >
              Log In
            </button>
          </form>
          <p className="mt-4 text-center text-gray-700">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-500  transition-all duration-300 ease-linear hover:underline"
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
