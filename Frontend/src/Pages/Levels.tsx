import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import { LevelOne } from "~/components/Levels/LevelOne";
import { LevelTwo } from "~/components/Levels/LevelTwo";
import { LevelThree } from "~/components/Levels/LevelThree";
import { MoreLevels } from "~/components/Levels/MoreLevels";
import { useState, useEffect } from "react";
import { Container, Typography, Button } from "@mui/material";

export default function Levels() {
  const [isLevelOneVisible, setIsLevelOneVisible] = useState(false);
  const [isLevelTwoVisible, setIsLevelTwoVisible] = useState(false);
  const [isLevelThreeVisible, setIsLevelThreeVisible] = useState(false);
  const [isMoreLevelsVisible, setIsMoreLevelsVisible] = useState(false);

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

  function toggleLevelOne() {
    setIsLevelOneVisible((prev) => !prev);
  }

  function toggleLevelTwo() {
    setIsLevelTwoVisible((prev) => !prev);
  }

  function toggleLevelThree() {
    setIsLevelThreeVisible((prev) => !prev);
  }

  function toggleMoreLevels() {
    setIsMoreLevelsVisible((prev) => !prev);
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
            <Button onClick={toggleLevelOne}>
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
            <Button onClick={toggleLevelTwo}>
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
            <Button onClick={toggleLevelThree}>
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
            <Button onClick={toggleMoreLevels}>
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

      {isLevelOneVisible && (
        <LevelOne
          isLevelOneVisible={isLevelOneVisible}
          toggleLevelOne={toggleLevelOne}
        />
      )}
      {isLevelTwoVisible && (
        <LevelTwo
          isLevelTwoVisible={isLevelTwoVisible}
          toggleLevelTwo={toggleLevelTwo}
        />
      )}
      {isLevelThreeVisible && (
        <LevelThree
          isLevelThreeVisible={isLevelThreeVisible}
          toggleLevelThree={toggleLevelThree}
        />
      )}
      {isMoreLevelsVisible && (
        <MoreLevels
          isMoreLevelsVisible={isMoreLevelsVisible}
          toggleMoreLevels={toggleMoreLevels}
        />
      )}
    </Container>
  );
}
