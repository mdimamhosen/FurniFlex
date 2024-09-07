import React, { useState, useContext } from "react";
import { FaCreditCard, FaPaypal, FaApplePay } from "react-icons/fa";
import { AppContext } from "../AuthProvider/AppContext";
import { getListFromLocalStorage } from "../AuthProvider/Utils";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const totalPrice = parseFloat(params.get("totalPrice")) || 0;
  const [billingDetails, setBillingDetails] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const storedList = getListFromLocalStorage() || [];

  const getDiscountedPrice = (item) => {
    return item.price || 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({
      ...billingDetails,
      [name]: value,
    });
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePlaceOrder = () => {
    toast.success("Order placed successfully");
  };

  return (
    <div className="container mx-auto px-6 lg:px-16 py-12">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
          {storedList.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {storedList.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b py-2"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-grow px-4">
                    <h4 className="text-xl font-semibold">{item.name}</h4>
                    <p className="text-gray-500">{item.description}</p>
                    <p className="text-black font-bold">
                      ${getDiscountedPrice(item).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
              <div className="flex justify-between font-semibold mt-4">
                <span>Total Price:</span>
                <span>${totalPrice}</span>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">Billing Information</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                value={billingDetails.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={billingDetails.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={billingDetails.address}
                onChange={handleInputChange}
                className="w-full p-2 border rounded outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={billingDetails.city}
                onChange={handleInputChange}
                className="w-full p-2 border rounded outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">ZIP Code</label>
              <input
                type="text"
                name="zip"
                value={billingDetails.zip}
                onChange={handleInputChange}
                className="w-full p-2 border rounded outline-none"
                required
              />
            </div>
          </form>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-8">
        <h3 className="text-2xl font-bold mb-4">Payment Method</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="radio"
              id="creditCard"
              name="paymentMethod"
              value="creditCard"
              checked={paymentMethod === "creditCard"}
              onChange={handlePaymentChange}
              className="mr-2"
            />
            <label htmlFor="creditCard" className="flex items-center">
              <FaCreditCard className="mr-2" />
              Credit Card
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="paypal"
              name="paymentMethod"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={handlePaymentChange}
              className="mr-2"
            />
            <label htmlFor="paypal" className="flex items-center">
              <FaPaypal className="mr-2" />
              PayPal
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="applePay"
              name="paymentMethod"
              value="applePay"
              checked={paymentMethod === "applePay"}
              onChange={handlePaymentChange}
              className="mr-2"
            />
            <label htmlFor="applePay" className="flex items-center">
              <FaApplePay className="mr-2" />
              Apple Pay
            </label>
          </div>
        </div>
      </div>

      <button
        onClick={handlePlaceOrder}
        className="w-full bg-black text-white py-2 rounded-lg mt-8 hover:bg-gray-800 transition-all"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
