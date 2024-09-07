import React from "react";
import {
  FaCalendarAlt,
  FaComment,
  FaHeart,
  FaLongArrowAltRight,
} from "react-icons/fa";
import Heading from "../common/Heading";
import { Link } from "react-router-dom";

// Sample blog data for a furniture e-commerce website
const blogPosts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1657638338091-82589734018d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "September 20, 2024",
    title: "Top 5 Trends in Modern Furniture Design",
    comments: 8,
    likes: 18,
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1682434403587-1313db01ed02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "September 18, 2024",
    title: "How to Choose the Perfect Sofa for Your Living Room",
    comments: 12,
    likes: 25,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1657638323016-b9b802f1756b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "September 15, 2024",
    title: "5 Essential Tips for Organizing Your Home Office",
    comments: 6,
    likes: 15,
  },
];

const Blogs = () => {
  return (
    <div className="container mx-auto px-6 lg:px-16 py-12">
      <Heading colored=" Blogs" normal="Our Latest" />
      <p className="text-gray-600 mb-6 text-sm">
        Stay updated with our latest blog posts covering a variety of topics
        related to furniture and home decor.
      </p>
      <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-linear"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center text-gray-500 mb-2">
                <FaCalendarAlt className="mr-2" />
                <span>{blog.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <hr className="my-2 border-gray-300" />

              <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-600">
                  <FaHeart className="mr-2 text-red-500" />
                  <span>{blog.likes} Likes</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaComment className="mr-2" />
                  <span>{blog.comments} Comments</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link
          to="/blogs"
          className="flex w-fit mt-12 hover:scale-95 transition-all duration-300 ease-linear items-center px-6 py-2 scale-105 shadow-md font-semibold text-gray-800 border border-gray-600 hover:bg-opacity-80"
        >
          View all Blogs
          <FaLongArrowAltRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
