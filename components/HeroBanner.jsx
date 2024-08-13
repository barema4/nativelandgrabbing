import React from "react";
import Link from "next/link";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container banner-cover">
      <div>
        <div>
          <div className="desc">
            <Link href="/blog/single">
              <button type="button">WATCH NOW</button>
            </Link>
          </div>
          {/* <div className="desc">
            <h5>COMING SOON</h5>
            <p>Best Deals in Town</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
