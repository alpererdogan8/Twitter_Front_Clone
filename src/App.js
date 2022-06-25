import React from "react";
import Layouts from "./layouts/Layouts";
import Sidebar from "./layouts/Sidebar";
import Timeline from "./layouts/Timeline";
import Trends from "./layouts/Trends";
import "./App.css";
import { Star } from "./components/icons";
import PageTitle from "./components/PageTitle";
import Editor from "./components/Editor";

const App = () => {
  return (
    <main>
      <Sidebar />
      <Layouts>
        <PageTitle title="Latest Tweets" Icon={<Star />}  />
        <Editor/>
        <Timeline />
      </Layouts>
      <Trends />
    </main>
  );
};

export default App;
