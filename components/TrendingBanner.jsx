import React from "react";
import SubmitButton from "./common/SubmitButton";
import { posts } from "../lib/helpers/data";
import BlogCard from "../pages/blog/BlogCard";
import SeparatorX from "./common/SeparatorX";

const TrendingBanner = ({ page }) => {
    return (
        <div className="trending-banner-cover">
            <div className="sub-heading">
                <h2 className="heading-h2">TRENDING VIDEOS</h2>
            </div>
            <div className="cards">
                {(page === "home" ? posts.slice(0, 3) : posts).map((post) => {
                    return <BlogCard key={post.id} post={post} />;
                })}
                <div className="mx-auto">
                    <SeparatorX />
                    <SubmitButton text="more" path="/explore" />
                    <SeparatorX />
                </div>
            </div>
        </div>
    );
};

export default TrendingBanner;
