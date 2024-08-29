import React from "react";
import { ConferencesBanner, HeroBanner, TicketBanner } from "../components";
import SubmitButton from "../components/common/SubmitButton";
import BlogList from "./blog/BlogList";
import EventsList from "./events";

const Home = () => (
  <div className="">
    <EventsList />
    <HeroBanner />

    <div className="app-wrapper">
      <TicketBanner />
    </div>

    <div className="products-heading">
      <h2 className="app-wrapper heading-h2">MUST WATCH VIDEOS</h2>
    </div>

    <div className="app-wrapper">
      <BlogList page="home" className="" />
    </div>

    <div className="mx-auto">
      <SubmitButton text="watch all" path="/explore" className="" />
    </div>

    <ConferencesBanner />
    {/* <InterBanner /> */}

    {/* <div className="app-wrapper">
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div> */}
  </div>
);

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Home;
