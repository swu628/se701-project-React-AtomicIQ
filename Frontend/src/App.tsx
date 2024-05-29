import {Navigate, Route, Routes} from "react-router-dom";
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
import {Element, ElementProperty} from "~/types/element.ts";
import "./App.css";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Navigate to="/login"/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route
                    path="/home"
                    element={
                        <>
                            <Nav/>
                            <Home/>
                        </>
                    }
                />
                <Route
                    path="/quiz/:quizId/results"
                    element={
                        <>
                            <Nav/>
                            <Results/>
                        </>
                    }
                />
                <Route
                    path="/levels"
                    element={
                        <>
                            <Nav/>
                            <Levels/>
                        </>
                    }
                />
                <Route
                    path="/wiki"
                    element={
                        <>
                            <Nav/>
                            <Wiki/>
                        </>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <>
                            <Nav/>
                            <Profile badgeData={badges}/>
                        </>
                    }
                />
                <Route
                    path="/flashcard"
                    element={
                        <>
                            <Nav/>
                            <FlashCard cardData={flashcards}/>
                        </>
                    }
                />
                <Route
                    path="/wordle"
                    element={
                        <>
                            <Nav/>
                            <Wordle allowedAttempts={5}
                                    properties={[
                                        ElementProperty.Category,
                                        ElementProperty.Period,
                                        ElementProperty.Group,
                                        ElementProperty.Origins,
                                        ElementProperty.Countries,
                                        ElementProperty.Color
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
                                        Element.Ne,
                                        Element.Na,
                                        Element.Mg,
                                        Element.Al,
                                        Element.Si,
                                        Element.P,
                                        Element.S,
                                        Element.Cl,
                                        Element.Ar,
                                        Element.K,
                                        Element.Ca
                                    ]}
                            />
                        </>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
