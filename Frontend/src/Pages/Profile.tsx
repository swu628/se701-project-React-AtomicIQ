import { useState, useEffect } from "react";
import { Container, Typography, Grid, Avatar, Divider } from "@mui/material";

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
        backgroundColor: "red",
        marginTop: 3,
        minHeight: "85vh",
        minWidth: "95vw",
        boxShadow: 3,
        display: "flex",
      }}
    >
      {/* Profile & scores */}
      <Grid
        container
        sx={{
          backgroundColor: "green",
          flex: 5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Profile section */}
        <Grid item sx={{ display: "flex", marginTop: 3, justifyContent: "center", alignItems: "center" }}>
          <Avatar alt="Remy Sharp"  sx={{ width: 100, height: 100, marginRight: 5 }} />
          <Typography sx={{ fontWeight: 600, fontSize: "2rem", color: "black" }}>
            {userSession?.username}
          </Typography>
        </Grid>
        <Grid item sx={{ display: "flex", flexDirection: "column", backgroundColor: "gray", marginTop: 5 }}>
        {/* Skills section */}
        <Typography variant="h4" sx={{ alignSelf: 'center' }}>Skills</Typography>
        <Divider sx={{ borderBottomWidth: 2, borderColor: 'black', marginY: 1 }} />
        {/* Points section */}
        <Typography variant="h4" sx={{ alignSelf: 'center', marginTop: 2 }}>Points</Typography>
        <Divider sx={{ borderBottomWidth: 2, borderColor: 'black', marginY: 1 }} />
        <Typography>Points: 2</Typography>
        <Typography>Points: 2</Typography>
        </Grid>
      </Grid>
      {/* Badges & achievements */}
      <Grid container sx={{ backgroundColor: "blue", flex: 5 }}>
        <p>badges</p>
      </Grid>
    </Container>
  );
}
