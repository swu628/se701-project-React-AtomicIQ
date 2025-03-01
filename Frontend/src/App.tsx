import { Navigate, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Pages/Home";
import Levels from "./Pages/Levels";
import Wiki from "./Pages/Wiki";
import SolidsLiquidsGases from "./Pages/Solids-Liquids-Gases";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import FlashCard from "./Pages/FlashCard";
import Results from "./Pages/Results";
import Wordle from "./Pages/Wordle";
import StateActivity from "./Pages/StateActivity";
import badges from "./data/badges.json";
import { Element, ElementProperty } from "~/types/element";
import "./App.css";

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
          path="/flashcard/:quizId/results"
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
          path="/solids-liquids-gases"
          element={
            <>
              <Nav />
              <SolidsLiquidsGases />
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
          path="/room-temperature-pressure"
          element={
            <>
              <Nav />
              <StateActivity />
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
          path="/flashcard/:quizId/"
          element={
            <>
              <Nav />
              <FlashCard />
            </>
          }
        />
        <Route
          path="/wordle"
          element={
            <>
              <Nav />
              <Wordle
                allowedAttempts={5}
                properties={[
                  ElementProperty.Category,
                  ElementProperty.Period,
                  ElementProperty.Group,
                  ElementProperty.Origins,
                  ElementProperty.Countries,
                  ElementProperty.Color,
                  ElementProperty.NaturalPhase,
                ]}
                availableElements={[
                  Element.H,
                  Element.He,
                  Element.Li,
                  Element.Be,
                  Element.B,
                  Element.C,
                  Element.N,
                  Element.O,
                  Element.F,
                  // Element.Ne,
                  // Element.Na,
                  // Element.Mg,
                  // Element.Al,
                  // Element.Si,
                  // Element.P,
                  // Element.S,
                  // Element.Cl,
                  // Element.Ar,
                  // Element.K,
                  // Element.Ca,
                ]}
              />
            </>
          }
        />
          <Route
              path="/wordle/results"
              element={
                  <>
                      <Nav />
                      <Results />
                  </>
              }
          />
      </Routes>
    </div>
  );
}

export default App;
