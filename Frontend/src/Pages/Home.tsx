import { useEffect } from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    document.body.classList.add("backgroundImage");
    return () => {
      document.body.classList.remove("backgroundImage");
    };
  }, []);

  const containerStyles = {
    p: { xs: "1rem", md: "2rem" },
    minHeight: "92.75vh",
    width: { xs: "90vw", sm: "80vw" },
    boxShadow: 3,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
  };

  const buttonStyles = {
    width: { xs: "80vw", sm: "60vw", md: "30vw", lg: "15vw" },
    mb: 2,
    backgroundColor: "#1976d2",
    color: "white",
    padding: { xs: "0.5rem 1rem", md: "1rem 2rem" },
    fontSize: { xs: "1rem", md: "1.25rem" },
    borderRadius: "0.25rem",
    boxShadow: 2,
    "&:hover": {
      backgroundColor: "#115293",
    },
    textDecoration: "none",
  };

  return (
    <Container sx={containerStyles}>
      <Typography variant="h2" sx={{ mb: 5 }}>
        AtomicIQ
      </Typography>
      <Link to="/flashcard" style={{ textDecoration: "none" }}>
        <Button sx={buttonStyles}>Flashcard</Button>
      </Link>
      <Link to="/wordle" style={{ textDecoration: "none" }}>
        <Button sx={buttonStyles}>Wordle</Button>
      </Link>
      {/* Test purposes, have to remove this before submitting */}
      <Link to="/quiz/0/results" style={{ textDecoration: "none" }}>
        <Button sx={buttonStyles}>
          Quiz result (remember to remove this button)
        </Button>
      </Link>
    </Container>
  );
}
