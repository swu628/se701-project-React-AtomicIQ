// Define the props interface
import {useState} from "react";
import Button from "@mui/material/Button";

interface WordleProps {
    rows: number;
    cols: number;
}

enum Element {
    H = "H",
    He = "He",
    Li = "Li",
    Be = "Be",
    B = "B",
    C = "C",
    N = "N",
    O = "O",
    F = "F",
    Ne = "Ne",
    Na = "Na",
    Mg = "Mg",
    Al = "Al",
    Si = "Si",
    P = "P",
    S = "S",
    Cl = "Cl",
    Ar = "Ar",
    K = "K",
    Ca = "Ca",
}

enum Category {
    AlkaliMetal = "Alkali Metal",
    AlkalineEarthMetal = "Alkaline Earth Metal",
    TransitionMetal = "Transition Metal",
    PostTransitionMetal = "Post-Transition Metal",
    Metalloid = "Metalloid",
    NonMetal = "Non-Metal",
    Halogen = "Halogen",
    NobleGas = "Noble Gas",
}

enum Origin {
    TheBigBang = "The Big Bang",
    CosmicRayCollisions = "Cosmic Ray Collisions",
    DyingLowMassStars = "Dying Low Mass Stars",
    DyingHighMassStars = "Dying High Mass Stars",
    WhiteDwarfSupernovae = "White Dwarf Supernovae",
    MergingNeutronStars = "Merging Neutron Stars",
    RadioactiveDecay = "Radioactive Decay",
    HumanMade = "Human Made",
}

enum Country {
    UK = "UK",
    USA = "USA",
    Germany = "Germany",
    France = "France",
    Sweden = "Sweden",
    Denmark = "Denmark",
    Other = "Other",
}

enum Color {
    Colorless = "Colorless",
    Silver = "Silver",
    SlateGray = "Slate Gray",
    Black = "Black",
    Yellow = "Yellow",
    Gray = "Gray",
    Copper = "Copper",
    Red = "Red",
    Gold = "Gold",
}

interface ElementData {
    name: Element;
    category: Category;
    period: number;
    group: number;
    origins: Origin[];
    countries: Country[];
    color: Color;
}

export default function Wordle({rows, cols}: WordleProps) {
    const [guesses, setGuesses] = useState<Element[]>([]);
    const properties = [
        "Category",
        "Period",
        "Group",
        "Origins",
        "Countries",
        "Color",
    ];

    const elements: ElementData[] = [
        {
            name: Element.H,
            category: Category.NonMetal,
            period: 1,
            group: 1,
            origins: [Origin.TheBigBang],
            countries: [Country.UK],
            color: Color.Colorless,
        },
        {
            name: Element.He,
            category: Category.NobleGas,
            period: 1,
            group: 18,
            origins: [Origin.TheBigBang],
            countries: [Country.France, Country.UK],
            color: Color.Colorless,
        },
        {
            name: Element.Li,
            category: Category.NobleGas,
            period: 2,
            group: 1,
            origins: [Origin.DyingLowMassStars],
            countries: [Country.Sweden],
            color: Color.Silver,
        },
        {
            name: Element.Be,
            category: Category.NobleGas,
            period: 2,
            group: 2,
            origins: [Origin.CosmicRayCollisions],
            countries: [Country.France],
            color: Color.SlateGray,
        },
        {
            name: Element.B,
            category: Category.NobleGas,
            period: 2,
            group: 13,
            origins: [Origin.CosmicRayCollisions],
            countries: [Country.France],
            color: Color.Black,
        },
        {
            name: Element.C,
            category: Category.NobleGas,
            period: 2,
            group: 14,
            origins: [Origin.DyingLowMassStars],
            countries: [Country.Other],
            color: Color.Black,
        },
        {
            name: Element.N,
            category: Category.NobleGas,
            period: 2,
            group: 15,
            origins: [Origin.DyingLowMassStars],
            countries: [Country.UK],
            color: Color.Colorless,
        },
        {
            name: Element.O,
            category: Category.NobleGas,
            period: 2,
            group: 16,
            origins: [Origin.DyingHighMassStars],
            countries: [Country.Sweden],
            color: Color.Colorless,
        },
        {
            name: Element.F,
            category: Category.NobleGas,
            period: 2,
            group: 17,
            origins: [Origin.DyingHighMassStars],
            countries: [Country.France],
            color: Color.Colorless,
        },
        {
            name: Element.Ne,
            category: Category.NobleGas,
            period: 2,
            group: 18,
            origins: [Origin.DyingHighMassStars],
            countries: [Country.UK],
            color: Color.Colorless,
        },
        {
            name: Element.Na,
            category: Category.NobleGas,
            period: 3,
            group: 1,
            origins: [Origin.DyingHighMassStars],
            countries: [Country.UK],
            color: Color.Silver,
        },
        {
            name: Element.Mg,
            category: Category.NobleGas,
            period: 3,
            group: 2,
            origins: [Origin.DyingHighMassStars],
            countries: [Country.UK],
            color: Color.Silver,
        },
        {
            name: Element.Al,
            category: Category.PostTransitionMetal,
            period: 3,
            group: 13,
            origins: [Origin.DyingHighMassStars],
            countries: [Country.Denmark],
            color: Color.Silver,
        },
        {
            name: Element.Si,
            category: Category.Metalloid,
            period: 3,
            group: 14,
            origins: [Origin.DyingHighMassStars],
            countries: [Country.Sweden],
            color: Color.Gray,
        },
        {
            name: Element.P,
            category: Category.NonMetal,
            period: 3,
            group: 15,
            origins: [Origin.DyingHighMassStars],
            countries: [Country.Germany],
            color: Color.Colorless,
        },
        {
            name: Element.S,
            category: Category.NonMetal,
            period: 3,
            group: 16,
            origins: [Origin.DyingHighMassStars, Origin.WhiteDwarfSupernovae],
            countries: [Country.Other],
            color: Color.Yellow,
        },
        {
            name: Element.Cl,
            category: Category.Halogen,
            period: 3,
            group: 17,
            origins: [Origin.DyingHighMassStars],
            countries: [Country.Sweden],
            color: Color.Yellow,
        },
        {
            name: Element.Ar,
            category: Category.NobleGas,
            period: 3,
            group: 18,
            origins: [Origin.DyingHighMassStars, Origin.WhiteDwarfSupernovae],
            countries: [Country.UK],
            color: Color.Colorless,
        },
        {
            name: Element.K,
            category: Category.AlkaliMetal,
            period: 4,
            group: 1,
            origins: [Origin.DyingHighMassStars],
            countries: [Country.UK],
            color: Color.Silver,
        },
        {
            name: Element.Ca,
            category: Category.AlkalineEarthMetal,
            period: 4,
            group: 2,
            origins: [Origin.DyingHighMassStars, Origin.WhiteDwarfSupernovae],
            countries: [Country.UK],
            color: Color.Silver,
        },
    ];
    const answer = elements.find((e) => e.name === Element.H);

    const checkCellEmpty = (rowIndex: number) => {
        return guesses[rowIndex - 1] === undefined;
    }

    const checkCellCorrectness = (rowIndex: number, colIndex: number) => {
        const element = guesses[rowIndex - 1];
        const elementData = elements.find((e) => e.name === element);
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
        const elementData = elements.find((e) => e.name === element);
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
