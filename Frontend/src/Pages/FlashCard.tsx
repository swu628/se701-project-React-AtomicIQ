'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaForward, FaBackward } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Button } from '../components/ui/button';

import correctSoundFile from '../sounds/rightanswer.mp3';
import incorrectSoundFile from '../sounds/wronganswer.mp3';

// Not used
import chemistryBackground from '../assets/chemistryBackground.jpg';

type FlashcardProps = {
  cardData: Array<{ frontSide: string; backSide: string }>;
};

type AnswerData = {
  answer: string;
  correct: boolean;
};

const FlashCard = ({ cardData }: FlashcardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [answers, setAnswers] = useState<AnswerData[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const correctSound = new Audio(correctSoundFile);
  const incorrectSound = new Audio(incorrectSoundFile);

  const total = cardData.length;
  const currentCard = cardData[currentIndex] || { frontSide: '', backSide: '' };
  const [cardBack, setCardBack] = useState(currentCard.backSide);

  useEffect(() => {
    if (answers[currentIndex]) {
      const { answer, correct } = answers[currentIndex];
      setUserAnswer(answer);
      setIsCorrect(correct);
      setIsSubmitted(true);
      setIsFlipped(true);
    } else {
      setUserAnswer('');
      setIsCorrect(null);
      setIsSubmitted(false);
      setIsFlipped(false);
    }
    setTimeout(() => {
      setCardBack(currentCard.backSide);
    }, 150);
  }, [currentIndex, currentCard, answers]);

  const handleFlip = () => {
    if (!isAnimating && isSubmitted) {
      setIsAnimating(true);
      setIsFlipped((prev) => !prev);
    } else if (!isSubmitted) {
      setErrorMessage('Please submit an answer before viewing the backside of the flashcard.');
    }
  };

  const handleNext = () => {
    if (!isSubmitted) {
      setErrorMessage('Please submit an answer before proceeding to the next question.');
      return;
    }
    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
      setProgress((prev) => prev + 100 / total);
      setErrorMessage('');
    } else if (currentIndex === total - 1) {
      navigate('/results');
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setProgress((prev) => prev - 100 / total);
      setErrorMessage('');
    }
  };

  const handleAnswerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const correct = userAnswer.toLowerCase() === currentCard.backSide.toLowerCase();
    setIsCorrect(correct);
    setIsSubmitted(true);
    handleFlip();

    const newAnswers = [...answers];
    newAnswers[currentIndex] = { answer: userAnswer, correct };
    setAnswers(newAnswers);
    setErrorMessage('');

    if (correct) {
      correctSound.play();
    } else {
      incorrectSound.play();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
          handleNext();
          break;
        case 'ArrowLeft':
          handleBack();
          break;
        case ' ':
          event.preventDefault();
          handleFlip();
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isSubmitted]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white space-y-4">
      <div className="w-full max-w-2xl p-4 bg-gray-800 rounded-lg shadow-lg">
        <button onClick={() => window.history.back()} className="mb-4 text-blue-300">&lt; Back</button>
        <h1 className="text-2xl font-bold mb-4">Level 1</h1>
        <div className="flip-card w-full h-72">
          <motion.div
            className={`flip-card-inner w-full h-full cursor-pointer ${isFlipped ? 'flipped' : ''}`}
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.3, type: 'tween', animationDirection: 'normal' }}
            onAnimationComplete={() => setIsAnimating(false)}
            onClick={handleFlip}
          >
            {!isFlipped ? (
              <div className="flip-card-front w-full h-full bg-zinc-800 rounded-lg p-4 flex justify-center items-center">
                <div className="text-3xl sm:text-4xl">{currentCard.frontSide}</div>
              </div>
            ) : (
              <div className="flip-card-back w-full h-full bg-zinc-800 rounded-lg p-4 flex justify-center items-center"
                   style={{ transform: 'rotateY(180deg)' }}>
                <div className="text-3xl sm:text-4xl">{cardBack}</div>
              </div>
            )}
          </motion.div>
        </div>
        <form onSubmit={handleAnswerSubmit} className="flex items-center mt-4 space-x-4">
          <input 
            type="text" 
            value={userAnswer} 
            onChange={(e) => setUserAnswer(e.target.value)} 
            className={`p-2 border rounded-lg w-full ${isSubmitted && !isCorrect ? 'border-red-500' : ''} text-black`}
            placeholder="Enter your answer"
            required
            disabled={isSubmitted}
          />
          <Button 
            type="submit" 
            className={`px-4 py-2 rounded-lg hover:bg-blue-700 ${isSubmitted ? (isCorrect ? 'bg-green-500' : 'bg-red-500') : 'bg-blue-500'}`} 
            disabled={isSubmitted}
          >
            Submit
          </Button>
        </form>
        {isCorrect !== null && (
          <div className={`text-lg ${isCorrect ? 'text-green-500' : 'text-red-500'} mt-4 text-center`}>
            {isCorrect ? 'Well done :)' : 'Try again later :('}
          </div>
        )}
        {errorMessage && (
          <div className="text-red-500 text-lg mt-4">{errorMessage}</div>
        )}
        <div className="flex items-center justify-center space-x-4 mt-10">
          <Button onClick={handleBack} className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-700" disabled={currentIndex === 0}>
            <FaBackward className="size-6" />
          </Button>
          <div className="text-lg">
            {currentIndex + 1} / {total}
          </div>
          <Button onClick={handleNext} className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-700">
            <FaForward className="size-6" />
          </Button>
        </div>
        <div className="w-full h-2 bg-gray-700 mt-4">
          <div className="h-full bg-blue-500" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
