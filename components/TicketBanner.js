import React from "react";
import { posts } from "../lib/helpers/data";
import Link from "next/link";

const TicketBanner = () => {
  const postBanner = posts[0];
  return (
    <div className="ticket-banner-container ticket-banner-cover">
      {/* <div>
        <div>
          <div className="desc">
            <Link href={`/blog/${postBanner.slug}`}>
              <button type="button">WATCH NOW</button>
            </Link>
          </div>
          <div className="desc">
            <h5>COMING SOON</h5>
            <p>Best Deals in Town</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TicketBanner;
