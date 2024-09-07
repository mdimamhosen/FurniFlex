import React, { useContext, useState } from "react";
import { AppContext } from "../AuthProvider/AppContext";
import { getUserFromLocalStorage } from "../AuthProvider/Utils";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { items, addToList, removeFromList, setItems } = useContext(AppContext);
  const storedUser = getUserFromLocalStorage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = filteredItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const navigate = useNavigate();
  const handleAddToList = (item) => {
    if (storedUser?.isVerified) {
      addToList(item);
      setItems(
        items.map((i) => (i.id === item.id ? { ...i, inList: true } : i))
      );
    } else {
      toast.error("Please login first to add items to list");
      navigate("/login");
    }
  };

  const handleRemoveFromList = (itemId) => {
    removeFromList(itemId);
    setItems(items.map((i) => (i.id === itemId ? { ...i, inList: false } : i)));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto px-6 lg:px-16 py-12">
      <p className="text-4xl mb-6 text-center font-bold">
        Our <span className="text-blue-600">Products</span>
      </p>

      <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 w-full lg:gap-8">
        <div className="w-full">
          <div className="flex flex-col">
            {["All", "Rocking Chair", "Lounge Chair", "Side Chair"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 my-2 rounded-md ${
                    activeCategory === category
                      ? "bg-black text-white hover:bg-gray-800 transition-all duration-300 ease-linear"
                      : "bg-gray-100 text-black hover:bg-gray-300"
                  } transition-all duration-300 ease-linear text-black border border-gray-200 hover:scale-105`}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>

        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between h-full border p-4 rounded-lg shadow-md transition-all duration-300 ease-linear hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover mb-4 rounded-md"
              />
              <div className="flex flex-col flex-grow">
                <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xl font-bold">${item.price}</span>
                  <span className="text-gray-500 line-through">
                    ${item.realPrice}
                  </span>
                  <span className="text-red-500">{item.offer}% OFF</span>
                </div>
                <div className="flex items-center text-yellow-500 my-2">
                  <span className="mr-2">⭐ {item.rating}</span>
                  <span className="text-gray-500">
                    ({item.numReviews} reviews)
                  </span>
                </div>
                <p className="text-gray-700 mb-4 flex-grow">
                  {item.description}
                </p>
              </div>

              <div className="mt-4">
                {item.inList ? (
                  <button
                    onClick={() => handleRemoveFromList(item.id)}
                    className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-800 transition-all duration-300 ease-linear"
                  >
                    Remove from List
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddToList(item)}
                    className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-700 transition-all duration-300 ease-linear hover:scale-105"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {filteredItems.length > itemsPerPage && (
        <div className="flex justify-center mt-8">
          <nav className="inline-flex space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-md border ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-white text-black border-gray-400 hover:bg-gray-100"
              }`}
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-1 rounded-md border ${
                    currentPage === page
                      ? "bg-black text-white"
                      : "bg-white text-black border-gray-400 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              )
            )}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-md border ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-white text-black border-gray-400 hover:bg-gray-100"
              }`}
            >
              &gt;
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Products;
