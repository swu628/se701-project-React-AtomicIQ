import {ElementData} from "~/types/element";

interface ElementModalProps {
    element: ElementData;
    closeModal: () => void;
}

export default function ElementModal({element, closeModal}: ElementModalProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-8 max-w-md">
                <h2 className="text-2xl font-bold mb-4">{element.name}</h2>
                <p className="mb-2">
                    <strong>Symbol:</strong> {element.symbol}
                </p>
                <p className="mb-2">
                    <strong>Number:</strong> {element.number}
                </p>
                <p className="mb-2">
                    <strong>Group:</strong> {element.group}
                </p>
                <p className="mb-2">
                    <strong>Period:</strong> {element.period}
                </p>
                <p>
                    <strong>Fun Fact:</strong> {element.funFact}
                </p>
                <button
                    className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
                    onClick={closeModal}
                >
                    Close
                </button>
            </div>
        </div>
    );
}