import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { Slider } from "./ui/slider";
import { Separator } from "./ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Textarea } from "./ui/textarea";
import ParticleSimulation from './ParticleSimulation';
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"
import { Label } from "../components/ui/label"

const MIN_PRESSURE = 1000; // Minimum pressure in Pascals
const MAX_PRESSURE = 25000000; // Maximum pressure in Pascals

const antoineIscoVaporPressure = (temperature) => {
 const A1 = 8.07131;
 const B1 = 1730.63;
 const C1 = 233.426;
 const tempKelvin = temperature + 273.15;
 return 10 ** (A1 - (B1 / (tempKelvin + C1)));
};

const antoineVaporPressure = (temperature) => {
 const A2 = 8.07494;
 const B2 = 1688.537;
 const C2 = 233.832;
 const tempKelvin = temperature + 273.15;
 return 10 ** (A2 - (B2 / (tempKelvin + C2)));
};

const getWaterState = (temperature, pressure) => {
 const vaporPressureIsco = antoineIscoVaporPressure(temperature);
 const vaporPressureAntoine = antoineVaporPressure(temperature);

 if (pressure < vaporPressureIsco) {
   return 'gas';
 } else if (pressure > vaporPressureAntoine) {
   return 'solid';
 } else {
   return 'liquid';
 }
};


let questions = [
  {
    id: 1,
    text: ' Which of the following correctly describes the arrangement of particles in a solid?',
    type: 'mcq',
    options: [
      { value: 'option1', text: 'Particles are close together but can move past each other freely.', feedback: 'This description fits a liquid state.' },
      { value: 'option2', text: 'Particles are packed closely together in a fixed, orderly pattern.', feedback: 'This description fits a solid state.' },
      { value: 'option3', text: 'Particles are far apart and move independently of each other.', feedback: 'This description fits a gas state.' },
      { value: 'option4', text: 'Particles are in a fixed position but can easily slide past each other.', feedback: 'This description does not accurately represent any of the states of matter.' },
    
    ],
    correctOption: 'option2',
  },
  {
    id: 2,
    text: ' Which of the following correctly describes the arrangement of particles in a liquid?',
    type: 'mcq',
    options: [
      { value: 'option1', text: 'Particles are close together but can move past each other freely.', feedback: 'This description fits a liquid state.' },
      { value: 'option2', text: 'Particles are packed closely together in a fixed, orderly pattern.', feedback: 'This description fits a solid state.' },
      { value: 'option3', text: 'Particles are far apart and move independently of each other.', feedback: 'This description fits a gas state.' },
      { value: 'option4', text: 'Particles are in a fixed position but can easily slide past each other.', feedback: 'This description does not accurately represent any of the states of matter.' },
    
    ],
    correctOption: 'option1',
  },
  {
    id: 3,
    text: ' Which of the following correctly describes the arrangement of particles in a gas?',
    type: 'mcq',
    options: [
      { value: 'option1', text: 'Particles are close together but can move past each other freely.', feedback: 'This description fits a liquid state.' },
      { value: 'option2', text: 'Particles are packed closely together in a fixed, orderly pattern.', feedback: 'This description fits a solid state.' },
      { value: 'option3', text: 'Particles are far apart and move independently of each other.', feedback: 'This description fits a gas state.' },
      { value: 'option4', text: 'Particles are in a fixed position but can easily slide past each other.', feedback: 'This description does not accurately represent any of the states of matter.' },
    
    ],
    correctOption: 'option3',
  },
  {
    id: 4,
    text: 'When looking at the particles, how can you tell the difference between a solid and a liquid?',
    type: 'short',
    correctAnswer: 'In a solid, particles are closely packed in a fixed, orderly structure, vibrating around fixed positions, resulting in a definite shape and volume, and making solids generally incompressible. In contrast, particles in a liquid are still close together but arranged more randomly, allowing them to move past one another, which gives liquids an indefinite shape that conforms to their container while maintaining a definite volume',
  }
];

const WaterStateSimulator = () => {
 const [temperature, setTemperature] = useState(100);
 const [pressure, setPressure] = useState(100000);
 const waterState = getWaterState(temperature, pressure);
 const [showNextButton, setShowNextButton] = useState(false);

 const [learningObjectives, setLearningObjectives] = useState([
   { id: 1, text: 'State the distinguishing properties of solids, liquids and gases', completed: false, },
   { id: 2, text: 'Describe the structures of solids, liquids and gases in terms of particle separation, arrangement and motion', completed: false, questions: [] },
   { id: 3, text: 'Describe the effects of temperature and pressure on the volume of a gas', completed: false, questions: [] },
 ]);

 const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
 const [showConfetti, setShowConfetti] = useState(false);

 const handleTemperatureChange = (value) => {
   setTemperature(value[0]);
 };

 const handlePressureChange = (value) => {
   setPressure(Math.exp(value[0]));
 };

 const handleCheckboxChange = (objectiveId) => {
   setLearningObjectives((prevObjectives) =>
     prevObjectives.map((objective) =>
       objective.id === objectiveId ? { ...objective, completed: !objective.completed } : objective
     )
   );
 };
 let currentQuestion = questions[currentQuestionIndex];

 const handleSubmitAnswer = (questionId, answer, isCorrect) => {
   const updatedQuestions = questions.map((question, index) =>
     index === currentQuestionIndex ? { ...question, userAnswer: answer, isCorrect } : question
   );

   if (isCorrect) {
     setShowNextButton(true);
   }

   // Update the questions array with the new data
   questions = updatedQuestions;
   currentQuestion = questions[currentQuestionIndex];
 };

 const handleNextQuestion = () => {
   if (currentQuestionIndex === questions.length - 1) {
     // If it's the last question, reset the index to 0
     setCurrentQuestionIndex(0);
     setShowNextButton(false);
   } else {
     // Otherwise, move to the next question
     setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
     setShowNextButton(false);
   }
 };

 const handleResetToRoomTemp = () => {
   setTemperature(20);
 };

 const handleResetToStandardAtmospheric = () => {
   setPressure(101325);
 };

 const currentLearningObjective = learningObjectives[0];

 return (
   <div className="flex gap-4 p-4 px-16">
     {showConfetti && <Confetti />}
     <div className="flex flex-col gap-4 w-1/2">
       <Card>
         <CardHeader>
           <CardTitle>Water State Simulator</CardTitle>
           <CardDescription>
             Explore the states of water by adjusting temperature and pressure. Use the learning objectives and answer boxes to guide your exploration.
           </CardDescription>
         </CardHeader>
         <CardContent className="grid gap-4">
           <div className="flex gap-4">
             <div className="flex flex-col gap-2 flex-grow">
               <label htmlFor="temperature" className="font-bold">
                 Temperature
               </label>
               <SliderDemo
                 id="temperature"
                 value={[temperature]}
                 min={-50}
                 max={200}
                 step={1}
                 onValueChange={handleTemperatureChange}
               />
               <span>{temperature}°C</span>
             </div>
             <div className="flex flex-col gap-2 flex-grow">
               <label htmlFor="pressure" className="font-bold">
                 Pressure
               </label>
               <SliderDemo
                 id="pressure"
                 value={[Math.log(pressure)]}
                 min={Math.log(MIN_PRESSURE)}
                 max={Math.log(MAX_PRESSURE)}
                 step={0.01}
                 onValueChange={handlePressureChange}
               />
<span>{Math.round(pressure / 1000).toLocaleString()} kPa</span>
             </div>
           </div>
           <div className="flex gap-2">
             <Button onClick={handleResetToRoomTemp}>Reset to Room Temperature</Button>
             <Button onClick={handleResetToStandardAtmospheric}>Reset to Standard Pressure</Button>
           </div>
           <Separator />
           <div className="flex flex-col items-center gap-2">
             <span className="font-bold">Water State:</span>
             {waterState === 'solid' && <span className="text-blue-500">Solid</span>}
             {waterState === 'liquid' && <span className="text-blue-500">Liquid</span>}
             {waterState === 'gas' && <span className="text-blue-500">Gas</span>}
           </div>
         </CardContent>
         <CardFooter className="flex justify-center">
           <div style={{ width: '100%', height: '100%' }}>
             <ParticleSimulation state={waterState} temperature={temperature} pressure={pressure} />
           </div>
         </CardFooter>
       </Card>
     </div>

     <div className="flex flex-col gap-4 w-1/2">
       <Card>
         <CardHeader>
           <CardTitle>Learning Objectives</CardTitle>
         </CardHeader>
         <CardContent>
           {learningObjectives.map((objective) => (
              <div key={objective.id} className="flex items-center gap-2">
                <Checkbox
                  id={`objective-${objective.id}`}
                  checked={objective.completed}
                  onCheckedChange={() => handleCheckboxChange(objective.id)}
                  disabled
                />
                <label htmlFor={`objective-${objective.id}`} className={`${objective.completed ? 'line-through' : ''}`}>
                  {objective.text}
                </label>
              </div>
            ))}
          </CardContent>
        </Card>
        <Quiz />
       </div>
    </div>
  );
};

export default WaterStateSimulator; 


const validateAnswer = (userAnswer, correctAnswer) => {
  // Add actual validation logic here
  return userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
};

type SliderProps = React.ComponentProps<typeof Slider>;

const SliderDemo = ({ className, ...props }: SliderProps) => {
  return <Slider defaultValue={[50]} max={100} step={1} {...props} className={`w-full ${className}`} />;
};


const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [userAnswer, setUserAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(true);

  const currentQuestion = questions[currentQuestionIndex];

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption('');
    setUserAnswer('');
    setShowFeedback(false);
  };

  const handleSubmit = () => {
    // Display the correct answer and allow rating
  };

  const [feedback, setFeedback] = useState('');

const handleOptionChange = (value) => {
  setSelectedOption(value);
  console.log(value)
  const selectedOption = currentQuestion.options.find((option) => option.value === value);

  if (value === currentQuestion.correctOption) {
    setFeedback(<span className="text-green-500">Correct!</span>);
  } else {
    setFeedback(<span className="text-red-500">
    Incorrect. {selectedOption.feedback} Please try again.
  </span>)
  }
  setShowFeedback(true);
};

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quiz</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="pb-4">{currentQuestion.text}</p>
        {currentQuestion.type === 'mcq' ? (
          <div>
          <RadioGroup value={selectedOption} onValueChange={handleOptionChange}>
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`}>{option.text}</Label>
              </div>
            ))}
          </RadioGroup>
          {showFeedback && <p className="mt-2 text-sm">{feedback}</p>}
          </div>
        ) : (
          <Textarea value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} />
        )}
      </CardContent>
      <CardFooter>
        {currentQuestion.type === 'mcq' ? (
          <Button
            onClick={handleNextQuestion}
            disabled={!selectedOption || selectedOption !== currentQuestion.correctOption}
          >
            {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
          </Button>
        ) : (
          <Button onClick={handleSubmit}>Submit</Button>
        )}
      </CardFooter>
    </Card>
  );
};
