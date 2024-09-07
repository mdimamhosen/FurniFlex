import React, { useState, useEffect } from "react";

const slides = [
  {
    headline: "Elevate Your Living Space",
    subheadline: "Discover elegant furniture with FurniFlex",
    buttonText: "Explore Collections",
    image: "https://i.postimg.cc/76qnHH95/3d-rendering-of-shopping-cart-an.png",
  },
  {
    headline: "Exclusive Furniture Deals",
    subheadline: "Transform your home with our summer collection",
    buttonText: "Shop Summer Sale",
    image: "https://i.postimg.cc/bYC9Pjtv/marketplace-solution-banner.png",
  },
  {
    headline: "Limited Time Offers",
    subheadline: "Find the perfect piece before it's gone",
    buttonText: "Shop Now",
    image:
      "https://i.postimg.cc/kGzSbqQF/360-F-336156751-XY1xf-Hvk9yl44d-RS.png",
  },
  {
    headline: "Modern Furniture Collection",
    subheadline: "Stylish and comfortable pieces for every room",
    buttonText: "Browse Collection",
    image:
      "https://i.postimg.cc/3rcm6Cs4/360-F-614272019-QLfish-Q3-Psk-I4-N8p.jpg",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="relative h-[80vh] overflow-hidden">
      <div
        id="slider"
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="absolute top-10 h-20 w-20 rounded-full left-10 z-10">
        <img
          src="https://i.postimg.cc/TPjn4KmK/80-percentage-off-sale-discount.png"
          alt="decorative icon"
          className="animate-pulse"
        />
      </div>
      <div
        className="absolute cursor-pointer h-16 w-16 rounded-full bottom-10 right-10 z-10"
        title="Message Us"
      >
        <img
          src="https://i.postimg.cc/1XVtbdTv/png-transparent-messenger-facebo-removebg-preview.png"
          alt="decorative icon"
          className="animate-bounce w-full h-full rounded-full cursor-pointer"
        />
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center">
        <h1
          id="headline"
          className="text-2xl w-[80%] md:w-full md:text-6xl font-bold   drop-shadow-lg text-white"
        >
          {slide.headline}
        </h1>
        <p className="   w-[80%] md:w-full  text-gray-200 text-xs md:text-sm mb-8 drop-shadow-lg">
          {slide.subheadline}
        </p>
        <a
          href="/products"
          id="ctaButton"
          className="px-6 py-3 bg-transparent border-white border text-slate-50 bg-gray-600  hover:scale-105 hover:border-gray-400      rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg"
        >
          {slide.buttonText}
        </a>

        <div className="mt-12 w-4/5 md:w-2/3 lg:w-1/3">
          <div className="flex">
            <input
              type="text"
              placeholder="Search for furniture, brands, and more..."
              className="border-yellow-100 w-3/4 px-4 py-3 rounded-l-full bg-gray-100 text-gray-700 focus:outline-none shadow-md"
            />
            <button className="w-1/4 px-4 py-3 bg-yellow-50 hover:bg-yellow-200 text-black rounded-r-full text-lg font-semibold transition-all duration-300 shadow-lg">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
