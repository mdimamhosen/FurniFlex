import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Heading from "../common/Heading";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    title: "Homeowner",
    image:
      "https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Absolutely love my new sofa. Luxurious fabric and fast delivery.",
    rating: 4,
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Interior Designer",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Beautifully crafted pieces my clients adore. Highly recommended furniture.",
    rating: 3,
  },
  {
    id: 3,
    name: "Alice Johnson",
    title: "Homeowner",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "The dining set is fantastic. High-quality wood and perfect craftsmanship.",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Brown",
    title: "Landlord",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Great service and durable furniture. Fits perfectly in rental properties.",
    rating: 4,
  },
  {
    id: 5,
    name: "Emily Davis",
    title: "Interior Stylist",
    image:
      "https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Perfect blend of style and comfort. Clients appreciate the designs.",
    rating: 3,
  },
  {
    id: 6,
    name: "Chris Wilson",
    title: "Homeowner",
    image:
      "https://images.unsplash.com/photo-1484863137850-59afcfe05386?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Bought a custom coffee table. Exceeded my design expectations.",
    rating: 4,
  },
  {
    id: 7,
    name: "Natalie Lewis",
    title: "Apartment Owner",
    image:
      "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Fast delivery and excellent support. The bed is incredibly comfortable.",
    rating: 5,
  },
  {
    id: 8,
    name: "David Martinez",
    title: "Furniture Enthusiast",
    image:
      "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Best online furniture shopping experience. Quality is truly top-notch.",
    rating: 5,
  },
  {
    id: 9,
    name: "Sophia Moore",
    title: "Homeowner",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Love the modern design. Complements my living room perfectly.",
    rating: 5,
  },
  {
    id: 10,
    name: "Daniel Taylor",
    title: "Office Manager",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Office chairs are stylish and comfortable. Great purchase decision.",
    rating: 5,
  },
  {
    id: 11,
    name: "Olivia Anderson",
    title: "Interior Designer",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Incredible variety for both residential and commercial projects.",
    rating: 5,
  },
  {
    id: 12,
    name: "James Thomas",
    title: "Real Estate Developer",
    image:
      "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "High-quality furniture that added significant value to my properties.",
    rating: 5,
  },
  {
    id: 13,
    name: "Isabella Jackson",
    title: "Architect",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Elegant furniture collection fits every architectural design I work on.",
    rating: 5,
  },
  {
    id: 14,
    name: "Benjamin White",
    title: "Hotel Manager",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Perfect furniture for our luxury hotel. Combines comfort and style.",
    rating: 5,
  },
  {
    id: 15,
    name: "Ava Harris",
    title: "Home Decor Enthusiast",
    image:
      "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "The new sofa set brightened up my living room beautifully.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div className="bgColor-[rgba(246, 148, 30, 0.03)] py-12">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="mx-auto">
          <Heading normal={"What Our "} colored={"Customers Say"} />
          <p className="text-gray-600 my-4">
            Hear from our students about how our courses have impacted their
            careers and helped them achieve their goals.
          </p>

          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="p-6 shadow-lg rounded-lg bg-slate-50 flex flex-col justify-between h-full text-left">
                  <div className="flex flex-col gap-3 items-start">
                    <div className="mb-4">
                      <FaQuoteLeft className="text-orange-400 text-xl" />
                    </div>
                    <img
                      src={review.image || "https://via.placeholder.com/150"}
                      alt={review.name}
                      className="rounded-full w-20 h-20 object-cover"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {review.name}
                      </h3>
                      <p className="text-sm text-gray-500">{review.title}</p>
                      <p className="my-3 text-gray-600 flex-grow">
                        {review.revi}
                      </p>
                      <div className="flex items-center mt-2">
                        {[...Array(review.rating)].map((_, index) => (
                          <FaStar key={index} className="text-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
