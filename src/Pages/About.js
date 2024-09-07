import React from "react";
import { FaStar } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="container px-6 lg:px-16 mx-auto mt-16 my-16">
      {/* Left Side: Image + Description */}
      <div className="grid   mx-auto grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="flex justify-center items-center">
          <img
            src={
              "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="Furniture Image"
            className="max-h-full object-cover rounded-lg shadow-lg"
            style={{ maxHeight: "500px" }}
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center">
          <div>
            {/* <h1

              heading="Why Choose Us?"
              subheading="Your Comfort, Our Priority"
            /> */}
            <h1 className="text-xl lg:text-4xl font-bold">
              <span>Why Choose Us?</span>
              <br />
              <span className="text-blue-600">Your Comfort,</span> Our Priority
            </h1>
          </div>
          <p className="text-gray-600 w-11/12 my-6">
            At Furni<span className="text-blue-600">Flex</span>, we believe that
            your home should be a reflection of your style and comfort. For over
            20 years, we’ve been crafting beautiful, high-quality furniture to
            meet the unique tastes of our customers. From modern designs to
            classic styles, each piece is made with care and precision, ensuring
            durability and luxury in every corner of your home.
          </p>
          <h1 className="text-xl font-bold">Why Shop With Us?</h1>
          <ul className="list-disc list-inside text-gray-800 mb-6">
            <li className="flex items-center">
              <FaStar className="text-orange-500 mr-2" />
              Over 2,000 exclusive furniture designs in various categories.
            </li>
            <li className="flex items-center">
              <FaStar className="text-orange-500 mr-2" />
              Free delivery and installation on all orders.
            </li>
            <li className="flex items-center">
              <FaStar className="text-orange-500 mr-2" />
              Sustainable materials sourced responsibly.
            </li>
            <li className="flex items-center">
              <FaStar className="text-orange-500 mr-2" />
              Award-winning customer support available 24/7.
            </li>
            <li className="flex items-center">
              <FaStar className="text-orange-500 mr-2" />
              30-day return policy with 100% satisfaction guarantee.
            </li>
          </ul>
          <div>
            <button className="bg-black text-white px-6 py-3  hover:bg-gray-800 transition duration-300">
              Explore More
            </button>
          </div>
        </div>
      </div>

      {/* Right Side: Image + Description */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 w-11/12 mx-auto">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <div>
            {/* <Title heading="Craftsmanship" subheading="& Quality" /> */}
            <h1 className="text-xl lg:text-4xl font-bold ">
              Craftsmanship <br /> &{" "}
              <span className="text-blue-600">Quality</span>
            </h1>
          </div>
          <p className="text-gray-600 w-11/12 my-6">
            Our team of expert craftsmen brings decades of experience to create
            furniture that blends aesthetics with functionality. Whether it’s a
            luxurious sofa, a cozy bed, or a sturdy dining table, each piece is
            meticulously designed and manufactured to meet the highest standards
            of quality. We are committed to using eco-friendly materials and
            sustainable practices to create furniture that not only looks great
            but also contributes to a greener planet.
          </p>
          <div>
            <button className="bg-black text-white px-6 py-3  hover:bg-gray-800 transition duration-300">
              Discover Our Process
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex justify-center items-center">
          <img
            src={
              "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="Craftsmanship Image"
            className="max-h-full object-cover rounded-lg shadow-lg"
            style={{ maxHeight: "500px" }} // Adjust max-height as needed
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
