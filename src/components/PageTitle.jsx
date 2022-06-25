import React from "react";
import { Star } from "./icons";

const PageTitle = () => {
  const title = "Latest Tweets";
  return (
    <>
      <div className="page-title-ghost"></div>
      <div className="page-title">
        <div className="page-title-wrapper">
          <span>{title}</span>
          <button>
            <Star />
          </button>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
