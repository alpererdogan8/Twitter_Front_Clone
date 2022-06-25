import React from "react";
import { TweetButtonMobile } from "./icons";

const Button = () => {
  return (
    // eslint-disable-next-line
    <a className="tweet-btn tweet-btn-sidebar" href="#">
      <span>Tweet</span>
      <TweetButtonMobile/>
    </a>
  );
};

export default Button;
