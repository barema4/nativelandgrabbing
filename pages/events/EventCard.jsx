import Link from "next/link";
import React from "react";

export default function EventCard({ post, className }) {
  return (
    <Link href={`/event/single`}>
      <article className="card">
        <div className="card__preview">
          <div className="img" role="img" aria-label={post?.title}></div>
          <div className="card__preview__overlay">
            <svg
              className="opacity-0 group-hover:opacity-[1] transition duration-500 ease-in-out absolute top-0 right-0 bottom-0 left-0 m-auto z-[2] "
              xmlns="http://www.w3.org/2000/svg"
              width="68"
              height="74"
              viewBox="0 0 68 74"
              fill="none"
            >
              <g filter="url(#filter0_d_4883_4844)">
                <path
                  d="M21.8316 10.735C18.3618 8.6625 14 11.2193 14 15.3257V50.6743C14 54.7807 18.3619 57.3375 21.8316 55.265L51.4221 37.5907C54.8593 35.5377 54.8593 30.4623 51.4221 28.4093L21.8316 10.735Z"
                  fill="white"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_d_4883_4844"
                  x="0"
                  y="0"
                  width="68"
                  height="74"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dy="4"></feOffset>
                  <feGaussianBlur stdDeviation="7"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_4883_4844"
                  ></feBlend>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_4883_4844"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
          </div>
          {/* overlay */}
          <div className="card__price">
            <svg
              // className="w-[12.92px] h-[12.92px] md:w-[14px] md:[14px]"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <circle cx="7" cy="7" r="7" fill="white"></circle>
              <path
                d="M5.4772 4.26029V9.73855L10.0424 6.99942L5.4772 4.26029Z"
                fill="#282828"
              ></path>
            </svg>
            <span className="card__time">2 MIN</span>
          </div>
        </div>
        <div className="preview__text">
          <h3>{post?.title}</h3>
          <p>
            {post?.metadata?.content?.slice(0, 100)}
            ...
          </p>
          <div className="card__bottom">Native LandGrab 3 days ago</div>
        </div>
      </article>
    </Link>
  );
}
