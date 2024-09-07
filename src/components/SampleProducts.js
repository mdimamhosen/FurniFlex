import React, { useContext } from "react";
import { AppContext } from "../AuthProvider/AppContext";
import { getUserFromLocalStorage } from "../AuthProvider/Utils";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SampleProducts = () => {
  const { items, addToList, removeFromList, setItems } = useContext(AppContext);
  const storedUser = getUserFromLocalStorage();
  const navigate = useNavigate();

  // Function to get 6 random items
  const getRandomItems = (items, numItems) => {
    const shuffled = [...items].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numItems);
  };

  const randomItems = getRandomItems(items, 6);

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

  return (
    <div className="container mx-auto px-6 lg:px-16 py-12">
      <p className="text-4xl mb-6 text-center font-bold">
        Sample<span className="text-blue-600"> Products</span>
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {randomItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between border p-4 rounded-lg shadow-md transition-all duration-300 ease-linear hover:scale-105"
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
              <p className="text-gray-700 mb-4 flex-grow">{item.description}</p>
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
  );
};

export default SampleProducts;
