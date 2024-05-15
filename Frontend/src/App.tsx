import "./App.css";
import Nav from "./Nav";
import Home from "./Pages/Home";
import Levels from "./Pages/Levels";
import Wiki from "./Pages/Wiki";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            <>
              <Nav />
              <Home />
            </>
          }
        />
        <Route
          path="/levels"
          element={
            <>
              <Nav />
              <Levels />
            </>
          }
        />
        <Route
          path="/wiki"
          element={
            <>
              <Nav />
              <Wiki />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Nav />
              <Profile />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
