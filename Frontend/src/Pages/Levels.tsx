import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import { useState, useEffect } from "react";
import { Container, Typography, Button } from "@mui/material";

export default function Levels() {
  const [isVisitingInfo, setIsVisitingInfo] = useState(false);

  useEffect(() => {
    document.body.classList.add("backgroundImage");
    return () => {
      document.body.classList.remove("backgroundImage");
    };
  }, []);

  const containerStyles = {
    p: "2rem",
    minHeight: "92.75vh",
    width: "80vw",
    boxShadow: 3,
    backgroundColor: "white",
  };

  const timelineIconStyles = {
    p: 2,
    width: "100px",
    height: "100px",
  };

  const connectorStyles = {
    height: "3vh",
  };

  function toggleInfo() {
    setIsVisitingInfo((prev) => !prev);
  }

  return (
    <Container sx={containerStyles}>
      <Typography
        variant="h2"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Levelling
      </Typography>
      <Timeline>
        <TimelineItem position="right">
          <TimelineSeparator>
            <Button onClick={toggleInfo}>
              <TimelineDot>
                <FastfoodIcon sx={timelineIconStyles} />
              </TimelineDot>
            </Button>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "3vh", px: 2 }}>
            <Typography variant="h6" component="span">
              Level 1
            </Typography>
            <Typography>Description?</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem position="left">
          <TimelineSeparator>
            <TimelineConnector sx={connectorStyles} />
            <Button onClick={toggleInfo}>
              <TimelineDot color="primary">
                <LaptopMacIcon sx={timelineIconStyles} />
              </TimelineDot>
            </Button>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "6vh", px: 2 }}>
            <Typography variant="h6" component="span">
              Level 2
            </Typography>
            <Typography>Description?</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem position="right">
          <TimelineSeparator>
            <TimelineConnector sx={connectorStyles} />
            <Button onClick={toggleInfo}>
              <TimelineDot color="primary" variant="outlined">
                <HotelIcon sx={timelineIconStyles} />
              </TimelineDot>
            </Button>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "6vh", px: 2 }}>
            <Typography variant="h6" component="span">
              Level 3
            </Typography>
            <Typography>Description?</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem position="left">
          <TimelineSeparator>
            <TimelineConnector sx={connectorStyles} />
            <Button onClick={toggleInfo}>
              <TimelineDot color="secondary">
                <RepeatIcon sx={timelineIconStyles} />
              </TimelineDot>
            </Button>
            <TimelineConnector sx={connectorStyles} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "6vh", px: 2 }}>
            <Typography variant="h6" component="span">
              Level ??
            </Typography>
            <Typography>Description?</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      {/* <AnimatePresence>
        {showRules && (
          <motion.div 
            className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 flex items-center justify-center z-50"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md text-center">
              <h2 className="text-2xl mb-4">Rules</h2>
              <p className="mb-4">1. Read the question on the front of the card.</p>
              <p className="mb-4">2. Enter your answer in the text field.</p>
              <p className="mb-4">3. Click 'Submit' button / press 'Enter' on keyboard to submit your answer.</p>
              <p className="mb-4">4. Navigate between cards using the 'Next' and 'Back' buttons / 'Arrow left' and 'Arrow right' on keyboard.</p>
              <p className="mb-4">Note: Click the flashcard / press 'Space' on keyboard to flip the attempted cards.</p>
              <Button onClick={toggleRules} className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-700">
                Close
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </Container>
  );
}
