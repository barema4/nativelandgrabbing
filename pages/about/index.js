import React from "react";
import SubmitButton from "../../components/common/SubmitButton";
import Link from "next/link";

const About = () => {
  const benefits = [
    "Advocacy and representation amplify local voices.",
    "Legal support protects land rights.",
    "Awareness and Education empower communities.",
    "Strength in community numbers.",
    "Policy change drives land reforms.",
    "Sustainable practices preserve land resources.",
  ];
  return (
    <div className="app-wrapper about-page">
      <h1 className="text-center">At Native LandGrab</h1>
      <div className="video-banner-container">
        <div className="video-banner__overlay">
          <iframe
            src={`https://www.youtube.com/embed/BIxd4NdnQPs?modestbranding=1&controls=0`}
            frameborder="0"
            allow="autoplay"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="about-text">
        <p className="subscribe-text">
          Welcome to Native Landgrab, your dedicated resource for understanding
          and addressing the complex issues surrounding land ownership and
          land-grabbing. Our mission is to provide comprehensive and accessible
          information on the historical and ongoing impacts of land-grabbing on
          native populations worldwide. We believe that through education,
          advocacy, and collaboration, we can foster a world where land is
          managed equitably and sustainably, respecting the rights and heritage
          of all communities.
        </p>
        <br />
        <p className="subscribe-text">
          Our platform is designed to serve a diverse audience, including
          indigenous communities, activists, educators, researchers, policy
          makers, NGOs, and the general public. We offer a wide array of
          resources, from in-depth articles and reports to multimedia content
          and educational tools. By bringing together historical analyses, case
          studies, and contemporary issues, we aim to equip our users with the
          knowledge and strategies needed to advocate for just land policies and
          practices.
        </p>
        <br />
        <p className="subscribe-text">
          At Native Landgrab, we understand that land-grabbing is not just a
          historical issue but a present-day challenge that continues to affect
          millions of people globally. Our commitment is to amplify the voices
          of those impacted, providing them with a platform to share their
          stories and connect with supportive networks. We also strive to
          influence policy and public opinion by fostering informed dialogue and
          promoting sustainable land management practices.
        </p>
        <br />
        <p className="subscribe-text">
          Join us in our mission to make a difference. Whether you are looking
          to educate yourself and others, advocate for change, or simply stay
          informed about land-related issues, Native Landgrab is here to support
          you. Together, we can work towards a future where every community’s
          land rights are recognized and protected, and where the land is a
          source of life and prosperity for all.
        </p>
      </div>

      <div className="mx-auto login">
        <SubmitButton text="Join In" path="/login" className="" />
      </div>

      <div className="team-card">
        <div className="card-item">
          <h2>JOIN THE TEAM</h2>
          <p className="subscribe-text">
            Join the community dedicated to defending and sensitizing people
            about Land Grabbing.
          </p>
          <Link href="login">
            <div className="btn-div">
              <button type="button">JOIN NOW</button>
            </div>
          </Link>
          <p className="subscribe-text">
            By subscribing, you agree with our Terms of Service
          </p>
        </div>
        <div className="separator"></div>
        <div className="card-item">
          <ul>
            {benefits.map((text) => {
              return (
                <li>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 text-tcn-green"
                  >
                    <path
                      d="M11.9998 0.799988C14.9702 0.799988 17.819 1.97998 19.9194 4.08039C22.0198 6.1808 23.1998 9.02956 23.1998 12C23.1998 14.9704 22.0198 17.8192 19.9194 19.9196C17.819 22.02 14.9702 23.2 11.9998 23.2C9.02938 23.2 6.18062 22.02 4.08021 19.9196C1.9798 17.8192 0.799805 14.9704 0.799805 12C0.799805 9.02956 1.9798 6.1808 4.08021 4.08039C6.18062 1.97998 9.02938 0.799988 11.9998 0.799988ZM16.701 8.70439C16.5851 8.589 16.4324 8.51784 16.2695 8.50326C16.1066 8.48868 15.9438 8.53161 15.8092 8.62459L15.7112 8.70439L10.5998 13.8172L8.2954 11.5114L8.1974 11.4302C8.06256 11.3373 7.89942 11.2946 7.73637 11.3096C7.57331 11.3245 7.42065 11.3962 7.30495 11.512C7.18925 11.6279 7.11783 11.7806 7.10312 11.9437C7.0884 12.1068 7.13132 12.2699 7.2244 12.4046L7.3042 12.5026L10.1042 15.3026L10.2022 15.3824C10.3191 15.4631 10.4578 15.5063 10.5998 15.5063C10.7418 15.5063 10.8805 15.4631 10.9974 15.3824L11.0954 15.3012L16.701 9.69559L16.7822 9.59759C16.8754 9.46275 16.9183 9.2995 16.9034 9.13628C16.8886 8.97305 16.817 8.82021 16.701 8.70439Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  {text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
