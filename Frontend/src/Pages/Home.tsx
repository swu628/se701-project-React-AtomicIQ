import { useState, useEffect } from "react";
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
    p: "2rem",
    minHeight: "92.75vh",
    width: "80vw",
    boxShadow: 3,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center",
  };

  const buttonStyles = {
    width: "15vw", // Increased width
    mb: 5,
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

  const typographyStyles = {
    mb: 30,
  };

  return (
    <Container sx={containerStyles}>
      <Typography variant="h2" sx={typographyStyles}>
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
