import React from "react";
import { toast } from "react-toastify";

const ContactUs = () => {
  const sendMessage = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };
  return (
    <div className="container px-6 lg:px-16 mx-auto mt-16 my-16">
      {/* Contact Us Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800">
          Contact Us
        </h1>
        <p className="text-gray-500 mt-4">
          Have any questions or feedback? We would love to hear from you! Fill
          out the form below, and we'll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Input */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg text-gray-600 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-gray-300 p-3 rounded-md outline-none"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg text-gray-600 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 p-3 rounded-md outline-none"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Subject Input */}
        <div className="flex flex-col md:col-span-2">
          <label htmlFor="subject" className="text-lg text-gray-600 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="border border-gray-300 p-3 rounded-md outline-none"
            placeholder="Enter the subject"
            required
          />
        </div>

        {/* Message Input */}
        <div className="flex flex-col md:col-span-2">
          <label htmlFor="message" className="text-lg text-gray-600 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="border border-gray-300 p-3 rounded-md outline-none"
            placeholder="Write your message here"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            onclick={sendMessage}
            className="bg-black text-white px-6 py-3  hover:bg-gray-800 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* Contact Information */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
        <p className="text-gray-600 mt-4">
          Email: support@furnitureshop.com | Phone: +123 456 7890
        </p>
        <p className="text-gray-600 mt-1">
          Address: 1234 Furniture Ave, City, Country
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
