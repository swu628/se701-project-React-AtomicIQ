export enum Element {
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

export enum Category {
    AlkaliMetal = "Alkali Metal",
    AlkalineEarthMetal = "Alkaline Earth Metal",
    TransitionMetal = "Transition Metal",
    PostTransitionMetal = "Post-Transition Metal",
    Metalloid = "Metalloid",
    NonMetal = "Non-Metal",
    Halogen = "Halogen",
    NobleGas = "Noble Gas",
}

export enum Origin {
    TheBigBang = "The Big Bang",
    CosmicRayCollisions = "Cosmic Ray Collisions",
    DyingLowMassStars = "Dying Low Mass Stars",
    DyingHighMassStars = "Dying High Mass Stars",
    WhiteDwarfSupernovae = "White Dwarf Supernovae",
    MergingNeutronStars = "Merging Neutron Stars",
    RadioactiveDecay = "Radioactive Decay",
    HumanMade = "Human Made",
}

export enum Country {
    UK = "UK",
    USA = "USA",
    Germany = "Germany",
    France = "France",
    Sweden = "Sweden",
    Denmark = "Denmark",
    Other = "Other",
}

export enum Color {
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

export enum ElementPhase {
    Solid = "Solid",
    Liquid = "Liquid",
    Gas = "Gas",
    Synthetic = "Synthetic",
}

export interface ElementData {
    number: number;
    symbol: Element;
    name: string;
    category: Category;
    period: number;
    group: number;
    origins: Origin[];
    countries: Country[];
    color: Color;
    funFact: string;
    naturalPhase: ElementPhase;
}

export enum ElementProperty {
    Category = "Category",
    Period = "Period",
    Group = "Group",
    Origins = "Origins",
    Countries = "Countries",
    Color = "Color",
    NaturalPhase = "Natural Phase",
}