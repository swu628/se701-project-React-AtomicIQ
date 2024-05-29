// Define the props interface
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import {Element, ElementData, ElementProperty, Elements} from "~/types/element";


interface WordleProps {
    allowedAttempts: number;
    properties: ElementProperty[];
    availableElements: Element[];
}

export default function Wordle({allowedAttempts, properties, availableElements}: WordleProps) {
    const [answer, setAnswer] = useState<ElementData>();
    const [guesses, setGuesses] = useState<Element[]>([]);

    const rows = allowedAttempts;
    const cols = properties.length;

    // pick a random element
    useEffect(() => {
        const answerElement = availableElements[Math.floor(Math.random() * availableElements.length)];
        const answerElementData = Elements.find((e) => e.name === answerElement);
        if (answerElementData) {
            setAnswer(answerElementData);
        }
    }, [availableElements]);

    const checkCellEmpty = (rowIndex: number) => {
        return guesses[rowIndex - 1] === undefined;
    }

    const checkCellCorrectness = (rowIndex: number, colIndex: number) => {
        const element = guesses[rowIndex - 1];
        const elementData = Elements.find((e) => e.name === element);
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
            default:
                return false;
        }
    }

    const getCellContent = (rowIndex: number, colIndex: number) => {
        const element = guesses[rowIndex - 1];
        const elementData = Elements.find((e) => e.name === element);
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
                    return elementData.origins.join(", ");
                case ElementProperty.Countries:
                    return elementData.countries.join(", ");
                case ElementProperty.Color:
                    return elementData.color;
                default:
                    return "";
            }
        } else {
            switch (properties[colIndex - 1]) {
                case ElementProperty.Category:
                    return elementData.category;
                case ElementProperty.Period:
                    return elementData.period;
                case ElementProperty.Group:
                    return elementData.group;
                case ElementProperty.Origins:
                    return elementData.origins.join(", ");
                case ElementProperty.Countries:
                    return elementData.countries.join(", ");
                case ElementProperty.Color:
                    return elementData.color;
                default:
                    return "";
            }
        }
    }

    const getCellColor = (rowIndex: number, colIndex: number) => {
        if (checkCellEmpty(rowIndex)) {
            return "bg-white";
        } else if (checkCellCorrectness(rowIndex, colIndex)) {
            return "bg-green-300";
        } else {
            return "bg-red-300";
        }
    }

    // Create a grid based on the rows and cols
    const grid = Array.from({length: rows + 1}, (_, rowIndex) => (
        Array.from({length: cols + 1}, (_, colIndex) => {
            if (colIndex === 0 && rowIndex === 0) {
                return (
                    <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`flex justify-center items-center w-20 h-20`}
                    ></div>
                )
            } else if (colIndex !== 0 && rowIndex === 0) {
                return (
                    <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`flex justify-center items-center font-bold w-20 h-20 border`}
                    >
                        {properties[colIndex - 1]}
                    </div>
                )
            } else if (colIndex === 0 && rowIndex !== 0) {
                return (
                    <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`flex justify-center items-center font-bold w-20 h-20 border`}
                    >
                        {guesses[rowIndex - 1]}
                    </div>
                )
            } else {
                return (
                    <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`flex justify-center items-center text-center w-20 h-20 border ` + (getCellColor(rowIndex, colIndex))}
                    >
                        {checkCellEmpty(rowIndex) ? "" : getCellContent(rowIndex, colIndex)}
                    </div>
                )
            }
        })
    ));

    const guess = (element: Element) => () => {
        setGuesses([...guesses, element]);
        if (element === answer?.name) {
            console.log("Correct");
        }
        // grid[currentRow][guesses.length] = (
        //     <div
        //         key={`${currentRow}-${guesses.length}`}
        //         className={`flex justify-center items-center w-20 h-20 border border-black`}
        //     >
        //         {element}
        //     </div>
        // );
    };

    // Create a list of elements
    const elementButtons = Array.from(Object.values(Element), (element) => (
        <Button disabled={guesses.includes(element)} onClick={guess(element)} key={element}>
            {element}
        </Button>
    ));

    return (
        <div className={`w-full h-fit p-10 flex flex-col justify-center items-center gap-10`}>
            <div
                className={`grid gap-4`}
                style={{
                    gridTemplateColumns: `repeat(${cols + 1}, 1fr)`,
                    display: 'grid',
                }}
            >
                {grid.flat()}
            </div>
            <div className={`grid grid-cols-5 gap-4`}>
                {elementButtons.flat()}
            </div>
        </div>
    );
}
