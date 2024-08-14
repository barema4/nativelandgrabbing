import React from "react";

import { Product, FooterBanner, HeroBanner } from "../components";
import BlogList from "./blog/BlogList";
import SubmitButton from "../components/common/SubmitButton";
import TicketBanner from "../components/TicketBanner";
import EventsList from "./events";

const bannerData = [];
const products = [];

const Home = () => (
  <div className="">
    <EventsList />
    <HeroBanner />

    <TicketBanner />

    <div className="products-heading">
      <h2 className="app-wrapper heading-h2">MUST WATCH VIDEOS</h2>
    </div>
    <div className="app-wrapper">
      <BlogList page="home" className="" />
    </div>

    <div className="mx-auto">
      <SubmitButton text="watch all" path="/explore" className="" />
    </div>

    <div className="products-container">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>

    <div className="app-wrapper">
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  </div>
);

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Home;
