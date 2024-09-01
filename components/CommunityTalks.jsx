import React from "react";
import SeparatorX from "./common/SeparatorX";
import SubmitButton from "./common/SubmitButton";

const CommunityTalks = ({ page }) => {
    const highlights = [
        {
            content: "Using this platform has been a game-changer for our community. The resources provided have helped us understand the complex history of land-grabbing and its ongoing impacts. We now feel empowered to advocate for our rights and have found a supportive network of allies",
            author: "Arinaitwe Immy",
            title: "Leader at NLG"
        },
        {
            content: "As an activist, the strategies and tools offered have significantly amplified our outreach efforts. We've been able to connect with other organizations and individuals who share our mission, making our advocacy more effective. This service truly bridges the gap between knowledge and action.",
            author: "Elizabeth Anderson",
            title: "CEO at NLG"
        },
        {
            content: "Accessing this platform has broadened my understanding of the impacts of land-grabbing beyond my own experiences. The insightful articles and reports have been instrumental in shaping my perspectives and actions. I highly recommend this service to anyone committed to social justice and sustainable land management.",
            author: "Arinaitwe Immy",
            title: "Leader at NLG"
        }
    ]
    return (
        <div className="community-banner-cover">
            <div className="sub-heading">
                <h2 className="heading-h2">Community Highligts</h2>
            </div>
            <div className="community-content">
                {highlights.map((tx, i) => {
                    return (
                        <div key={i} className="community-card">
                            {/* <span> */}
                                {tx.content.slice(0, 100)} ...
                            {/* </span> */}
                            <div className="profile">
                                <div className="profile-img">
                                    <div className="img"></div>
                                </div>
                                <div className="profile-text">
                                    <div className="profile-name">{tx.author}</div>
                                    <div className="profile-title">{tx.title}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="mx-auto">
                <SeparatorX />
                <SubmitButton text="Watch More" path="/explore" />
                <SeparatorX />
            </div>
        </div>
    );
};

export default CommunityTalks;
