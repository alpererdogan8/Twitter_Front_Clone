import React from "react";

const SidebarButton = ({
  IconComponent,
  name = "",
  notificationState = false,
}) => {
  return (
    // eslint-disable-next-line
    <a href="#" className="side-btnLink">
      <div className="side-btnStyle">
        {name === "Home" && notificationState === true ? (
          <span className="notification"></span>
        ) : (
          <span className="notification" style={{ display: "none" }}></span>
        )}
        <IconComponent />
        <span>{name}</span>
      </div>
    </a>
  );
};

export default SidebarButton;
