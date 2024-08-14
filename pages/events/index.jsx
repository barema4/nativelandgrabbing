// import React from "react";
// import { posts } from "../../lib/helpers/data";
// import EventCard from "./EventCard";

// const EventList = ({ page, className }) => {
//   return (
//     <div className="cards">
//       {(page === "home" ? posts.slice(0, 3) : posts).map((post) => {
//         return <EventCard key={post.id} post={post} />;
//       })}
//     </div>
//   );
// };

// export default EventList;

import React from "react";

const EventsList = () => {
  return (
    <div style={{ display: "none" }} className="events-banner-container">
      {/* <AppBanner /> */}
    </div>
  );
};

export default EventsList;
