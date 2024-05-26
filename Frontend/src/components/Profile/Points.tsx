import {
  Typography,
  Divider,
  Grid,
  LinearProgress,
  ThemeProvider,
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
      <>
        <Typography variant="h4" sx={{ alignSelf: "center", marginTop: 4 }}>
          Points
        </Typography>
        <Divider
          sx={{ borderBottomWidth: 2, borderColor: "black", marginY: 1 }}
        />
        {/* Quiz points */}
        <Grid container justifyContent="space-evenly" sx={{ marginTop: 2 }}>
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
        {/* Learning progress */}
        <Typography variant="h5" sx={{ alignSelf: "center", marginTop: 4 }}>
          Elements learnt
        </Typography>
        <Grid container alignItems="center" justifyContent="center">
          <Typography sx={{ marginRight: 1 }}>{learnedElements}</Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            color="primary"
            sx={{
              width: "80%",
              height: "10px",
              borderRadius: "5px",
              marginLeft: 1,
              marginRight: 1,
            }}
          />
          <Typography sx={{ marginLeft: 1 }}>{totalElements}</Typography>
        </Grid>
        <Typography variant="h5" sx={{ alignSelf: "center", marginTop: 4 }}>
          Properties learnt
        </Typography>
        <Grid container alignItems="center" justifyContent="center">
          <Typography sx={{ marginRight: 1 }}>{learnedElements}</Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            color="primary"
            sx={{
              width: "80%",
              height: "10px",
              borderRadius: "5px",
              marginLeft: 1,
              marginRight: 1,
            }}
          />
          <Typography sx={{ marginLeft: 1 }}>{totalElements}</Typography>
        </Grid>
      </>
    </ThemeProvider>
  );
}
