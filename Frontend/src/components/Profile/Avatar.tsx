import {
  Typography,
  Grid,
  Divider,
  Paper,
  ThemeProvider,
  Stack,
  Button,
} from "@mui/material";
import {
  experimentalStyled as styled,
  createTheme,
} from "@mui/material/styles";
import { useState, useEffect } from "react";
import { UserSession } from "~/types/entities";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "gray",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderRadius: "50%",
}));

const avatars = [
  { src: "src/assets/avatar1.svg" }, // Default avatar
  { src: "src/assets/avatar2.svg" },
  { src: "src/assets/avatar3.svg" },
  { src: "src/assets/avatar4.svg" },
  { src: "src/assets/avatar5.svg" },
  { src: "src/assets/avatar6.svg" },
  { src: "src/assets/avatar7.svg" },
  { src: "src/assets/avatar8.svg" },
  { src: "src/assets/avatar9.svg" },
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#008000",
    },
  },
});

export default function Avatar() {
  const [userSession, setUserSession] = useState<UserSession | null>(null);

  useEffect(() => {
    // Retrieve currently logged in user
    const storedSession = localStorage.getItem("userSession");
    if (storedSession) {
      setUserSession(JSON.parse(storedSession) as UserSession);
    }
  }, []);

  function handleUpdateAvatar(avatar: string) {
    if (userSession) {
      const updatedUserSession: UserSession = {
        ...userSession,
        avatar: avatar,
      };

      // Update the user object
      setUserSession(updatedUserSession);
      localStorage.setItem("userSession", JSON.stringify(updatedUserSession));

      // Automate avatar refresh (this can be discarded by implementing useContext in future work)
      window.location.reload();
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Stack direction="column">
        <Typography variant="h5" sx={{ marginLeft: "1rem" }}>
          Avatars
        </Typography>
        <Divider sx={{ borderBottomWidth: 2, borderColor: "black" }} />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ paddingTop: 3 }}
        >
          {avatars.map((avatar, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>
                <Button onClick={() => handleUpdateAvatar(avatar.src)}>
                  <img
                    src={avatar.src}
                    alt={`Avatar ${index}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                  />
                </Button>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ThemeProvider>
  );
}
