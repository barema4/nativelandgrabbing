import React from "react";

import { Product, FooterBanner, HeroBanner } from "../components";
import BlogList from "./blog/BlogList";
import Link from "next/link";
import SubmitButton from "../components/common/SubmitButton";

const bannerData = [];
const products = [];

const Home = () => (
  <div className="app-wrapper">
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
    <div className="products-heading">
      <h2 className="heading-h2">MUST WATCH VIDEOS</h2>
      <BlogList className="" />
    </div>

    <div className="mx-auto">
      <SubmitButton text="watch all" className="" />
    </div>

    <div className="products-container">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>

    {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
  </div>
);

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Home;
