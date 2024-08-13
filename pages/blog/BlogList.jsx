// import React, { useState } from "react";
// // import { BlogCard } from "./BlogCard";
// // import { cosmic } from "@/cosmic/client";

// export async function BlogList({
//   query,
//   sort,
//   limit,
//   skip,
//   className,
//   status,
// }) {
//   const posts = [];
//   // const { objects: posts } = await cosmic.objects
//   //   .find(query)
//   //   .props("id,slug,title,metadata")
//   //   .depth(1)
//   //   .sort(sort ? sort : "-order")
//   //   .limit(limit ? limit : 100)
//   //   .skip(skip ? skip : 0)
//   //   .status(status ? status : "published");

//   return (
//     <div className={className}>
// {
//   posts.map((post) => {
//     return <div>Joel ...</div>;
//     // return <BlogCard key={post.id} post={post} />;
//   });
// }
//     </div>
//   );
// }

import React from "react";
import { BlogCard } from "./BlogCard";
import { posts } from "../../lib/helpers/data";

const BlogList = ({ page, className }) => {
  return (
    <div class="cards">
      {(page === "home" ? posts.slice(0, 3) : posts).map((post) => {
        return <BlogCard key={post.id} post={post} />;
      })}
    </div>
  );
};

export default BlogList;
