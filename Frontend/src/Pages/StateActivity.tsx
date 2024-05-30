import Gas from "~/components/Gas";
import Solid from "~/components/Solid";
import Liquid from "~/components/Liquid";
import { useEffect } from "react";
import { Separator } from "~/components/ui/separator";
import StateQuiz from "~/components/StateQuiz";
function StateActivity() {
    const periodicElements = [
        { name: "Hydrogen", type: "Gas", category: "Non-metal" },
        { name: "Helium", type: "Gas", category: "Non-metal" },
        { name: "Lithium", type: "Solid", category: "Metal" },
        { name: "Beryllium", type: "Solid", category: "Metal" },
        { name: "Boron", type: "Solid", category: "Metalloid" },
        { name: "Carbon", type: "Solid", category: "Non-metal" },
        { name: "Nitrogen", type: "Gas", category: "Non-metal" },
        { name: "Oxygen", type: "Gas", category: "Non-metal" },
        { name: "Fluorine", type: "Gas", category: "Non-metal" },
        { name: "Neon", type: "Gas", category: "Non-metal" },
      ];
  const objectives = [
    "Describe the state of elements at room temperature.",
    "State the distinguishing properties of solids, liquids, and gases.",
    "Classify elements as metals, non-metals, or metalloids based on their properties and states at room temperature.",
    "Achieve a score of 100% on the quiz related to the state of elements at room temperature.",
  ];
  useEffect(() => {
    document.body.classList.add("backgroundImage");

    return () => {
      document.body.classList.remove("backgroundImage");
    };
  }, []);

  return (
    <div>
      <div className="flex mb-2 mx-8 mt-4">
        <div className="flex justify-between w-1/2 items-center space-y-4 mr-4  bg-white px-5 rounded-lg">
          <Gas
            className="text-slate-200 mt-10 h-[12em] w-[12em] "
            svgClassName="text-red-500"
            textClassName="text-slate-500 font-semibold text-3xl"
            tooltipText="Low Density High Energy Indefinite Volume"
            detail="Gas"
          />
          <Solid
            className="text-slate-200 h-[12em] w-[12em]"
            svgClassName="text-blue-500"
            textClassName="text-slate-800 font-semibold text-3xl"
            tooltipText="High Density Low Energy Definite Volume"
            detail="Solid"
          />
          <Liquid
            className="text-slate-200 h-[12em] w-[12em]"
            svgClassName="text-blue-500"
            textClassName="text-slate-800 font-semibold text-3xl"
            tooltipText="Moderate Density Moderate Energy Moderate Volume"
            detail="Liquid"
          />
        </div>
        <div className="p-6 bg-white rounded shadow-md w-1/2 ">
          <h2 className="text-2xl font-bold mb-4">Learning Objectives</h2>
          <ul className="list-disc pl-6">
            {objectives.map((objective, index) => (
              <li key={index} className="mb-2">
                {objective}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <Separator className="p-[2px] bg-slate-200"/> */}
      <div className="flex mt-5 mx-8">
        <div className="w-1/2 bg-white px-5 rounded-lg mr-4 ">
          <div className="p-4">
            <span className="font-bold text-4xl">
              Element State in Room Temperature
            </span>
          </div>
          <div className="grid grid-cols-3 gap-7">
            {periodicElements.map((element, index) => (
              <div key={index} className="col-span-1">
                {element.type === "Gas" && (
                  <Gas
                    className="text-slate-200 h-[10em]"
                    svgClassName="text-red-500"
                    textClassName="text-slate-500 font-semibold text-3xl"
                    tooltipText={` ${element.name} is a gas and is classified as a ${element.category}.`}
                    detail={element.name}
                  />
                )}
                {element.type === "Solid" && (
                  <Solid
                    className="text-slate-200 h-[10em]"
                    svgClassName="text-blue-500"
                    textClassName="text-slate-800 font-semibold text-3xl"
                    tooltipText={` ${element.name} is a solid and is classified as a ${element.category}.`}
                    detail={element.name}
                  />
                )}
                {element.type === "Liquid" && (
                  <Liquid
                    className="text-slate-200 h-[10em]"
                    svgClassName="text-blue-500"
                    textClassName="text-slate-800 font-semibold text-3xl"
                    tooltipText={` ${element.name} is a liquid and is classified as a ${element.category}.`}
                    detail={element.name}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 bg-white px-5 rounded-lg">
          <StateQuiz />
        </div>
      </div>
    </div>
  );
}

export default StateActivity;
