import { useState } from "react";
import elementData from "../data/elementData";
import groupPeriodData from "../data/groupPeriodData";

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHeader,
  TableHead,
} from "../components/ui/table";

const PeriodicTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalGroupPeriod, setShowModalGroupPeriod] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);
  const [info, setInfo] = useState<{
    group?:number;
    period?:number;
    summary: string;
    commonProperties: string;
  } | null>(null);

  const maxPeriod = Math.max(...elementData.map((element) => element.period));
  const maxGroup = Math.max(...elementData.map((element) => element.group));

  const handleCellClick = (element) => {
    setSelectedElement(element);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setShowModalGroupPeriod(false);
    setSelectedElement(null);
    setInfo(null);
  };

  const handleGroupClick = (groupNumber: number) => {
    setShowModalGroupPeriod(true);
    const groupInfo = groupPeriodData.groups.find(
      (group) => group.group === groupNumber
    );
    if (groupInfo) {
      setInfo({
        group:groupInfo.group,
        summary: groupInfo.summary,
        commonProperties: groupInfo.commonProperties,
      });
    }
  };

  const handlePeriodClick = (periodNumber: number) => {
    setShowModalGroupPeriod(true);
    const periodInfo = groupPeriodData.periods.find(
      (period) => period.period === periodNumber
    );
    if (periodInfo) {
      setInfo({
        period:periodInfo.period,
        summary: periodInfo.summary,
        commonProperties: periodInfo.commonProperties,
      });
    }
  };

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            {[...Array(18)].map((_, index) => {
              const isGroup =
                index + 1 === 1 || index + 1 === 2 || index + 1 >= 13;
              return (
                <TableHead
                  key={index}
                  onClick={() => handleGroupClick(index + 1)}
                  className={isGroup ? "hover:bg-slate-400 cursor-pointer" : ""}
                >
                  {isGroup ? `Group ${index + 1}` : ""}
                </TableHead>
              );
            })}
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: maxPeriod }, (_, period) => (
            <TableRow key={`period-${period + 1}`}>
              <TableHead
                className="hover:bg-slate-400 cursor-pointer"
                onClick={() => handlePeriodClick(period + 1)}
              >
                Period {period + 1}
              </TableHead>
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

      {showModalGroupPeriod && info && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md">
            <h2 className="text-2xl font-bold mb-4">{info.group?("Group"+info.group):("Period"+info.period)}</h2>
            <p className="mb-2">
              <strong>Symbol:</strong> {info.summary}
            </p>
            <p className="mb-2">
              <strong>Number:</strong> {info.commonProperties}
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
