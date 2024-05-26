import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import RedoIcon from "@mui/icons-material/Redo";
import PreviewIcon from "@mui/icons-material/Preview";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ResultsTable from "~/components/ResultsTable";

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

  useEffect(() => {
    document.body.classList.add("backgroundImage");
    return () => {
      document.body.classList.remove("backgroundImage");
    };
  }, []);

  return (
    <Box display="flex" mt="7.5vh" justifyContent="center">
      <Paper elevation={3} sx={{ width: "80vw", minHeight: "75vh", p: "2rem" }}>
        <Stack display="flex" direction="column" gap="2rem">
          <Typography variant="h5" fontWeight="bold" alignSelf="center">
            Quiz Results
          </Typography>
          <Stack
            display="flex"
            direction="row"
            justifyContent="space-between"
            gap="10vw"
          >
            <Box>
              <Paper sx={{ width: "30vw" }}>
                <ResultsTable rows={quizResults} />
              </Paper>
            </Box>
            <Box>Results Chart</Box>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Button variant="contained" startIcon={<RedoIcon />}>
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
