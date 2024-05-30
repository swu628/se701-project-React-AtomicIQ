"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../../components/ui/button";

interface Props {
  isMoreLevelsVisible: boolean;
  toggleMoreLevels: () => void;
}

export function MoreLevels({ isMoreLevelsVisible, toggleMoreLevels }: Props) {
  return (
    <AnimatePresence>
      {isMoreLevelsVisible && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 flex items-center justify-center z-50"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md text-center text-white">
            <h2 className="text-2xl mb-4">More Levels</h2>
            <p className="mb-4">
              You can select more FLASHCARD quizs to unlock
            </p>
            <Button
              onClick={toggleMoreLevels}
              className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-700"
            >
              Close
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
