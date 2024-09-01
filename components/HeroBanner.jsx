import React from "react";
import Link from "next/link";
import { posts } from "../lib/helpers/data";

const HeroBanner = () => {
  const postBanner = posts[0];
  return (
    <div className="app-wrapper hero-banner-container banner-cover">
      <div className="desc">
        <Link href={`/blog/${postBanner.slug}`}>
          <button type="button">WATCH NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
