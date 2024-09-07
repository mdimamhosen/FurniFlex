import React, { useState, useContext } from "react";
import { AppContext } from "./../AuthProvider/AppContext";
import image from "../assets/bg.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Heading from "../common/Heading";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import f from "../assets/F.png";

const SignUp = () => {
  const { signup, user } = useContext(AppContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      toast.error("You must agree to the terms and policies.");
      return;
    }

    signup({ firstName, lastName, email, password, isVerified: false });
    navigate("/login");
    console.log(user);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Side */}
      <div
        className="w-full lg:w-1/2 flex bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="  bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-10">
          <div className="text-4xl font-bold mb-2 w-14 h-14 flex justify-center items-center  rounded-full bg-blue-600 text-white ">
            <img src={f} alt="" />
          </div>

          <Heading normal="Furni" colored="Flex" />
          <p className="text-center text-sm text-gray-500 w-11/12 mx-auto">
            Discover a seamless shopping experience with our curated collection
            of products. From fashion to electronics, we bring quality.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 h-full bg-white p-10 flex items-center justify-center">
        <div className="w-full max-w-md pb-40">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Welcome to <br /> <Heading normal="Furni" colored="Flex" />
          </h2>
          <p className="mb-6 text-center text-sm text-gray-500">
            Signup to purchase your desired products
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex space-x-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
              />
            </div>
            <div className="relative mb-4">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="terms" className="text-sm font-bold">
                I agree to the{" "}
                <span
                  href="/terms"
                  className="text-black underline hover:underline"
                >
                  terms and policies
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-all duration-300 ease-linear "
            >
              Sign Up
            </button>
            <p className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-blue-500 transition-all duration-300 ease-linear hover:underline"
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
