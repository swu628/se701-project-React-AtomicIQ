import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { LevelOne } from "~/components/Levels/LevelOne";
import { LevelTwo } from "~/components/Levels/LevelTwo";
import { LevelThree } from "~/components/Levels/LevelThree";
import { MoreLevels } from "~/components/Levels/MoreLevels";
import { useState, useEffect } from "react";
import { Container, Typography, Button } from "@mui/material";
import { UserSession } from "~/types/entities";
import LevelSidebar from "~/components/LevelSidebar";

export default function Levels() {
  const [isLevelOneVisible, setIsLevelOneVisible] = useState(false);
  const [isLevelTwoVisible, setIsLevelTwoVisible] = useState(false);
  const [isLevelThreeVisible, setIsLevelThreeVisible] = useState(false);
  const [isMoreLevelsVisible, setIsMoreLevelsVisible] = useState(false);
  const [userSession, setUserSession] = useState<UserSession | null>(null);

  useEffect(() => {
    // Retrieve currently logged in user
    const storedSession = localStorage.getItem("userSession");
    if (storedSession) {
      setUserSession(JSON.parse(storedSession) as UserSession);
    }

    document.body.classList.add("backgroundImage");
    return () => {
      document.body.classList.remove("backgroundImage");
    };
  }, []);

  const resetCompletedLevels = () => {
    if (userSession) {
      userSession.level = 1;
      userSession.progress = 0;
      localStorage.setItem("userSession", JSON.stringify(userSession));
    }
    window.location.reload();
  };

  const containerStyles = {
    p: { xs: "1rem", sm: "1.5rem", md: "2rem" },
    width: { xs: "95vw", sm: "90vw", md: "60vw" },
    boxShadow: 3,
    backgroundColor: "white",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  };

  const connectorStyles = {
    height: { xs: "2vh", sm: "3vh", md: "4vh" },
  };

  const timelineDotStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: { xs: "40px", sm: "60px", md: "80px", lg: "100px" },
    height: { xs: "40px", sm: "60px", md: "80px", lg: "100px" },
    borderWidth: 2,
    borderColor: "blue",
    borderStyle: "solid",
  };

  const congratulationStyles = {
    color: "green",
    fontWeight: "bold",
    fontSize: "1.2rem",
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
    <>
      <LevelSidebar
        level={userSession?.level ?? 1}
        progress={userSession?.progress ?? 25}
      />
      <Container sx={containerStyles}>
        <Typography
          variant="h2"
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: { xs: 2, md: 4 },
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          Levelling
        </Typography>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <Button onClick={toggleLevelOne}>
                <TimelineDot sx={timelineDotStyles}>
                  <img src="src/assets/level1.svg" alt="Level 1 Icon" />
                </TimelineDot>
              </Button>
            </TimelineSeparator>
            <TimelineContent
              sx={{ py: { xs: "1vh", sm: "2vh", md: "3vh" }, px: 2 }}
            >
              <Typography variant="h6" component="span">
                Level 1
              </Typography>
              <Typography
                sx={(userSession?.level ?? 0) >= 1 ? congratulationStyles : {}}
              >
                {(userSession?.level ?? 0) >= 1 ? "Completed" : "Incompleted"}
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={connectorStyles} />
              <Button onClick={toggleLevelTwo}>
                <TimelineDot color="primary" sx={timelineDotStyles}>
                  <img src="src/assets/level2.svg" alt="Level 2 Icon" />
                </TimelineDot>
              </Button>
            </TimelineSeparator>
            <TimelineContent
              sx={{ py: { xs: "1vh", sm: "2vh", md: "3vh" }, px: 2 }}
            >
              <Typography variant="h6" component="span">
                Level 2
              </Typography>
              <Typography
                sx={(userSession?.level ?? 0) >= 2 ? congratulationStyles : {}}
              >
                {(userSession?.level ?? 0) >= 2 ? "Completed" : "Incompleted"}
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={connectorStyles} />
              <Button onClick={toggleLevelThree}>
                <TimelineDot
                  color="primary"
                  variant="outlined"
                  sx={timelineDotStyles}
                >
                  <img src="src/assets/level3.svg" alt="Level 3 Icon" />
                </TimelineDot>
              </Button>
            </TimelineSeparator>
            <TimelineContent
              sx={{ py: { xs: "1vh", sm: "2vh", md: "3vh" }, px: 2 }}
            >
              <Typography variant="h6" component="span">
                Level 3
              </Typography>
              <Typography
                sx={(userSession?.level ?? 0) >= 3 ? congratulationStyles : {}}
              >
                {(userSession?.level ?? 0) >= 3 ? "Completed" : "Incompleted"}
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={connectorStyles} />
              <Button onClick={toggleMoreLevels}>
                <TimelineDot color="secondary" sx={timelineDotStyles}>
                  <img src="src/assets/level4.svg" alt="More Levels Icon" />
                </TimelineDot>
              </Button>
              <TimelineConnector sx={connectorStyles} />
            </TimelineSeparator>
            <TimelineContent
              sx={{ py: { xs: "1vh", sm: "2vh", md: "3vh" }, px: 2 }}
            >
              <Typography variant="h6" component="span">
                More Levels
              </Typography>
              <Typography>Learn more elements to unlock</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>

        <Button
          onClick={resetCompletedLevels}
          variant="contained"
          color="secondary"
          sx={{ mt: 4 }}
        >
          Reset Completed Levels
        </Button>

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
    </>
  );
}
