import "./App.css";
import Nav from "./Nav";
import Home from "./Pages/Home";
import Levels from "./Pages/Levels";
import Wiki from "./Pages/Wiki";
import Profile from "./Pages/Profile";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/levels" element={<Levels />} />
        <Route path="/wiki" element={<Wiki />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
