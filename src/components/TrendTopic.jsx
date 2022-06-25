import React from "react";
import { ThreeDots } from "./icons";

const TrendTopic = () => {
  return (
    <div className="trend-box">
      <div className="trend-container">
        <div className="trend-top">
          <div className="trend-category">Trend in Turkey</div>
          <ThreeDots />
        </div>

        <div className="trend-name">#PixelArt</div>
        <div className="trend-number">12000 Tweets</div>
      </div>
    </div>
  );
};

export default TrendTopic;
