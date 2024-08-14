import React from "react";
import Link from "next/link";
import { posts } from "../lib/helpers/data";

const FooterBanner = () => {
  const banner = {
    discount: "Join Us AT Native LandGrab",
    largeText1: "SUMMER DISCOUNTS",
    largeText2: "COME THROUGH FAST",
    saleTime: "Come and we fight for you",
    smallText: "Join our community",
    midText: "Together we can do more",
    desc: "We are a community of people who are passionate about the land and the people who live on it.",
    product: "Check out our latest products",
    buttonText: "Check Out Daily Podcasts",
    image: "",
  };

  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{banner.discount}</p>
          <h3>{banner.largeText1}</h3>
          <h3>{banner.largeText2}</h3>
          <p>{banner.saleTime}</p>
        </div>
        <div className="right">
          <p>{banner.smallText}</p>
          <h3>{banner.midText}</h3>
          <p>{banner.desc}</p>
          <Link href={`/blog/${posts[0].slug}`}>
            <button type="button">{banner.buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
