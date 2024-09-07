import React from "react";

const companies = [
  {
    name: "Furniture Co.",
    image:
      "https://images.unsplash.com/photo-1687523327554-fa9f50423489?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Home Decor Inc.",
    image:
      "https://images.unsplash.com/photo-1707330069618-0dff8e80a6e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Modern Living",
    image:
      "https://images.unsplash.com/photo-1707330113019-08f4054ccc1b?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Comfort Zone",
    image:
      "https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Elegant Interiors",
    image:
      "https://images.unsplash.com/photo-1532617754634-819393ff5106?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Classic Furnishings",
    image:
      "https://images.unsplash.com/photo-1610128980054-68d94619e243?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const PopularFurniture = () => {
  return (
    <div
      className="relative w-full py-12 bg-cover bg-center"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1503423571797-2d2bb372094a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      }}
    >
      {/* Overlay for blackish effect */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-16 text-white">
        <div className="text-center">
          <h1 className="lg:text-4xl text-xl md:text-3xl font-bold">
            <span className="text-blue-600">Popular</span>
            <span className="text-[#ffffff]"> Furniture Brands</span>
          </h1>
        </div>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-2 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center shadow-lg rounded-lg bg-white text-gray-800 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={company.image}
                alt={company.name}
                className="xl:w-28 lg:w-24 md:w-20 w-20  xl:h-28 lg:h-24 mdh-20 h-20  object-cover  rounded-full mt-4"
              />
              <h2 className="mt-4 md:text-base text-sm lg:text-lg font-bold">
                {company.name}
              </h2>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-8">
          <button className="border border-white text-white px-6 py-2 transition-all duration-300 ease-linear hover:bg-white hover:text-black">
            View More &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularFurniture;
