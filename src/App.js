import React from "react";
import { Sidebar } from "./feature/Sidebar";
import Feed from "./feature/Feed";
import "./index.css";
import TopBar from "./feature/TopBar";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init();

  return (
    <div id="App">
      <TopBar/>
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;
