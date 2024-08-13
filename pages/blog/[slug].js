import React from "react";
import { VideoCard } from "../../components";

const BlogDetails = ({ slug }) => {
  const bannerData = [];
  return (
    <div className="app-wrapper">
      <VideoCard heroBanner={bannerData.length && bannerData[0]} />
      <div className="video-text">
        <h1>Lakeview Elegance</h1>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  // Example static paths
  return {
    paths: [{ params: { slug: "single" } }],
    fallback: false, // Can also be true or 'blocking'
  };
}

export async function getStaticProps({ params: { slug } }) {
  // Fetch data based on params.id
  return {
    props: { slug },
  };
}

export default BlogDetails;
