"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaForward, FaBackward } from "react-icons/fa";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Button } from "../components/ui/button";

// Import the sound effects when the user got the questions right/wrong
import correctSoundFile from "../sounds/rightanswer.mp3";
import incorrectSoundFile from "../sounds/wronganswer.mp3";

// Import the JSON data
import flashcards from "../data/flashcards.json";

type FlashcardQuiz = {
  id: number;
  level: number;
  title: string;
  questions: Array<{ id: number; frontSide: string; backSide: string }>;
};

export type AnswerData = {
  answer: string;
  correct: boolean;
};

const FlashCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams<{ quizId: string }>();
  const quizId = params.quizId || "0";
  const cardData: FlashcardQuiz = flashcards[parseInt(quizId)];
  const { startIndex = 0 } = location.state || {};
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(startIndex);
  const [progress, setProgress] = useState<number>(
    (startIndex / cardData.questions.length) * 100
  );
  const [userAnswer, setUserAnswer] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [answers, setAnswers] = useState<AnswerData[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showRules, setShowRules] = useState<boolean>(false);

  const correctSound = new Audio(correctSoundFile);
  const incorrectSound = new Audio(incorrectSoundFile);

  const total = cardData.questions.length;
  const groupSize = total;
  const currentCard = cardData.questions[currentIndex] || {
    frontSide: "",
    backSide: "",
  };
  const [cardBack, setCardBack] = useState<string>(currentCard.backSide);

  useEffect(() => {
    document.body.classList.add("backgroundImage");
    return () => {
      document.body.classList.remove("backgroundImage");
    };
  }, []);

  useEffect(() => {
    if (answers[currentIndex]) {
      const { answer, correct } = answers[currentIndex];
      setUserAnswer(answer);
      setIsCorrect(correct);
      setIsSubmitted(answer !== ""); // Only set isSubmitted to true if the answer is not empty
      setIsFlipped(answer !== ""); // Only set isFlipped to true if the answer is not empty
    } else {
      setUserAnswer("");
      setIsCorrect(null);
      setIsSubmitted(false);
      setIsFlipped(false);
    }
    setCardBack(currentCard.backSide); // Update cardBack state directly
  }, [currentIndex, currentCard, answers]);

  const handleFlip = () => {
    // Show the backside of the card
    if (!isAnimating && isSubmitted) {
      setIsAnimating(true);
      setIsFlipped((prev) => !prev);
      // Show error message if the user have not yet submit their answer
    } else if (!isSubmitted) {
      setErrorMessage(
        "Please submit an answer before viewing the backside of the flashcard."
      );
    }
  };

  const navigateToResults = (
    _currentIndex: number,
    newAnswers: AnswerData[]
  ) => {
    const sliceStart = startIndex;
    const sliceEnd = sliceStart + groupSize;
    navigate(`/flashcard/${cardData.id}/results`, {
      state: {
        answers: newAnswers.slice(sliceStart, sliceEnd).filter(Boolean),
        quizType: "flashcard",
      },
    });
  };

  const handleNext = () => {
    const newAnswers = [...answers];
    if (!isSubmitted) {
      newAnswers[currentIndex] = { answer: "", correct: false };
      setAnswers(newAnswers);
      setErrorMessage("");
      setIsSubmitted(true);
    }
    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
      setProgress(((currentIndex + 1) / total) * 100);
      setErrorMessage("");
      setIsSubmitted(false);
      setIsCorrect(null); // Reset isCorrect when moving to the next question
      setIsFlipped(false);
      if ((currentIndex + 1) % groupSize === 0) {
        // navigate to the result page when the user reached to the last question of a level
        navigateToResults(currentIndex, newAnswers);
      }
    } else if (currentIndex === total - 1) {
      if (!isSubmitted) {
        newAnswers[currentIndex] = { answer: "", correct: false };
        setAnswers(newAnswers);
      }
      // navigate to the result page when the user reached to the last question and clicked on the next button
      navigateToResults(currentIndex, newAnswers);
    }
  };

  // When the user clicked on the back button
  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setProgress(((currentIndex - 1) / total) * 100);
      setErrorMessage("");
      setIsCorrect(null); // Reset isCorrect when moving to the previous question
    }
  };

  // When the user submit an answer
  const handleAnswerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const correct = currentCard.backSide.includes("|")
      ? currentCard.backSide.split("|").some((answer) => {
          userAnswer.toLowerCase() === answer.toLowerCase();
        })
      : userAnswer.toLowerCase() === currentCard.backSide.toLowerCase();
    setIsCorrect(correct);
    setIsSubmitted(true);
    handleFlip();

    const newAnswers = [...answers];
    newAnswers[currentIndex] = { answer: userAnswer, correct };
    setAnswers(newAnswers);
    setErrorMessage("");

    if (correct) {
      correctSound.play();
    } else {
      incorrectSound.play();
    }
  };

  // Show the rules when the show rules button is clicked
  const toggleRules = () => {
    setShowRules((prev) => !prev);
  };

  // In charge of keyboard effects
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
          handleNext();
          break;
        case "ArrowLeft":
          handleBack();
          break;
        case " ":
          event.preventDefault();
          handleFlip();
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isSubmitted]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white space-y-4">
      <div className="w-full max-w-2xl p-4 bg-white rounded-lg shadow-lg relative z-10">
        <div className="flex justify-between mb-4">
          <button
            onClick={() => window.history.back()}
            className="text-blue-300"
          >
            &lt; Back
          </button>
          <button onClick={toggleRules} className="text-blue-300">
            Show Rules
          </button>
        </div>
        <h1 className="text-2xl font-bold mb-4 text-black">{cardData.title}</h1>
        <div className="flip-card w-full h-72">
          <motion.div
            className={`flip-card-inner w-full h-full cursor-pointer ${
              isFlipped ? "flipped" : ""
            }`}
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{
              duration: 0.3,
              type: "tween",
              animationDirection: "normal",
            }}
            onAnimationComplete={() => setIsAnimating(false)}
            onClick={handleFlip}
          >
            {!isFlipped ? (
              <div className="flip-card-front w-full h-full bg-zinc-800 rounded-lg p-8 flex justify-center text-center items-center">
                <div className="text-3xl sm:text-4xl text-white">
                  {currentCard.frontSide}
                </div>
              </div>
            ) : (
              <div
                className="flip-card-back w-full h-full bg-zinc-800 rounded-lg p-8 flex justify-center text-center items-center"
                style={{ transform: "rotateY(180deg)" }}
              >
                <div className="text-3xl sm:text-4xl text-white">
                  {cardBack}
                </div>
              </div>
            )}
          </motion.div>
        </div>
        <form
          onSubmit={handleAnswerSubmit}
          className="flex items-center mt-4 space-x-4"
        >
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className={`p-2 border rounded-lg w-full ${
              isSubmitted && !isCorrect ? "border-red-500" : ""
            } text-black`}
            placeholder="Enter your answer"
            required
            disabled={isSubmitted && userAnswer !== ""}
          />
          <Button
            type="submit"
            className={`px-4 py-2 rounded-lg hover:bg-blue-700 ${
              isSubmitted
                ? isCorrect
                  ? "bg-green-500"
                  : "bg-red-500"
                : "bg-blue-500"
            }`}
            disabled={isSubmitted && userAnswer !== ""}
          >
            Submit
          </Button>
        </form>
        <div className="relative h-10 mt-4">
          {isCorrect !== null && isSubmitted && userAnswer !== "" && (
            <div
              className={`text-lg ${
                isCorrect ? "text-green-500" : "text-red-500"
              } absolute inset-0 flex items-center justify-center`}
            >
              {isCorrect ? "Well done :)" : "Try again later :("}
            </div>
          )}
          {errorMessage && (
            <div className="text-red-500 text-lg absolute inset-0 flex items-center justify-center">
              {errorMessage}
            </div>
          )}
        </div>
        <div className="flex items-center justify-center space-x-4 mt-10">
          <Button
            onClick={handleBack}
            className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-700"
            disabled={currentIndex === 0}
          >
            <FaBackward className="size-6" />
          </Button>
          <div className="text-lg text-black">
            {currentIndex + 1} / {total}
          </div>
          <Button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-700"
          >
            <FaForward className="size-6" />
          </Button>
        </div>
        <div className="w-full h-2 bg-gray-700 mt-4">
          <div
            className="h-full bg-blue-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <AnimatePresence>
        {showRules && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 flex items-center justify-center z-50"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md text-center">
              <h2 className="text-2xl mb-4">Rules</h2>
              <p className="mb-4">
                1. Read the question on the front of the card.
              </p>
              <p className="mb-4">2. Enter your answer in the text field.</p>
              <p className="mb-4">
                3. Click 'Submit' button / press 'Enter' on keyboard to submit
                your answer.
              </p>
              <p className="mb-4">
                4. Navigate between cards using the 'Next' and 'Back' buttons /
                'Arrow left' and 'Arrow right' on keyboard.
              </p>
              <p className="mb-4">
                Note: Click the flashcard / press 'Space' on keyboard to flip
                the attempted cards.
              </p>
              <Button
                onClick={toggleRules}
                className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-700"
              >
                Close
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlashCard;
