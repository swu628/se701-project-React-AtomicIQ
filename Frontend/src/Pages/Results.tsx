import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import RedoIcon from "@mui/icons-material/Redo";
import PreviewIcon from "@mui/icons-material/Preview";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ResultsTable from "~/components/ResultsTable";
import ResultsDisplay from "~/components/ResultsDisplay";

export default function Results() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || { answers: [] };
  const { answers } = state;

  const correct = answers.filter((answer: AnswerData) => answer.correct).length;
  const incorrect = answers.filter((answer: AnswerData) => !answer.correct && answer.answer !== "").length;
  const skipped = answers.filter((answer: AnswerData) => answer.answer === "").length;

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
                <ResultsTable
                  rows={[
                    { label: "Correct", value: correct, expandedValues: [] },
                    { label: "Incorrect", value: incorrect, expandedValues: [] },
                    { label: "Skipped", value: skipped, expandedValues: [] },
                  ]}
                />
              </Paper>
            </Box>
            <Box sx={{ width: "30vw", height: "28vh" }}>
              <ResultsDisplay correct={correct} incorrect={incorrect} skipped={skipped} />
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
