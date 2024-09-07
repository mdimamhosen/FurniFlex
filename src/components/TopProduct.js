import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules"; // Import from swiper/modules

const topproducts = [
  {
    id: 1,
    name: "Elegant Sofa",
    title: "Living Room Furniture",
    image:
      "https://plus.unsplash.com/premium_photo-1670076513880-f58e3c377903?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A stylish and comfortable sofa to enhance your living room.",
  },
  {
    id: 2,
    name: "Modern Dining Table",
    title: "Dining Room Furniture",
    image:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A contemporary dining table perfect for family meals.",
  },
  {
    id: 3,
    name: "Cozy Bed Frame",
    title: "Bedroom Furniture",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A comfortable and elegant bed frame for a restful night's sleep.",
  },
  {
    id: 4,
    name: "Stylish Office Chair",
    title: "Office Furniture",
    image:
      "https://images.unsplash.com/photo-1487015307662-6ce6210680f1?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "An ergonomic chair designed for comfort during long work hours.",
  },
  {
    id: 5,
    name: "Classic Bookshelf",
    title: "Storage Solutions",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A beautifully crafted bookshelf to organize your books and decor.",
  },
  {
    id: 6,
    name: "Outdoor Lounge Chair",
    title: "Outdoor Furniture",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Relax in style with this comfortable outdoor lounge chair.",
  },
  {
    id: 7,
    name: "Vintage Coffee Table",
    title: "Living Room Furniture",
    image:
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "A charming coffee table that adds a touch of elegance to any living room.",
  },
  {
    id: 8,
    name: "Luxury Recliner Chair",
    title: "Living Room Furniture",
    image:
      "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Experience ultimate relaxation with this luxury recliner chair.",
  },
  {
    id: 9,
    name: "Elegant Dining Chairs",
    title: "Dining Room Furniture",
    image:
      "https://images.unsplash.com/photo-1489269637500-aa0e75768394?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Stylish dining chairs to complement your dining table.",
  },
  {
    id: 10,
    name: "Minimalist Desk",
    title: "Office Furniture",
    image:
      "https://images.unsplash.com/photo-1506898667547-42e22a46e125?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A sleek and modern desk for a clean workspace.",
  },
];

const TopProducts = () => {
  return (
    <div>
      <div
        className="mx-auto bg-cover bg-center text-center py-20 mt-28 -mb-10"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1673826409377-158127de8e10?q=80&w=2114&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      >
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-white">Top </span>
          <span className="text-blue-600">Products</span>
        </h1>
        <p className="text-sm text-gray-300 px-4">
          Discover what our top products.
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-16 py-12  -mt-16">
        <div className="  pb-20">
          <div className="">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              autoplay={{ delay: 2000 }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {topproducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="p-6 shadow-lg rounded-lg bg-slate-50 flex flex-col justify-between h-full text-left">
                    <div className="flex flex-col gap-3 items-start">
                      <img
                        src={product.image || "https://via.placeholder.com/150"}
                        alt={product.name}
                        className="w-full h-40 object-cover"
                      />
                      <div className="flex flex-col text-center w-full">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-500">{product.title}</p>
                        <p className="my-3 text-gray-600 flex-grow">
                          {product.university}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
