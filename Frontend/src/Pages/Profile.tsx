import { useState, useEffect } from "react";
import { Container, Paper, Typography, Box, Grid, Avatar } from "@mui/material";

interface UserSession {
  username: string;
  password: string;
  // TODO: add more attributes
}

export default function Profile() {
  const [userSession, setUserSession] = useState<UserSession | null>(null);

  useEffect(() => {
    // Retrieve currently logged in user
    const storedSession = localStorage.getItem("userSession");
    if (storedSession) {
      setUserSession(JSON.parse(storedSession) as UserSession);
    }
  }, []);

  {
    /* <p>profile</p>
      <p>{userSession?.username}</p>
      <p>{userSession?.password}</p> */
  }

  return (
    <Container
      sx={{
        backgroundColor: "red",
        marginTop: 3,
        minHeight: "85vh",
        minWidth: "95vw",
        boxShadow: 3,
        display: "flex",
      }}
    >
      <Grid
        container
        sx={{
          backgroundColor: "green",
          flex: 5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid item sx={{ display: "flex" }}>
          <Avatar alt="Remy Sharp" />
          <p>username</p>
        </Grid>
        <p>points</p>
      </Grid>
      <Grid container sx={{ backgroundColor: "blue", flex: 5 }}>
        <p>badges</p>
      </Grid>
    </Container>
  );
}
