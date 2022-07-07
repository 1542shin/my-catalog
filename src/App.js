import React from "react";
import { Sidebar } from "./feature/Sidebar";
import Feed from "./feature/Feed";
import "./index.css";
import TopBar from "./feature/TopBar";

function App() {
  return (
    <div id="App">
      <TopBar/>
      <Sidebar />
      <Feed />
    </div>
  );
}

export default App;
