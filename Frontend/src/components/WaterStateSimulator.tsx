import React, { useState } from "react";
import Confetti from "react-confetti";
import { Slider } from "./ui/slider";
import { Separator } from "./ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Textarea } from "./ui/textarea";
import ParticleSimulation from "./ParticleSimulation";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const MIN_PRESSURE = 1000; // Minimum pressure in Pascals
const MAX_PRESSURE = 25000000; // Maximum pressure in Pascals

const antoineIscoVaporPressure = (temperature) => {
  const A1 = 8.07131;
  const B1 = 1730.63;
  const C1 = 233.426;
  const tempKelvin = temperature + 273.15;
  return 10 ** (A1 - B1 / (tempKelvin + C1));
};

const antoineVaporPressure = (temperature) => {
  const A2 = 8.07494;
  const B2 = 1688.537;
  const C2 = 233.832;
  const tempKelvin = temperature + 273.15;
  return 10 ** (A2 - B2 / (tempKelvin + C2));
};

const getWaterState = (temperature, pressure) => {
  const vaporPressureIsco = antoineIscoVaporPressure(temperature);
  const vaporPressureAntoine = antoineVaporPressure(temperature);

  if (pressure < vaporPressureIsco) {
    return "gas";
  } else if (pressure > vaporPressureAntoine) {
    return "solid";
  } else {
    return "liquid";
  }
};

const WaterStateSimulator = () => {
  const navigate = useNavigate();
  const [temperature, setTemperature] = useState(100);
  const [pressure, setPressure] = useState(100000);
  const waterState = getWaterState(temperature, pressure);

  const [learningObjectives, setLearningObjectives] = useState([
    {
      id: 1,
      text: "State the distinguishing properties of solids, liquids and gases",
      completed: false,
    },
    {
      id: 2,
      text: "Describe the structures of solids, liquids and gases in terms of particle separation, arrangement and motion",
      completed: false,
    },
    {
      id: 3,
      text: "Describe changes of state in terms of melting, boiling, evaporating, freezing and condensing",
      completed: false,
    },
    {
      id: 4,
      text: "Describe the effects of temperature and pressure on the volume of a gas",
      completed: false,
    },
  ]);

  const [userAnswers, setUserAnswers] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
  });

  const [currentObjectiveIndex, setCurrentObjectiveIndex] = useState(0);
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
        objective.id === objectiveId
          ? { ...objective, completed: !objective.completed }
          : objective
      )
    );
  };

  const handleUserAnswerChange = (objectiveId, answer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [objectiveId]: answer,
    }));
  };

  const validateAnswer = (objectiveId, answer) => {
    // Add actual validation logic here
    return answer.trim().length > 0;
  };

  const handleSubmitAnswer = (objectiveId) => {
    if (validateAnswer(objectiveId, userAnswers[objectiveId])) {
      setLearningObjectives((prevObjectives) =>
        prevObjectives.map((objective) =>
          objective.id === objectiveId
            ? { ...objective, completed: true }
            : objective
        )
      );
      setCurrentObjectiveIndex((prevIndex) => prevIndex + 1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // Show confetti for 5 seconds
    } else {
      // handle incorrect answer
      console.log(`Answer for objective ${objectiveId} is incorrect.`);
    }
  };

  const handleResetToRoomTemp = () => {
    setTemperature(20);
  };

  const handleResetToStandardAtmospheric = () => {
    setPressure(101325);
  };

  const currentObjective = learningObjectives[currentObjectiveIndex];

  return (
    <div className="flex gap-4 p-4">
      {showConfetti && <Confetti />}
      <div className="flex flex-col gap-4 w-1/2">
        <Card>
          <CardHeader>
            <CardTitle>Water State Simulator</CardTitle>
            <CardDescription>
              Explore the states of water by adjusting temperature and pressure.
              Use the learning objectives and answer boxes to guide your
              exploration.
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
              <Button onClick={handleResetToRoomTemp}>
                Reset to Room Temperature
              </Button>
              <Button onClick={handleResetToStandardAtmospheric}>
                Reset to Standard Pressure
              </Button>
            </div>
            <Separator />
            <div className="flex flex-col items-center gap-2">
              <span className="font-bold">Water State:</span>
              {waterState === "solid" && (
                <span className="text-blue-500">Solid</span>
              )}
              {waterState === "liquid" && (
                <span className="text-blue-500">Liquid</span>
              )}
              {waterState === "gas" && (
                <span className="text-blue-500">Gas</span>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <div style={{ width: "100%", height: "100%" }}>
              <ParticleSimulation
                state={waterState}
                temperature={temperature}
                pressure={pressure}
              />
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
                <label
                  htmlFor={`objective-${objective.id}`}
                  className={`${objective.completed ? "line-through" : ""}`}
                >
                  {objective.text}
                </label>
              </div>
            ))}
          </CardContent>
        </Card>
        {currentObjective && (
          <Card>
            <CardHeader>
              <CardTitle>Objective {currentObjective.id}</CardTitle>
              <CardDescription>{currentObjective.text}</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Write your answer here..."
                value={userAnswers[currentObjective.id]}
                onChange={(e) =>
                  handleUserAnswerChange(currentObjective.id, e.target.value)
                }
              />
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleSubmitAnswer(currentObjective.id)}>
                Submit Answer
              </Button>
            </CardFooter>
          </Card>
        )}
        <Button onClick={() => navigate("/room-temperature-pressure")}>
          Next
        </Button>
      </div>
    </div>
  );
};

type SliderProps = React.ComponentProps<typeof Slider>;

const SliderDemo = ({ className, ...props }: SliderProps) => {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      {...props}
      className={`w-full ${className}`}
    />
  );
};

export default WaterStateSimulator;
