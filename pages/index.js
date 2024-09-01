import React from "react";
import { ConferencesBanner, HeroBanner, TicketBanner } from "../components";
import TeamCard from "../components/common/TeamCard";
import CommunityTalks from "../components/CommunityTalks";
import FAQsBanner from "../components/FAQsBanner";
import SponsorsContainer from "../components/Sponsors/SponsorsContainer";
import TrendingBanner from "../components/TrendingBanner";
import BlogList from "./blog/BlogList";
import EventsList from "./events";

const Home = () => (
  <div>
    <EventsList />
    <HeroBanner />

    <div className="app-wrapper">
      <TicketBanner />
    </div>

    <div className="sub-heading">
      <h2 className="app-wrapper heading-h2">MUST WATCH VIDEOS</h2>
    </div>

    <div className="app-wrapper">
      <BlogList page="home" />
      <ConferencesBanner />
      <TrendingBanner />
      <SponsorsContainer />
      <CommunityTalks />
      <TeamCard />
      <FAQsBanner />
    </div>

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
