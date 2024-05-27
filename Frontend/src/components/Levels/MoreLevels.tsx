import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@mui/material";

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
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md text-center">
            <h2 className="text-2xl mb-4">More levels</h2>
            <p className="mb-4" style={{ color: "white" }}>
              1. Read the question on the front of the card.
            </p>
            <p className="mb-4">2. Enter your answer in the text field.</p>
            <p className="mb-4">
              3. Click 'Submit' button / press 'Enter' on keyboard to submit
              your answer.
            </p>
            <p className="mb-4">
              4. Navigate between cards using the 'Next' and 'Back' buttons /
              'Arrow left' and 'Arrow right' on keyboard.
            </p>
            <p className="mb-4">
              Note: Click the flashcard / press 'Space' on keyboard to flip the
              attempted cards.
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
