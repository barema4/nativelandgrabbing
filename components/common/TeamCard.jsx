import Link from "next/link";
import React from "react";

const TeamCard = () => {
    const benefits = [
      "Advocacy and representation amplify local voices.",
      "Legal support protects land rights.",
      "Awareness and Education empower communities.",
      "Strength in community numbers.",
      "Policy change drives land reforms.",
      "Sustainable practices preserve land resources.",
    ];
    return (
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
                    {benefits.map((text, i) => {
                        return (
                            <li key={i}>
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
    );
};

export default TeamCard;
