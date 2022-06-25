import React from "react";

const MiniProfile = ({ ProfilePhoto, name, username, Icon }) => {
  return (
    <div className="miniProfile">
      <div className="miniProfile-context">
        <div className="miniProfile-picture">
          <ProfilePhoto />
        </div>
        <div className="miniProfile-text">
          <span>{name}</span>
          <span>@{username}</span>
        </div>
        <div className="miniProfile-icon">
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default MiniProfile;
