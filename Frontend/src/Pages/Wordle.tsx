// Define the props interface
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Element, ElementData, ElementProperty } from "~/types/element";
import { Elements } from "~/data/elementData";
import ElementModal from "~/components/ElementModal.tsx";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import { AnswerData } from "~/Pages/FlashCard.tsx";
import Avatar from "@mui/material/Avatar";
import { AvatarGroup } from "@mui/material";

interface WordleProps {
  allowedAttempts: number;
  properties: ElementProperty[];
  availableElements: Element[];
}

export default function Wordle({
  allowedAttempts,
  properties,
  availableElements,
}: WordleProps) {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState<ElementData>();
  const [guesses, setGuesses] = useState<Element[]>([]);
  const [guessedElementData, setGuessedElementData] = useState<ElementData[]>(
    []
  );
  const [showModal, setShowModal] = useState(false);
  const [selectedElement, setSelectedElement] = useState<ElementData | null>();
  const [finished, setFinished] = useState(false);

  const rows = allowedAttempts;
  const cols = properties.length;

  // pick a random element
  useEffect(() => {
    const answerElement =
      availableElements[Math.floor(Math.random() * availableElements.length)];
    const answerElementData = Elements.find((e) => e.symbol === answerElement);
    if (answerElementData) {
      setAnswer(answerElementData);
    }
  }, [availableElements]);

  const checkCellEmpty = (rowIndex: number) => {
    return guesses[rowIndex - 1] === undefined;
  };

  const checkCellCorrectness = (rowIndex: number, colIndex: number) => {
    const element = guesses[rowIndex - 1];
    const elementData = Elements.find((e) => e.symbol === element);
    if (!elementData || !answer) {
      return false;
    }
    switch (properties[colIndex - 1]) {
      case ElementProperty.Category:
        return elementData.category === answer.category;
      case ElementProperty.Period:
        return elementData.period === answer.period;
      case ElementProperty.Group:
        return elementData.group === answer.group;
      case ElementProperty.Origins:
        return elementData.origins === answer.origins;
      case ElementProperty.Countries:
        return elementData.countries === answer.countries;
      case ElementProperty.Color:
        return elementData.color === answer.color;
      case ElementProperty.NaturalPhase:
        return elementData.naturalPhase === answer.naturalPhase;
      default:
        return false;
    }
  };

  const getCellContent = (rowIndex: number, colIndex: number) => {
    const element = guesses[rowIndex - 1];
    const elementData = Elements.find((e) => e.symbol === element);
    if (!elementData || !answer) {
      return false;
    }
    if (checkCellCorrectness(rowIndex, colIndex)) {
      switch (properties[colIndex - 1]) {
        case ElementProperty.Category:
          return elementData.category;
        case ElementProperty.Period:
          return elementData.period;
        case ElementProperty.Group:
          return elementData.group;
        case ElementProperty.Origins:
          return (
            <AvatarGroup max={2}>
              {Array.from(elementData.origins, (origin) => (
                <Tooltip title={origin} arrow>
                  <Avatar
                    alt={origin}
                    src={`src/assets/origin/${origin}.png`}
                    variant="square"
                  />
                </Tooltip>
              ))}
            </AvatarGroup>
          );
        case ElementProperty.Countries:
          return (
            <AvatarGroup max={2}>
              {Array.from(elementData.countries, (country) => (
                <Tooltip title={country} arrow>
                  <Avatar
                    alt={country}
                    src={`src/assets/flags/${country}.gif`}
                    variant="square"
                  />
                </Tooltip>
              ))}
            </AvatarGroup>
          );
        case ElementProperty.Color:
          return elementData.color;
        case ElementProperty.NaturalPhase:
          return (
            <Tooltip title={elementData.naturalPhase} arrow>
              <Avatar
                alt={elementData.naturalPhase}
                src={`src/assets/phase/${elementData.naturalPhase}.gif`}
              />
            </Tooltip>
          );
        default:
          return "";
      }
    } else {
      switch (properties[colIndex - 1]) {
        case ElementProperty.Category:
          return elementData.category;
        case ElementProperty.Period:
          if (elementData.period > answer.period) {
            return (
              <Tooltip title="Go up, too low in the periodic table" arrow>
                <span>{elementData.period} ↑</span>
              </Tooltip>
            );
          } else {
            return (
              <Tooltip title="Go down, too high in the periodic table" arrow>
                <span>{elementData.period} ↓</span>
              </Tooltip>
            );
          }
        case ElementProperty.Group:
          if (elementData.group > answer.group) {
            return (
              <Tooltip title="Go left, too right in the periodic table" arrow>
                <span>{elementData.group} ←</span>
              </Tooltip>
            );
          } else {
            return (
              <Tooltip title="Go right, too left in the periodic table" arrow>
                <span>{elementData.group} →</span>
              </Tooltip>
            );
          }
        case ElementProperty.Origins:
          return (
            <AvatarGroup max={2}>
              {Array.from(elementData.origins, (origin) => (
                <Tooltip title={origin} arrow>
                  <Avatar
                    alt={origin}
                    src={`src/assets/origin/${origin}.png`}
                    variant="square"
                  />
                </Tooltip>
              ))}
            </AvatarGroup>
          );
        case ElementProperty.Countries:
          return (
            <AvatarGroup max={2}>
              {Array.from(elementData.countries, (country) => (
                <Tooltip title={country} arrow>
                  <Avatar
                    alt={country}
                    src={`src/assets/flags/${country}.gif`}
                    variant="square"
                  />
                </Tooltip>
              ))}
            </AvatarGroup>
          );
        case ElementProperty.Color:
          return elementData.color;
        case ElementProperty.NaturalPhase:
          return (
            <Tooltip title={elementData.naturalPhase} arrow>
              <Avatar
                alt={elementData.naturalPhase}
                src={`src/assets/phase/${elementData.naturalPhase}.gif`}
              />
            </Tooltip>
          );
        default:
          return "";
      }
    }
  };

  const getCellColor = (rowIndex: number, colIndex: number) => {
    if (checkCellEmpty(rowIndex)) {
      return "bg-white";
    } else if (checkCellCorrectness(rowIndex, colIndex)) {
      return "bg-green-300";
    } else {
      return "bg-red-300";
    }
  };

  const handleCellClick = (element: ElementData) => {
    setSelectedElement(element);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedElement(null);
  };

  // Create a grid based on the rows and cols
  const grid = Array.from({ length: rows + 1 }, (_, rowIndex) =>
    Array.from({ length: cols + 1 }, (_, colIndex) => {
      if (colIndex === 0 && rowIndex === 0) {
        return (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`flex justify-center items-center w-24 h-24`}
          ></div>
        );
      } else if (colIndex !== 0 && rowIndex === 0) {
        return (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`flex justify-center items-center text-center font-bold w-24 h-24 border cursor-pointer`}
          >
            {properties[colIndex - 1]}
          </div>
        );
      } else if (colIndex === 0 && rowIndex !== 0) {
        return (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`flex justify-center items-center text-center font-bold w-24 h-24 border cursor-pointer`}
            onClick={() => handleCellClick(guessedElementData[rowIndex - 1])}
          >
            <Tooltip
              title={
                "Click to see more about " +
                guessedElementData[rowIndex - 1]?.name
              }
              arrow
            >
              <span>{guesses[rowIndex - 1]}</span>
            </Tooltip>
          </div>
        );
      } else {
        return (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={
              `flex justify-center items-center text-center w-24 h-24 border cursor-pointer ` +
              getCellColor(rowIndex, colIndex)
            }
          >
            {checkCellEmpty(rowIndex) ? "" : getCellContent(rowIndex, colIndex)}
          </div>
        );
      }
    })
  );

  const guess = (element: Element) => () => {
    const newGuesses = [...guesses, element];
    setGuesses(newGuesses);
    const elementData = Elements.find((e) => e.symbol === element);
    if (elementData) {
      setGuessedElementData([...guessedElementData, elementData]);
    }
    if (element === answer?.symbol || newGuesses.length >= allowedAttempts) {
      setFinished(true);
    }
  };

  const finishAttempt = () => {
    const answers: AnswerData[] = [];
    guesses.forEach((element: Element) => {
      answers.push({ answer: element, correct: element === answer?.symbol });
    });
    navigate(`/wordle/results`, {
      state: {
        answers: answers,
        quizType: "origin",
      },
    });
  };

  // Create a list of elements
  const elementButtons = Array.from(Object.values(Element), (element) => (
    <Button
      disabled={
        guesses.includes(element) || !availableElements.includes(element)
      }
      onClick={guess(element)}
      key={element}
    >
      {element}
    </Button>
  ));

  return (
    <div
      className={`w-full h-fit p-10 flex flex-col justify-center items-center gap-10`}
    >
      <div
        className={`grid gap-2`}
        style={{
          gridTemplateColumns: `repeat(${cols + 1}, 1fr)`,
          display: "grid",
        }}
      >
        {grid.flat()}
      </div>
      {finished && (
        <Button onClick={finishAttempt} variant="contained" color="primary">
          Go to Results
        </Button>
      )}
      {!finished && (
        <div className={`grid grid-cols-5 gap-4`}>{elementButtons.flat()}</div>
      )}
      {showModal && selectedElement && (
        <ElementModal element={selectedElement} closeModal={closeModal} />
      )}
    </div>
  );
}
