import { useState, useEffect } from "react";
import { Container, Typography, Grid, Divider } from "@mui/material";
import ProfileTitle from "~/components/Profile/ProfileTitle.tsx";
import Skills from "~/components/Profile/Skills";
import Points from "~/components/Profile/Points";

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

  return (
    <Container
      sx={{
        marginTop: 3,
        minHeight: "85vh",
        minWidth: "95vw",
        boxShadow: 3,
        display: "flex",
        backgroundColor: "#ffe57f",
      }}
    >
      {/* Left */}
      <Grid
        container
        sx={{
          flex: 5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ProfileTitle username={userSession?.username ?? ""} />
        <Grid
          item
          sx={{ display: "flex", flexDirection: "column", marginTop: 3 }}
        >
          <Skills />
          <Points />
        </Grid>
      </Grid>

      {/* Right */}
      <Divider
        orientation="vertical"
        sx={{ borderColor: "black", borderWidth: "0.1vw", minHeight: "88vh" }}
      />
      <Grid
        container
        sx={{ flex: 5, display: "flex", flexDirection: "column", marginTop: 3 }}
      >
        <Typography variant="h4" sx={{ alignSelf: "center" }}>
          Badges & Achievements
        </Typography>
        <Divider
          sx={{ borderBottomWidth: 2, borderColor: "black", marginY: 1 }}
        />
        {/* TODO: badges component */}
      </Grid>
    </Container>
  );
}
