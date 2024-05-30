import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PeriodicTable from "~/components/PeriodicTable";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAtom,
  faFlask,
  faIcons,
  faMicroscope,
  faRulerCombined,
  faShapes,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import Table from "~/components/Table";

export default function Wiki() {
  const [showModal, setShowModal] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);

  const handleElementClick = (element) => {
    setSelectedElement(element);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedElement(null);
  };

  useEffect(() => {
    document.body.classList.add("backgroundImage");

    return () => {
      document.body.classList.remove("backgroundImage");
    };
  }, []);

  return (
    <div>
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-75"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Welcome to the Cambridge IGCSE™ Chemistry 0620 Wiki
            </h1>
            <p className="mt-4 max-w-2xl text-xl text-indigo-100">
              Explore interactive activities and virtual experiments to discover
              the fascinating world of chemistry!
            </p>
          </div>
          <div className="mt-8 animate-bounce">
            <FontAwesomeIcon icon={faCaretDown} size="2x" color="white" />
          </div>
        </div>
      </div>

      {/* Chapter 1: States of Matter */}
      <Card className="mb-8 mt-16 mx-4 sm:mx-8">
        <CardHeader>
          <CardTitle>1. States of Matter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link to="/solids-liquids-gases">
              <div className="flex items-center justify-between space-x-4 bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors">
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faShapes} size="2x" />
                  <div>
                    <span className="font-semibold">
                      1.1 Solids, Liquids, and Gases
                    </span>
                    <Progress value={75} className="w-48 h-6 mt-2">
                      75%
                    </Progress>
                  </div>
                </div>
                <Button variant="outline">Go to Activity</Button>
              </div>
            </Link>
            <Link to="/diffusion">
              <div className="flex items-center justify-between space-x-4 bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors">
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faRulerCombined} size="2x" />
                  <div>
                    <span className="font-semibold">1.2 Diffusion</span>
                    <Progress value={25} className="w-48 h-6 mt-2">
                      25%
                    </Progress>
                  </div>
                </div>
                <Button variant="outline">Go to Activity</Button>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Chapter 2: Atoms, Elements, and Compounds */}
      <Card className="mx-4 sm:mx-8">
        <CardHeader>
          <CardTitle>2. Atoms, Elements, and Compounds</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link to="/elements-compounds-mixtures">
              <div className="flex items-center justify-between space-x-4 bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors">
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faFlask} size="2x" />
                  <div>
                    <span className="font-semibold">
                      2.1 Elements, Compounds, and Mixtures
                    </span>
                    <Progress value={50} className="w-48 h-6 mt-2">
                      50%
                    </Progress>
                  </div>
                </div>
                <Button variant="outline">Go to Activity</Button>
              </div>
            </Link>
            <Link to="/atomic-structure">
              <div className="flex items-center justify-between space-x-4 bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors">
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faAtom} size="2x" />
                  <div>
                    <span className="font-semibold">
                      2.2 Atomic Structure and the Periodic Table
                    </span>
                    <Progress value={75} className="w-48 h-6 mt-2">
                      75%
                    </Progress>
                  </div>
                </div>
                <Button variant="outline">Go to Activity</Button>
              </div>
            </Link>
            <Link to="/isotopes">
              <div className="flex items-center justify-between space-x-4 bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors">
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faMicroscope} size="2x" />
                  <div>
                    <span className="font-semibold">2.3 Isotopes</span>
                    <Progress value={0} className="w-48 h-6 mt-2">
                      0%
                    </Progress>
                  </div>
                </div>
                <Button variant="outline">Go to Activity</Button>
              </div>
            </Link>
            <Link to="/ionic-bonds">
              <div className="flex items-center justify-between space-x-4 bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors">
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faIcons} size="2x" />
                  <div>
                    <span className="font-semibold">
                      2.4 Ions and Ionic Bonds
                    </span>
                    <Progress value={100} className="w-48 h-6 mt-2">
                      100%
                    </Progress>
                  </div>
                </div>
                <Button variant="outline">Go to Activity</Button>
              </div>
            </Link>
            <Link to="/covalent-bonds">
              <div className="flex items-center justify-between space-x-4 bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors">
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faMicroscope} size="2x" />
                  <div>
                    <span className="font-semibold">
                      2.5 Simple Molecules and Covalent Bonds
                    </span>
                    <Progress value={25} className="w-48 h-6 mt-2">
                      25%
                    </Progress>
                  </div>
                </div>
                <Button variant="outline">Go to Activity</Button>
              </div>
            </Link>
            <Link to="/giant-covalent">
              <div className="flex items-center justify-between space-x-4 bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors">
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faShapes} size="2x" />
                  <div>
                    <span className="font-semibold">
                      2.6 Giant Covalent Structures
                    </span>
                    <Progress value={50} className="w-48 h-6 mt-2">
                      50%
                    </Progress>
                  </div>
                </div>
                <Button variant="outline">Go to Activity</Button>
              </div>
            </Link>
            <Link to="/metallic-bonding">
              <div className="flex items-center justify-between space-x-4 bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors">
                <div className="flex items-center space-x-4">
                  <FontAwesomeIcon icon={faAtom} size="2x" />
                  <div>
                    <span className="font-semibold">2.7 Metallic Bonding</span>
                    <Progress value={75} className="w-48 h-6 mt-2">
                      75%
                    </Progress>
                  </div>
                </div>
                <Button variant="outline">Go to Activity</Button>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>
      <Card className="mx-4 sm:mx-8 mb-8">
        <CardHeader>
          <CardTitle>3. Explore Elements</CardTitle>
        </CardHeader>
        <CardContent>
          <Table/>
          <div className="flex justify-center space-x-8">
            <div className="bg-alkaline-earth-metal px-3 py-1">
              <h1 className=" text-white text-center">{"alkaline earth metal"}</h1>
            </div>
            <div className="bg-alkali-metal px-3 py-1">
              <h1 className="text-white text-center">{"alkali metal"}</h1>
            </div>
            <div className="bg-transition-metal item px-3 py-1">
              <h1 className="text-white text-center">{"transition metal"}</h1>
            </div>
            <div className="bg-polyatomic-nonmetal item px-3 py-1">
              <h1 className="text-white text-center">{"polyatomic nonmetal"}</h1>
            </div>
            <div className="bg-noble-gas item px-3 py-1">
              <h1 className="text-white text-center">{"noble gas"}</h1>
            </div>
            <div className="bg-diatomic-nonmetal item px-3 py-1">
              <h1 className="text-white text-center">{"diatomic nonmetal"}</h1>
            </div>
            <div className="bg-Metalloid item px-3 py-1">
              <h1 className="text-white text-center">{"metalloid"}</h1>
            </div>
          </div>
        </CardContent>
      </Card>

      {showModal && (
        <ElementModal element={selectedElement} onClose={handleCloseModal} />
      )}
    </div>
  );
}
