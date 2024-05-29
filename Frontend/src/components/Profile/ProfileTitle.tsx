import { Typography, Grid, Avatar, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { UserSession } from "~/types/entities";

type titleProp = {
  username: string;
  isUpdatingAvatar: boolean;
  setIsUpdatingAvatar: (value: boolean) => void;
};

export default function ProfileTitle({
  username,
  isUpdatingAvatar,
  setIsUpdatingAvatar,
}: titleProp) {
  const [userSession, setUserSession] = useState<UserSession | null>(null);

  useEffect(() => {
    // Retrieve currently logged in user
    const storedSession = localStorage.getItem("userSession");
    if (storedSession) {
      setUserSession(JSON.parse(storedSession) as UserSession);
    }
  }, []);

  return (
    <>
      {/* Profile title section */}
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        gap={3}
      >
        <Button onClick={() => setIsUpdatingAvatar(!isUpdatingAvatar)}>
          <Avatar
            alt="Remy Sharp"
            src={userSession?.avatar}
            sx={{ width: 64, height: 64 }}
          />
        </Button>

        <Typography variant="h4" sx={{ fontWeight: 600, color: "black" }}>
          {username}
        </Typography>
      </Grid>
    </>
  );
}
