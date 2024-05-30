import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import RedoIcon from "@mui/icons-material/Redo";
import PreviewIcon from "@mui/icons-material/Preview";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useEffect, useRef } from "react";
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

  // State for managing Snackbar visibility and message
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  // Use a ref to ensure the effect runs only once
  const hasEffectRun = useRef(false);

  useEffect(() => {
    // Update profile
    const updateSession = (session: UserSession) => {
      // Update quiz points
      session.questionPoints.correctQuestions += resultsValues.correct;
      session.questionPoints.incorrectQuestions += resultsValues.incorrect;
      session.questionPoints.totalQuestions +=
        resultsValues.correct + resultsValues.incorrect;
      session.quizPoints.numFlashcard += 1;
      if (resultsValues.incorrect === 0 && resultsValues.skipped === 0) {
        session.questionPoints.consecutiveQuestions += 1;
      } else {
        session.questionPoints.consecutiveQuestions = 0;
      }

      updateBadges(session);
      // Initialize user points
      // resetUserPoints(session);

      localStorage.setItem("userSession", JSON.stringify(session));
    };

    // Update badges
    const updateBadges = (session: UserSession) => {
      const { correctQuestions, incorrectQuestions, consecutiveQuestions } =
        session.questionPoints;
      const { numFlashcard } = session.quizPoints;

      // Quiz Wizard: complete n flashcard quiz
      if (numFlashcard === 1 && !session.badges.includes(4)) {
        session.badges.push(4);
        showSnackbar("Quiz Wizard: Completed 1 flashcard quiz!");
      }
      if (numFlashcard === 5 && !session.badges.includes(5)) {
        session.badges.push(5);
        showSnackbar("Quiz Wizard: Completed 5 flashcard quizzes!");
      }
      if (numFlashcard === 10 && !session.badges.includes(6)) {
        session.badges.push(6);
        showSnackbar("Quiz Wizard: Completed 10 flashcard quizzes!");
      }
      // Elements Master: achieve n% or above in a flash card quiz
      if (
        correctQuestions / incorrectQuestions >= 0.8 &&
        !session.badges.includes(7)
      ) {
        session.badges.push(7);
        showSnackbar(
          "Elements Master: Achieved 80% or above in a flash card quiz!"
        );
      }
      if (
        correctQuestions / incorrectQuestions >= 0.9 &&
        !session.badges.includes(8)
      ) {
        session.badges.push(8);
        showSnackbar(
          "Elements Master: Achieved 90% or above in a flash card quiz!"
        );
      }
      if (
        correctQuestions / incorrectQuestions >= 1 &&
        !session.badges.includes(9)
      ) {
        session.badges.push(9);
        showSnackbar("Elements Master: Achieved 100% in a flash card quiz!");
      }
      // Correct Answers: answer n questions in a quiz correctly
      if (correctQuestions >= 10 && !session.badges.includes(13)) {
        session.badges.push(13);
        showSnackbar("Correct Answers: Answered 10 questions correctly!");
      }
      if (correctQuestions >= 50 && !session.badges.includes(14)) {
        session.badges.push(14);
        showSnackbar("Correct Answers: Answered 50 questions correctly!");
      }
      if (correctQuestions >= 100 && !session.badges.includes(15)) {
        session.badges.push(15);
        showSnackbar("Correct Answers: Answered 100 questions correctly!");
      }
      // Consistent Genius: achieve 100% in n consecutive flash card quizzes
      if (consecutiveQuestions === 2 && !session.badges.includes(16)) {
        session.badges.push(16);
        showSnackbar(
          "Consistent Genius: Achieved 100% in 2 consecutive flash card quizzes!"
        );
      }
      if (consecutiveQuestions === 4 && !session.badges.includes(17)) {
        session.badges.push(17);
        showSnackbar(
          "Consistent Genius: Achieved 100% in 4 consecutive flash card quizzes!"
        );
      }
      if (consecutiveQuestions === 8 && !session.badges.includes(18)) {
        session.badges.push(18);
        showSnackbar(
          "Consistent Genius: Achieved 100% in 8 consecutive flash card quizzes!"
        );
      }
    };

    // Function to show Snackbar
    const showSnackbar = (message: string) => {
      setSnackbarMessage(message);
      setSnackbarOpen(true);
    };

    // Initialize user points
    const resetUserPoints = (session: UserSession) => {
      session.questionPoints.correctQuestions = 0;
      session.questionPoints.incorrectQuestions = 0;
      session.questionPoints.totalQuestions = 0;
      session.questionPoints.consecutiveQuestions = 0;
      session.quizPoints.numFlashcard = 0;
      session.badges = [0];
    };

    const retrieveAndUpdateSession = () => {
      // Retrieve user object
      const storedSession = localStorage.getItem("userSession");
      if (storedSession) {
        const session = JSON.parse(storedSession) as UserSession;
        updateSession(session);
      }
    };

    if (!hasEffectRun.current) {
      retrieveAndUpdateSession();
      // document.body.classList.add("backgroundImage");
      hasEffectRun.current = true;
    }

    document.body.classList.add("backgroundImage");
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
    navigate(`/flashcard/${quizId}`);
  };

  const handleNextQuiz = () => {
    // const nextStartIndex = 3 * parseInt(quizId, 10);
    // navigate("/flashcard", { state: { startIndex: nextStartIndex } });
    navigate("/home");
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
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%", backgroundColor: "#81c784" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
