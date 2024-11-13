import React from "react";
import Hero from "./hero/Hero";
import AboutCard from "../about/AboutCard";
import HAbout from "./HAbout";
import HBlog from "./HBlog";
import Test from "./testimonial/Test";
import HPrice from "./HPrice";
import Footer from "../common/footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Test />
      <HBlog />
      <HPrice />
      <Footer />
    </>
  );
};

export default Home;
