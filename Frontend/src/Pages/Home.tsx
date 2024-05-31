import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Button,
  Stack,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import { UserSession } from "~/types/entities";
import LevelSidebar from "~/components/LevelSidebar";

const levelToActivityMap = [
  { level: 1, activity: "/solids-liquids-gases" },
  { level: 2, activity: "/flashcard/1" },
  { level: 3, activity: "/flashcard/2" },
];

export default function Home() {
  const [userSession, setUserSession] = useState<UserSession | null>(null);
  const [levelSetting, setLevelSetting] = useState<number>(1);

  useEffect(() => {
    // Retrieve currently logged in user
    const storedSession = localStorage.getItem("userSession");
    if (storedSession) {
      setUserSession(JSON.parse(storedSession) as UserSession);
    }

    document.body.classList.add("backgroundImage");
    return () => {
      document.body.classList.remove("backgroundImage");
    };
  }, []);

  const onLevelChange = (event: SelectChangeEvent) => {
    setLevelSetting(parseInt(event.target.value));
  };

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
    width: { xs: "80vw", sm: "60vw", md: "30vw", lg: "15vw" },
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
    <>
      <LevelSidebar
        level={userSession?.level ?? 1}
        progress={userSession?.progress ?? 25}
      />
      <Container sx={containerStyles}>
        <Typography variant="h2">AtomicIQ</Typography>
        <Stack
          display="flex"
          direction="column"
          flex={1}
          justifyContent="center"
        >
          <FormControl sx={{ marginBottom: "2rem" }}>
            <InputLabel>Level</InputLabel>
            <Select
              value={levelSetting.toString()}
              label="Level"
              onChange={onLevelChange}
            >
              {(() => {
                const arr = [] as React.ReactNode[];
                for (let i = 1; i <= (userSession?.level || 1); i++) {
                  arr.push(
                    <MenuItem key={i} value={i}>
                      {i}
                    </MenuItem>
                  );
                }
                return arr;
              })()}
            </Select>
          </FormControl>
          <Link
            to={levelToActivityMap[levelSetting - 1].activity}
            style={{ textDecoration: "none", marginBottom: "2rem" }}
          >
            <Button sx={buttonStyles}>Start</Button>
          </Link>
          <Link
            to="/wordle"
            style={{ textDecoration: "none", marginBottom: "2rem" }}
          >
            <Button sx={buttonStyles}>Elementle</Button>
          </Link>
        </Stack>
      </Container>
    </>
  );
}
