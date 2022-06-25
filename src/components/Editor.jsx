import React from "react";
import {
  Emoji,
  Gif,
  Location,
  Media,
  Poll,
  ProfilePicture,
  Schdule,
} from "./icons";
import TextareaAutoSize from "react-textarea-autosize";

const Editor = () => {
  return (
    <div className="editor">
      <div className="editor-container">
        <div className="editor-photo">
          <ProfilePicture />
        </div>
        <div className="editor-desk">
          <TextareaAutoSize
            className="editor-text"
            placeholder="What's happening?"
          ></TextareaAutoSize>
          <div className="editor-footer">
            <div className="editor-button">
              <span>
                <Media />
              </span>
              <span>
                <Gif />
              </span>
              <span>
                <Poll />
              </span>
              <span>
                <Emoji />
              </span>
              <span>
                <Schdule />
              </span>
              <span>
                <Location />
              </span>
            </div>
            <div className="editor-tweet-button">
              <a href="#">Tweet</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
