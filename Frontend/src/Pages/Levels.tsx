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
import { useEffect } from "react";
import { Container, Typography } from "@mui/material";

export default function Levels() {
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

  return (
    <Container sx={containerStyles}>
      <Typography
        variant="h2"
        sx={{ mb: 3, display: "flex", justifyContent: "center" }}
      >
        Levelling
      </Typography>
      <Timeline>
        <TimelineItem position="right">
          <TimelineSeparator>
            <TimelineDot>
              <FastfoodIcon sx={timelineIconStyles} />
            </TimelineDot>
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
            <TimelineDot color="primary">
              <LaptopMacIcon sx={timelineIconStyles} />
            </TimelineDot>
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
            <TimelineDot color="primary" variant="outlined">
              <HotelIcon sx={timelineIconStyles} />
            </TimelineDot>
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
            <TimelineDot color="secondary">
              <RepeatIcon sx={timelineIconStyles} />
            </TimelineDot>
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
    </Container>
  );
}
