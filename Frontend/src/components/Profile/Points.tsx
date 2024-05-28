import {
  Typography,
  Divider,
  Grid,
  LinearProgress,
  ThemeProvider,
  Stack,
} from "@mui/material";
import {
  experimentalStyled as styled,
  createTheme,
} from "@mui/material/styles";

// Styled component for the circle container
const CircleContainer = styled("div")({
  position: "relative",
  display: "inline-block",
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  border: "3px solid #008000",
  backgroundColor: "#FFD700",
  textAlign: "center",
});

const Label = styled("div")({
  position: "absolute",
  top: "120px",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "#008000",
  color: "#fff",
  padding: "5px 10px",
  borderRadius: "5px",
  fontSize: "1rem",
});

const WinnerCount = styled(Typography)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "2rem",
  fontWeight: "bold",
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#008000",
    },
  },
});

export default function Points() {
  const totalElements = 20;
  const learnedElements = 5;
  const progress = (learnedElements / totalElements) * 100;

  return (
    <ThemeProvider theme={theme}>
      <Stack direction="column">
        <Typography variant="h5">Points</Typography>
        <Divider sx={{ borderBottomWidth: 2, borderColor: "black" }} />
        {/* Quiz points */}
        <Grid
          container
          justifyContent="space-evenly"
          sx={{ marginTop: "2rem" }}
        >
          <CircleContainer>
            <Label>Flashcard</Label>
            <WinnerCount>2</WinnerCount>
          </CircleContainer>
          <CircleContainer>
            <Label>Wordle</Label>
            <WinnerCount>2</WinnerCount>
          </CircleContainer>
          <CircleContainer>
            <Label>Streak</Label>
            <WinnerCount>0</WinnerCount>
          </CircleContainer>
        </Grid>
      </Stack>
    </ThemeProvider>
  );
}
