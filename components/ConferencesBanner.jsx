import React from "react";
import SubmitButton from "./common/SubmitButton";

const ConferencesBanner = () => {
    return (
        <div className="conferences-banner-cover">
            <div className="conferences-banner-left"></div>
            <div className="conferences-banner-right"></div>
            <div className="conferences-banner-center">
                <h1>The most Interesting people in Uganda to feature in NLG conferences.</h1>
                <p>The Native LandGrab show is now available on nativelandgrab.com and your favorite podcast platform.</p>
                <SubmitButton text="watch Now" path="/explore" />
            </div>
        </div>
    );
};

export default ConferencesBanner;
