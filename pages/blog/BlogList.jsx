import React from "react";
import { posts } from "../../lib/helpers/data";
import BlogCard from "./BlogCard";

const BlogList = ({ page, className }) => {
  return (
    <div className="cards">
      {(page === "home" ? posts.slice(0, 3) : posts).map((post) => {
        return <BlogCard key={post.id} post={post} />;
      })}
    </div>
  );
};

export default BlogList;
