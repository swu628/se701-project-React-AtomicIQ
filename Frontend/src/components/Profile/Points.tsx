import {
  Typography,
  Divider,
  Grid,
  ThemeProvider,
  Stack,
  Tooltip,
} from "@mui/material";
import {
  experimentalStyled as styled,
  createTheme,
} from "@mui/material/styles";

type pointProp = {
  correctQuestions: number;
  incorrectQuestions: number;
  totalQuestions: number;
  numFlashcard: number;
  progress: number;
};

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

export default function Points({
  correctQuestions,
  incorrectQuestions,
  totalQuestions,
  numFlashcard,
  progress,
}: pointProp) {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="column">
        <Typography variant="h5" sx={{ marginLeft: "1rem" }}>
          Points
        </Typography>
        <Divider sx={{ borderBottomWidth: 2, borderColor: "black" }} />
        {/* Quiz points */}
        <Grid
          container
          justifyContent="space-evenly"
          sx={{ marginTop: "3rem" }}
        >
          <CircleContainer>
            <Tooltip title="Number of flashcard completion" arrow>
              <Label>Flashcard</Label>
            </Tooltip>
            <WinnerCount>{numFlashcard}</WinnerCount>
          </CircleContainer>
          <CircleContainer>
            <Tooltip title="Number of wordle quiz completion" arrow>
              <Label>Wordle</Label>
            </Tooltip>
            <WinnerCount>{progress}</WinnerCount>
          </CircleContainer>
          <CircleContainer>
            <Tooltip title="Consecutive days of completion" arrow>
              <Label>Streak</Label>
            </Tooltip>
            <WinnerCount>1</WinnerCount>
          </CircleContainer>
        </Grid>
        <Grid
          container
          justifyContent="space-evenly"
          sx={{ marginTop: "5rem" }}
        >
          <CircleContainer>
            <Tooltip title="Number of completed quizzes" arrow>
              <Label>Quizzes</Label>
            </Tooltip>
            <WinnerCount>{totalQuestions}</WinnerCount>
          </CircleContainer>
          <CircleContainer>
            <Tooltip title="Number of correct answers" arrow>
              <Label>Correct</Label>
            </Tooltip>
            <WinnerCount>{correctQuestions}</WinnerCount>
          </CircleContainer>
          <CircleContainer>
            <Tooltip title="Number of incorrect answers" arrow>
              <Label>Wrong</Label>
            </Tooltip>
            <WinnerCount>{incorrectQuestions}</WinnerCount>
          </CircleContainer>
        </Grid>
      </Stack>
    </ThemeProvider>
  );
}
