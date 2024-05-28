import { useState, useEffect } from "react";
import { Container, Typography, Divider, Stack } from "@mui/material";
import ProfileTitle from "~/components/Profile/ProfileTitle.tsx";
import Points from "~/components/Profile/Points";
import Badges from "~/components/Profile/Badges";
import Levels from "~/components/Profile/Levels";
import { BadgeData } from "~/types/entities";

interface UserSession {
  username: string;
  password: string;
  // TODO: add more attributes
}

export default function Profile({ badgeData }: BadgeData) {
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
      <Stack display="flex" flex={5} direction="column" mr="2rem" gap="1rem">
        <ProfileTitle username={userSession?.username ?? ""} />
        <Levels level={1} progress={25} />
        <Points />
      </Stack>

      <Divider
        orientation="vertical"
        sx={{ borderColor: "black", borderWidth: "0.1vw", height: "auto" }}
      />

      {/* Right */}
      <Stack display="flex" flex={5} direction="column" ml="2rem">
        <Typography variant="h5" sx={{ marginLeft: "1rem" }}>
          Badges
        </Typography>
        <Divider sx={{ borderBottomWidth: 2, borderColor: "black" }} />
        <Badges badgeData={badgeData} />
      </Stack>
    </Container>
  );
}
