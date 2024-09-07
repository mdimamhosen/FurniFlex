import React, { useState, useContext, useEffect } from "react";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import { AppContext } from "../AuthProvider/AppContext";
import { getListFromLocalStorage } from "../AuthProvider/Utils";
import { Link } from "react-router-dom";

const Cart = () => {
  const { removeFromList } = useContext(AppContext);
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});
  const clearCart = () => {
    localStorage.removeItem("list");
    setCartItems([]);
    setQuantities({});
  };

  useEffect(() => {
    const storedList = getListFromLocalStorage() || [];
    setCartItems(storedList);

    const initialQuantities = storedList.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, []);

  const getItemQuantity = (itemId) => {
    return quantities[itemId] || 0;
  };

  const getDiscountedPrice = (item) => {
    return item.price || 0;
  };

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + getDiscountedPrice(item) * getItemQuantity(item.id),
    0
  );

  const shipping = totalPrice > 1000 ? 0 : 10;

  const tax = totalPrice * 0.1;

  const finalTotal = totalPrice + shipping + tax;
  console.log(shipping, tax, finalTotal);

  const handleRemoveItem = (itemId) => {
    removeFromList(itemId);
    setCartItems(cartItems.filter((item) => item.id !== itemId));
    const newQuantities = { ...quantities };
    delete newQuantities[itemId];
    setQuantities(newQuantities);
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity > 0) {
      setQuantities({
        ...quantities,
        [itemId]: newQuantity,
      });
    }
  };

  return (
    <div className="container mx-auto px-4 lg:px-16 py-12">
      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-bold mb-6">An Overview of Your Order</h2>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex bg-gray-100 items-center justify-between border p-4 rounded-lg shadow-md relative"
              >
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-600 hover:text-red-800 absolute right-4 top-4"
                >
                  <FaTimes className="text-sm md:text-lg" />
                </button>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-grow px-4 space-y-2">
                  <h3 className="md:text-xl text-sm  font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 hidden md:flex text-xs md:text-sm">
                    {item.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    {item.offer > 0 && (
                      <>
                        <p className="text-red-500 font-semibold  text-xs md:text-sm">
                          {item.offer}% OFF
                        </p>
                        <p className="text-gray-400 line-through  text-xs md:text-sm">
                          ${item.realPrice.toFixed(2)}
                        </p>
                      </>
                    )}
                    <p className="text-black font-bold  text-xs md:text-sm">
                      ${getDiscountedPrice(item).toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex md:flex-row flex-col-reverse items-center  gap-1">
                  <div className="flex items-center space-x-2  text-xs md:text-sm">
                    <button
                      onClick={() =>
                        handleUpdateQuantity(
                          item.id,
                          getItemQuantity(item.id) - 1
                        )
                      }
                      disabled={getItemQuantity(item.id) === 1}
                      className="md:p-2 p-1  bg-gray-200 rounded hover:bg-gray-300"
                    >
                      <FaMinus className="text-xs md:text-lg" />
                    </button>
                    <span className="text-xs md:text-base font-semibold">
                      {getItemQuantity(item.id)}
                    </span>
                    <button
                      onClick={() =>
                        handleUpdateQuantity(
                          item.id,
                          getItemQuantity(item.id) + 1
                        )
                      }
                      className="md:p-2 p-1  bg-gray-200 rounded hover:bg-gray-300"
                    >
                      <FaPlus className="text-xs md:text-lg" />
                    </button>
                  </div>
                  <div className=" text-xs md:text-base mx-3 font-semibold">
                    $
                    {(
                      getDiscountedPrice(item) * getItemQuantity(item.id)
                    ).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold mb-6">Order Details</h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="flex justify-between text-lg font-semibold mb-4">
              <span>Total Items:</span>
              <span>
                {cartItems.reduce(
                  (total, item) => total + getItemQuantity(item.id),
                  0
                )}
              </span>
            </div>
            <div className="flex justify-between text-lg font-semibold mb-4">
              <span>Total Price:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold mb-4">
              <span>Shipping:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold mb-4">
              <span>Estimated Tax:</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Total:</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-black text-white py-2 rounded-lg mb-4 hover:bg-gray-800 transition-all">
              <Link to={`/checkout?totalPrice=${finalTotal}`}>
                Proceed to Checkout
              </Link>
            </button>
            <button
              onClick={clearCart}
              className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-800 transition-all"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
