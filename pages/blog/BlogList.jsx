import React from "react";
import { posts } from "../../lib/helpers/data";
import BlogCard from "./BlogCard";
import SubmitButton from "../../components/common/SubmitButton";

const BlogList = ({ page }) => {
  return (
    <div className="must-watch-videos cards">
      {(page === "home" ? posts.slice(0, 3) : posts).map((post) => {
        return <BlogCard key={post.id} post={post} />;
      })}

      {page === "home" && <div className="blog-list-more">
        <SubmitButton text="watch all" path="/explore" className="" />
      </div>}
    </div>
  );
};

export default BlogList;
