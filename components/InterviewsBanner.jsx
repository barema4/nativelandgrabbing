import React from "react";
import SubmitButton from "./common/SubmitButton";

const InterviewsBanner = () => {
    const parentStyle = {
        display: 'flex',
        height: '9rem',
        marginTop: 'auto',
        marginBottom: 'auto',
        bottom: 0,
        // paddingTop: '10px',
    }

    const childStyle = {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: '0.375rem',
    }

    const secondChild = {
        ...childStyle,
        marginLeft: '30px',
        marginRight: '30px',
    }
    // 	https://imagedelivery.net/EBhj2SQkfZkfcl1LUD8dPQ/05b479eb-7c5b-4a74-0b80-040942d4ea00/w=640
    // 	https://imagedelivery.net/EBhj2SQkfZkfcl1LUD8dPQ/ba2e081c-d3e1-4404-6da5-f89ff1dec300/w=640
    // 	https://imagedelivery.net/EBhj2SQkfZkfcl1LUD8dPQ/377c394b-87d9-450d-09c2-b26f32dfc100/w=640

    return (
        <div className="interviews-banner-cover">
            <div className="wrapper">
                <div className="wrapper-content my-auto">
                    <h2>THE MOST POWERFUL INTERVIEWS NATION-WIDE</h2>
                    <SubmitButton text="watch All" path="/explore" />
                </div>
                {/* <div className="interview-img">
                    {[1, 2, 3].map(() => {
                        return (
                            <article className="card">
                                <div className="card__preview">
                                    <div
                                        className="img"
                                        role="img"
                                        aria-label="title"
                                    // style={{ "--background-image": `url(https://i.ytimg.com/vi/${img}/maxresdefault.jpg)` }}
                                    ></div>
                                </div>
                            </article>
                        )
                    })}
                </div> */}

                <div style={parentStyle}>
                    <div style={childStyle}></div>
                    <div style={secondChild}></div>
                    <div style={childStyle}></div>
                </div>

            </div>
            {/* <div className="interviews-banner-center app-wrappers">
                <h1>The most Powerful Interviews Country-Wide.</h1>
                <SubmitButton text="watch All" path="/explore" />
            </div> */}
        </div>
    );
};

export default InterviewsBanner;
