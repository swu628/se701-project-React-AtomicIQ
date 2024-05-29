import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import RedoIcon from "@mui/icons-material/Redo";
import PreviewIcon from "@mui/icons-material/Preview";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ResultsTable from "~/components/Results/ResultsTable";
import ResultsDisplay from "~/components/Results/ResultsDisplay";
import { AnswerData } from "./FlashCard";

interface ResultsValues {
  correct: number;
  incorrect: number;
  skipped: number;
}

interface ResultsQuestions {
  correct: number[];
  incorrect: number[];
  skipped: number[];
}

export default function Results() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || { answers: [] };
  const answers = state.answers as AnswerData[];

  const { resultsValues, resultsQuestions } = answers.reduce<{
    resultsValues: ResultsValues;
    resultsQuestions: ResultsQuestions;
  }>(
    (acc, answer, index) => {
      if (answer.correct) {
        acc.resultsValues.correct++;
        acc.resultsQuestions.correct.push(index);
      } else if (answer.answer === "") {
        acc.resultsValues.skipped++;
        acc.resultsQuestions.skipped.push(index);
      } else {
        acc.resultsValues.incorrect++;
        acc.resultsQuestions.incorrect.push(index);
      }
      return acc;
    },
    {
      resultsValues: { correct: 0, incorrect: 0, skipped: 0 },
      resultsQuestions: {
        correct: [],
        incorrect: [],
        skipped: [],
      },
    }
  );

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
                    {
                      label: "Correct",
                      value: resultsValues.correct,
                      expandedValues: resultsQuestions.correct,
                    },
                    {
                      label: "Incorrect",
                      value: resultsValues.incorrect,
                      expandedValues: resultsQuestions.incorrect,
                    },
                    {
                      label: "Skipped",
                      value: resultsValues.skipped,
                      expandedValues: resultsQuestions.skipped,
                    },
                  ]}
                />
              </Paper>
            </Box>
            <Box sx={{ width: "30vw", height: "28vh" }}>
              <ResultsDisplay
                correct={resultsValues.correct}
                incorrect={resultsValues.incorrect}
                skipped={resultsValues.skipped}
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
