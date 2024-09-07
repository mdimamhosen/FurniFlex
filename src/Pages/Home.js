import React from "react";
import { Link } from "react-router-dom";
import Testimonials from "../components/CustomerReview";
import FrequentQuestions from "../components/Faq";
import TopProducts from "../components/TopProduct";
import Blogs from "../components/Blogs";
import Banner from "../components/Banner";
import PopularFurniture from "../components/PopularCompanies";
import FeaturedCategories from "../components/FeaturedCategories ";
import SampleProducts from "../components/SampleProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedCategories />
      <SampleProducts />
      <PopularFurniture />
      <TopProducts />
      <FrequentQuestions />
      <Blogs />
      <Testimonials />
    </div>
  );
};

export default Home;
