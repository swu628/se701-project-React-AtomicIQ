import React, { useState, useCallback, useRef } from "react";
// import ReactCanvasConfetti from "react-canvas-confetti";
import Fireworks from "react-canvas-confetti/dist/presets/Fireworks";

const StateQuiz: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
//   const refAnimationInstance = useRef<ReactCanvasConfetti | null>(null);

  const quizQuestions = [
    {
      question:
        "What is the state of the element Hydrogen at room temperature?",
      options: ["Solid", "Liquid", "Gas"],
      correctAnswer: "Gas",
    },
    {
      question: "What is the state of the element Helium at room temperature?",
      options: ["Metals", "Non-metals", "Metalloids"],
      correctAnswer: "Non-metals",
    },
    {
      question: "What is the state of the element Lithium at room temperature?",
      options: ["Solid", "Liquid", "Gas"],
      correctAnswer: "Solid",
    },
  ];

  const handleOptionChange = (questionIndex: number, option: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: option,
    });
    setShowResults(false);
  };

//   const getInstance = useCallback((instance: ReactCanvasConfetti | null) => {
//     refAnimationInstance.current = instance;
//   }, []);

//   const makeShot = useCallback((particleRatio: number, opts: object) => {
//     if (refAnimationInstance.current) {
//       refAnimationInstance.current({
//         ...opts,
//         origin: { y: 0.7 },
//         particleCount: Math.floor(200 * particleRatio),
//       });
//     }
//   }, []);

  const fire = useCallback(() => {
    // makeShot(0.25, {
    //   spread: 26,
    //   startVelocity: 55,
    // });

    // makeShot(0.2, {
    //   spread: 60,
    // });

    // makeShot(0.35, {
    //   spread: 100,
    //   decay: 0.91,
    //   scalar: 0.8,
    // });

    // makeShot(0.1, {
    //   spread: 120,
    //   startVelocity: 25,
    //   decay: 0.92,
    //   scalar: 1.2,
    // });

    // makeShot(0.1, {
    //   spread: 120,
    //   startVelocity: 45,
    // });
    setTimeout(() => {
        setIsVisible(false);
      }, 3000);
  }, []);

  const handleSubmit = () => {
    setShowResults(true);

    const allCorrect = quizQuestions.every(
      (question, index) => selectedAnswers[index] === question.correctAnswer
    );

    if (allCorrect) {
      setIsVisible(true);
      fire();
    } else {
      console.log("Not all answers are correct");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 p-4">Multiple Choice Quiz</h2>
      {quizQuestions.map((question, index) => (
        <div key={index} className="mb-4">
          <h3 className="m-2 ml-7 font-semibold text-xl">
            {question.question}
          </h3>
          {question.options.map((option, optionIndex) => (
            <label key={optionIndex} className="block mb-1">
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                checked={selectedAnswers[index] === option}
                onChange={() => handleOptionChange(index, option)}
                className="m-2 ml-7"
              />
              {option}
            </label>
          ))}
          {showResults && (
            <div
              className={`m-2 ml-7 ${
                selectedAnswers[index] === question.correctAnswer
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {selectedAnswers[index] === question.correctAnswer
                ? "Correct!"
                : "Incorrect"}
            </div>
          )}
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="mt-4 m-2 ml-7 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Submit
      </button>
      {isVisible && (
        <Fireworks autorun={{ speed: 3 }} />
        // <ReactCanvasConfetti
        //   refConfetti={getInstance}
        //   style={{
        //     position: "fixed",
        //     pointerEvents: "none",
        //     width: "100%",
        //     height: "100%",
        //   }}
        // />
      )}
    </div>
  );
};

export default StateQuiz;
