import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Bookmarks,
  Communities,
  Explore,
  HomeFill,
  Messages,
  More,
  Notifications,
  Profile,
  ProfilePicture,
  Search,
  ThreeDots,
  Twitter,
} from "../components/icons";
import MiniProfile from "../components/MiniProfile";
import SidebarButton from "../components/SidebarButton";
import TweetButton from "../components/TweetBtn";

const Sidebar = () => {
  const [screenListener, setscreenListener] = useState(false);

  const windowWidthSize = () => {
    if (window.innerWidth <= 1298) {
      return setscreenListener(true);
    }
    return setscreenListener(false);
  };

  useEffect(() => {
    window.addEventListener("resize", windowWidthSize);
    return () => {
      window.addEventListener("resize", windowWidthSize);
    };
  }, [screenListener]);

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <Twitter />
          </div>
          <SidebarButton
            name="Home"
            IconComponent={HomeFill}
            notificationState={true}
          />
          {screenListener === true ? (
            <SidebarButton name="Search" IconComponent={Search} />
          ) : (
            <SidebarButton name="Explore" IconComponent={Explore} />
          )}

          <SidebarButton name="Communities" IconComponent={Communities} />
          <SidebarButton name="Notifications" IconComponent={Notifications} />
          <SidebarButton name="Messages" IconComponent={Messages} />
          <SidebarButton name="Bookmarks" IconComponent={Bookmarks} />
          <SidebarButton name="Profile" IconComponent={Profile} />
          <SidebarButton name="More" IconComponent={More} />
          <TweetButton />
        </nav>
        <MiniProfile
          ProfilePhoto={ProfilePicture}
          name={"Pixelpool"}
          username={"Deadpixel"}
          Icon={ThreeDots}
        />
      </div>
    </header>
  );
};

export default Sidebar;
