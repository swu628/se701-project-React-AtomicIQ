// Define the props interface
import {useState} from "react";
import Button from "@mui/material/Button";
import {Element, ElementProperty, Elements} from "~/types/element";


interface WordleProps {
    allowedAttempts: number;
    properties: ElementProperty[];
    availableElements: Element[];
}

export default function Wordle({allowedAttempts, properties, availableElements}: WordleProps) {
    const [guesses, setGuesses] = useState<Element[]>([]);

    const rows = allowedAttempts;
    const cols = properties.length;
    const answerElement = availableElements[Math.floor(Math.random() * availableElements.length)];

    // pick a random element
    const answer = Elements.find((e) => e.name === answerElement);

    const checkCellEmpty = (rowIndex: number) => {
        return guesses[rowIndex - 1] === undefined;
    }

    const checkCellCorrectness = (rowIndex: number, colIndex: number) => {
        const element = guesses[rowIndex - 1];
        const elementData = Elements.find((e) => e.name === element);
        if (!elementData || !answer) {
            return false;
        }
        switch (colIndex) {
            case 1:
                return elementData.category === answer.category;
            case 2:
                return elementData.period === answer.period;
            case 3:
                return elementData.group === answer.group;
            case 4:
                return elementData.origins === answer.origins;
            case 5:
                return elementData.countries === answer.countries;
            case 6:
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
            switch (colIndex) {
                case 1:
                    return elementData.category;
                case 2:
                    return elementData.period;
                case 3:
                    return elementData.group;
                case 4:
                    return elementData.origins;
                case 5:
                    return elementData.countries;
                case 6:
                    return elementData.color;
                default:
                    return "";
            }
        } else {
            switch (colIndex) {
                case 1:
                    return elementData.category;
                case 2:
                    return elementData.period;
                case 3:
                    return elementData.group;
                case 4:
                    return elementData.origins.join(", ");
                case 5:
                    return elementData.countries.join(", ");
                case 6:
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
                        className={`flex justify-center items-center text-center w-20 h-20 border ` + getCellColor(rowIndex, colIndex)}
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
