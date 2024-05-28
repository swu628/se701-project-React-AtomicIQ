import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import RedoIcon from "@mui/icons-material/Redo";
import PreviewIcon from "@mui/icons-material/Preview";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ResultsTable from "~/components/ResultsTable";
import ResultsDisplay from "~/components/ResultsDisplay";

const quizResults = [
  {
    label: "Correct",
    value: 8,
    expandedValues: [1, 2, 3, 4, 5, 7, 9, 10],
  },
  { label: "Incorrect", value: 1, expandedValues: [6] },
  { label: "Skipped", value: 1, expandedValues: [8] },
];

export default function Results() {
  const { quizId } = useParams();
  console.log(quizId);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    document.body.classList.add("backgroundImage");
    return () => {
      document.body.classList.remove("backgroundImage");
    };
  }, []);

  const handleRetakeQuiz = () => {
    navigate("/flashcard"); 
  };

  return (
    <Box display="flex" mt="7.5vh" justifyContent="center">
      <Paper elevation={3} sx={{ width: "80vw", minHeight: "75vh", p: "2rem" }}>
        <Stack
          display="flex"
          direction="column"
          height="100%"
          justifyContent="space-between"
        >
          <Typography variant="h5" fontWeight="bold" alignSelf="center">
            Quiz Results
          </Typography>
          <Stack
            display="flex"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            gap="10vw"
          >
            <Box>
              <Paper sx={{ width: "30vw" }}>
                <ResultsTable rows={quizResults} />
              </Paper>
            </Box>
            <Box sx={{ width: "30vw", height: "28vh" }}>
              <ResultsDisplay
                correct={quizResults[0].value}
                incorrect={quizResults[1].value}
                skipped={quizResults[2].value}
              />
            </Box>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Button
              variant="contained"
              startIcon={<RedoIcon />}
              onClick={handleRetakeQuiz}
            >
              Retake Quiz
            </Button>
            <Button variant="contained" startIcon={<PreviewIcon />}>
              Review Quiz
            </Button>
            <Button variant="contained" startIcon={<SkipNextIcon />}>
              Next Quiz
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}
