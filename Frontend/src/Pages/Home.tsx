import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Button,
  Stack,
  Drawer,
  Divider,
  LinearProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import { UserSession } from "~/types/entities";
import LevelSidebar from "~/components/LevelSidebar";

export default function Home() {
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

  const containerStyles = {
    p: "2rem",
    width: "60vw",
    boxShadow: 3,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
  };

  const buttonStyles = {
    width: "15vw", // Increased width
    mb: "2rem",
    backgroundColor: "#1976d2",
    color: "white",
    padding: "1rem 2rem", // Increased padding
    fontSize: "1.25rem", // Increased font size
    borderRadius: "0.25rem",
    boxShadow: 2,
    "&:hover": {
      backgroundColor: "#115293",
    },
    textDecoration: "none",
  };

  return (
    <>
      <LevelSidebar
        level={userSession?.level || 1}
        progress={userSession?.progress || 25}
      />
      <Container sx={containerStyles}>
        <Typography variant="h2">AtomicIQ</Typography>
        <Stack
          display="flex"
          direction="column"
          flex={1}
          justifyContent="center"
        >
          <Link to="/flashcard" style={{ textDecoration: "none" }}>
            <Button sx={buttonStyles}>FlashCard</Button>
          </Link>
          <Link to="/wordle" style={{ textDecoration: "none" }}>
            <Button sx={buttonStyles}>Wordle</Button>
          </Link>
        </Stack>
      </Container>
    </>
  );
}
