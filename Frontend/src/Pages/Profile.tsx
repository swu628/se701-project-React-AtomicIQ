import { useState, useEffect } from "react";
import { Container, Typography, Grid, Divider } from "@mui/material";
import ProfileTitle from "~/components/Profile/ProfileTitle.tsx";
import Skills from "~/components/Profile/Skills";
import Points from "~/components/Profile/Points";
import Badges from "~/components/Profile/Badges";
import Levels from "~/components/Profile/Levels";

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

    // Add background img
    document.body.classList.add("backgroundImage");
    return () => {
      document.body.classList.remove("backgroundImage");
    };
  }, []);

  return (
    <Container
      sx={{
        p: "2rem !important",
        marginTop: "7.5vh",
        marginBottom: "7.5vh",
        minHeight: "75vh",
        width: "80vw",
        boxShadow: 3,
        display: "flex",
        backgroundColor: "white",
        borderRadius: 1,
      }}
    >
      {/* Left */}
      <Grid
        container
        sx={{
          flex: 5,
          display: "flex",
          flexDirection: "column",
          marginRight: "1rem",
        }}
      >
        <ProfileTitle username={userSession?.username ?? ""} />
        <Grid item sx={{ display: "flex", flexDirection: "column" }}>
          <Levels level={1} progress={25} />
          <Points />
        </Grid>
      </Grid>

      {/* Right */}
      <Divider
        orientation="vertical"
        sx={{ borderColor: "black", borderWidth: "0.1vw", height: "auto" }}
      />
      <Grid
        container
        sx={{ flex: 5, display: "flex", flexDirection: "column", marginTop: 3 }}
      >
        <Typography variant="h4" sx={{ alignSelf: "center" }}>
          Badges
        </Typography>
        <Divider
          sx={{ borderBottomWidth: 2, borderColor: "black", marginY: 1 }}
        />
        <Badges />
      </Grid>
    </Container>
  );
}
