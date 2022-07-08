import { Route, Routes } from "react-router-dom";
import { Buddhism } from "./articles/Buddhism";
import { Ai } from "./articles/Ai";
import { Biology } from "./articles/Biology";
import { Physics } from "./articles/Physics";
import Home from "./Home";


function Feed() {
  return (
    <div id="feed">
      <Routes>
        <Route path="/my-catalog/buddhism" element={<Buddhism />} />
        <Route path="/my-catalog/ai" element={<Ai />} />
        <Route path="/my-catalog/biology" element={<Biology />} />
        <Route path="/my-catalog/physics" element={<Physics />} />
        <Route exact path="/my-catalog/" element={<Home />} />
      </Routes>
    </div>
  );
}
export default Feed;
