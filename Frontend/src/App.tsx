import { Route, Routes, Navigate } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Pages/Home";
import Levels from "./Pages/Levels";
import Wiki from "./Pages/Wiki";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import FlashCard from "./Pages/FlashCard";
import Results from "./Pages/Results";
import Wordle from "./Pages/Wordle.tsx";
import flashcards from "./data/flashcards.json"; // Import the JSON data
import badges from "./data/badges.json";

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
          path="/quiz/:quizId/results"
          element={
            <>
              <Nav />
              <Results />
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
              <Profile badgeData={badges} />
            </>
          }
        />
        <Route
          path="/flashcard"
          element={
            <>
              <Nav />
              <FlashCard cardData={flashcards} />
            </>
          }
        />
          <Route
              path="/wordle"
              element={
                  <>
                      <Nav />
                      <Wordle cols={6} rows={5} />
                  </>
              }
          />
      </Routes>
    </div>
  );
}

export default App;
