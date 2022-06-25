import React from "react";
import { Search } from "../components/icons";
import TrendTopic from "../components/TrendTopic";

const Trends = () => {
  return (
    <div className="trends">
      <div className="trends-container">
        <div className="trends-search-wrapper">
          <div className="trends-search">
            <div className="trends-searchbar">
              <div className="trends-search-icon">
                <Search />
              </div>
              <div className="trends-search-input">
                <input type="text" placeholder="Search Twitter" />
              </div>
            </div>
          </div>
        </div>
        <div className="trends-box">
          <h2 className="trends-header">Trends for you</h2>
          <TrendTopic />
          <TrendTopic />
          <TrendTopic />
          <TrendTopic />
          <TrendTopic />
          <TrendTopic />
          <TrendTopic />
          <TrendTopic />
          <TrendTopic />

          <a href="#" className="trends-show-more">
            Show more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Trends;
