import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  const copyrightSign = "\u00A9";
  return (
    <div className="footer-container">
      <div>
        <h3 className="subscribe-text">DON'T MISS ANOTHER EPISODE</h3>
        <p className="subscribe-text">
          Subscribe to our newsletter to get updates on new episodes, events,
          and more.
        </p>
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="email-input"
          />
          <button type="submit" className="subscribe">
            Subscribe
          </button>
        </form>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "6rem 12rem",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "14px",
            fontWeight: 400,
            textAlign: "justify",
            lineHeight: "2rem",
          }}
        >
          <h3>Community</h3>
          <ul style={{ listStyle: "none" }}>
            <li>
              <a href="#link1">Help Center</a>
            </li>
            <li>
              <a href="#link2">Forum</a>
            </li>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "14px",
            fontWeight: 400,
            textAlign: "justify",
            lineHeight: "2rem",
          }}
        >
          <h3>CATEGORIES</h3>
          <ul style={{ listStyle: "none" }}>
            <li style={{ textAlign: "left" }}>
              <a href="#link4">Behind The Scenes</a>
            </li>
            <li>
              <a href="#link5">Podcasts</a>
            </li>
            <li>
              <a href="#link6">Speeches</a>
            </li>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "14px",
            fontWeight: 400,
            textAlign: "justify",
            lineHeight: "2rem",
          }}
        >
          <h3>ACCOUNT</h3>
          <ul style={{ listStyle: "none" }}>
            <li>
              <a href="#link7">Sing IN</a>
            </li>
            <li>
              <a href="#link8">Join NLG</a>
            </li>
            <li>
              <a href="#link9">Get Help</a>
            </li>
          </ul>
        </div>
      </div>

      <p>{`${copyrightSign} 2020-${new Date().getFullYear()} Native LandGrab, Inc. All rights reserved`}</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
