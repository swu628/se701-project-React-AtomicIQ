import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import RedoIcon from "@mui/icons-material/Redo";
import PreviewIcon from "@mui/icons-material/Preview";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import ResultsTable from "~/components/Results/ResultsTable";
import ResultsDisplay from "~/components/Results/ResultsDisplay";
import { AnswerData } from "./FlashCard";
import { UserSession } from "~/types/entities";

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
  const params = useParams<{ quizId: string }>();
  const quizId = params.quizId || "0";
  const state = location.state || {};
  const answers = (state.answers as AnswerData[]) || [];

  const { resultsValues, resultsQuestions } = answers.reduce<{
    resultsValues: ResultsValues;
    resultsQuestions: ResultsQuestions;
  }>(
    (acc, answer, index) => {
      if (answer.correct) {
        acc.resultsValues.correct++;
        acc.resultsQuestions.correct.push(index + 1);
      } else if (answer.answer === "") {
        acc.resultsValues.skipped++;
        acc.resultsQuestions.skipped.push(index + 1);
      } else {
        acc.resultsValues.incorrect++;
        acc.resultsQuestions.incorrect.push(index + 1);
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

  // Use a ref to ensure the effect runs only once
  const hasEffectRun = useRef(false);

  useEffect(() => {
    if (!hasEffectRun.current) {
      const storedSession = localStorage.getItem("userSession");
      if (storedSession) {
        const session = JSON.parse(storedSession) as UserSession;

        session.questionPoints.correctQuestions += resultsValues.correct;
        session.questionPoints.incorrectQuestions += resultsValues.incorrect;
        session.questionPoints.totalQuestions +=
          resultsValues.correct +
          resultsValues.incorrect +
          resultsValues.skipped;
        session.quizPoints.numFlashcard += 1;

        // Initialize user points
        // session.questionPoints.correctQuestions = 0;
        // session.questionPoints.incorrectQuestions = 0;
        // session.questionPoints.totalQuestions = 0;
        // session.quizPoints.numFlashcard = 0;

        localStorage.setItem("userSession", JSON.stringify(session));
      }

      document.body.classList.add("backgroundImage");

      // Mark the effect as run
      hasEffectRun.current = true;
    }

    return () => {
      document.body.classList.remove("backgroundImage");
    };
  }, [resultsValues.correct, resultsValues.incorrect, resultsValues.skipped]);

  useEffect(() => {
    const completedLevel = Math.floor(answers.length / 3);
    if (completedLevel > 0) {
      const savedLevels = localStorage.getItem("completedLevels");
      const updatedLevels = savedLevels ? JSON.parse(savedLevels) : [];

      if (!updatedLevels.includes(completedLevel)) {
        updatedLevels.push(completedLevel);
        localStorage.setItem("completedLevels", JSON.stringify(updatedLevels));
      }
    }
  }, [answers]);

  const handleRetakeQuiz = () => {
    navigate("/flashcard");
  };

  const handleNextQuiz = () => {
    const nextStartIndex = 3 * parseInt(quizId, 10);
    navigate("/flashcard", { state: { startIndex: nextStartIndex } });
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
            Quiz Results - Quiz {quizId}
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
            <Button
              variant="contained"
              startIcon={<SkipNextIcon />}
              onClick={handleNextQuiz}
            >
              Next Quiz
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}
