import React from "react";
import SeparatorX from "../../components/common/SeparatorX";

const TimeLine = () => {
  return (
    <div className="time-line-body">
      <div className="time-line-container">
        <div className="content">
          <h2>MEMBERSHIP</h2>
          <p>
            Become a NLG member to gain access to pre-sale tickets and unlock
            exclusive benefits, including special discounts on live event
            merchandise.
          </p>
          <button>JOIN TEAM NLG</button>
        </div>
      </div>
      {[1, 2, 3, 4].map((dt) => (
        <div>
          <SeparatorX />
          <div className="item">
            <div className="date">
              <div className="month">SEP</div>
              <div className="number">4</div>
            </div>
            <div className="details">
              <div className="words">
                <div className="main-text">
                  Native LandGrab with Russell Brand
                </div>
                <div className="sub-text">Nakawa, Division | Lands Office</div>
              </div>
            </div>
            <div className="time-line-btn">
              <button>GET TICKETS</button>
            </div>
          </div>
        </div>
      ))}
      <SeparatorX />
    </div>
  );
};

export default TimeLine;
