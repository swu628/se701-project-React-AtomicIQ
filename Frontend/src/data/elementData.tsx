import {Category, Color, Country, Element, ElementData, ElementPhase, Origin} from "~/types/element";

export const Elements: ElementData[] = [
  {
    number: 1,
    symbol: Element.H,
    name: "Hydrogen",
    category: Category.NonMetal,
    period: 1,
    group: 1,
    origins: [Origin.TheBigBang],
    countries: [Country.UK],
    color: Color.Colorless,
    funFact: "Hydrogen is the most abundant element in the universe.",
    naturalPhase: ElementPhase.Gas,
  },
  {
    number: 2,
    symbol: Element.He,
    name: "Helium",
    category: Category.NobleGas,
    period: 1,
    group: 18,
    origins: [Origin.TheBigBang],
    countries: [Country.France, Country.UK],
    color: Color.Colorless,
    funFact: "Helium was discovered on the Sun before it was found on Earth.",
    naturalPhase: ElementPhase.Gas,
  },
  {
    number: 3,
    symbol: Element.Li,
    name: "Lithium",
    category: Category.AlkaliMetal,
    period: 2,
    group: 1,
    origins: [Origin.DyingLowMassStars],
    countries: [Country.Sweden],
    color: Color.Silver,
    funFact: "Lithium is the lightest solid element at room temperature.",
    naturalPhase: ElementPhase.Solid,
  },
  {
    number: 4,
    symbol: Element.Be,
    name: "Beryllium",
    category: Category.AlkalineEarthMetal,
    period: 2,
    group: 2,
    origins: [Origin.CosmicRayCollisions],
    countries: [Country.France],
    color: Color.SlateGray,
    funFact: "Beryllium is used in the construction of spacecraft and satellites.",
    naturalPhase: ElementPhase.Solid,
  },
  {
    number: 5,
    symbol: Element.B,
    name: "Boron",
    category: Category.Metalloid,
    period: 2,
    group: 13,
    origins: [Origin.CosmicRayCollisions],
    countries: [Country.France],
    color: Color.Black,
    funFact: "Boron is a metalloid and is used in the production of borosilicate glass.",
    naturalPhase: ElementPhase.Solid,
  },
  {
    number: 6,
    symbol: Element.C,
    name: "Carbon",
    category: Category.NonMetal,
    period: 2,
    group: 14,
    origins: [Origin.DyingLowMassStars],
    countries: [Country.Other],
    color: Color.Black,
    funFact: "Carbon is the basis of all life on Earth.",
    naturalPhase: ElementPhase.Solid,
  },
  {
    number: 7,
    symbol: Element.N,
    name: "Nitrogen",
    category: Category.NonMetal,
    period: 2,
    group: 15,
    origins: [Origin.DyingLowMassStars],
    countries: [Country.UK],
    color: Color.Colorless,
    funFact: "Nitrogen makes up about 78% of the Earth's atmosphere.",
    naturalPhase: ElementPhase.Gas,
  },
  {
    number: 8,
    symbol: Element.O,
    name: "Oxygen",
    category: Category.NonMetal,
    period: 2,
    group: 16,
    origins: [Origin.DyingHighMassStars],
    countries: [Country.Sweden],
    color: Color.Colorless,
    funFact: "Oxygen is essential for respiration and combustion.",
    naturalPhase: ElementPhase.Gas,
  },
  {
    number: 9,
    symbol: Element.F,
    name: "Fluorine",
    category: Category.Halogen,
    period: 2,
    group: 17,
    origins: [Origin.DyingHighMassStars],
    countries: [Country.France],
    color: Color.Colorless,
    funFact: "Fluorine is the most reactive and electronegative element.",
    naturalPhase: ElementPhase.Gas,
  },
  {
    number: 10,
    symbol: Element.Ne,
    name: "Neon",
    category: Category.NobleGas,
    period: 2,
    group: 18,
    origins: [Origin.DyingHighMassStars],
    countries: [Country.UK],
    color: Color.Colorless,
    funFact: "Neon is used in neon signs and lasers.",
    naturalPhase: ElementPhase.Gas,
  },
  {
    number: 11,
    symbol: Element.Na,
    name: "Sodium",
    category: Category.AlkaliMetal,
    period: 3,
    group: 1,
    origins: [Origin.DyingHighMassStars],
    countries: [Country.UK],
    color: Color.Silver,
    funFact: "Sodium is an essential element for human health and is found in table salt.",
    naturalPhase: ElementPhase.Solid,
  },
  {
    number: 12,
    symbol: Element.Mg,
    name: "Magnesium",
    category: Category.AlkalineEarthMetal,
    period: 3,
    group: 2,
    origins: [Origin.DyingHighMassStars],
    countries: [Country.UK],
    color: Color.Silver,
    funFact: "Magnesium is used in the production of aluminum alloys and is essential for plant growth.",
    naturalPhase: ElementPhase.Solid,
  },
  {
    number: 13,
    symbol: Element.Al,
    name: "Aluminum",
    category: Category.PostTransitionMetal,
    period: 3,
    group: 13,
    origins: [Origin.DyingHighMassStars],
    countries: [Country.Denmark],
    color: Color.Silver,
    funFact: "Aluminum is the most abundant metal in the Earth's crust.",
    naturalPhase: ElementPhase.Solid,
  },
  {
    number: 14,
    symbol: Element.Si,
    name: "Silicon",
    category: Category.Metalloid,
    period: 3,
    group: 14,
    origins: [Origin.DyingHighMassStars],
    countries: [Country.Sweden],
    color: Color.Gray,
    funFact: "Silicon is the primary component of sand and is widely used in computer chips.",
    naturalPhase: ElementPhase.Solid,
  },
  {
    number: 15,
    symbol: Element.P,
    name: "Phosphorus",
    category: Category.NonMetal,
    period: 3,
    group: 15,
    origins: [Origin.DyingHighMassStars],
    countries: [Country.Germany],
    color: Color.Colorless,
    funFact: "Phosphorus is an essential element for life and is used in fertilizers.",
    naturalPhase: ElementPhase.Solid,
  },
  {
    number: 16,
    symbol: Element.S,
    name: "Sulfur",
    category: Category.NonMetal,
    period: 3,
    group: 16,
    origins: [Origin.DyingHighMassStars, Origin.WhiteDwarfSupernovae],
    countries: [Country.Other],
    color: Color.Yellow,
    funFact: "Sulfur is used in the production of gunpowder and matches.",
    naturalPhase: ElementPhase.Solid,
  },
  {
    number: 17,
    symbol: Element.Cl,
    name: "Chlorine",
    category: Category.Halogen,
    period: 3,
    group: 17,
    origins: [Origin.DyingHighMassStars],
    countries: [Country.Sweden],
    color: Color.Yellow,
    funFact: "Chlorine is used in the production of many household and industrial chemicals.",
    naturalPhase: ElementPhase.Gas,
  },
  {
    number: 18,
    symbol: Element.Ar,
    name: "Argon",
    category: Category.NobleGas,
    period: 3,
    group: 18,
    origins: [Origin.DyingHighMassStars, Origin.WhiteDwarfSupernovae],
    countries: [Country.UK],
    color: Color.Colorless,
    funFact: "Argon is an inert gas and is used in incandescent light bulbs and lasers.",
    naturalPhase: ElementPhase.Gas,
  },
  {
    number: 19,
    symbol: Element.K,
    name: "Potassium",
    category: Category.AlkaliMetal,
    period: 4,
    group: 1,
    origins: [Origin.DyingHighMassStars],
    countries: [Country.UK],
    color: Color.Silver,
    funFact: "Potassium is an essential element for human health and is found in bananas.",
    naturalPhase: ElementPhase.Solid,
  },
  {
    number: 20,
    symbol: Element.Ca,
    name: "Calcium",
    category: Category.AlkalineEarthMetal,
    period: 4,
    group: 2,
    origins: [Origin.DyingHighMassStars, Origin.WhiteDwarfSupernovae],
    countries: [Country.UK],
    color: Color.Silver,
    funFact: "Calcium is essential for strong bones and teeth.",
    naturalPhase: ElementPhase.Solid,
  },
];