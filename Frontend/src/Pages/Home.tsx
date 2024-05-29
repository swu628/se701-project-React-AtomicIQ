import { useEffect } from "react";
import { Container, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
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
    <Container sx={containerStyles}>
      <Typography variant="h2">AtomicIQ</Typography>
      <Stack display="flex" direction="column" flex={1} justifyContent="center">
        <Link to="/flashcard" style={{ textDecoration: "none" }}>
          <Button sx={buttonStyles}>Flash Card</Button>
        </Link>
        <Link to="/wordle" style={{ textDecoration: "none" }}>
          <Button sx={buttonStyles}>Wordle</Button>
        </Link>
      </Stack>
    </Container>
  );
}
