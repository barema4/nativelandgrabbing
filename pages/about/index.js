import React from "react";
import SubmitButton from "../../components/common/SubmitButton";
import Link from "next/link";
import TeamCard from "../../components/common/TeamCard";

const About = () => {
  return (
    <div className="app-wrapper about-page">
      <h1 className="text-center">At Native LandGrab</h1>
      <div className="video-banner-container">
        <div className="video-banner__overlay">
          <iframe
            src={`https://www.youtube.com/embed/BIxd4NdnQPs?modestbranding=1&controls=0`}
            frameborder="0"
            allow="autoplay"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="about-text">
        <p className="subscribe-text">
          Welcome to Native Landgrab, your dedicated resource for understanding
          and addressing the complex issues surrounding land ownership and
          land-grabbing. Our mission is to provide comprehensive and accessible
          information on the historical and ongoing impacts of land-grabbing on
          native populations worldwide. We believe that through education,
          advocacy, and collaboration, we can foster a world where land is
          managed equitably and sustainably, respecting the rights and heritage
          of all communities.
        </p>
        <br />
        <p className="subscribe-text">
          Our platform is designed to serve a diverse audience, including
          indigenous communities, activists, educators, researchers, policy
          makers, NGOs, and the general public. We offer a wide array of
          resources, from in-depth articles and reports to multimedia content
          and educational tools. By bringing together historical analyses, case
          studies, and contemporary issues, we aim to equip our users with the
          knowledge and strategies needed to advocate for just land policies and
          practices.
        </p>
        <br />
        <p className="subscribe-text">
          At Native Landgrab, we understand that land-grabbing is not just a
          historical issue but a present-day challenge that continues to affect
          millions of people globally. Our commitment is to amplify the voices
          of those impacted, providing them with a platform to share their
          stories and connect with supportive networks. We also strive to
          influence policy and public opinion by fostering informed dialogue and
          promoting sustainable land management practices.
        </p>
        <br />
        <p className="subscribe-text">
          Join us in our mission to make a difference. Whether you are looking
          to educate yourself and others, advocate for change, or simply stay
          informed about land-related issues, Native Landgrab is here to support
          you. Together, we can work towards a future where every community’s
          land rights are recognized and protected, and where the land is a
          source of life and prosperity for all.
        </p>
      </div>

      <div className="mx-auto login">
        <SubmitButton text="Join In" path="/login" className="" />
      </div>
      <TeamCard />
    </div>
  );
};

export default About;
