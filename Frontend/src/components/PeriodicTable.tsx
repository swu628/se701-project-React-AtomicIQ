import React, { useState } from "react";
import elementData from "../data/elementData";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

const PeriodicTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);

  const maxPeriod = Math.max(...elementData.map((element) => element.period));
  const maxGroup = Math.max(...elementData.map((element) => element.group));

  const handleCellClick = (element) => {
    setSelectedElement(element);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedElement(null);
  };

  return (
    <div>
      <Table>
        <TableBody>
          {Array.from({ length: maxPeriod }, (_, period) => (
            <TableRow key={`period-${period + 1}`}>
              {Array.from({ length: maxGroup }, (_, group) => {
                const element = elementData.find(
                  (el) => el.period === period + 1 && el.group === group + 1
                );

                return (
                  <TableCell
                    key={`cell-${period + 1}-${group + 1}`}
                    className={`font-medium ${
                      element ? "bg-gray-200 hover:bg-gray-300" : "bg-white"
                    } transition-colors duration-300 cursor-pointer`}
                    onClick={() => handleCellClick(element)}
                  >
                    {element ? element.symbol : ""}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {showModal && selectedElement && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md">
            <h2 className="text-2xl font-bold mb-4">{selectedElement.name}</h2>
            <p className="mb-2">
              <strong>Symbol:</strong> {selectedElement.symbol}
            </p>
            <p className="mb-2">
              <strong>Number:</strong> {selectedElement.number}
            </p>
            <p className="mb-2">
              <strong>Group:</strong> {selectedElement.group}
            </p>
            <p className="mb-2">
              <strong>Period:</strong> {selectedElement.period}
            </p>
            <p>
              <strong>Fun Fact:</strong> {selectedElement.funFact}
            </p>
            <button
              className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PeriodicTable;