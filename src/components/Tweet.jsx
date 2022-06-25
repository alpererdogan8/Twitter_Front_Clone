import React from "react";
import { Comment, Like, Retweet, Share, ThreeDots } from "./icons";

const Tweet = ({
  ProfileImg,
  name,
  username,
  content,
  time,
  comment,
  retweet,
  like,
}) => {
  return (
    <div className="tweet">
      <div className="tweet-container">
        <div className="tweet-header">
          <ProfileImg />
        </div>
        <div className="tweet-body">
          <div className="content-top">
            <div className="tweet-name">{name}</div>
            <div className="tweet-username">@{username}</div>
            <span>.</span>
            <div className="tweet-time">{time}</div>
            <div className="tweet-options">
              <span>{<ThreeDots />}</span>
            </div>
          </div>

          <div className="content-mid">
            <div className="tweet-content">{content}</div>
          </div>

          <div className="content-bottom">
            <div className="tweet-buttons">
              <span>
                <div>
                  <Comment />
                </div>
                <span>{comment}</span>
              </span>
              <span>
                <div>
                  <Retweet />
                </div>
                <span>{retweet}</span>
              </span>
              <span>
                <div>
                  <Like />
                </div>
                <span>{like}</span>
              </span>
              <span>
                <div>
                  <Share />
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
