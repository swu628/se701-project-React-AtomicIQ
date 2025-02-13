import { useState, useEffect } from "react";
import { Container, Divider, Stack } from "@mui/material";
import ProfileTitle from "~/components/Profile/ProfileTitle";
import Points from "~/components/Profile/Points";
import Badges from "~/components/Profile/Badges";
import Levels from "~/components/Profile/Levels";
import { Badge, UserSession } from "~/types/entities";
import Avatar from "~/components/Profile/Avatar";

interface ProfileProps {
  badgeData: Badge[];
}

export default function Profile({ badgeData }: ProfileProps) {
  const [userSession, setUserSession] = useState<UserSession | null>(null);
  const [isUpdatingAvatar, setIsUpdatingAvatar] = useState<boolean>(false);

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
        width: "80vw",
        boxShadow: 3,
        display: "flex",
        backgroundColor: "white",
        borderRadius: 1,
      }}
    >
      {/* Left */}
      <Stack display="flex" flex={5} direction="column" mr="2rem" gap="1rem">
        <ProfileTitle
          username={userSession?.username ?? ""}
          isUpdatingAvatar={isUpdatingAvatar}
          setIsUpdatingAvatar={setIsUpdatingAvatar}
        />
        {isUpdatingAvatar ? (
          <Avatar />
        ) : (
          <>
            <Levels
              level={userSession?.level ?? 0}
              progress={userSession?.progress ?? 0}
            />
            <Points
              correctQuestions={
                userSession?.questionPoints.correctQuestions ?? 0
              }
              incorrectQuestions={
                userSession?.questionPoints.incorrectQuestions ?? 0
              }
              totalQuestions={userSession?.questionPoints.totalQuestions ?? 0}
              numFlashcard={userSession?.quizPoints.numFlashcard ?? 0}
              numWordle={userSession?.quizPoints.numWordle ?? 0}
              progress={userSession?.progress ?? 0}
            />
          </>
        )}
      </Stack>
      <Divider
        orientation="vertical"
        sx={{ borderColor: "black", borderWidth: "0.1vw", height: "auto" }}
      />
      {/* Right */}
      <Stack display="flex" flex={5} direction="column" ml="2rem">
        <Badges
          badgeData={badgeData}
          existingBadges={userSession?.badges || []}
        />
      </Stack>
    </Container>
  );
}
