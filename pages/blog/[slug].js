import React from "react";
import { VideoCard } from "../../components";
import BlogList from "./BlogList";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { posts } from "../../lib/helpers/data";

const BlogDetails = ({ slug }) => {
  const post = posts.find((dt) => dt.slug === slug);
  // console.log("post ..", post);
  return (
    <div className="app-wrapper">
      <VideoCard postBanner={post} />
      <div className="video-text">
        <h1>{post.title}</h1>
        <p className="icons">
          <AiFillInstagram />
          <AiOutlineTwitter />
        </p>
      </div>
      <h3>Related Videos ...</h3>
      <BlogList className="" />
    </div>
  );
};

export const getStaticPaths = async () => {
  const paths = posts.map((product) => ({
    params: {
      slug: product.slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export async function getStaticProps({ params: { slug } }) {
  // Fetch data based on params.id
  return {
    props: { slug },
  };
}

export default BlogDetails;
